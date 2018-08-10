import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { EmailValidator } from '../../validators/email';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private loadingCtrl: LoadingController, private authProvider: AuthenticationProvider) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  goToResetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }

  createAccount() {
    this.navCtrl.push(RegisterPage);
  }

  async googleLogin() {
    await this.authProvider.googleLogin().then(() => {
      console.log('googleLogin');
      if (this.authProvider.isNew) {
        console.log('newUser');
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }

  loginUser() {
    const loading = this.loadingCtrl.create({ dismissOnPageChange: true });
    loading.present();

    this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(result => {
      if (!result.user.emailVerified) {
        this.authProvider.showBasicAlert('Alert', "Please verify your email id to use services!");
      } else {
        result.user.getIdToken(true).then(token => {
          const userInfo = JSON.parse(atob(token.split('.')[1]));

          if (userInfo['user_type'] === 0) {
            this.navCtrl.setRoot(TabsPage);
          } else {
            this.authProvider.showBasicAlert('Warning', 'You are not an authorized user.', 'Un-authorized access!');
          }
        });
      }
      loading.dismiss();
    }).catch(error => {
      this.authProvider.showBasicAlert('Alert', error.message, 'Login failed');
      loading.dismiss();
    });
  }
}
