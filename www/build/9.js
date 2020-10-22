webpackJsonp([9],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageModule", function() { return QuestionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questions__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QuestionsPageModule = /** @class */ (function () {
    function QuestionsPageModule() {
    }
    QuestionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__questions__["a" /* QuestionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__questions__["a" /* QuestionsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__questions__["a" /* QuestionsPage */]
            ]
        })
    ], QuestionsPageModule);
    return QuestionsPageModule;
}());

//# sourceMappingURL=questions.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(119);
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





var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(navCtrl, navParams, translate, storage, test, toastCtrl, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.storage = storage;
        this.test = test;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.dir = 'ltr';
        this.isDisabled1 = false;
        this.isDisabled2 = false;
        this.isDisabled3 = false;
        this.isDisabled4 = false;
        this.isDisabled5 = false;
        this.bgColor1 = '';
        this.bgColor2 = '';
        this.bgColor3 = '';
        this.bgColor4 = '';
        this.bgColor5 = '';
        this.fgColor1 = '#001F35';
        this.fgColor2 = '#001F35';
        this.fgColor3 = '#001F35';
        this.fgColor4 = '#001F35';
        this.fgColor5 = '#001F35';
        this.preguntas = [];
    }
    QuestionsPage.prototype.next = function () {
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
    };
    QuestionsPage.prototype.logout = function () {
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
                        _this.navCtrl.push('InitPage');
                    }
                }
            ]
        });
        alert.present();
    };
    QuestionsPage.prototype.answer = function (id, respuesta) {
        var _this = this;
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
        var request = {
            usuario: this.usuario.id,
            pregunta: id,
            respuesta: respuesta
        };
        var seq = this.test.answer(request);
        seq.subscribe(function (response) {
            if (response.status) {
                if (_this.slides.isEnd()) {
                    _this.navCtrl.push('InitPage');
                }
                else {
                    _this.next();
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Hubo un problema al intentar responder la pregunta. Revise su conexion a internet e intente nuevamente',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: 'Hubo un problema al intentar responder la pregunta. Revise su conexion a internet e intente nuevamente',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    QuestionsPage.prototype.help = function (string) {
        var toast = this.toastCtrl.create({
            message: string,
            duration: 10000,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'x'
        });
        toast.present();
    };
    QuestionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.slides.lockSwipes(true);
        this.storage.get('usuario').then(function (val) {
            _this.usuario = val;
            var request = {
                usuario: val.id,
                nivel: 1
            };
            var seq = _this.test.retrieve(request);
            seq.subscribe(function (response) {
                for (var _i = 0, _a = response.preguntas; _i < _a.length; _i++) {
                    var pregunta = _a[_i];
                    var aux = {
                        id: pregunta.id,
                        titulo: pregunta.titulo,
                        subtitulo: pregunta.subtitulo,
                        ayuda: pregunta.ayuda,
                        fondo: pregunta.fondo,
                        centro: pregunta.centro,
                        color: pregunta.color
                    };
                    _this.preguntas.push(aux);
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], QuestionsPage.prototype, "slides", void 0);
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"/Users/mmiranda/napps2/app/src/pages/questions/questions.html"*/'<ion-content scroll="false">\n\n  <ion-slides #slides pager="false" dir="{{dir}}">\n   \n    <ion-slide style="background-image: url(\'assets/img/background/multicolor.jpg\'); background-size: 100%;">\n      <ion-grid style="height: 90%;">\n        <ion-row justify-content-center align-items-center style="height: 100%;">\n          <div style="color: white; width: 240px; text-align: left;">\n            <h2 style="margin-bottom: 0px;">¡Bienvenido al revelador del cociente triádico!</h2>\n            <p style="font-size: 10pt; margin-top: 0px;">Nivel 1</p>\n            <p></p>\n            <p style="font-size: 10pt;">Responde las siguientes preguntas y valórate de 1 a 5, siendo 1 de "menos frecuencia" y 5 de "mayor frecuencia".</p>\n            <br/>\n            <br/>\n            <button ion-button round block (click)="next()" style="background-color: orange; text-transform: none;">¡Comienza Ya!&nbsp;<ion-icon name="arrow-forward"></ion-icon></button>\n            <button ion-button outline round block (click)="logout()" style="border-color: #041728; color: white; text-transform: none;\n            margin-top:12px;">Cerrar sesión</button>\n          </div>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide *ngFor="let pregunta of preguntas" [ngStyle]="{\'background-color\': pregunta.color}">\n      <ion-grid style="height: 85%;">\n        <ion-row justify-content-center align-items-center style="height: 100%;">\n          <table style="width: 90%; height: 100vh;">\n            <thead>\n              <tr>\n                <th style="color: white;">\n                  <div style="width: 90%; margin: 0px auto;">\n                    <h3 style="font-size: 13pt; font-weight: bold; text-align: left; margin-top: 45px;" [innerHTML]="pregunta.titulo"></h3>      \n                    <h5 style="font-size: 10pt; text-align: justify;" [innerHTML]="pregunta.subtitulo"></h5>\n                  </div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td style="text-align: right;">\n                  <button ion-button clear large style="color: black;" (click)="help(pregunta.ayuda)"> \n                    <ion-icon name="help-circle"></ion-icon>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td style="vertical-align: bottom;">\n                  <img [src]="\'assets/img/questions/icons/\' + pregunta.centro" style="height: 160px;"/>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr>\n                <th style="padding-bottom: 24px;" nowrap>\n                  <button [disabled]="isDisabled1" [ngStyle]="{\'background-color\': bgColor1, \'color\': fgColor1}" ion-button outline style="width: 15%; border-color: #001F35;" (click)="answer(pregunta.id, 1)">1</button>\n                  <button [disabled]="isDisabled2" [ngStyle]="{\'background-color\': bgColor2, \'color\': fgColor2}" ion-button outline style="width: 15%; border-color: #001F35;" (click)="answer(pregunta.id, 2)">2</button>\n                  <button [disabled]="isDisabled3" [ngStyle]="{\'background-color\': bgColor3, \'color\': fgColor3}" ion-button outline style="width: 15%; border-color: #001F35;" (click)="answer(pregunta.id, 3)">3</button>\n                  <button [disabled]="isDisabled4" [ngStyle]="{\'background-color\': bgColor4, \'color\': fgColor4}" ion-button outline style="width: 15%; border-color: #001F35;" (click)="answer(pregunta.id, 4)">4</button>\n                  <button [disabled]="isDisabled5" [ngStyle]="{\'background-color\': bgColor5, \'color\': fgColor5}" ion-button outline style="width: 15%; border-color: #001F35;" (click)="answer(pregunta.id, 5)">5</button>\n                </th>\n              </tr>\n            </tfoot>\n          </table>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <!--\n    <ion-slide style="background-image: url(\'assets/img/background/multicolor.jpg\');">\n      <ion-grid style="height: 90%;">\n        <ion-row justify-content-center align-items-center style="height: 100%;">\n          <div style="color: white; width: 240px; text-align: left;">\n            <h1>FIN</h1>\n          </div>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n    -->\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmiranda/napps2/app/src/pages/questions/questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* Test */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ })

});
//# sourceMappingURL=9.js.map