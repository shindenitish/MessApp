import firebase from "firebase";
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  private plan = {};
  private startDate = new Date().toISOString();
  // private tax: number = 0;
  private paymentMode: string = 'cash';

  constructor(public loadCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthenticationProvider) {
    this.plan = this.navParams.get('plan');
  }

  checkOut() {
    let loading = this.loadCtrl.create({ dismissOnPageChange: true });
    loading.present();

    firebase.functions().httpsCallable('checkout')({ messId: this.navParams.get('messId'), plan: this.plan, paymentMode: this.paymentMode, startDate: this.startDate })
      .then((result) => {
        this.authProvider.showBasicAlert('Information', 'Kindly make payment to the owner to activate your plan.', 'Plan added successfully!');
        this.navCtrl.parent.select(2);
        loading.dismiss();
      }).catch((error) => {
        this.authProvider.showBasicAlert('Failed!', error.message);
        loading.dismiss();
        console.log('Cloud Function Error:', error.message);
      });
  }
}
