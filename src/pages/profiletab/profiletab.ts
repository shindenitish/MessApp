import firebase from 'firebase';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { AddressModalPage } from '../address-modal/address-modal';
import { UploadImageModalPage } from '../upload-image-modal/upload-image-modal';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../models/model';

@Component({
  selector: 'page-profiletab',
  templateUrl: 'profiletab.html',
})
export class ProfiletabPage {

  private user: any = {};
  private address: any[] = [];
  private email: string = "";
  private contact: string = "";
  private userName: string = "";
  private defaultAddress: string = "";
  private personalFlag: boolean = false;
  private userSubscription: Subscription;
  private photoURL: string = "assets/imgs/profile.png"

  constructor(private afs: AngularFirestore, public authProvider: AuthenticationProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public modalCtrl: ModalController, private loadingCtrl: LoadingController) {
  }

  ionViewCanEnter() {
    if (this.authProvider.getCurrentUser() == null) {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  ionViewDidLoad() {
    
    this.userSubscription = this.afs.doc<User>(`users/${this.authProvider.getCurrentUser().uid}`).valueChanges().subscribe(userDoc => {
      if (userDoc) {
        this.user['userName'] = this.userName = userDoc.userName;
        this.email = userDoc.email;

        if (userDoc.photoURL) {
          this.photoURL = userDoc.photoURL;
        }

        if (userDoc.contact) {
          this.user['contact'] = this.contact = userDoc.contact;
        }

        if (userDoc.defaultAddress) {
          this.defaultAddress = userDoc.defaultAddress;
        }

        if (userDoc.address) {
          this.address = [];

          for (let addr in userDoc.address) {
            let address = userDoc.address[addr];
            address.expanded = false;
            this.address.push(address);
          }
        }
      }
    }, error => {
      console.log("Error getting document:", error);
    });
  }


  ionViewDidLeave() {
    this.personalFlag = false;
    this.userSubscription.unsubscribe();
  }

  expandItem(item) {
    this.address.map((listItem) => {

      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;
    });
  }

  openProfileModal() {
    let modal = this.modalCtrl.create(UploadImageModalPage, { src: 'profile', imageUrl: this.photoURL, width: 350, height: 350 });
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        this.photoURL = data['imageUrl'];
      }
    });
  }

  addAddressModal() {
    let modal = this.modalCtrl.create(AddressModalPage, { isEditable: false });
    modal.present();
  }

  editAddressModal(address) {
    let modal = this.modalCtrl.create(AddressModalPage, { isEditable: true, address: address });
    modal.present();
  }

  editPersonal() {
    this.personalFlag = true;
  }

  cancel() {
    this.userName = this.user['userName'];
    this.contact = this.user['contact'];
    this.personalFlag = false;
  }

  save() {
    const loading = this.loadingCtrl.create({ dismissOnPageChange: true });
    loading.present();

    this.personalFlag = false;

    this.afs.doc(`users/${this.authProvider.getCurrentUser().uid}`).update({ contact: parseInt(this.contact), userName: this.userName }).then(() => {
      this.authProvider.showBasicAlert('Info', 'Profile updated successfully!');
      loading.dismiss();
    }).catch((error) => {
      this.authProvider.showBasicAlert('Alert', error.message, 'Failed to update profile!');
      loading.dismiss();
      console.error("Error in updating profile", error.message);
    });
  }

  setDefault(label) {
    const loading = this.loadingCtrl.create({ dismissOnPageChange: true });
    loading.present();

    this.afs.doc(`users/${this.authProvider.getCurrentUser().uid}`).update({ defaultAddress: label }).then(() => {
      loading.dismiss();
    }).catch((error) => {
      this.authProvider.showBasicAlert('Alert', error.message, 'Unable to change default address!');
      loading.dismiss();
      console.error("Error in updating default adddress", error);
    });
  }

  confirmDelete(label) {
    if (this.defaultAddress == label) {
      this.authProvider.showBasicAlert('Warning', 'This is default address. Please set another address as default, before deleting this address.');
    } else {
      let confirm = this.alertCtrl.create({
        title: 'Delete Address?',
        message: 'Once deleted, can not be reversed.',
        buttons: [
          {
            text: 'Confirm',
            handler: () => {
              this.delete(label);
            }
          },
          {
            text: 'Cancel',
            handler: () => {
              console.log('Address deletion cancelled!');
            }
          }
        ]
      });
      confirm.present();
    }
  }

  delete(label) {
    const loading = this.loadingCtrl.create({ dismissOnPageChange: true });
    loading.present();

    const docRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.authProvider.getCurrentUser().uid}`);

    docRef.update({ ['address.' + label]: firebase.firestore.FieldValue.delete() }).then(success => {
      this.authProvider.showBasicAlert('Info', "Address Deleted successfully!");
      loading.dismiss();
    }).catch(error => {
      this.authProvider.showBasicAlert("Alert", error.message, 'Unable to delete this address!');
      loading.dismiss();
      console.log("Error in deleting address", error.message);
    });
  }

  signOut() {
    this.authProvider.logoutUser();
  }
}
