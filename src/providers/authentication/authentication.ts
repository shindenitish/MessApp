import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable, OnDestroy } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Platform, AlertController, LoadingController } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';
import { GooglePlus } from '@ionic-native/google-plus';

@Injectable()
export class AuthenticationProvider implements OnDestroy {

  private sub: Subscription;
  public isNew: boolean = false;
  private currentUser: firebase.User = null;
  private authState: Observable<firebase.User> = null;

  constructor(private afAuth: AngularFireAuth, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private gplus: GooglePlus, private platform: Platform, public cameraPlugin: Camera) {
    this.authState = this.afAuth.authState;

    this.sub = this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getAuthState() {
    return this.authState;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  registerUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  sendVerfication() {
    return this.currentUser.sendEmailVerification();
  }

  async googleLogin() {
    if (this.platform.is('cordova')) {
      await this.nativeGoogleLogin();
    } else {
      await this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin() {
    try {
      const gplusUser = await this.gplus.login({
        'offline': true,
        'scopes': 'profile email',
        'webClientId': '201921251715-crqts5c9v7heeofvvbo4mmdldtfnggkm.apps.googleusercontent.com'
      });

      const loading = this.loadingCtrl.create({ dismissOnPageChange: true });
      await loading.present();

      await this.afAuth.auth.signInAndRetrieveDataWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
        .then(result => {
          loading.dismiss();
          if (result.additionalUserInfo.isNewUser) {
            this.isNew = true;
            this.addNewUser(result.user)
          }
        }, error => {
          this.showBasicAlert('Alert', error.message, 'Login failed!');
          loading.dismiss();
        });
    } catch (error) {
      this.showBasicAlert('Alert', error.message, 'Login failed!');
    }
  }

  async webGoogleLogin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      const loading = this.loadingCtrl.create({ dismissOnPageChange: true });
      await loading.present();

      await this.afAuth.auth.signInWithPopup(provider).then(result => {
        loading.dismiss();
        if (result.additionalUserInfo.isNewUser) {
          this.isNew = true;
          this.addNewUser(result.user)
        }
      }, error => {
        this.showBasicAlert('Alert', error.message, 'Login failed!');
        loading.dismiss();
      });
    } catch (error) {
      this.showBasicAlert('Alert', error.message, 'Login failed!');
    }
  }

  addNewUser(userInfo) {
    const user = {
      userId: userInfo.uid,
      email: userInfo.email,
      photoURL: userInfo.photoURL,
      userName: userInfo.displayName
    };

    firebase.firestore().doc(`users/${user.userId}`).set(user);
  }

  showBasicAlert(title: string, message: string, subTitle?: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      message: message,
      buttons: ['OK']
    });
    alert.present();
  }

  uploadImage(quality, width, height, folder, filename): Promise<any> {
    return this.cameraPlugin.getPicture({
      allowEdit: true,
      quality: quality,
      targetWidth: width,
      targetHeight: height,
      correctOrientation: true,
      encodingType: this.cameraPlugin.EncodingType.PNG,
      destinationType: this.cameraPlugin.DestinationType.DATA_URL,
      sourceType: this.cameraPlugin.PictureSourceType.PHOTOLIBRARY
    }).then(capturedImage => {

      const loading = this.loadingCtrl.create({ dismissOnPageChange: true });
      loading.present();

      const storageRef = firebase.storage().ref(`${this.getCurrentUser().uid}/${folder}/${filename}.png`);

      return storageRef.putString(capturedImage, 'base64', { contentType: 'image/png' }).then(savedImage => {
        loading.dismiss();
        return savedImage.downloadURL;
      }, error => {
        this.showBasicAlert('Failed', JSON.stringify(error), 'Error in saving image!');
        loading.dismiss();
        return -1;
      });
    }, error => {
      this.showBasicAlert('Failed', JSON.stringify(error), 'Error in getting image!');
      return -1;
    });
  }
}
