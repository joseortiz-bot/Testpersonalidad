import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) { }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signUp() {
    
    this.navCtrl.push('SignUpPage');

    /*
    let toast = this.toastCtrl.create({
      message: "Registro deshabilitado momentaneamente",
      duration: 3000,
      position: 'top'
    });
    toast.present();
    */
    
  }

}
