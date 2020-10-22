import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../providers';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  account: { name: string, email: string, password: string } = {
    name: '', 
    email: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public user: User,
    public toastCtrl: ToastController, 
    public storage: Storage) {

    storage.set('tutorial', true);

  }

  doRegister() {
    this.user.signUp(this.account).subscribe((response: any) => {
      if (response.status == 'success') {
        this.storage.set('usuario', response.user);
        this.navCtrl.push('InitPage');
      }
      else {
        let toast = this.toastCtrl.create({
          message: response.signUpErrorString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }, (err) => {
      console.log('error signup', err);
      let toast = this.toastCtrl.create({
        message: 'Hubo un problema al intentar efectuar el registro',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  back() {
    this.navCtrl.push('InitPage');  
  }

}
