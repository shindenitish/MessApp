webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}))$/.test(control.value);
        if (!re) {
            return { "email": true };
        }
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_email__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, navCtrl, loadingCtrl, common, toastCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        var loadCtrl = this.loadingCtrl.create();
        loadCtrl.present();
        this.common.loginUser(this.loginForm.value).subscribe(function (result) {
            loadCtrl.dismiss();
            _this.common.showToast('Login successful!');
            // this.common.showAlert('Info!', '', 'Login successful');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (error) {
            loadCtrl.dismiss();
            _this.common.showAlert('Alert!', error.error.error, 'Login failed');
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Driver Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n      <ion-label stacked>Email</ion-label>\n      <ion-item>\n        <ion-input formControlName="email" type="email"></ion-input>\n      </ion-item>\n      <p *ngIf="!loginForm.controls.email.valid  && loginForm.controls.email.dirty">\n        Enter a valid email id\n      </p>\n\n      <ion-label Stacked>Password</ion-label>\n      <ion-item>\n        <ion-input formControlName="password" type="password"></ion-input>\n      </ion-item>\n      <p *ngIf="!loginForm.controls.password.valid  && loginForm.controls.password.dirty">\n        Weak password (min. 6 characters)\n      </p>\n\n      <button margin-top ion-button block type="submit" [disabled]="!loginForm.valid">Login</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_driver_add_driver__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_driver_edit_driver__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, common) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.drivers = [];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.common.fetchDrivers().then(function (result) {
            _this.drivers = result;
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.drivers = this.common.getDrivers();
    };
    HomePage.prototype.addDriver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_driver_add_driver__["a" /* AddDriverPage */]);
    };
    HomePage.prototype.editDriver = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_driver_edit_driver__["a" /* EditDriverPage */], { index: index });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Drivers List\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addDriver()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item *ngFor="let driver of drivers; let i = index">\n      <h2>{{driver.firstName}} {{driver.lastName}}</h2>\n      <p>{{driver.email}}</p>\n      <p>{{driver.contact}}</p>\n      <button ion-button clear item-end (click)="editDriver(i)">Edit</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_email__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddDriverPage = /** @class */ (function () {
    function AddDriverPage(navCtrl, navParams, formBuilder, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.common = common;
        this.max = new Date().toISOString();
        this.userForm = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            dob: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__validators_email__["a" /* EmailValidator */].isValid])],
            contact: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10)])],
            licenseNo: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            licenseDate: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    AddDriverPage.prototype.addDriver = function () {
        this.common.addDriver(this.userForm.value);
        this.navCtrl.pop();
    };
    AddDriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-driver',template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/pages/add-driver/add-driver.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Driver</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="userForm" (ngSubmit)="addDriver()" novalidate>\n    <ion-label stacked>First Name</ion-label>\n    <ion-item>\n      <ion-input formControlName="firstName" type="text"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.firstName.valid  && userForm.controls.firstName.dirty">\n      Enter a valid first name\n    </p>\n\n    <ion-label stacked>Last Name</ion-label>\n    <ion-item>\n      <ion-input formControlName="lastName" type="text"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.lastName.valid  && userForm.controls.lastName.dirty">\n      Enter a valid last name\n    </p>\n\n    <ion-label stacked>Birth Date</ion-label>\n    <ion-item no-lines>\n      <ion-label>Choose Birth Date</ion-label>\n      <ion-datetime formControlName="dob" max="{{max}}" displayFormat="DDD, DD-MMM-YYYY" required></ion-datetime>\n    </ion-item>\n    <p *ngIf="!userForm.controls.dob.valid  && userForm.controls.dob.dirty">\n      Enter a valid birth date\n    </p>\n\n    <ion-label stacked>Email</ion-label>\n    <ion-item>\n      <ion-input formControlName="email" type="email"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.email.valid  && userForm.controls.email.dirty">\n      Enter a valid email id\n    </p>\n\n    <ion-label stacked>Phone Number</ion-label>\n    <ion-item>\n      <ion-input formControlName="contact" type="number"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.contact.valid  && userForm.controls.contact.dirty">\n      Enter a valid 10 digits phone number\n    </p>\n\n    <ion-label stacked>License Number</ion-label>\n    <ion-item>\n      <ion-input formControlName="licenseNo" type="number"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.licenseNo.valid  && userForm.controls.licenseNo.dirty">\n      Enter a valid license number\n    </p>\n\n    <ion-label>License Expiry Date</ion-label>\n    <ion-item no-lines>\n      <ion-label>Choose Date</ion-label>\n      <ion-datetime formControlName="licenseDate" max="2200-12-31" displayFormat="DDD, DD-MMM-YYYY" required></ion-datetime>\n    </ion-item>\n    <p *ngIf="!userForm.controls.licenseDate.valid  && userForm.controls.licenseDate.dirty">\n      Enter a valid expiry date\n    </p>\n\n    <button ion-button margin-top block type="submit" [disabled]="!userForm.valid">Add Driver</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/pages/add-driver/add-driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */]])
    ], AddDriverPage);
    return AddDriverPage;
}());

//# sourceMappingURL=add-driver.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_email__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditDriverPage = /** @class */ (function () {
    function EditDriverPage(common, loadingCtrl, storage, navCtrl, navParams, formBuilder) {
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.oldDrivers = [];
        this.max = new Date().toISOString();
        this.oldDrivers = this.common.getDrivers();
        this.index = this.navParams.get('index');
        this.user = this.oldDrivers[this.index];
        this.userForm = this.formBuilder.group({
            firstName: [this.user.firstName, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastName: [this.user.lastName, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            dob: [this.user.dob, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: [this.user.email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__validators_email__["a" /* EmailValidator */].isValid])],
            contact: [this.user.contact, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10)])],
            licenseNo: [this.user.licenseNo, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            licenseDate: [this.user.licenseDate, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    EditDriverPage.prototype.ionViewWillEnter = function () {
    };
    EditDriverPage.prototype.saveUser = function () {
        var _this = this;
        var loadCtrl = this.loadingCtrl.create();
        loadCtrl.present();
        this.oldDrivers[this.index] = this.userForm.value;
        this.common.saveDriver(this.oldDrivers, this.index).then(function (result) {
            loadCtrl.dismiss();
            _this.navCtrl.pop();
        }, function (error) {
            loadCtrl.dismiss();
            console.log(error);
        });
    };
    EditDriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-edit-driver',template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/pages/edit-driver/edit-driver.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Edit Driver</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="userForm" (ngSubmit)="saveUser()" novalidate>\n    <ion-label stacked>First Name</ion-label>\n    <ion-item>\n      <ion-input formControlName="firstName" type="text"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.firstName.valid  && userForm.controls.firstName.dirty">\n      Enter a valid first name\n    </p>\n\n    <ion-label stacked>Last Name</ion-label>\n    <ion-item>\n      <ion-input formControlName="lastName" type="text"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.lastName.valid  && userForm.controls.lastName.dirty">\n      Enter a valid last name\n    </p>\n\n    <ion-label stacked>Birth Date</ion-label>\n    <ion-item no-lines>\n      <ion-label>Select Date</ion-label>\n        <ion-datetime formControlName="dob" max="{{max}}" displayFormat="DDD, DD-MMM-YYYY" required></ion-datetime>\n    </ion-item>\n    <p *ngIf="!userForm.controls.dob.valid  && userForm.controls.dob.dirty">\n      Enter a valid birth date\n    </p>\n\n    <ion-label stacked>Email</ion-label>\n    <ion-item>\n      <ion-input formControlName="email" type="email"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.email.valid  && userForm.controls.email.dirty">\n      Enter a valid email id\n    </p>\n\n    <ion-label stacked>Phone Number</ion-label>\n    <ion-item>\n      <ion-input formControlName="contact" type="number"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.contact.valid  && userForm.controls.contact.dirty">\n      Enter a valid 10 digits phone number\n    </p>\n\n    <ion-label stacked>License Number</ion-label>\n    <ion-item>\n      <ion-input formControlName="licenseNo" type="number"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.licenseNo.valid  && userForm.controls.licenseNo.dirty">\n      Enter a valid license number\n    </p>\n\n    <ion-label stacked>License Expiry Date</ion-label>\n    <ion-item  no-lines>\n      <ion-label>Select Date</ion-label>\n        <ion-datetime formControlName="licenseDate" max="2200-12-31" displayFormat="DDD, DD-MMM-YYYY" required></ion-datetime>\n    </ion-item>\n    <p *ngIf="!userForm.controls.licenseDate.valid  && userForm.controls.licenseDate.dirty">\n      Enter a valid expiry date\n    </p>\n\n    <button ion-button margin-top block type="submit" [disabled]="!userForm.valid">Save Details</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/pages/edit-driver/edit-driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], EditDriverPage);
    return EditDriverPage;
}());

//# sourceMappingURL=edit-driver.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_driver_add_driver__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_driver_edit_driver__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_driver_add_driver__["a" /* AddDriverPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_driver_edit_driver__["a" /* EditDriverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_driver_add_driver__["a" /* AddDriverPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_driver_edit_driver__["a" /* EditDriverPage */]
            ],
            providers: [
                Storage,
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_common_common__["a" /* CommonProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    // rootPage: any = HomePage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/Assignment/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonProvider = /** @class */ (function () {
    function CommonProvider(http, storage, loadingCtrl, alertCtrl, toastCtrl) {
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.url = 'https://reqres.in';
        this.drivers = [];
        this.drivers = [];
    }
    CommonProvider.prototype.loginUser = function (input) {
        return this.http.post(this.url + '/api/login', input);
    };
    CommonProvider.prototype.showAlert = function (title, message, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            message: message,
            buttons: ['OK']
        });
        alert.present();
    };
    CommonProvider.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2500,
            position: 'bottom'
        });
        toast.present();
    };
    CommonProvider.prototype.getDrivers = function () {
        return this.drivers.slice();
    };
    CommonProvider.prototype.fetchDrivers = function () {
        var _this = this;
        return this.storage.get('places').then(function (result) {
            if (result != null) {
                _this.drivers = result;
                return _this.drivers.slice();
            }
            else {
                return _this.drivers = [];
            }
        }, function (error) {
            _this.showToast('Unable to fetch drivers data!');
        });
    };
    CommonProvider.prototype.addDriver = function (driver) {
        var _this = this;
        var loadCtrl = this.loadingCtrl.create();
        loadCtrl.present();
        this.drivers.unshift(driver);
        this.storage.set('places', this.drivers).then(function (success) {
            loadCtrl.dismiss();
            _this.showToast('Added successfully!');
        }, function (error) {
            loadCtrl.dismiss();
            _this.showToast('Unable to save driver details!');
            _this.drivers.splice(_this.drivers.indexOf(driver), 1);
        });
    };
    CommonProvider.prototype.saveDriver = function (drivers, index) {
        var _this = this;
        return this.storage.set('places', drivers).then(function (success) {
            _this.drivers = drivers;
            _this.showToast('Saved successfully!');
        }, function (error) {
            _this.showToast('Unable to update driver details!');
            // this.drivers.splice(this.drivers[index], 1);
        });
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map