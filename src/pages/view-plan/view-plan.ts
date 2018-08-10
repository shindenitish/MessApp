import { Component } from '@angular/core';
import { CheckoutPage } from '../checkout/checkout';
import { NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-view-plan',
  templateUrl: 'view-plan.html',
})
export class ViewPlanPage {

  private plan = {};
  private timings: object[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthenticationProvider) {
    this.plan = this.navParams.get('plan');
    this.timings = this.navParams.get('timings');
  }

  buyPlan() {
    if(this.navParams.get('status') > 0 ){
      this.navCtrl.push(CheckoutPage, { messId: this.navParams.get('messId'), plan: this.plan });
    }else if(this.navParams.get('status') == 0 ){
      this.authProvider.showBasicAlert('Alert', 'Your membership request is not approved by Mess owner. Please contact owner for the approval.');
    }else{
      this.authProvider.showBasicAlert('Alert', 'Subsciption plans are available for members only. Please request for membership from Details section to buy this subscription plan.');
    }
  }

}
