webpackJsonp([11],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/* import { MainPage } from '../'; */
var LoginPage = /** @class */ (function () {
    function LoginPage(storage, navCtrl, user, test, toastCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.user = user;
        this.test = test;
        this.toastCtrl = toastCtrl;
        this.account = {
            email: '',
            password: ''
        };
        storage.set('tutorial', true);
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.storage.remove('resultado');
        this.user.login(this.account).subscribe(function (response) {
            if (response.status == 'success') {
                _this.storage.set('usuario', response.user);
                // this.navCtrl.push(MainPage);
                _this.navCtrl.push('InitPage');
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Usuario y/o contraseña erróneos",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (err) {
            // this.navCtrl.push(MainPage);
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    LoginPage.prototype.back = function () {
        // this.navCtrl.popToRoot();
        this.navCtrl.push('InitPage');
    };
    LoginPage.prototype.recovery = function () {
        this.navCtrl.push('RecoveryPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mmiranda/napps2/app/src/pages/login/login.html"*/'<!-- \n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n-->\n\n<ion-content scroll="false" style="background-image: url(\'assets/img/background/blue.png\'); background-size: 400px;">\n\n  <ion-grid style="height: 90%;">\n    <ion-row justify-content-center align-items-center style="height: 100%;">\n      <div style="text-align: center;">\n        <img src="assets/img/background/logo.png" style="width: 130px; margin-top: 80px;"/>\n        <br/><br/><br/>\n\n        <form>\n\n          <table>\n            <tbody>\n              <tr>\n                <td>\n                  <ion-icon name="mail"></ion-icon>\n                </td>\n                <td style="padding-left: 8px;">\n                  <ion-input type="email" [(ngModel)]="account.email" name="email" style="border-bottom: 1px solid #041728;" placeholder="Correo"></ion-input>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <ion-icon name="key"></ion-icon>\n                </td>\n                <td style="padding-left: 8px;">\n                  <ion-input type="password" [(ngModel)]="account.password" name="password" style="border-bottom: 1px solid #041728;" placeholder="Contraseña"></ion-input>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <br/><br/>\n\n          <button ion-button fill round block (click)="doLogin()" style="background-color: #041728; text-transform: none;">Iniciar Sesión</button>\n          <button ion-button outline round block (click)="back()" style="border-color: #041728; color: white; text-transform: none; margin-top: 10px;">Volver</button>\n          <br/>\n          <br/>\n          <button ion-button outline round block (click)="recovery()" style="border-color: #041728; color: white; text-transform: none; margin-top: 10px;">Recuperar Contraseña</button>\n          <br/>\n\n        </form>\n\n      </div>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmiranda/napps2/app/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* Test */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=11.js.map