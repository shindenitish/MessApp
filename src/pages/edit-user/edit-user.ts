import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { EmailValidator } from '../../validators/email';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {

  private user: any;
  private index: number;
  private userForm: FormGroup;
  private oldDrivers: any[] = [];
  private max = new Date().toISOString();

  constructor(private loadingCtrl: LoadingController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.oldDrivers = this.navParams.get('drivers');
    this.index = this.navParams.get('index');
    
    if(this.oldDrivers != null){
      this.user = this.oldDrivers[this.index];

      this.userForm = this.formBuilder.group({
        firstName: [this.user.firstName, Validators.required],
        lastName: [this.user.lastName, Validators.required],
        dob: [this.user.dob, Validators.required],
        email: [this.user.email, Validators.compose([Validators.required, EmailValidator.isValid])],
        contact: [this.user.contact, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
        licenseNo: [this.user.licenseNo, Validators.required],
        licenseDate: [this.user.licenseDate, Validators.required]
      });
    }
  }

  saveUser(){
    const loadCtrl = this.loadingCtrl.create();
    loadCtrl.present();

    this.oldDrivers[this.index] = this.userForm.value;

    this.storage.set('drivers', this.oldDrivers).then(result =>{
      loadCtrl.dismiss();
      this.navCtrl.pop();
    }, error =>{
      loadCtrl.dismiss();
      console.log(error);
    });
  }

  

}
