/* import 'rxjs/add/operator/toPromise'; */

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Api } from '../api/api';

@Injectable()
export class Test {
  
  constructor(public storage: Storage, public api: Api) { }

  retrieve(request: any) {
    let seq = this.api.post('test', request).share();
    seq.subscribe((response: any) => {
    }, 
    err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  answer(request: any) {
    let seq = this.api.post('answer', request).share();
    seq.subscribe((response: any) => {
    }, 
    err => {
      console.error('ERROR', err);
    });
    return seq; 
  }

  result(request: any) {
    let seq = this.api.post('result', request).share();
    seq.subscribe((response: any) => {
    }, 
    err => {
      console.error('ERROR', err);
    });
    return seq; 
  }

}
