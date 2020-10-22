import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { User } from '../../providers';
import { Test } from '../../providers';
/* import { MainPage } from '../'; */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  private loginErrorString: string;

  constructor(public storage: Storage, 
    public navCtrl: NavController,
    public user: User,
    public test: Test,
    public toastCtrl: ToastController) {

    storage.set('tutorial', true);

  }

  doLogin() {
    this.storage.remove('resultado');
    this.user.login(this.account).subscribe((response: any) => {
      if (response.status == 'success') {
        this.storage.set('usuario', response.user);
        // this.navCtrl.push(MainPage);
        this.navCtrl.push('InitPage');
      }
      else {
        let toast = this.toastCtrl.create({
          message: "Usuario y/o contraseña erróneos",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }, (err) => {
      // this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  back() {
    // this.navCtrl.popToRoot();
    this.navCtrl.push('InitPage');  
  }

  recovery() {
    this.navCtrl.push('RecoveryPage');  
  }

}
