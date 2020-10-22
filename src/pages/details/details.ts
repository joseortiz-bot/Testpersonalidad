import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Test } from '../../providers';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  @ViewChild('lineCanvas') lineCanvas;
  lineChart:any;  

  @ViewChild('donutCanvasIzquierdo1') donutCanvasIzquierdo1;
  donutChartIzquierdo1:any;  

  @ViewChild('donutCanvasIzquierdo2') donutCanvasIzquierdo2;
  donutChartIzquierdo2:any;  

  @ViewChild('donutCanvasIzquierdo3') donutCanvasIzquierdo3;
  donutChartIzquierdo3:any;  

  @ViewChild('donutCanvasIzquierdo4') donutCanvasIzquierdo4;
  donutChartIzquierdo4:any;  

  @ViewChild('donutCanvasCentral1') donutCanvasCentral1;
  donutChartCentral1:any;  

  @ViewChild('donutCanvasCentral2') donutCanvasCentral2;
  donutChartCentral2:any;  

  @ViewChild('donutCanvasCentral3') donutCanvasCentral3;
  donutChartCentral3:any;  

  @ViewChild('donutCanvasCentral4') donutCanvasCentral4;
  donutChartCentral4:any;  

  @ViewChild('donutCanvasDerecho1') donutCanvasDerecho1;
  donutChartDerecho1:any;  

  @ViewChild('donutCanvasDerecho2') donutCanvasDerecho2;
  donutChartDerecho2:any;  

  @ViewChild('donutCanvasDerecho3') donutCanvasDerecho3;
  donutChartDerecho3:any;  

  @ViewChild('donutCanvasDerecho4') donutCanvasDerecho4;
  donutChartDerecho4:any;  

  usuario: any;

  showBloque1:boolean = true;
  showBloque2:boolean = true;
  showBloque3:boolean = true;
  showBloque4:boolean = true;
  showBloque5:boolean = true;
  showBloque6:boolean = true;
  showBloque7:boolean = true;

  dominante: { cerebro: { texto: string, imagen: string }, puntaje: number };
  subdominante: { cerebro: { texto: string, imagen: string }, puntaje: number };
  oscilante: { cerebro: { texto: string, imagen: string }, puntaje: number };

  svg1: SafeHtml;
  svg2: SafeHtml;
  svg3: SafeHtml;

  logica: string;

  habilidadNivelAlto1: { area: string, color: string, porcentaje: number };
  habilidadNivelAlto2: { area: string, color: string, porcentaje: number };
  habilidadNivelAlto3: { area: string, color: string, porcentaje: number };

  habilidadNivelMedio1: { area: string, color: string, porcentaje: number };
  habilidadNivelMedio2: { area: string, color: string, porcentaje: number };
  habilidadNivelMedio3: { area: string, color: string, porcentaje: number };
  habilidadNivelMedio4: { area: string, color: string, porcentaje: number };
  habilidadNivelMedio5: { area: string, color: string, porcentaje: number };
  habilidadNivelMedio6: { area: string, color: string, porcentaje: number };
  
  habilidadPorMejorar1: { area: string, color: string, porcentaje: number };
  habilidadPorMejorar2: { area: string, color: string, porcentaje: number };
  habilidadPorMejorar3: { area: string, color: string, porcentaje: number };

  habilidad: { area: string, valor: number };
  habilidades: any;

  izquierdo: {
    uno: { nombre: string, concepto: string, color: string, valor: number }, 
    dos: { nombre: string, concepto: string, color: string, valor: number }, 
    tres: { nombre: string, concepto: string, color: string, valor: number }, 
    cuatro: { nombre: string, concepto: string, color: string, valor: number }
  }

  central: {
    uno: { nombre: string, concepto: string, color: string, valor: number }, 
    dos: { nombre: string, concepto: string, color: string, valor: number }, 
    tres: { nombre: string, concepto: string, color: string, valor: number }, 
    cuatro: { nombre: string, concepto: string, color: string, valor: number }
  }

  derecho: {
    uno: { nombre: string, concepto: string, color: string, valor: number }, 
    dos: { nombre: string, concepto: string, color: string, valor: number }, 
    tres: { nombre: string, concepto: string, color: string, valor: number }, 
    cuatro: { nombre: string, concepto: string, color: string, valor: number }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public test: Test, private sanitizer: DomSanitizer) {

    this.dominante = { cerebro: { texto: '', imagen: '' }, puntaje: 0 };
    this.subdominante = { cerebro: { texto: '', imagen: '' }, puntaje: 0 };
    this.oscilante = { cerebro: { texto: '', imagen: '' }, puntaje: 0 };

    this.logica = '';

    this.habilidadNivelAlto1 = { area: '', color: '', porcentaje: 0 };
    this.habilidadNivelAlto2 = { area: '', color: '', porcentaje: 0 };
    this.habilidadNivelAlto3 = { area: '', color: '', porcentaje: 0 };

    this.habilidadNivelMedio1 = { area: '', color: '', porcentaje: 0 };
    this.habilidadNivelMedio2 = { area: '', color: '', porcentaje: 0 };
    this.habilidadNivelMedio3 = { area: '', color: '', porcentaje: 0 };
    this.habilidadNivelMedio4 = { area: '', color: '', porcentaje: 0 };
    this.habilidadNivelMedio5 = { area: '', color: '', porcentaje: 0 };
    this.habilidadNivelMedio6 = { area: '', color: '', porcentaje: 0 };

    this.habilidadPorMejorar1 = { area: '', color: '', porcentaje: 0 };
    this.habilidadPorMejorar2 = { area: '', color: '', porcentaje: 0 };
    this.habilidadPorMejorar3 = { area: '', color: '', porcentaje: 0 };

    this.izquierdo = {
      uno: { nombre: '', concepto: '', color: '', valor: 0 }, 
      dos: { nombre: '', concepto: '', color: '', valor: 0 }, 
      tres: { nombre: '', concepto: '', color: '', valor: 0 }, 
      cuatro: { nombre: '', concepto: '', color: '', valor: 0 }
    };

    this.central = {
      uno: { nombre: '', concepto: '', color: '', valor: 0 }, 
      dos: { nombre: '', concepto: '', color: '', valor: 0 }, 
      tres: { nombre: '', concepto: '', color: '', valor: 0 }, 
      cuatro: { nombre: '', concepto: '', color: '', valor: 0 }
    };

    this.derecho = {
      uno: { nombre: '', concepto: '', color: '', valor: 0 }, 
      dos: { nombre: '', concepto: '', color: '', valor: 0 }, 
      tres: { nombre: '', concepto: '', color: '', valor: 0 }, 
      cuatro: { nombre: '', concepto: '', color: '', valor: 0 }
    };

    this.habilidades = new Array(12);

  }

  showHideBloque1Ctrl() {
    this.showBloque1 = !this.showBloque1;
  }

  showHideBloque2Ctrl() {
    this.showBloque2 = !this.showBloque2;
  }

  showHideBloque3Ctrl() {
    this.showBloque3 = !this.showBloque3;
  }

  showHideBloque4Ctrl() {
    this.showBloque4 = !this.showBloque4;
  }

  showHideBloque5Ctrl() {
    this.showBloque5 = !this.showBloque5;
  }

  showHideBloque6Ctrl() {
    this.showBloque6 = !this.showBloque6;
  }

  showHideBloque7Ctrl() {
    this.showBloque7 = !this.showBloque7;
  }

  back() {
    this.navCtrl.push('ResultsPage');  
  }

  drawGraph1() {

    let labels: number[] = [];
    let datas: number[] = [];

    console.log("habilidades", this.habilidades);

    let orden: number = 1;
    for (let habilidad of this.habilidades) {
      labels.push(orden);
      datas.push(habilidad.valor);
      orden++;
    }

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: labels, 
        datasets: [{
          data: datas,
          fill: false, 
          pointBorderColor: 'rgba(43,187, 190,1)'
        }]
      }, 
      options: {
        legend: { display: false },
        scales: {
          yAxes: [{ ticks: { 
            beginAtZero: true, 
            steps: 10,
            stepValue: 0.5,
            max: 5
          } }]
        }
      }
    });

  }

  drawGraphIzquierdo1() {
    this.donutChartIzquierdo1 = new Chart(this.donutCanvasIzquierdo1.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.izquierdo.uno.valor, (5 - this.izquierdo.uno.valor)], backgroundColor: [ 'rgba(63, 169, 245, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } }
    });

  }

  drawGraphIzquierdo2() {
    this.donutChartIzquierdo2 = new Chart(this.donutCanvasIzquierdo2.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.izquierdo.dos.valor, (5 - this.izquierdo.dos.valor)], backgroundColor: [ 'rgba(63, 169, 245, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  drawGraphIzquierdo3() {
    this.donutChartIzquierdo3 = new Chart(this.donutCanvasIzquierdo3.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.izquierdo.tres.valor, (5 - this.izquierdo.tres.valor)], backgroundColor: [ 'rgba(63, 169, 245, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } }
    });
  }

  drawGraphIzquierdo4() {
    this.donutChartIzquierdo4 = new Chart(this.donutCanvasIzquierdo4.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.izquierdo.cuatro.valor, (5 - this.izquierdo.cuatro.valor)], backgroundColor: [ 'rgba(63, 169, 245, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  drawGraphCentral1() {
    this.donutChartCentral1 = new Chart(this.donutCanvasCentral1.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.central.uno.valor, (5 - this.central.uno.valor)], backgroundColor: [ 'rgba(255, 29, 37, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  drawGraphCentral2() {
    this.donutChartCentral2 = new Chart(this.donutCanvasCentral2.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.central.dos.valor, (5 - this.central.dos.valor)], backgroundColor: [ 'rgba(255, 29, 37, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  drawGraphCentral3() {
    this.donutChartCentral3 = new Chart(this.donutCanvasCentral3.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.central.tres.valor, (5 - this.central.tres.valor)], backgroundColor: [ 'rgba(255, 29, 37, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  drawGraphCentral4() {
    this.donutChartCentral4 = new Chart(this.donutCanvasCentral4.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.central.cuatro.valor, (5 - this.central.cuatro.valor)], backgroundColor: [ 'rgba(255, 29, 37, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  drawGraphDerecho1() {
    this.donutChartDerecho1 = new Chart(this.donutCanvasDerecho1.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.derecho.uno.valor, (5 - this.derecho.uno.valor)], backgroundColor: [ 'rgba(251, 176, 59, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  drawGraphDerecho2() {
    this.donutChartDerecho2 = new Chart(this.donutCanvasDerecho2.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.derecho.dos.valor, (5 - this.derecho.dos.valor)], backgroundColor: [ 'rgba(251, 176, 59, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  drawGraphDerecho3() {
    this.donutChartDerecho3 = new Chart(this.donutCanvasDerecho3.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.derecho.tres.valor, (5 - this.derecho.tres.valor)], backgroundColor: [ 'rgba(251, 176, 59, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  drawGraphDerecho4() {
    this.donutChartDerecho4 = new Chart(this.donutCanvasDerecho4.nativeElement, {
      type: 'doughnut',
      data: { datasets: [{ data: [this.derecho.cuatro.valor, (5 - this.derecho.cuatro.valor)], backgroundColor: [ 'rgba(251, 176, 59, 1)' ] }] }, 
      options: { legend: { display: false }, tooltips: { enabled: false } } 
    });
  }

  ionViewWillEnter() {

    this.storage.get('usuario').then((val: any) => {
      this.usuario = val;
      
      /*
      let request = {
        usuario: val.id, 
      };
      
      let seq = this.test.result(request); 
      seq.subscribe((response: any) => {
      */
      
      this.storage.get('resultado').then((response: any) => {      
        
        this.dominante.cerebro = this.cerebro(response.dominante.zona);
        this.dominante.puntaje = response.dominante.suma;
        this.subdominante.cerebro = this.cerebro(response.subdominante.zona);
        this.subdominante.puntaje = response.subdominante.suma;
        this.oscilante.cerebro = this.cerebro(response.oscilante.zona);
        this.oscilante.puntaje = response.oscilante.suma;

        let random1 = Math.floor(Math.random() * 142857) + 1  
        let random2 = Math.floor(Math.random() * 142857) + 1  
        let random3 = Math.floor(Math.random() * 142857) + 1  

        this.svg1 = this.sanitizer.bypassSecurityTrustHtml(
        '<svg id="svg' + random1 + '" width="96" height="96">' + 
          '<rect x="0" y="0" rx="0" ry="0" width="96" height="96" style="fill: #fff;"/>' + 
          '<linearGradient id="lg' + random1 + '" x1="0.5" y1="1" x2="0.5" y2="0">' + 
            '<stop offset="0%" stop-opacity="1" stop-color="' + this.color(response.dominante.zona) + '"/>' + 
            '<stop offset="' + ((response.dominante.suma / 50) * 100) + '%" stop-opacity="1" stop-color="' + this.color(response.dominante.zona) + '"/>' + 
            '<stop offset="' + ((response.dominante.suma / 50) * 100) + '%" stop-opacity="0" stop-color="white"/>' + 
            '<stop offset="100%" stop-opacity="0" stop-color="white"/>' + 
          '</linearGradient>' + 
          '<rect x="4.8" y="9" rx="0" ry="0" width="86" height="78" style="fill: url(#lg' + random1 + ');"/>' + 
          '<image href="assets/img/results/icons/' + this.dominante.cerebro.imagen + '" height="96" width="96"/>' + 
        '</svg>');

        this.svg2 = this.sanitizer.bypassSecurityTrustHtml(
        '<svg id="svg' + random2 + '" width="48" height="48">' + 
          '<rect x="0" y="0" rx="0" ry="0" width="48" height="48" style="fill: #fff;"/>' + 
          '<linearGradient id="lg' + random2 + '" x1="0.5" y1="1" x2="0.5" y2="0">' + 
            '<stop offset="0%" stop-opacity="1" stop-color="' + this.color(response.subdominante.zona) + '"/>' + 
            '<stop offset="' + ((response.subdominante.suma / 50) * 100) + '%" stop-opacity="1" stop-color="' + this.color(response.subdominante.zona) + '"/>' + 
            '<stop offset="' + ((response.subdominante.suma / 50) * 100) + '%" stop-opacity="0" stop-color="white"/>' + 
            '<stop offset="100%" stop-opacity="0" stop-color="white"/>' + 
          '</linearGradient>' + 
          '<rect x="2.4" y="4.5" rx="0" ry="0" width="43" height="39" style="fill: url(#lg' + random2 + ');"/>' + 
          '<image href="assets/img/results/icons/' + this.subdominante.cerebro.imagen + '" height="48" width="48"/>' + 
        '</svg>');

        this.svg3 = this.sanitizer.bypassSecurityTrustHtml(
        '<svg id="svg' + random3 + '" width="48" height="48">' + 
          '<rect x="0" y="0" rx="0" ry="0" width="48" height="48" style="fill: #fff;"/>' + 
          '<linearGradient id="lg' + random3 + '" x1="0.5" y1="1" x2="0.5" y2="0">' + 
            '<stop offset="0%" stop-opacity="1" stop-color="' + this.color(response.oscilante.zona) + '"/>' + 
            '<stop offset="' + ((response.oscilante.suma / 50) * 100) + '%" stop-opacity="1" stop-color="' + this.color(response.oscilante.zona) + '"/>' + 
            '<stop offset="' + ((response.oscilante.suma / 50) * 100) + '%" stop-opacity="0" stop-color="white"/>' + 
            '<stop offset="100%" stop-opacity="0" stop-color="white"/>' + 
          '</linearGradient>' + 
          '<rect x="2.4" y="4.5" rx="0" ry="0" width="43" height="39" style="fill: url(#lg' + random3 + ');"/>' + 
          '<image href="assets/img/results/icons/' + this.oscilante.cerebro.imagen + '" height="48" width="48"/>' + 
        '</svg>');

        this.logica = response.logica; 

        this.habilidadNivelAlto1 = {
          area: response.habilidadesNivelAlto[0].area, 
          color: this.color(response.habilidadesNivelAlto[0].zona), 
          porcentaje: response.habilidadesNivelAlto[0].percent
        };

        this.habilidadNivelAlto2 = {
          area: response.habilidadesNivelAlto[1].area, 
          color: this.color(response.habilidadesNivelAlto[1].zona), 
          porcentaje: response.habilidadesNivelAlto[1].percent
        };

        this.habilidadNivelAlto3 = {
          area: response.habilidadesNivelAlto[2].area, 
          color: this.color(response.habilidadesNivelAlto[2].zona), 
          porcentaje: response.habilidadesNivelAlto[2].percent
        };

        this.habilidadNivelMedio1 = {
          area: response.habilidadesNivelMedio[0].area, 
          color: this.color(response.habilidadesNivelMedio[0].zona), 
          porcentaje: response.habilidadesNivelMedio[0].percent
        };

        this.habilidadNivelMedio2 = {
          area: response.habilidadesNivelMedio[1].area, 
          color: this.color(response.habilidadesNivelMedio[1].zona), 
          porcentaje: response.habilidadesNivelMedio[1].percent
        };

        this.habilidadNivelMedio3 = {
          area: response.habilidadesNivelMedio[2].area, 
          color: this.color(response.habilidadesNivelMedio[2].zona), 
          porcentaje: response.habilidadesNivelMedio[2].percent
        };

        this.habilidadNivelMedio4 = {
          area: response.habilidadesNivelMedio[3].area, 
          color: this.color(response.habilidadesNivelMedio[3].zona), 
          porcentaje: response.habilidadesNivelMedio[3].percent
        };

        this.habilidadNivelMedio5 = {
          area: response.habilidadesNivelMedio[4].area, 
          color: this.color(response.habilidadesNivelMedio[4].zona), 
          porcentaje: response.habilidadesNivelMedio[4].percent
        };

        this.habilidadNivelMedio6 = {
          area: response.habilidadesNivelMedio[5].area, 
          color: this.color(response.habilidadesNivelMedio[5].zona), 
          porcentaje: response.habilidadesNivelMedio[5].percent
        };

        this.habilidadPorMejorar1 = {
          area: response.habilidadesPorMejorar[0].area, 
          color: this.color(response.habilidadesPorMejorar[0].zona), 
          porcentaje: response.habilidadesPorMejorar[0].percent
        };

        this.habilidadPorMejorar2 = {
          area: response.habilidadesPorMejorar[1].area, 
          color: this.color(response.habilidadesPorMejorar[1].zona), 
          porcentaje: response.habilidadesPorMejorar[1].percent
        };

        this.habilidadPorMejorar3 = {
          area: response.habilidadesPorMejorar[2].area, 
          color: this.color(response.habilidadesPorMejorar[2].zona), 
          porcentaje: response.habilidadesPorMejorar[2].percent
        };

        this.izquierdo.uno = {
          nombre: response.habilidades[0].area,
          concepto: response.habilidades[0].concepto, 
          color: response.habilidades[0].color, 
          valor: response.habilidades[0].suma
        }

        this.izquierdo.dos = {
          nombre: response.habilidades[1].area,
          concepto: response.habilidades[1].concepto, 
          color: response.habilidades[1].color, 
          valor: response.habilidades[1].suma
        }

        this.izquierdo.tres = {
          nombre: response.habilidades[2].area,
          concepto: response.habilidades[2].concepto, 
          color: response.habilidades[2].color, 
          valor: response.habilidades[2].suma
        }

        this.izquierdo.cuatro = {
          nombre: response.habilidades[3].area,
          concepto: response.habilidades[3].concepto, 
          color: response.habilidades[3].color, 
          valor: response.habilidades[3].suma
        }

        this.central.uno = {
          nombre: response.habilidades[4].area,
          concepto: response.habilidades[4].concepto, 
          color: response.habilidades[4].color, 
          valor: response.habilidades[4].suma
        }

        this.central.dos = {
          nombre: response.habilidades[5].area,
          concepto: response.habilidades[5].concepto, 
          color: response.habilidades[5].color, 
          valor: response.habilidades[5].suma
        }

        this.central.tres = {
          nombre: response.habilidades[6].area,
          concepto: response.habilidades[6].concepto, 
          color: response.habilidades[6].color, 
          valor: response.habilidades[6].suma
        }

        this.central.cuatro = {
          nombre: response.habilidades[7].area,
          concepto: response.habilidades[7].concepto, 
          color: response.habilidades[7].color, 
          valor: response.habilidades[7].suma
        }

        this.derecho.uno = {
          nombre: response.habilidades[8].area,
          concepto: response.habilidades[8].concepto, 
          color: response.habilidades[8].color, 
          valor: response.habilidades[8].suma
        }

        this.derecho.dos = {
          nombre: response.habilidades[9].area,
          concepto: response.habilidades[9].concepto, 
          color: response.habilidades[9].color, 
          valor: response.habilidades[9].suma
        }

        this.derecho.tres = {
          nombre: response.habilidades[10].area,
          concepto: response.habilidades[10].concepto, 
          color: response.habilidades[10].color, 
          valor: response.habilidades[10].suma
        }

        this.derecho.cuatro = {
          nombre: response.habilidades[11].area,
          concepto: response.habilidades[11].concepto, 
          color: response.habilidades[11].color, 
          valor: response.habilidades[11].suma
        }

        let orden: number = 0;
        for (let entity of response.habilidades) {
          let habilidad = {
            area: entity.area, 
            valor: entity.suma
          };
          this.habilidades[orden] = habilidad;
          orden++;
        }

        this.drawGraph1();

        this.drawGraphIzquierdo1();
        this.drawGraphIzquierdo2();
        this.drawGraphIzquierdo3();
        this.drawGraphIzquierdo4();

        this.drawGraphCentral1();
        this.drawGraphCentral2();
        this.drawGraphCentral3();
        this.drawGraphCentral4();

        this.drawGraphDerecho1();
        this.drawGraphDerecho2();
        this.drawGraphDerecho3();
        this.drawGraphDerecho4();

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
