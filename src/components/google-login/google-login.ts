import firebase from 'firebase';
import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})
export class GoogleLoginComponent {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private gplus: GooglePlus, private platform: Platform) {
    this.user = this.afAuth.authState;
  }

  async nativeGoogleLogin(): Promise<any> {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': '201921251715-crqts5c9v7heeofvvbo4mmdldtfnggkm.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

    } catch (err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<any> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      return await this.afAuth.auth.signInWithPopup(provider);
    } catch (err) {
      console.log(err)
    }
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
