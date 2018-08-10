import { MyApp } from './app.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { HometabPage } from '../pages/hometab/hometab';
import { MesstabPage } from '../pages/messtab/messtab';
import { AlerttabPage } from '../pages/alerttab/alerttab';
import { CheckoutPage } from '../pages/checkout/checkout';
import { ListMessPage } from '../pages/list-mess/list-mess';
import { ViewMessPage } from '../pages/view-mess/view-mess';
import { ViewPlanPage } from '../pages/view-plan/view-plan';
import { ProfiletabPage } from '../pages/profiletab/profiletab';
import { ExploretabPage } from '../pages/exploretab/exploretab';


import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';


import { ElasticModule } from 'ng-elastic';

import { AddressModalPage } from '../pages/address-modal/address-modal';
import { UploadImageModalPage } from '../pages/upload-image-modal/upload-image-modal';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { ComponentsModule } from '../components/components.module'
import { AuthenticationProvider } from '../providers/authentication/authentication';

const firebaseConfig = {
  apiKey: "AIzaSyC_KeK56MdvteYU96PocSxfAaOgO9aVBSI",
  authDomain: "mymess-11f8c.firebaseapp.com",
  databaseURL: "https://mymess-11f8c.firebaseio.com",
  projectId: "mymess-11f8c",
  storageBucket: "mymess-11f8c.appspot.com",
  messagingSenderId: "201921251715"
}

@NgModule({
  declarations: [
    MyApp,

    HometabPage,
    MesstabPage,
    AlerttabPage,
    ProfiletabPage,
    ExploretabPage,

    TabsPage,
    LoginPage,
    CheckoutPage,
    ListMessPage,
    ViewMessPage,
    ViewPlanPage,
    RegisterPage,
    ResetPasswordPage,

    AddressModalPage,
    UploadImageModalPage
  ],
  imports: [
    BrowserModule,

    ElasticModule,
    ComponentsModule,

    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(firebaseConfig),

    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    HometabPage,
    MesstabPage,
    AlerttabPage,
    ExploretabPage,
    ProfiletabPage,

    TabsPage,
    LoginPage,
    CheckoutPage,
    ListMessPage,
    ViewMessPage,
    ViewPlanPage,
    RegisterPage,
    ResetPasswordPage,

    AddressModalPage,
    UploadImageModalPage
  ],
  providers: [
    Camera,
    StatusBar,
    GooglePlus,
    SplashScreen,

    AuthenticationProvider,

    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
