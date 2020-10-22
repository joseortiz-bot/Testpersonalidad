import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform, ToastController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

export interface Slide {
  title: string;
  description: string;
  background: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  slides: Slide[];
  showSkip = false;
  dir: string = 'ltr';

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController, 
    public platform: Platform, 
    public storage: Storage, 
    public toastCtrl: ToastController) {
    
    this.dir = platform.dir();

    this.slides = [
      {
        title: '¡Hola!', 
        description: '¿Quieres saber cómo incrementar tu potencial cerebral para lograr tus sueños y tener <strong>el éxito que esperas</strong>?', 
        background: 'assets/img/tutorial/bgIntro1.png', 
        image: 'assets/img/tutorial/imgIntro1.png'
      }, 
      {
        title: 'Lo primero que debes hacer', 
        description: 'es conocerte y saber que vienes dotado de una triple inteligencia: <strong>racional, operacional y emocional</strong>.', 
        background: 'assets/img/tutorial/bgIntro2.png', 
        image: 'assets/img/tutorial/imgIntro2.png'
      }, 
      {
        title: 'NAPPS te permitirá desarrollar', 
        description: 'todo el potencial que te propongas en cada una de estas inteligencias y lo mejor es que te motivará a entrenarte en tus 12 neuro-habilidades.', 
        background: 'assets/img/tutorial/bgIntro3.png', 
        image: 'assets/img/tutorial/imgIntro3.png'
      },
      /* 
      {
        title: '¿Conoces tu capital tricerebral?', 
        description: 'para ello a través de un test innovador descubre el coeficiente de tu capital tricerebral.', 
        background: 'assets/img/tutorial/bgIntro4.png', 
        image: 'assets/img/tutorial/imgIntro4.png'
      },
      */
      {
        title: '¿Sabías que lo puedes descubrir', 
        description: 'a través del revelador del coeficiente de tu triple inteligencia?', 
        background: 'assets/img/tutorial/bgIntro4.png', 
        image: 'assets/img/tutorial/imgIntro4.png'
      },
      {
        title: 'Anímate y comenzarás tu entrenamiento', 
        description: 'de manera sencilla y práctica; con ejercicios y mediciones cuali-cuantitativas que te permitirán comprobar tus avances.', 
        background: 'assets/img/tutorial/bgIntro5.png', 
        image: 'assets/img/tutorial/imgIntro5.png'
      }

    ];
      
  }

  startApp() {
    this.storage.set('tutorial', 'true');
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

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

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
