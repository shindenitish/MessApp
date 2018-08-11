import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddDriverPage } from '../pages/add-driver/add-driver';


import { HttpClientModule } from '@angular/common/http';
import { CommonProvider } from '../providers/common/common';
import { EditDriverPage } from '../pages/edit-driver/edit-driver';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddDriverPage,
    EditDriverPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AddDriverPage,
    EditDriverPage
  ],
  providers: [
    Storage,
    StatusBar,
    SplashScreen,
    CommonProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
