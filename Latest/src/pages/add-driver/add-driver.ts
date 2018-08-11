import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailValidator } from '../../validators/email';
import { CommonProvider } from '../../providers/common/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-add-driver',
  templateUrl: 'add-driver.html',
})
export class AddDriverPage {

  private userForm: FormGroup;
  private max = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public common: CommonProvider) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      contact: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
      licenseNo: ['', Validators.required],
      licenseDate: ['', Validators.required]
    });
  }

  addDriver(){
    this.common.addDriver(this.userForm.value);
    this.navCtrl.pop();
  }
}
