import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { Test } from '../../providers';

export interface Pregunta {
  id: number; 
  titulo: string;
  subtitulo: string;
  ayuda: string;
  fondo: string;
  centro: string;
  color: string;
}

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})

export class QuestionsPage {

  preguntas: Pregunta[];
  dir: string = 'ltr';
  usuario: any;
  finalizado: boolean;

  @ViewChild('slides') slides: Slides;

  isDisabled1:boolean = false;
  isDisabled2:boolean = false;
  isDisabled3:boolean = false;
  isDisabled4:boolean = false;
  isDisabled5:boolean = false;

  bgColor1:string = '';
  bgColor2:string = '';
  bgColor3:string = '';
  bgColor4:string = '';
  bgColor5:string = '';

  fgColor1:string = '#001F35';
  fgColor2:string = '#001F35';
  fgColor3:string = '#001F35';
  fgColor4:string = '#001F35';
  fgColor5:string = '#001F35';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public translate: TranslateService, 
    public storage: Storage, 
    public test: Test, 
    public toastCtrl: ToastController, 
    public alertController: AlertController) {

    this.preguntas = [];

  }

  next() {

    this.slides.lockSwipes(false);

    this.isDisabled1 = false;
    this.isDisabled2 = false;
    this.isDisabled3 = false;
    this.isDisabled4 = false;
    this.isDisabled5 = false;

    this.bgColor1 = '';
    this.fgColor1 = '#001F35';

    this.bgColor2 = '';
    this.fgColor2 = '#001F35';

    this.bgColor3 = '';
    this.fgColor3 = '#001F35';

    this.bgColor4 = '';
    this.fgColor4 = '#001F35';

    this.bgColor5 = '';
    this.fgColor5 = '#001F35';

    this.slides.slideNext();

    this.slides.lockSwipes(true);

  }

  logout() {

    let alert = this.alertController.create({
      title: 'Cerrar sesión',
      message: '¿Realmente desea cerrar la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.storage.remove('usuario');
            this.navCtrl.push('InitPage');  
          }
        }
      ]
    });
    alert.present();

  }

  answer(id, respuesta) {
   
    this.isDisabled1 = (respuesta != 1);
    this.isDisabled2 = (respuesta != 2);
    this.isDisabled3 = (respuesta != 3);
    this.isDisabled4 = (respuesta != 4);
    this.isDisabled5 = (respuesta != 5);

    switch (respuesta) {
      case 1: {
        this.bgColor1 = '#001F35';
        this.fgColor1 = '#FFFFFF';
        break;
      }
      case 2: {
        this.bgColor2 = '#001F35';
        this.fgColor2 = '#FFFFFF';
        break;
      }
      case 3: {
        this.bgColor3 = '#001F35';
        this.fgColor3 = '#FFFFFF';
        break;
      }
      case 4: {
        this.bgColor4 = '#001F35';
        this.fgColor4 = '#FFFFFF';
        break;
      }
      case 5: {
        this.bgColor5 = '#001F35';
        this.fgColor5 = '#FFFFFF';
        break;
      }
    }

    let request: any = {
      usuario: this.usuario.id, 
      pregunta: id, 
      respuesta: respuesta
    };

    let seq = this.test.answer(request);
    seq.subscribe((response: any) => {
      if (response.status) {
        if (this.slides.isEnd()) {
          this.navCtrl.push('InitPage');
        }
        else {
          this.next();
        }
      }
      else {
        let toast = this.toastCtrl.create({
          message: 'Hubo un problema al intentar responder la pregunta. Revise su conexion a internet e intente nuevamente',
          duration: 3000,
          position: 'top' 
        });
        toast.present();
      }
    }, 
    err => {
      let toast = this.toastCtrl.create({
        message: 'Hubo un problema al intentar responder la pregunta. Revise su conexion a internet e intente nuevamente',
        duration: 3000,
        position: 'top' 
      });
      toast.present();
    });

  }

  help(string) {
    let toast = this.toastCtrl.create({
      message: string,
      duration: 10000,
      position: 'middle', 
      showCloseButton: true, 
      closeButtonText: 'x'
    });
    toast.present();
  }

  ionViewWillEnter() {
    this.slides.lockSwipes(true); 
    this.storage.get('usuario').then((val: any) => {
      this.usuario = val;
      let request = {
        usuario: val.id, 
        nivel: 1
      };
      let seq = this.test.retrieve(request); 
      seq.subscribe((response: any) => {
        for (const pregunta of response.preguntas) {
          let aux: Pregunta = {
            id: pregunta.id, 
            titulo: pregunta.titulo, 
            subtitulo: pregunta.subtitulo, 
            ayuda: pregunta.ayuda, 
            fondo: pregunta.fondo, 
            centro: pregunta.centro, 
            color: pregunta.color
          };
          this.preguntas.push(aux);
        }
      });
    });
  }

}
