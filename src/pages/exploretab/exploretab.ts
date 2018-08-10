import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

import { LoginPage } from '../login/login';
import { ViewMessPage } from '../view-mess/view-mess';

@Component({
  selector: 'page-exploretab',
  templateUrl: 'exploretab.html',
})
export class ExploretabPage {

  private items: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthenticationProvider, private afs: AngularFirestore) {
  }

  ionViewCanEnter() {
    if (this.authProvider.getCurrentUser() == null) {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  ionViewDidLoad() {
    this.items = this.afs.collection(`mess`).valueChanges();
  }

  viewDetails(item){
    this.navCtrl.push( ViewMessPage, { item : item });
  }
}
