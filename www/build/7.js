webpackJsonp([7],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageModule", function() { return ResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultsPageModule = /** @class */ (function () {
    function ResultsPageModule() {
    }
    ResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__results__["a" /* ResultsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__results__["a" /* ResultsPage */]),
            ],
        })
    ], ResultsPageModule);
    return ResultsPageModule;
}());

//# sourceMappingURL=results.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl, navParams, alertController, storage, test, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.storage = storage;
        this.test = test;
        this.sanitizer = sanitizer;
        this.dominante = { cerebro: { texto: '', imagen: '' }, puntaje: 0 };
        this.subdominante = { cerebro: { texto: '', imagen: '' }, puntaje: 0 };
        this.oscilante = { cerebro: { texto: '', imagen: '' }, puntaje: 0 };
        this.logica = '';
        this.habilidadPorMejorar1 = { area: '', color: '', porcentaje: 0 };
        this.habilidadPorMejorar2 = { area: '', color: '', porcentaje: 0 };
        this.habilidadPorMejorar3 = { area: '', color: '', porcentaje: 0 };
    }
    ResultsPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: 'Cerrar sesión',
            message: '¿Realmente desea cerrar la sesión?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.storage.remove('usuario');
                        _this.storage.remove('resultado');
                        _this.navCtrl.push('InitPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ResultsPage.prototype.more = function () {
        this.navCtrl.push('DetailsPage');
    };
    ResultsPage.prototype.build = function () {
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
        var random1 = Math.floor(Math.random() * 142857) + 1;
        var random2 = Math.floor(Math.random() * 142857) + 1;
        var random3 = Math.floor(Math.random() * 142857) + 1;
        this.svg1 = this.sanitizer.bypassSecurityTrustHtml('<svg id="svg' + random1 + '" width="96" height="96">' +
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
        this.svg2 = this.sanitizer.bypassSecurityTrustHtml('<svg id="svg' + random2 + '" width="48" height="48">' +
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
        this.svg3 = this.sanitizer.bypassSecurityTrustHtml('<svg id="svg' + random3 + '" width="48" height="48">' +
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
    };
    ResultsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('usuario').then(function (val1) {
            _this.usuario = val1;
            var request = {
                usuario: val1.id,
            };
            _this.storage.get('resultado').then(function (val2) {
                console.log('resultado', val2);
                if (val2 == null) {
                    var seq = _this.test.result(request);
                    seq.subscribe(function (response) {
                        _this.storage.set('resultado', response);
                        _this.response = response;
                        _this.build();
                    });
                }
                else {
                    _this.response = val2;
                    _this.build();
                }
            });
        });
    };
    ResultsPage.prototype.cerebro = function (zona) {
        var cerebro;
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
    };
    ResultsPage.prototype.color = function (zona) {
        var color;
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
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"/Users/mmiranda/napps2/app/src/pages/results/results.html"*/'<ion-content style="background-image: url(\'assets/img/results/backgrounds/blue.png\'); background-size: 400px;">\n\n  <div style="width: 90%; margin: 0px auto; margin-top: 25px;">\n\n    <div style="padding: 8px 8px 8px 8px;">\n      <span style="font-size: 14pt; font-weight: bold; color: white;\n      ">Resumen</span>\n    </div>\n\n    <div style="background-color: white; border-radius: 5px; padding: 8px 8px 8px 8px;">\n\n      <table style="width: 100%;">\n        <tbody>\n          <tr>\n            <td style="width: 32px;">\n              <img style="margin-top: 8px;" src="assets/img/results/icons/cerebro.png"/>\n            </td>\n            <td style="padding-left: 8px;">\n              <span>Dominancia Cerebral</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <div>\n\n        <hr style="border-style: dashed;"/>\n\n        <div style="padding-left: 8px; padding-right: 8px;">\n          <table style="width: 100%; border-spacing: 4px; border-collapse: separate;">\n            <tbody>\n              <tr>\n                <td colspan="2" [ngStyle]="{\'width\': \'96px\', \'height\': \'96px\', \'text-align\': \'center\', \'vertical-align\': \'middle\'}">\n                  <div style="position: relative; width: 96px; height: 96px;">\n                    <div style="width: 96px; height: 96px; position: absolute; top: 0; left: 0;">\n                      <div [innerHTML]="svg1"></div>\n                    </div>\n                    <div style="width: 96px; height: 96px; position: absolute; top: 0; left: 0; padding-top: 24px;">\n                      <span style="font-size: 36pt; color: black;">{{dominante.puntaje}}</span>  \n                    </div>\n                  </div>\n                </td>\n                <td style="padding: 4px 8px 4px 8px;">\n                  <span style="font-size: 8pt; color: #AAAAAA;">Dominante</span>\n                  <br/>\n                  <span style="font-size: 12pt; font-weight: bold; color: black;">{{dominante.cerebro.texto}}</span>\n                  <br/>\n                  <span style="font-size: 8pt; color: #AAAAAA;">Este es tu puntaje más alto en tu cerebro</span>\n                </td>\n              </tr>\n              <tr>\n                <td style="width: 48px;">\n                  <div [innerHTML]="svg2"></div>\n                </td>\n                <td style="width: 48px; text-align: center; vertical-align: middle;">\n                  <span style="font-size: 24pt; color: #AAAAAA;">{{subdominante.puntaje}}</span>\n                </td>\n                <td style="padding: 4px 8px 4px 8px;">\n                  <span style="font-size: 8pt; color: #AAAAAA;">Sub Dominante</span>\n                  <br/>\n                  <span style="font-size: 12pt; font-weight: bold; color: black;">{{subdominante.cerebro.texto}}</span>\n                </td>\n              </tr>\n              <tr>\n                <td style="width: 48px;">\n                  <div [innerHTML]="svg3"></div>\n                </td>\n                <td style="width: 48px; text-align: center; vertical-align: middle;">\n                  <span style="font-size: 24pt; color: #AAAAAA;">{{oscilante.puntaje}}</span>\n                </td>\n                <td style="padding: 4px 8px 4px 8px;">\n                  <span style="font-size: 8pt; color: #AAAAAA;">Oscilante</span>\n                  <br/>\n                  <span style="font-size: 12pt; font-weight: bold; color: black;">{{oscilante.cerebro.texto}}</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n\n    </div>\n\n    <br/>\n\n    <div style="background-color: white; border-radius: 5px; padding: 8px 8px 8px 8px;">\n\n      <table style="width: 100%;">\n        <tbody>\n          <tr>\n            <td style="width: 32px;">\n              <img style="margin-top: 8px;" src="assets/img/results/icons/engranaje.png"/>\n            </td>\n            <td style="padding-left: 8px;">\n              <span>Lógica de Pensamiento</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <div>\n\n        <hr style="border-style: dashed;"/>\n\n        <table style="width: 100%; border-spacing: 4px; border-collapse: separate;">\n          <tbody>\n            <tr>\n              <td>\n                <img src="assets/img/results/icons/cabezaengranaje.png" style="width: 240px;"/>\n              </td>\n              <td style="padding: 4px 8px 4px 8px;">\n                <p style="font-size: 8pt; color: #AAAAAA; text-align: justify;">\n                  {{logica}}\n                </p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>    \n\n    <br/>\n\n    <div style="background-color: white; border-radius: 5px; padding: 8px 8px 8px 8px;">\n\n      <table style="width: 100%;">\n        <tbody>\n        <tr>\n            <td style="width: 32px;">\n              <img src="assets/img/results/icons/meta.png"/>\n            </td>\n            <td style="padding-left: 8px;">\n             <span>Habilidades por mejorar</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <hr style="border-style: dashed;"/>\n\n      <table style="width: 100%;">\n        <tbody>\n          <tr>\n            <td style="width: 120px;">\n              <span style="color: #AAAAAA; font-size: 8pt;">{{habilidadPorMejorar1.porcentaje}}%</span>\n              <div style="background-color: #AAAAAA; width: 100px; border-radius: 5px;">\n                <div style="border-radius: 5px; font-size: 4pt;" [ngStyle]="{\'background-color\': habilidadPorMejorar1.color}" [style.width]="habilidadPorMejorar1.porcentaje + \'%\'">&nbsp;</div>\n              </div>\n            </td>\n            <td style="vertical-align: bottom;">\n              {{habilidadPorMejorar1.area}}\n            </td>\n          </tr>\n          <tr> \n            <td style="font-size: 4pt;" colspan="2">&nbsp;</td>\n          </tr>\n          <tr>\n            <td style="width: 120px;">\n              <span style="color: #AAAAAA; font-size: 8pt;">{{habilidadPorMejorar2.porcentaje}}%</span>\n              <div style="background-color: #AAAAAA; width: 100px; border-radius: 5px;">\n                <div style="border-radius: 5px; font-size: 4pt;" [ngStyle]="{\'background-color\': habilidadPorMejorar2.color}" [style.width]="habilidadPorMejorar2.porcentaje + \'%\'">&nbsp;</div>\n              </div>\n            </td>\n            <td style="vertical-align: bottom;">\n              {{habilidadPorMejorar2.area}}\n            </td>\n          </tr>\n          <tr> \n            <td style="font-size: 4pt;" colspan="2">&nbsp;</td>\n          </tr>\n          <tr>\n            <td style="width: 120px;">\n              <span style="color: #AAAAAA; font-size: 8pt;">{{habilidadPorMejorar3.porcentaje}}%</span>\n              <div style="background-color: #AAAAAA; width: 100px; border-radius: 5px;">\n                <div style="border-radius: 5px; font-size: 4pt;" [ngStyle]="{\'background-color\': habilidadPorMejorar3.color}" [style.width]="habilidadPorMejorar3.porcentaje + \'%\'">&nbsp;</div>\n              </div>\n            </td>\n            <td style="vertical-align: bottom;">\n              {{habilidadPorMejorar3.area}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n\n    <br/>\n\n    <div style="margin-bottom: 24px;">\n      <button ion-button fill round block (click)="more()" style="background-color: #041728; text-transform: none;">Conócete aún mas</button>\n      <button ion-button outline round block (click)="logout()" style="border-color: #041728; color: white; text-transform: none;">Cerrar sesión</button>\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmiranda/napps2/app/src/pages/results/results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* Test */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ })

});
//# sourceMappingURL=7.js.map