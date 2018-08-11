import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';

import { DatePipe } from '@angular/common'



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';

import { LoginPage } from '../pages/login/login';
import { AddUserPage } from '../pages/adduser/adduser';
import { EditUserPage } from '../pages/edit-user/edit-user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddUserPage,
    EditUserPage,
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
    AddUserPage,
    EditUserPage,
  ],
  providers: [
    DatePipe,
    StatusBar,
    DatePicker,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
export class AppModule {}
