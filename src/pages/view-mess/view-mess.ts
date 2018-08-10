import moment from 'moment';
import firebase from "firebase";
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { ViewPlanPage } from '../view-plan/view-plan';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-view-mess',
  templateUrl: 'view-mess.html',
})
export class ViewMessPage {

  private plans: Observable<any>;
  private membershipStatus: Subscription;

  private mess;
  private status: number = -1;

  private workDays: string = "";
  private timings: object[] = [];
  private workingDays: string[] = [];

  private tabs: string = 'details';
  private isNew: boolean = false;

  private days = { Mon: 'Mon', Tue: 'Tue', Wed: 'Wed', Thu: 'Thu', Fri: 'Fri', Sat: 'Sat', Sun: 'Sun' }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadCtrl: LoadingController, public navParams: NavParams, private authProvider: AuthenticationProvider, private afs: AngularFirestore) {
    this.load();
    this.loadPlans();

    this.membershipStatus = this.afs.doc(`mess/${this.mess.userId}/members/${this.authProvider.getCurrentUser().uid}`).valueChanges().subscribe(doc => {
      if (doc != undefined) {
        this.isNew = false;
        this.status = doc['status'];
      } else {
        this.status = -1;
        this.isNew = true;
      }
    });

  }

  load() {
    this.mess = this.navParams.get('item');

    if (this.mess.workingDays) {
      this.workingDays = [];

      for (let day in this.days) {
        if (this.mess.workingDays[day]) {
          this.workingDays.push(day);
        }
      }

      this.workDays = this.workingDays.toString();
      this.workDays = this.workDays.replace(/,/g, ", ");
    }

    if (this.mess.workingSlots) {
      this.timings = [];
      let slots = ['Breakfast', 'Lunch', 'Dinner'];

      for (let key in slots) {
        if (this.mess.workingSlots[slots[key]]) {

          let slot = {
            mealCategory: this.mess.workingSlots[slots[key]].mealCategory,
            startTime: moment(this.mess.workingSlots[slots[key]].startTime, 'HH:mm').format('hh:mm A'),
            endTime: moment(this.mess.workingSlots[slots[key]].endTime, 'HH:mm').format('hh:mm A')
          }

          this.timings.push(slot);
        }
      }
    }
  }

  confirmLeave(){
    const confirm = this.alertCtrl.create({
      title: 'Confirm leave?',
      message:'Once agreed, action can not be reversed!',
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            this.updateMembership(-2, false);
          }
        },{
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        }        
      ]
    });
    confirm.present();
  }

  updateMembership(status: number, isNew: boolean = false) {
    let membership = firebase.functions().httpsCallable('membership');

    let loading = this.loadCtrl.create({ dismissOnPageChange: true });
    loading.present();

    membership({ isNew: isNew, status: status, messId: this.mess.userId }).then(() => {
      if (status === 0) {
        this.authProvider.showBasicAlert('Info!', 'Membership request is sent to mess owner for approval. You will be able to buy subsciption plans, once your request is approved.');
      } else if (status === -1) {
        this.authProvider.showBasicAlert('Info!', 'Request cancelled successfully.');
      } else if (status === -2) {
        this.authProvider.showBasicAlert('Info!', 'Cancellation request sent to mess owner for approval.');
      }
      loading.dismiss();
    }).catch(error => {
      this.authProvider.showBasicAlert('Failed', error.message);
      loading.dismiss();
      console.log(error.message);
    });

  }

  loadPlans() {
    this.plans = this.afs.collection(`mess/${this.mess.userId}/plans`, ref => ref.where('active', '==', true)).valueChanges();
  }

  viewPlan(plan) {
    this.navCtrl.push(ViewPlanPage, { status: this.status, messId: this.mess.userId, plan: plan, timings: this.timings });
  }

  ionViewWillUnload() {
    this.membershipStatus.unsubscribe();
  }
}
