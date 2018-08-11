import { Component } from '@angular/core';
import { EmailValidator } from '../../validators/email';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private loadingCtrl: LoadingController, private common: CommonProvider, private toastCtrl: ToastController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    const loadCtrl = this.loadingCtrl.create();
    loadCtrl.present();

    this.common.loginUser(this.loginForm.value).subscribe(result => {
      loadCtrl.dismiss();
      this.common.showToast('Login successful!')
      // this.common.showAlert('Info!', '', 'Login successful');
      this.navCtrl.push(HomePage);
    }, error => {
      loadCtrl.dismiss();
      this.common.showAlert('Alert!', error.error.error, 'Login failed');
      console.log(error);
    });
  }

}
