webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
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

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(formBuilder, navCtrl, loadingCtrl, rest) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.rest = rest;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        var loadCtrl = this.loadingCtrl.create();
        loadCtrl.present();
        this.rest.loginUser(this.loginForm.value).subscribe(function (result) {
            loadCtrl.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (error) {
            loadCtrl.dismiss();
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/pages/login/login.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Driver Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset>\n    <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n      <ion-label stacked>Email</ion-label>\n      <ion-item>\n        <ion-input formControlName="email" type="email"></ion-input>\n      </ion-item>\n      <p *ngIf="!loginForm.controls.email.valid  && loginForm.controls.email.dirty">\n        Enter a valid email id\n      </p>\n\n      <ion-label Stacked>Password</ion-label>\n      <ion-item>\n        <ion-input formControlName="password" type="password"></ion-input>\n      </ion-item>\n      <!-- <p *ngIf="!loginForm.controls.password.valid  && loginForm.controls.password.dirty">\n        Weak password (min. 6 characters)\n      </p> -->\n\n      <button margin-top ion-button block type="submit" [disabled]="!loginForm.valid">Login</button>\n    </form>\n  </ion-list>\n</ion-content>`/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adduser_adduser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_user_edit_user__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
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
    function HomePage(navCtrl, popOverCtrl, rest, storage) {
        this.navCtrl = navCtrl;
        this.popOverCtrl = popOverCtrl;
        this.rest = rest;
        this.storage = storage;
        this.users = [];
        // this.storage.remove('drivers');
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.users = [];
        this.storage.get('drivers').then(function (val) {
            console.log(val);
            _this.users = val;
        });
    };
    HomePage.prototype.addDriver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__adduser_adduser__["a" /* AddUserPage */], { drivers: this.users });
    };
    HomePage.prototype.editUser = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_user_edit_user__["a" /* EditUserPage */], { drivers: this.users, index: index });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Drivers\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addDriver()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item *ngFor="let user of users; let i = index">\n      <h2>{{user.firstName}} {{user.lastName}}</h2>\n      <p>{{user.email}}</p>\n      <p>{{user.contact}}</p>\n      <button ion-button clear item-end (click)="editUser(i)">Edit</button>\n    </ion-item>\n  </ion-list>\n</ion-content>`/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddUserPage = (function () {
    function AddUserPage(loadingCtrl, datePicker, datepipe, storage, navCtrl, navParams, rest, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.datePicker = datePicker;
        this.datepipe = datepipe;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.oldDrivers = [];
        this.max = new Date().toISOString();
        this.user = {
            firstName: '',
            lastName: '',
            dob: '',
            email: '',
            contact: '',
            licenseNo: '',
            licenseDate: ''
        };
        this.userForm = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            dob: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            contact: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10)])],
            licenseNo: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            licenseDate: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
        this.oldDrivers = this.navParams.get('drivers');
    }
    AddUserPage.prototype.saveUser = function () {
        var _this = this;
        var loadCtrl = this.loadingCtrl.create();
        loadCtrl.present();
        this.user = this.userForm.value;
        if (this.oldDrivers == null) {
            this.oldDrivers = [];
            this.oldDrivers.unshift(this.user);
        }
        else {
            this.oldDrivers.unshift(this.user);
        }
        this.storage.set('drivers', this.oldDrivers).then(function (result) {
            console.log('Added successfully!');
            loadCtrl.dismiss();
            _this.navCtrl.pop();
        }, function (error) {
            loadCtrl.dismiss();
            console.log(error);
        });
    };
    AddUserPage.prototype.chooseDob = function () {
        var _this = this;
        var options = {
            date: new Date(),
            mode: 'date',
            titleText: "Select Birth Date",
            okText: "Done",
            cancelText: "Cancel"
        };
        this.datePicker.show(options)
            .then(function (date) {
            _this.user.dob = date.toISOString();
            _this.userForm.controls.dob.setValue(_this.datepipe.transform(date, 'dd-MMM-yyyy'));
        }).catch(function (e) {
            _this.userForm.controls.dob.markAsDirty();
        });
    };
    AddUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-adduser',template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/pages/adduser/adduser.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Add Driver</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="userForm" (ngSubmit)="saveUser()" novalidate>\n    <ion-label stacked>First Name</ion-label>\n    <ion-item>\n      <ion-input formControlName="firstName" type="text"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.firstName.valid  && userForm.controls.firstName.dirty">\n      Enter a valid first name\n    </p>\n\n    <ion-label stacked>Last Name</ion-label>\n    <ion-item>\n      <ion-input formControlName="lastName" type="text"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.lastName.valid  && userForm.controls.lastName.dirty">\n      Enter a valid last name\n    </p>\n\n    <ion-label stacked>Birth Date</ion-label>\n    <!-- <ion-item>\n      <ion-input formControlName="dob" type="text" disabled (click)="chooseDob()"></ion-input>\n    </ion-item> -->\n    <ion-item no-lines>\n      <ion-label>Select Date</ion-label>\n        <ion-datetime formControlName="dob" max="{{max}}" displayFormat="DDD, DD-MMM-YYYY" required></ion-datetime>\n    </ion-item>\n    <p *ngIf="!userForm.controls.dob.valid  && userForm.controls.dob.dirty">\n      Enter a valid birth date\n    </p>\n\n    <ion-label stacked>Email</ion-label>\n    <ion-item>\n      <ion-input formControlName="email" type="email"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.email.valid  && userForm.controls.email.dirty">\n      Enter a valid email id\n    </p>\n\n    <ion-label stacked>Phone Number</ion-label>\n    <ion-item>\n      <ion-input formControlName="contact" type="number"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.contact.valid  && userForm.controls.contact.dirty">\n      Enter a valid 10 digits phone number\n    </p>\n\n    <ion-label stacked>License Number</ion-label>\n    <ion-item>\n      <ion-input formControlName="licenseNo" type="number"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.licenseNo.valid  && userForm.controls.licenseNo.dirty">\n      Enter a valid license number\n    </p>\n\n    <ion-label>License Expiry Date</ion-label>\n    <!-- <ion-item>\n      <ion-input formControlName="licenseDate" type="text"></ion-input>\n    </ion-item> -->\n    <ion-item  no-lines>\n      <ion-label>Select Date</ion-label>\n        <ion-datetime formControlName="licenseDate" max="2200-12-31" displayFormat="DDD, DD-MMM-YYYY" required></ion-datetime>\n    </ion-item>\n    <p *ngIf="!userForm.controls.licenseDate.valid  && userForm.controls.licenseDate.dirty">\n      Enter a valid expiry date\n    </p>\n\n    <button ion-button margin-top block type="submit" [disabled]="!userForm.valid">Add Driver</button>\n\n  </form>\n</ion-content>`/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/pages/adduser/adduser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], AddUserPage);
    return AddUserPage;
}());

//# sourceMappingURL=adduser.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_email__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserPage = (function () {
    function EditUserPage(loadingCtrl, storage, navCtrl, navParams, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.oldDrivers = [];
        this.max = new Date().toISOString();
        this.oldDrivers = this.navParams.get('drivers');
        this.index = this.navParams.get('index');
        if (this.oldDrivers != null) {
            this.user = this.oldDrivers[this.index];
            this.userForm = this.formBuilder.group({
                firstName: [this.user.firstName, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                lastName: [this.user.lastName, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                dob: [this.user.dob, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                email: [this.user.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__validators_email__["a" /* EmailValidator */].isValid])],
                contact: [this.user.contact, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10)])],
                licenseNo: [this.user.licenseNo, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                licenseDate: [this.user.licenseDate, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
            });
        }
    }
    EditUserPage.prototype.saveUser = function () {
        var _this = this;
        var loadCtrl = this.loadingCtrl.create();
        loadCtrl.present();
        this.oldDrivers[this.index] = this.userForm.value;
        this.storage.set('drivers', this.oldDrivers).then(function (result) {
            loadCtrl.dismiss();
            _this.navCtrl.pop();
        }, function (error) {
            loadCtrl.dismiss();
            console.log(error);
        });
    };
    EditUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-user',template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/pages/edit-user/edit-user.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Edit Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="userForm" (ngSubmit)="saveUser()" novalidate>\n    <ion-label stacked>First Name</ion-label>\n    <ion-item>\n      <ion-input formControlName="firstName" type="text"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.firstName.valid  && userForm.controls.firstName.dirty">\n      Enter a valid first name (min. 5 characters)\n    </p>\n\n    <ion-label stacked>Last Name</ion-label>\n    <ion-item>\n      <ion-input formControlName="lastName" type="text"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.lastName.valid  && userForm.controls.lastName.dirty">\n      Enter a valid last name (min. 5 characters)\n    </p>\n\n    <ion-label stacked>Birth Date</ion-label>\n    <!-- <ion-item>\n      <ion-input formControlName="dob" type="number"></ion-input>\n    </ion-item> -->\n    <ion-item no-lines>\n      <ion-label>Select Date</ion-label>\n        <ion-datetime formControlName="dob" max="{{max}}" displayFormat="DDD, DD-MMM-YYYY" required></ion-datetime>\n    </ion-item>\n    <p *ngIf="!userForm.controls.dob.valid  && userForm.controls.dob.dirty">\n      Enter a valid birth date\n    </p>\n\n    <ion-label stacked>Email</ion-label>\n    <ion-item>\n      <ion-input formControlName="email" type="email"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.email.valid  && userForm.controls.email.dirty">\n      Enter a valid email id\n    </p>\n\n    <ion-label stacked>Phone Number</ion-label>\n    <ion-item>\n      <ion-input formControlName="contact" type="number"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.contact.valid  && userForm.controls.contact.dirty">\n      Enter a valid 10 digits phone number\n    </p>\n\n    <ion-label stacked>License Number</ion-label>\n    <ion-item>\n      <ion-input formControlName="licenseNo" type="number"></ion-input>\n    </ion-item>\n    <p *ngIf="!userForm.controls.licenseNo.valid  && userForm.controls.licenseNo.dirty">\n      Enter a valid license number\n    </p>\n\n    <ion-label stacked>License Expiry Date</ion-label>\n    <!-- <ion-item>\n      <ion-input formControlName="licenseDate" type="text"></ion-input>\n    </ion-item> -->\n    <ion-item  no-lines>\n      <ion-label>Select Date</ion-label>\n        <ion-datetime formControlName="licenseDate" max="2200-12-31" displayFormat="DDD, DD-MMM-YYYY" required></ion-datetime>\n    </ion-item>\n    <p *ngIf="!userForm.controls.licenseDate.valid  && userForm.controls.licenseDate.dirty">\n      Enter a valid expiry date\n    </p>\n\n    <button ion-button margin-top block type="submit" [disabled]="!userForm.valid">Save Details</button>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/pages/edit-user/edit-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], EditUserPage);
    return EditUserPage;
}());

//# sourceMappingURL=edit-user.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_adduser_adduser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_user_edit_user__ = __webpack_require__(205);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_adduser_adduser__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_user_edit_user__["a" /* EditUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_adduser_adduser__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_user_edit_user__["a" /* EditUserPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(202);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/home/shindenitish/Projects/Ionic/TruckX/crud/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        this.url = 'https://reqres.in';
    }
    RestProvider.prototype.loginUser = function (input) {
        return this.http.post(this.url + '/api/login', input);
    };
    RestProvider.prototype.getUsers = function () {
        return this.http.get(this.url + '/users');
    };
    RestProvider.prototype.addUser = function (input) {
        return this.http.post(this.url + "/users", JSON.stringify(input));
    };
    RestProvider.prototype.updateUser = function (input) {
        return this.http.put(this.url + "/users/" + input.id, JSON.stringify(input));
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map