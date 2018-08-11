import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

@Injectable()
export class CommonProvider {

  private url: string = 'https://reqres.in';
  private drivers: any[]=[];

  constructor(public http: HttpClient, private storage: Storage, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.drivers = [];
  }

  loginUser(input) {
    return this.http.post(this.url + '/api/login', input);
  }

  showAlert(title: string, message: string, subTitle?: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      message: message,
      buttons: ['OK']
    });
    alert.present();
  }

  showToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2500,
      position: 'bottom'
    });

    toast.present();
  }

  getDrivers(){
    return this.drivers.slice();
  }

  fetchDrivers(){
    return this.storage.get('places').then(result =>{
      if(result != null){
        this.drivers = result;
        return this.drivers.slice();
      }else{
        return this.drivers = [];
      }      
    }, error => {
      this.showToast('Unable to fetch drivers data!');
    });
  }

  addDriver(driver){
    const loadCtrl = this.loadingCtrl.create();
    loadCtrl.present();

    this.drivers.unshift(driver);
    this.storage.set('places', this.drivers).then(success =>{
      loadCtrl.dismiss();
      this.showToast('Added successfully!');
    }, error =>{
      loadCtrl.dismiss();
      this.showToast('Unable to save driver details!');
      this.drivers.splice(this.drivers.indexOf(driver), 1);
    });
  }

  saveDriver(drivers, index){
    return this.storage.set('places', drivers).then(success =>{
      this.drivers = drivers;
      this.showToast('Saved successfully!');
    }, error =>{
      this.showToast('Unable to update driver details!');
      // this.drivers.splice(this.drivers[index], 1);
    });
  }
}
