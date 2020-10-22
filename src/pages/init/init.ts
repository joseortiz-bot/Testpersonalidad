import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Test } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-init',
  templateUrl: 'init.html',
})
export class InitPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage, 
    public test: Test) {

  }

  bifurcate() {

    this.storage.get('tutorial').then((val1: any) => {
      if (val1 == null) {
        this.navCtrl.push('TutorialPage');
      }
      else {
        this.storage.get('usuario').then((val2: any) => {
          if (val2 == null) {
            this.navCtrl.push('WelcomePage');
          }
          else {
            let request = {
              usuario: val2.id, 
              nivel: 1
            };
            let seq = this.test.retrieve(request); 
            seq.subscribe((response: any) => {
              if (response.finalizado) {
                this.navCtrl.push('ResultsPage');
              }
              else {
                this.navCtrl.push('QuestionsPage');
              }
            });
          }
        });
      }
    });

  }

  ionViewDidEnter() {
    this.bifurcate();
  }

}
