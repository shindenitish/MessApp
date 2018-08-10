import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { NavController, LoadingController, MenuController } from 'ionic-angular';

import { EmailValidator } from '../../validators/email';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private signupForm: FormGroup;

  constructor(public navCtrl: NavController, public authProvider: AuthenticationProvider, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public menu: MenuController, private afs: AngularFirestore) {

    this.menu = menu;
    this.menu.enable(false, 'myMenu');

    this.signupForm = formBuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z\\s]*$')])],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      contact: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      address: [''],
      city: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z\\s]*$')])],
      pincode: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])]
    });
  }

  signupUser() {
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      const loading = this.loadingCtrl.create({ dismissOnPageChange: true });
      loading.present();

      this.authProvider.registerUser(this.signupForm.value.email, this.signupForm.value.password).then(user => {
        this.authProvider.showBasicAlert('Alert', "Please verify your email id to use services!", 'Registration successful');
        loading.dismiss();
        this.addUser(user.user);
        this.navCtrl.pop();
      }).catch(error => {
        this.authProvider.showBasicAlert('Alert', error.message, 'Registration failed!');
        loading.dismiss();
      });
    }
  }

  addUser(user) {
    let userInfo = {
      userId: user.uid,
      userName: this.signupForm.value.fullName,
      email: this.signupForm.value.email,
      contact: parseInt(this.signupForm.value.contact),
      address: {},
      defaultAddress: 'Default'
    };

    userInfo.address = {
      'Default': {
        label: 'Default',
        address: this.signupForm.value.address,
        city: this.signupForm.value.city,
        pincode: this.signupForm.value.pincode
      }
    };

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    userRef.set(userInfo).then(data => {
      this.authProvider.getCurrentUser().updateProfile({
        displayName: userInfo.userName,
        photoURL: ""
      }).then(data => {
        this.authProvider.sendVerfication().then(data => {
          console.log('Verification link sent successfully!');
        }).catch(error => {
          this.authProvider.showBasicAlert('Alert', error.message, 'Verification link sending failed!');
          console.log('Verification link sending Failed!', error.message);
        })
      }).catch(error => {
        this.authProvider.showBasicAlert('Alert', error.message, 'Profile update failed!');
        console.log('Profile update failed!', error.message);
      });
    }).catch(error => {
      this.authProvider.showBasicAlert('Alert', error.message, 'Error saving user details!');
      console.log('Error saving user details!', error.message);
    });
  }
}
