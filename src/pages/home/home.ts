import { NavController, PopoverController } from 'ionic-angular';
import { Component } from '@angular/core';

import { RestProvider } from '../../providers/rest/rest';
import { AddUserPage } from '../adduser/adduser';
import { EditUserPage } from '../edit-user/edit-user';


import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private users: any[] = [];

  constructor(public navCtrl: NavController, public popOverCtrl: PopoverController, public rest: RestProvider, private storage: Storage) {
    // this.storage.remove('drivers');
  }

  ionViewWillEnter() {
    this.users = [];
    
    this.storage.get('drivers').then((val) => {
      console.log(val);
      this.users = val;
    });
  }

  addDriver() {
    this.navCtrl.push(AddUserPage, { drivers: this.users });
  }

  editUser(index) {
    this.navCtrl.push(EditUserPage, { drivers: this.users, index: index })
  }

}
