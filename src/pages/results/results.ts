import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Test } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  usuario: any;
  response: any;

  dominante: { cerebro: { texto: string, imagen: string }, puntaje: number };
  subdominante: { cerebro: { texto: string, imagen: string }, puntaje: number };
  oscilante: { cerebro: { texto: string, imagen: string }, puntaje: number };

  svg1: SafeHtml;
  svg2: SafeHtml;
  svg3: SafeHtml;

  logica: string;

  habilidadPorMejorar1: { area: string, color: string, porcentaje: number };
  habilidadPorMejorar2: { area: string, color: string, porcentaje: number };
  habilidadPorMejorar3: { area: string, color: string, porcentaje: number };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, public storage: Storage, public test: Test, private sanitizer: DomSanitizer) {

    this.dominante = { cerebro: { texto: '', imagen: '' }, puntaje: 0 };
    this.subdominante = { cerebro: { texto: '', imagen: '' }, puntaje: 0 };
    this.oscilante = { cerebro: { texto: '', imagen: '' }, puntaje: 0 };

    this.logica = '';

    this.habilidadPorMejorar1 = { area: '', color: '', porcentaje: 0 };
    this.habilidadPorMejorar2 = { area: '', color: '', porcentaje: 0 };
    this.habilidadPorMejorar3 = { area: '', color: '', porcentaje: 0 };

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
            this.storage.remove('resultado');
            this.navCtrl.push('InitPage');  
          }
        }
      ]
    });
    alert.present();

  }

  more() {
    this.navCtrl.push('DetailsPage');  
  }

  build() {

    this.dominante.cerebro = this.cerebro(this.response.dominante.zona);
    this.dominante.puntaje = this.response.dominante.suma;
    this.subdominante.cerebro = this.cerebro(this.response.subdominante.zona);
    this.subdominante.puntaje = this.response.subdominante.suma;
    this.oscilante.cerebro = this.cerebro(this.response.oscilante.zona);
    this.oscilante.puntaje = this.response.oscilante.suma;

    this.logica = this.response.logica;

    this.habilidadPorMejorar1 = {
      area: this.response.habilidadesPorMejorar[0].area, 
      color: this.color(this.response.habilidadesPorMejorar[0].zona), 
      porcentaje: this.response.habilidadesPorMejorar[0].percent
    };

    this.habilidadPorMejorar2 = {
      area: this.response.habilidadesPorMejorar[1].area, 
      color: this.color(this.response.habilidadesPorMejorar[1].zona), 
      porcentaje: this.response.habilidadesPorMejorar[1].percent
    };

    this.habilidadPorMejorar3 = {
      area: this.response.habilidadesPorMejorar[2].area, 
      color: this.color(this.response.habilidadesPorMejorar[2].zona), 
      porcentaje: this.response.habilidadesPorMejorar[2].percent
    };

    let random1 = Math.floor(Math.random() * 142857) + 1  
    let random2 = Math.floor(Math.random() * 142857) + 1  
    let random3 = Math.floor(Math.random() * 142857) + 1  

    this.svg1 = this.sanitizer.bypassSecurityTrustHtml(
    '<svg id="svg' + random1 + '" width="96" height="96">' + 
      '<rect x="0" y="0" rx="0" ry="0" width="96" height="96" style="fill: #fff;"/>' + 
      '<linearGradient id="lg' + random1 + '" x1="0.5" y1="1" x2="0.5" y2="0">' + 
        '<stop offset="0%" stop-opacity="1" stop-color="' + this.color(this.response.dominante.zona) + '"/>' + 
        '<stop offset="' + ((this.response.dominante.suma / 50) * 100) + '%" stop-opacity="1" stop-color="' + this.color(this.response.dominante.zona) + '"/>' + 
        '<stop offset="' + ((this.response.dominante.suma / 50) * 100) + '%" stop-opacity="0" stop-color="white"/>' + 
        '<stop offset="100%" stop-opacity="0" stop-color="white"/>' + 
      '</linearGradient>' + 
      '<rect x="4.8" y="9" rx="0" ry="0" width="86" height="78" style="fill: url(#lg' + random1 + ');"/>' + 
      '<image href="assets/img/results/icons/' + this.dominante.cerebro.imagen + '" height="96" width="96"/>' + 
    '</svg>');

    this.svg2 = this.sanitizer.bypassSecurityTrustHtml(
    '<svg id="svg' + random2 + '" width="48" height="48">' + 
      '<rect x="0" y="0" rx="0" ry="0" width="48" height="48" style="fill: #fff;"/>' + 
      '<linearGradient id="lg' + random2 + '" x1="0.5" y1="1" x2="0.5" y2="0">' + 
        '<stop offset="0%" stop-opacity="1" stop-color="' + this.color(this.response.subdominante.zona) + '"/>' + 
        '<stop offset="' + ((this.response.subdominante.suma / 50) * 100) + '%" stop-opacity="1" stop-color="' + this.color(this.response.subdominante.zona) + '"/>' + 
        '<stop offset="' + ((this.response.subdominante.suma / 50) * 100) + '%" stop-opacity="0" stop-color="white"/>' + 
        '<stop offset="100%" stop-opacity="0" stop-color="white"/>' + 
      '</linearGradient>' + 
      '<rect x="2.4" y="4.5" rx="0" ry="0" width="43" height="39" style="fill: url(#lg' + random2 + ');"/>' + 
      '<image href="assets/img/results/icons/' + this.subdominante.cerebro.imagen + '" height="48" width="48"/>' + 
    '</svg>');

    this.svg3 = this.sanitizer.bypassSecurityTrustHtml(
    '<svg id="svg' + random3 + '" width="48" height="48">' + 
      '<rect x="0" y="0" rx="0" ry="0" width="48" height="48" style="fill: #fff;"/>' + 
      '<linearGradient id="lg' + random3 + '" x1="0.5" y1="1" x2="0.5" y2="0">' + 
        '<stop offset="0%" stop-opacity="1" stop-color="' + this.color(this.response.oscilante.zona) + '"/>' + 
        '<stop offset="' + ((this.response.oscilante.suma / 50) * 100) + '%" stop-opacity="1" stop-color="' + this.color(this.response.oscilante.zona) + '"/>' + 
        '<stop offset="' + ((this.response.oscilante.suma / 50) * 100) + '%" stop-opacity="0" stop-color="white"/>' + 
        '<stop offset="100%" stop-opacity="0" stop-color="white"/>' + 
      '</linearGradient>' + 
      '<rect x="2.4" y="4.5" rx="0" ry="0" width="43" height="39" style="fill: url(#lg' + random3 + ');"/>' + 
      '<image href="assets/img/results/icons/' + this.oscilante.cerebro.imagen + '" height="48" width="48"/>' + 
    '</svg>');

  }

  ionViewWillEnter() {
    
    this.storage.get('usuario').then((val1: any) => {
      this.usuario = val1;
      let request = {
        usuario: val1.id, 
      };

      this.storage.get('resultado').then((val2: any) => {

        console.log('resultado', val2);

        if (val2 == null) {

          let seq = this.test.result(request); 
          seq.subscribe((response: any) => {

            this.storage.set('resultado', response);

            this.response = response;

            this.build();

          });

        }
        else {

          this.response = val2;
          this.build();

        }

      });


    });

  }

  cerebro(zona: string) {
    let cerebro: { texto: string, imagen: string };
    switch (zona) { 
      case 'I': { 
        cerebro = { texto: 'Cerebro Izquierdo', imagen: 'izquierdo.png' };
        break; 
      } 
      case 'C': { 
        cerebro = { texto: 'Cerebro Central', imagen: 'central.png' };
        break; 
      } 
      case 'D': { 
        cerebro = { texto: 'Cerebro Derecho', imagen: 'derecho.png' };
        break; 
      } 
    }
    return cerebro;
  }

  color(zona: string) {
    let color: string;
    switch (zona) {
      case 'I': {
        color = '#3fa9f5'; 
        break;
      }
      case 'C': {
        color = '#ff0000'; 
        break;
      }
      case 'D': {
        color = '#fbb03b'; 
        break;
      }
    }
    return color;
  }
  
}
