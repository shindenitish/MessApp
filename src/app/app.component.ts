import firebase from "firebase";
import { Platform } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from "angularfire2/auth";
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationProvider } from '../providers/authentication/authentication';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit, OnDestroy {

  private rootPage: any;
  private sub: Subscription;
  private firestore = firebase.firestore();
  private settings = { timestampsInSnapshots: true };

  constructor(private authProvider: AuthenticationProvider, private afAuth: AngularFireAuth, platform: Platform, splashScreen: SplashScreen) {
    this.firestore.settings(this.settings);

    platform.ready().then(() => {
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.sub = this.afAuth.authState.subscribe((user) => {
      if (user) {
        if (user.emailVerified) {
          user.getIdToken().then((token) => {
            const userInfo = JSON.parse(atob(token.split('.')[1]));

            if (userInfo['user_type'] === 0) {
              this.rootPage = TabsPage;
            } else {
              this.rootPage = LoginPage;
            }
          });
        } else {
          this.rootPage = LoginPage;
        }
      } else {
        this.rootPage = LoginPage;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
