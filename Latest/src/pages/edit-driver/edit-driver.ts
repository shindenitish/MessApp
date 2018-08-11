import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { EmailValidator } from '../../validators/email';
import { CommonProvider } from '../../providers/common/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-edit-driver',
  templateUrl: 'edit-driver.html',
})
export class EditDriverPage {

  private user: any;
  private index: number;
  private userForm: FormGroup;
  private oldDrivers: any[] = [];
  private max = new Date().toISOString();

  constructor(private common: CommonProvider, private loadingCtrl: LoadingController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.oldDrivers = this.common.getDrivers();
    this.index = this.navParams.get('index');
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

  ionViewWillEnter() {
  }

  saveUser() {
    const loadCtrl = this.loadingCtrl.create();
    loadCtrl.present();

    this.oldDrivers[this.index] = this.userForm.value;

    this.common.saveDriver(this.oldDrivers, this.index).then(result => {
      loadCtrl.dismiss();
      this.navCtrl.pop();
    }, error => {
      loadCtrl.dismiss();
      console.log(error);
    });
  }
}
