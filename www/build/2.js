webpackJsonp([2],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
            ]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, menu, platform, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.showSkip = false;
        this.dir = 'ltr';
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
    TutorialPage.prototype.startApp = function () {
        this.storage.set('tutorial', 'true');
        this.navCtrl.setRoot('WelcomePage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    TutorialPage.prototype.signUp = function () {
        this.navCtrl.push('SignUpPage');
        /*
        let toast = this.toastCtrl.create({
          message: "Registro deshabilitado momentaneamente",
          duration: 3000,
          position: 'top'
        });
        toast.present();
        */
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/mmiranda/napps2/app/src/pages/tutorial/tutorial.html"*/'<!--\n<ion-header no-shadow *ngIf="showSkip">\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="startApp()" color="primary" style="text-transform: none;">Saltar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n-->\n\n<ion-content no-bounce>\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background-image\': \'url(\' + slide.background + \')\'}">\n      <ion-grid style="height: 90%;">\n        <ion-row justify-content-center align-items-center style="height: 100%;">\n          <div>\n            <img [src]="slide.image" class="slide-image"/>\n            <p style="font-size: 12pt; font-weight: bold; text-align: left; color: black;" [innerHTML]="slide.title"></p>\n            <p style="font-size: 10pt; text-align: justify; color: #111;" [innerHTML]="slide.description"></p>\n          </div>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide [ngStyle]="{\'background-image\': \'url(assets/img/tutorial/bgIntro6.png)\'}">\n     <ion-grid style="height: 90%;">\n        <ion-row justify-content-center align-items-center style="height: 100%;">\n          <div>\n            <img src="assets/img/tutorial/logo.png" style="width: 160px;"/>\n            <br/><br/>\n            <p style="font-size: 9pt; color:#ffffff;">Bienvenido a esta aventura de conocer cómo desarrollar todo tu potencial en lo personal, familiar y profesional.</p>\n            <p style="font-size: 10pt;color:#001F35;">Esto es Napps</p>\n            <div style="width: 75%; margin: 0px auto;">\n              <button ion-button fill round block (click)="signUp()" style="background-color: #041728; text-transform: none; font-size: 13px;">¡Comienza ya!</button>\n              <br/>\n              <button ion-button outline round block (click)="login()" style="border-color: #041728; color: #041728; margin-top: -22px; font-size: 13px;  text-transform: none;">Ya eres miembro, identifícate</button>\n        \n            </div>\n          </div>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/mmiranda/napps2/app/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=2.js.map