webpackJsonp([8],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPageModule", function() { return RecoveryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recovery__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecoveryPageModule = /** @class */ (function () {
    function RecoveryPageModule() {
    }
    RecoveryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recovery__["a" /* RecoveryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recovery__["a" /* RecoveryPage */]),
            ],
        })
    ], RecoveryPageModule);
    return RecoveryPageModule;
}());

//# sourceMappingURL=recovery.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecoveryPage = /** @class */ (function () {
    function RecoveryPage(navCtrl, navParams, user, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.account = {
            email: ''
        };
    }
    RecoveryPage.prototype.doRecovery = function () {
        var _this = this;
        this.user.recovery(this.account).subscribe(function (response) {
            if (response.status == 'success') {
                var toast = _this.toastCtrl.create({
                    message: 'Revise su casilla de correo electrónico y siga las instrucciones',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.navCtrl.push('LoginPage');
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Hubo un error al intentar recuperar la contraseña",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Hubo un error al intentar recuperar la contraseñan",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    RecoveryPage.prototype.back = function () {
        this.navCtrl.push('LoginPage');
    };
    RecoveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recovery',template:/*ion-inline-start:"/Users/mmiranda/napps2/app/src/pages/recovery/recovery.html"*/'<ion-content scroll="false" style="background-image: url(\'assets/img/background/orange.png\'); background-size: 400px;">\n\n  <ion-grid style="height: 90%;">\n    <ion-row justify-content-center align-items-center style="height: 100%;">\n      <div style="text-align: center;">\n        <img src="assets/img/background/logo.png" style="width: 130px; margin-top: 80px;"/>\n        <br/><br/><br/>\n\n        <form>\n\n          <table>\n            <tbody>\n              <tr>\n                <td>\n                  <ion-icon name="mail"></ion-icon>\n                </td>\n                <td style="padding-left: 8px;">\n                  <ion-input type="email" [(ngModel)]="account.email" name="email" style="border-bottom: 1px solid #041728;" placeholder="Correo"></ion-input>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <br/><br/>\n\n          <button ion-button fill round block (click)="doRecovery()" style="background-color: #041728; text-transform: none;">Recuperar Contraseña</button>\n          <button ion-button outline round block (click)="back()" style="border-color: #041728; color: white; text-transform: none; margin-top: 10px;">Volver</button>\n          <br/>\n\n        </form>\n\n      </div>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmiranda/napps2/app/src/pages/recovery/recovery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], RecoveryPage);
    return RecoveryPage;
}());

//# sourceMappingURL=recovery.js.map

/***/ })

});
//# sourceMappingURL=8.js.map