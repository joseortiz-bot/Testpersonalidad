webpackJsonp([15],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPageModule", function() { return InitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InitPageModule = /** @class */ (function () {
    function InitPageModule() {
    }
    InitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__init__["a" /* InitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__init__["a" /* InitPage */]),
            ],
        })
    ], InitPageModule);
    return InitPageModule;
}());

//# sourceMappingURL=init.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitPage; });
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




var InitPage = /** @class */ (function () {
    function InitPage(navCtrl, navParams, storage, test) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.test = test;
    }
    InitPage.prototype.bifurcate = function () {
        var _this = this;
        this.storage.get('tutorial').then(function (val1) {
            if (val1 == null) {
                _this.navCtrl.push('TutorialPage');
            }
            else {
                _this.storage.get('usuario').then(function (val2) {
                    if (val2 == null) {
                        _this.navCtrl.push('WelcomePage');
                    }
                    else {
                        var request = {
                            usuario: val2.id,
                            nivel: 1
                        };
                        var seq = _this.test.retrieve(request);
                        seq.subscribe(function (response) {
                            if (response.finalizado) {
                                _this.navCtrl.push('ResultsPage');
                            }
                            else {
                                _this.navCtrl.push('QuestionsPage');
                            }
                        });
                    }
                });
            }
        });
    };
    InitPage.prototype.ionViewDidEnter = function () {
        this.bifurcate();
    };
    InitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-init',template:/*ion-inline-start:"/Users/mmiranda/napps2/app/src/pages/init/init.html"*/'<ion-content scroll="false" style="background-image: url(\'assets/img/background/orange.png\'); background-size: 400px;">\n  <ion-grid style="height: 90%;">\n    <ion-row justify-content-center align-items-center style="height: 100%;">\n      <div>\n        <img src="assets/img/background/logo.png" style="width: 160px;"/>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/mmiranda/napps2/app/src/pages/init/init.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* Test */]])
    ], InitPage);
    return InitPage;
}());

//# sourceMappingURL=init.js.map

/***/ })

});
//# sourceMappingURL=15.js.map