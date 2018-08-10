import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Loading, LoadingController } from 'ionic-angular';

import firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-address-modal',
  templateUrl: 'address-modal.html',
})
export class AddressModalPage {
  private label: string='';
  private updateLabel: string='';
  private address: string='';
  private city: string='';
  private pincode: string='';

  private loading;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private loadingCtrl: LoadingController, public navParams: NavParams, private afs: AngularFirestore, private authProvider: AuthenticationProvider) {

    if(navParams.get('isEditable') == true){
      this.label=navParams.get('address').label;
      this.updateLabel=navParams.get('address').label;
      this.address=navParams.get('address').address;
      this.city=navParams.get('address').city;
      this.pincode=navParams.get('address').pincode;
    }
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  save(){
    this.loading = this.loadingCtrl.create({ dismissOnPageChange: true });
    this.loading.present();

    let addr = {
      label: this.label,
      address: this.address,
      city: this.city,
      pincode: parseInt(this.pincode)
    };

    let addrUpdate = {};
    addrUpdate[`address.${this.label}`] = addr;

    const docRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.authProvider.getCurrentUser().uid}`);

    docRef.update(addrUpdate).then(data => {
      this.authProvider.showBasicAlert('Info', "Saved successfully!");
      this.loading.dismiss();
      this.viewCtrl.dismiss();
    }, error => {
      this.authProvider.showBasicAlert("Failed", error.message);
      this.loading.dismiss();
      this.viewCtrl.dismiss();
      console.log("Database update Failed!", error.message);
    });
  }

  update(){
    this.loading = this.loadingCtrl.create({ dismissOnPageChange: true });
    this.loading.present();

    let addr = {
      label: this.label,
      address: this.address,
      city: this.city,
      pincode: parseInt(this.pincode)
    };

    let addrUpdate = {};
    addrUpdate[`address.${this.label}`] = addr;

    const docRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.authProvider.getCurrentUser().uid}`);

    docRef.update({
      ['address.' + this.updateLabel]: firebase.firestore.FieldValue.delete()
    }).then( success => {
      docRef.update(addrUpdate).then(data => {
        this.authProvider.showBasicAlert('Info', "Saved successfully!");
        this.loading.dismiss();
        this.viewCtrl.dismiss();
      }, error => {
        this.authProvider.showBasicAlert("Failed", error.message);
        this.loading.dismiss();
        this.viewCtrl.dismiss();
        console.log("Database update Failed!", error.message);
      });
    }, error => {
      this.authProvider.showBasicAlert("Failed", error.message);
      this.loading.dismiss();
      this.viewCtrl.dismiss();
      console.log("Database update Failed!", error.message);
    });
  }
}
