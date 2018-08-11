import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { EmailValidator } from '../../validators/email';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AddUserPage {
  private userForm: FormGroup;
  private oldDrivers: any[] = [];
  private max = new Date().toISOString();

  user = {
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    contact: '',
    licenseNo: '',
    licenseDate: ''
  };


  constructor(private loadingCtrl: LoadingController, private datePicker: DatePicker, private datepipe: DatePipe, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, public formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      contact: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
      licenseNo: ['', Validators.required],
      licenseDate: ['', Validators.required]
    });

    this.oldDrivers = this.navParams.get('drivers');
  }

  saveUser() {
    const loadCtrl = this.loadingCtrl.create();
    loadCtrl.present();
    
    this.user = this.userForm.value;

    if (this.oldDrivers == null) {
      this.oldDrivers = [];
      this.oldDrivers.unshift(this.user);
    }else{
      this.oldDrivers.unshift(this.user);
    }

    this.storage.set('drivers', this.oldDrivers).then(result => {
      console.log('Added successfully!');
      loadCtrl.dismiss();
      this.navCtrl.pop();
    }, error => {
      loadCtrl.dismiss();
      console.log(error);
    });
  }

  chooseDob() {
    let options = {
      date: new Date(),
      mode: 'date',
      titleText: "Select Birth Date",
      okText: "Done",
      cancelText: "Cancel"
    }
    this.datePicker.show(options)
      .then((date: Date) => {
        this.user.dob=date.toISOString();
        this.userForm.controls.dob.setValue(this.datepipe.transform(date, 'dd-MMM-yyyy'));  
      }
    ).catch((e) => {
      this.userForm.controls.dob.markAsDirty();
    });
  }
}
