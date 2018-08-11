import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddDriverPage } from '../add-driver/add-driver';
import { CommonProvider } from '../../providers/common/common';
import { EditDriverPage } from '../edit-driver/edit-driver';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  private drivers: any[] = [];

  constructor(public navCtrl: NavController, public common: CommonProvider) {

  }

  ngOnInit() {
    this.common.fetchDrivers().then(result => {
      this.drivers = <any[]>result;
    });
  }

  ionViewWillEnter() {
    this.drivers = this.common.getDrivers();
  }

  addDriver() {
    this.navCtrl.push(AddDriverPage);
  }

  editDriver(index) {
    this.navCtrl.push(EditDriverPage, { index: index });
  }

}
