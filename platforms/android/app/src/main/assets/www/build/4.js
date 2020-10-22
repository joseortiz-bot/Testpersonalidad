webpackJsonp([4],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, user, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.account = {
            name: '',
            email: '',
            password: ''
        };
        storage.set('tutorial', true);
    }
    SignUpPage.prototype.doRegister = function () {
        var _this = this;
        this.user.signUp(this.account).subscribe(function (response) {
            if (response.status == 'success') {
                _this.storage.set('usuario', response.user);
                _this.navCtrl.push('InitPage');
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: response.signUpErrorString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (err) {
            console.log('error signup', err);
            var toast = _this.toastCtrl.create({
                message: 'Hubo un problema al intentar efectuar el registro',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignUpPage.prototype.back = function () {
        this.navCtrl.push('InitPage');
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/mmiranda/napps2/app/src/pages/sign-up/sign-up.html"*/'<ion-content no-bounce scroll="false" style="background-image: url(\'assets/img/background/orange.png\'); background-size: 400px;">\n\n  <ion-grid style="height: 90%;">\n    <ion-row justify-content-center align-items-center style="height: 100%;">\n      <div style="text-align: left; margin-top: 20px;">\n\n        <div style="padding-left: 24px; color: white;" >\n          <h1>Empieza<br/>ahora</h1>\n          <span style=" color: #001F35;">Regístrate</span>\n        </div>\n\n        <br/>\n        <br/>\n\n        <form>\n\n          <table>\n            <tbody>\n              <tr>\n                <td>\n                  <ion-icon name="person"></ion-icon>\n                </td>\n                <td style="padding-left: 8px;">\n                  <ion-input type="email" [(ngModel)]="account.name" name="name" style="border-bottom: 1px solid #041728;" placeholder="Nombre"></ion-input>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <ion-icon name="mail"></ion-icon>\n                </td>\n                <td style="padding-left: 8px;">\n                  <ion-input type="email" [(ngModel)]="account.email" name="email" style=" border-bottom: 1px solid #041728;" placeholder="Correo"></ion-input>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <ion-icon name="key"></ion-icon>\n                </td>\n                <td style="padding-left: 8px;">\n                  <ion-input type="password" [(ngModel)]="account.password" name="password" style="border-bottom: 1px solid #041728;" placeholder="Contraseña"></ion-input>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <br/><br/>\n\n          <button ion-button fill round block (click)="doRegister()" style="background-color: #041728; text-transform: none; font-weight: bold;">Registrarme</button>\n\n          <button ion-button outline round block (click)="back()" style="border-color: #041728; color: white; margin-top: 10px; text-transform: none;">Volver</button>\n\n          <br/>\n\n        </form>\n\n\n      </div>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/mmiranda/napps2/app/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ })

});
//# sourceMappingURL=4.js.map