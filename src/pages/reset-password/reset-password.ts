import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { EmailValidator } from '../../validators/email';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  public resetPasswordForm: FormGroup;

  constructor(public authProvider: AuthenticationProvider,
    public formBuilder: FormBuilder,
    public nav: NavController,
    public alertCtrl: AlertController) {
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    });
  }

  resetPassword() {
    if (!this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
    } else {
      this.authProvider.resetPassword(this.resetPasswordForm.value.email)
        .then((user) => {
          this.authProvider.showBasicAlert('Alert', 'We just sent a reset link to your registered email id.');
          this.nav.setRoot(LoginPage);
        }, (error) => {
          this.authProvider.showBasicAlert('Error', error.message);
        });
    }
  }
}
