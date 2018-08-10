import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-upload-image-modal',
  templateUrl: 'upload-image-modal.html',
})
export class UploadImageModalPage {

  private width: number;
  private height: number;
  private src: string = '';
  private imageUrl: string = '';
  private fileName: string = '';

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private afs: AngularFirestore, private authProvider: AuthenticationProvider) {

    if (this.navParams.get('src')) {
      if (this.navParams.get('src') == 'profile') {
        this.src = 'profile';
        this.fileName = 'profilePic';
      } else {
        this.src = this.navParams.get('src');
        this.fileName = this.navParams.get('itemId');
      }

      this.width = this.navParams.get('width');
      this.height = this.navParams.get('height');
      this.imageUrl = this.navParams.get('imageUrl');
    }
  }

  closeModal() {
    this.viewCtrl.dismiss({ imageUrl: this.imageUrl });
  }

  uploadImage() {
    this.authProvider.uploadImage(100, this.width, this.height, this.src, this.fileName).then(imageUrl => {

      if (imageUrl != -1) {
        this.imageUrl = imageUrl;

        if (this.src == 'profile') {
          this.afs.doc(`users/${this.authProvider.getCurrentUser().uid}`).update({ photoURL: imageUrl }).then(success => {
            console.log('Info', 'Profile image updated successfully!');
          }).catch(error => {
            this.authProvider.showBasicAlert('Alert', error.message, 'Profile image update failed!');
            console.log('Profile image update failed!', error.message);
          });
        } else {
          this.afs.doc(`users/${this.authProvider.getCurrentUser().uid}/${this.src}/${this.fileName}`).update({ imageUrl: imageUrl }).then(success => {
            console.log('Info', 'Image updated successfully!');
          }).catch(error => {
            this.authProvider.showBasicAlert('Failed', error.message);
            console.log('Image update failed!', error.message);
          });
        }
      }
    }).catch(error => {
      this.authProvider.showBasicAlert('Alert', error.message, 'Image update failed!');
    });
  }
}
