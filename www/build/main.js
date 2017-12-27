webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnqueuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enqueue_details_enqueue_details__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the EnqueuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnqueuePage = (function () {
    function EnqueuePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EnqueuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnqueuePage');
    };
    EnqueuePage.prototype.openEnqueuedetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__enqueue_details_enqueue_details__["a" /* EnqueueDetailsPage */]);
    };
    EnqueuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-enqueue',template:/*ion-inline-start:"Y:\Angular\Corporate\src\pages\enqueue\enqueue.html"*/'<!--\n  Generated template for the EnqueuePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n      <ion-navbar class="headertop">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n    <ion-title>Enqueue</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="background1" >\n  <ion-card (click)="openEnqueuedetailsPage()">\n    <img class="thumb" src="assets/imgs/advance-card-map-madison.png">\n    <ion-card-content>\n      <h2>To: Museum of Football</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-card-content>\n    <button ion-button full class="buttonitem" >\n      Details\n    </button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"Y:\Angular\Corporate\src\pages\enqueue\enqueue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], EnqueuePage);
    return EnqueuePage;
}());

//# sourceMappingURL=enqueue.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the PackageDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PackageDetailsPage = (function () {
    function PackageDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PackageDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PackageDetailsPage');
    };
    PackageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-package-details',template:/*ion-inline-start:"Y:\Angular\Corporate\src\pages\package-details\package-details.html"*/'<!--\n  Generated template for the PackageDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PackageDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-card>\n        <div class="text-center">\n          <h1 class="headertop" style="text-align: center;">Package Name</h1>\n    \n          <h2 class="headertop" style="text-align: center;">Grocery Bag</h2>\n        </div>\n        <img style="width:392px; height:291px;" src="assets/imgs/advance-card-map-madison.png" />\n        <ion-card-content>\n    \n          <ion-card-title>\n            Details:\n          </ion-card-title>\n          <p>\n            Grocery Bag containing some pack of chips, some snacks, medicines, oil, noodles,some fruit. Thats it.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    \n    \n      <ion-card>\n    \n        <ion-card-content>\n          <ion-card-title>\n          </ion-card-title>\n          <ion-list>\n            <ion-item>\n              <ion-row>\n                <ion-col col-4>\n                  <ion-avatar>\n                    <ion-icon class="iconsize" name="ios-contact" item-start></ion-icon>\n                  </ion-avatar>\n                </ion-col>\n                <ion-col col-8 align-self-center>\n                  <h2>Name</h2>\n                  <p>Woody</p>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <ion-item>\n              <ion-row>\n                <ion-col col-4>\n                  <ion-avatar>\n                    <ion-icon class="iconsize" name="call" item-start></ion-icon>\n                  </ion-avatar>\n                </ion-col>\n                <ion-col col-8 align-self-center>\n                  <h2>Contact</h2>\n                  <p>034441565025</p>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n    \n            <ion-item>\n              <ion-row>\n                <ion-col col-4>\n                  <ion-avatar>\n                    <ion-icon class="iconsize" name="ios-open" item-start></ion-icon>\n                  </ion-avatar>\n                </ion-col>\n                <ion-col col-8 align-self-center>\n                  <h2>Package Size</h2>\n                  <p>Medium</p>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <ion-item>\n              <ion-row>\n                <ion-col col-4>\n                  <ion-avatar>\n                    <ion-icon class="iconsize" name="cash" item-start></ion-icon>\n                  </ion-avatar>\n                </ion-col>\n                <ion-col col-8 align-self-center>\n                  <h2>Earnings</h2>\n                  <p>Rs:700</p>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n    \n    \n            <ion-item>\n              <ion-row>\n                <ion-col col-4>\n                  <ion-avatar>\n                    <ion-icon class="iconsize" name="car" item-start></ion-icon>\n                  </ion-avatar>\n                </ion-col>\n                <ion-col col-8 align-self-center>\n                  <h2>Transport Type</h2>\n                  <p>Bike</p>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n    \n    \n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    \n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-2>\n              <ion-avatar>\n                <ion-icon name="pin"></ion-icon>\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-10 align-self-center>\n              <h3>To:</h3>\n              <p> House 454 D, street 9, askari x, lahore.</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n    \n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-2>\n              <ion-avatar>\n                <ion-icon name="radio-button-off"></ion-icon>\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-10 align-self-center>\n              <h3>From:</h3>\n              <p>Phase 5, food mart, defense, lahore. </p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n      <ion-card>\n        <img src="assets/imgs/Capture.JPG">\n      </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Corporate\src\pages\package-details\package-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PackageDetailsPage);
    return PackageDetailsPage;
}());

//# sourceMappingURL=package-details.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"Y:\Angular\Corporate\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-card class="cards">\n    <ion-item>\n      <ion-avatar item-start>\n        <img class="round" src="assets/imgs/Borough-market.jpg">\n      </ion-avatar>\n      <label class="headerlabel">Name</label>\n      <p>Qasim Cheema</p>\n      <label class="headerlabel">Contact Info</label>\n      <p>034546980741</p>\n      <label class="headerlabel">Rating</label>\n      <p>★ ★ ★ ★ ★</p>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col col-6 class="card2">\n        <label class="headerlabel">Balance</label>\n        <div>\n          <ion-badge class="badgevalues">260</ion-badge>\n        </div>\n      </ion-col>\n      <ion-col col-6 class="card2">\n        <label class="headerlabel">Clearence Due</label>\n        <div>\n          <ion-badge class="badgevalues">260</ion-badge>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 class="card2">\n        <label class="headerlabel">Active Pakages</label>\n        <div>\n          <ion-badge class="badgevalues">2</ion-badge>\n        </div>\n      </ion-col>\n      <ion-col col-6 class="card2">\n        <label class="headerlabel">Cancelled Packages</label>\n        <div>\n          <ion-badge class="badgevalues">1</ion-badge>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n  <ion-row>\n    <ion-col col-6 class="card2">\n\n      <ion-card class="stats">\n        <ion-row class="title">\n          <label class="headerlabel">Average Response Time</label>\n        </ion-row>\n        <ion-row class="badge">\n          <ion-badge class="badgevalues">260</ion-badge>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n    <ion-col col-6 class="card2">\n      <ion-card class="stats">\n        <ion-row class="title">\n          <label class="headerlabel">Deliveries Done</label>\n        </ion-row>\n        <ion-row class="badge">\n          <ion-badge class="badgevalues">260</ion-badge>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-card>\n    <ion-card-header>\n      Put Stars here\n    </ion-card-header>\n    <ion-card-content>\n      <p>This is a comment orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sem dolor. Proin lobortis dolor\n        quis est elementum, in feugiat quam maximus.</p>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Corporate\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"Y:\Angular\Corporate\src\pages\sign-up\sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Drive and Deliver</ion-title>\n      </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label color="primary" stacked>Name</ion-label>\n      <ion-input placeholder="Enter Name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Address</ion-label>\n      <ion-textarea placeholder="Enter Address"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Service</ion-label>\n      <ion-select >\n        <ion-option value="tcs">TCS</ion-option>\n        <ion-option value="cheetach">Cheetah</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>PIN</ion-label>\n      <ion-input placeholder="Enter PIN" maxlength="15"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Email</ion-label>\n      <ion-input placeholder="Enter Email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Password</ion-label>\n      <ion-input type="password" placeholder="Enter Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Confirm Password</ion-label>\n      <ion-input type="password" placeholder="ReEnter Password"></ion-input>\n    </ion-item>\n  </form>\n\n  <button ion-button type="submit" block>Create Account</button>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Corporate\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/enqueue-details/enqueue-details.module": [
		276,
		4
	],
	"../pages/enqueue/enqueue.module": [
		277,
		3
	],
	"../pages/package-details/package-details.module": [
		278,
		2
	],
	"../pages/profile/profile.module": [
		279,
		1
	],
	"../pages/sign-up/sign-up.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_details_package_details__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openPackageDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__package_details_package_details__["a" /* PackageDetailsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"Y:\Angular\Corporate\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drive and Deliver</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n  <ion-card (click)="openPackageDetailsPage()">\n\n    <img src="assets/imgs/advance-card-map-madison.png">\n    <ion-fab right top>\n      <button class="buttoncolor" ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n      <h2>To: Museum of Football</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n      <h2>From: Institute of Fine Cocktails</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="ios-open" item-left large></ion-icon>\n      <h2>Package Size</h2>\n      <p>Small</p>\n    </ion-item>\n\n    <button ion-button full class="buttonitem ">\n      Accept\n    </button>\n\n\n  </ion-card>\n  <ion-card (click)="openPackageDetailsPage()">\n\n    <img src="assets/imgs/advance-card-map-madison.png">\n    <ion-fab right top>\n      <button class="buttoncolor" ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n      <h2>To: Museum of Football</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n      <h2>From: Institute of Fine Cocktails</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="ios-open" item-left large></ion-icon>\n      <h2>Package Size</h2>\n      <p>Small</p>\n    </ion-item>\n    <button ion-button full class="buttonitem ">\n      Accept\n    </button>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Corporate\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_enqueue_enqueue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_enqueue_details_enqueue_details__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_package_details_package_details__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_enqueue_enqueue__["a" /* EnqueuePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enqueue_details_enqueue_details__["a" /* EnqueueDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_package_details_package_details__["a" /* PackageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/enqueue-details/enqueue-details.module#EnqueueDetailsPageModule', name: 'EnqueueDetailsPage', segment: 'enqueue-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enqueue/enqueue.module#EnqueuePageModule', name: 'EnqueuePage', segment: 'enqueue', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/package-details/package-details.module#PackageDetailsPageModule', name: 'PackageDetailsPage', segment: 'package-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_enqueue_enqueue__["a" /* EnqueuePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enqueue_details_enqueue_details__["a" /* EnqueueDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_package_details_package_details__["a" /* PackageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_enqueue_enqueue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__["a" /* SignUpPage */];
        this.prof = __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'All Packages', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Enqueued Packages', component: __WEBPACK_IMPORTED_MODULE_4__pages_enqueue_enqueue__["a" /* EnqueuePage */] }
        ];
    }
    MyApp.prototype.openProfile = function (page) {
        // profile Open
        this.nav.setRoot(page);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"Y:\Angular\Corporate\src\app\app.html"*/'<ion-menu [content]="content" class="menuebg">\n        <ion-header class="themeblue">\n                <ion-item class="themeblue" no-lines>\n                    <ion-row>\n                        <ion-col col-6>\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/Borough-market.jpg">\n                        </ion-avatar>\n                    </ion-col>\n                        <ion-col align-self-center col-6>\n                            <h2 class="textcol">John Wick</h2>\n                            <p>★ ★ ★ ★ ★</p>\n                            <button class="profilebutton " ion-button icon-left menuClose (click)="openProfile(prof)">\n                                <ion-icon name="person"></ion-icon>Profile\n                            </button>\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n        \n            </ion-header>\n            <ion-content class="buttontheme">\n        \n                <ion-row>\n                    <ion-col col-2 align-self-center>\n                        <ion-icon style="font-size:35px" class="textcol" name="ios-home"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[0])">\n                            All Packages\n                        </button>\n                    </ion-col>\n                </ion-row>\n                \n                <ion-row>\n                    <ion-col col-2 align-self-center>\n                        <ion-icon style="font-size:35px" class="textcol" name="calendar"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[1])">\n                            Enqueue Packages\n                        </button>\n                    </ion-col>\n                </ion-row>\n                \n                <ion-footer class="themeblue">\n                    <button class="logout " ion-button (click)="openProfile(prof)">\n                        Log Out\n                    </button>\n                </ion-footer>\n            </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"Y:\Angular\Corporate\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnqueueDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the EnqueueDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnqueueDetailsPage = (function () {
    function EnqueueDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EnqueueDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnqueueDetailsPage');
    };
    EnqueueDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enqueue-details',template:/*ion-inline-start:"Y:\Angular\Corporate\src\pages\enqueue-details\enqueue-details.html"*/'<!--\n  Generated template for the EnqueueDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EnqueueDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background1">\n  <ion-card>\n    <img src="assets/imgs/Capture.JPG">\n  </ion-card>\n  <ion-card>\n    <ion-item class="text-center">\n      <h1 class="headertop" style="text-align: center;">Package Name</h1>\n\n      <h2 class="headertop" style="text-align: center;">Grocery Bag</h2>\n    </ion-item>\n\n    <ion-list>\n\n\n      <ion-item>\n        <ion-row>\n          <ion-col col-4>\n            <ion-avatar>\n              <ion-icon name="pin"></ion-icon>\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-8 align-self-center>\n            <h3>To</h3>\n            <p> House 454 D, street 9, askari x, lahore.</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item>\n        <ion-row>\n          <ion-col col-4>\n            <ion-avatar>\n              <ion-icon name="radio-button-off"></ion-icon>\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-8 align-self-center>\n            <h3>From</h3>\n            <p>Phase 5, food mart, defense, lahore. </p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item>\n        <ion-row>\n          <ion-col col-4>\n            <ion-avatar>\n              <ion-icon class="iconsize" name="cash" item-start></ion-icon>\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-8 align-self-center>\n            <h2>Earnings</h2>\n            <p>Rs:700</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item>\n        <ion-row>\n          <ion-col col-4>\n            <ion-avatar>\n              <ion-icon class="iconsize" name="barcode" item-start></ion-icon>\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-8 align-self-center>\n            <h2>Tracking ID</h2>\n            <p>819261723</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item>\n        <ion-icon class="iconsize" name="code" item-start></ion-icon>\n        <ion-label color="danger" stacked>Verification Code</ion-label>\n        <ion-input placeholder="XXXXXXX"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full class="buttonitem">\n      Confirm code\n    </button>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Corporate\src\pages\enqueue-details\enqueue-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EnqueueDetailsPage);
    return EnqueueDetailsPage;
}());

//# sourceMappingURL=enqueue-details.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map