import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

import { RestProvider } from '../../providers/rest/rest';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private loadingCtrl: LoadingController, public rest: RestProvider) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  loginUser() {
    const loadCtrl = this.loadingCtrl.create();
    loadCtrl.present();

    this.rest.loginUser(this.loginForm.value).subscribe(result=>{
      loadCtrl.dismiss();
      this.navCtrl.push(HomePage);
    }, error =>{
      loadCtrl.dismiss();
      console.log(error);
    });
  }
}
