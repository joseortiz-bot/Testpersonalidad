import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, , ToastController } from 'ionic-angular';

import { User } from '../../providers';

/**
 * Generated class for the RecoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html',
})
export class RecoveryPage {

  account: { email: string } = {
    email: ''
  };

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public user: User, 
  	public toastCtrl: ToastController) {
  }

  doRecovery() {
    this.user.recovery(this.account).subscribe((response: any) => {
      if (response.status == 'success') {
      	let toast = this.toastCtrl.create({
      	  message: 'Revise su casilla de correo electrónico y siga las instrucciones',
      	  duration: 3000,
      	  position: 'top'
      	});
	    toast.present();
        this.navCtrl.push('LoginPage');
      }
      else {
        let toast = this.toastCtrl.create({
          message: "Hubo un error al intentar recuperar la contraseña",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }, 
    (err) => {
      let toast = this.toastCtrl.create({
        message: "Hubo un error al intentar recuperar la contraseñan",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  back() {
    this.navCtrl.push('LoginPage');  
  }

}
