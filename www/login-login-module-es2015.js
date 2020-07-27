(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login-from/login-from.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login-from/login-from.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"light\">\r\n  <ion-title>\r\n\r\n  </ion-title>\r\n</ion-toolbar>\r\n<ion-toolbar color=\"light\">\r\n  <ion-title>\r\n\r\n  </ion-title>\r\n</ion-toolbar>\r\n<ion-content color=\"light\" padding>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row color=\"primary\" justify-content-center>\r\n          <ion-col>\r\n\r\n            <div padding>\r\n              <ion-card>\r\n                <ion-item>\r\n                  <ion-avatar slot=\"start\">\r\n                    <img src='/../assets/person.svg'>\r\n                  </ion-avatar>\r\n                  <ion-label>\r\n                    <ion-input type=\"text\" [(ngModel)]=\"this.username\" placeholder=\"Username\"></ion-input>\r\n                  </ion-label>\r\n                </ion-item>\r\n              </ion-card>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div padding>\r\n              <ion-card>\r\n                <ion-item>\r\n                  <ion-avatar slot=\"start\">\r\n                    <img src='/../assets/key.svg'>\r\n                  </ion-avatar>\r\n                  <ion-label>\r\n                    <ion-input [(ngModel)]=\"this.password\" type=\"{{this.passwordVisibility}}\" placeholder=\"Password\">\r\n                    </ion-input>\r\n                  </ion-label>\r\n                  <ion-button (click)=\"passVisible()\" color=\"light\">\r\n                    <ion-icon *ngIf=\"this.passwordVisibility === 'password'\" name=\"eye-outline\"></ion-icon>\r\n                    <ion-icon *ngIf=\"this.passwordVisibility === 'text'\" name=\"eye-off-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"onClick()\" expand=\"block\" color=\"primary\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"onClick()\" expand=\"block\" color=\"primary\">\r\n              Login\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-toolbar color=\"light\">\r\n\r\n  <ion-text color=\"\" class=\"ion-align-items-center\">\r\n    <div style=\"text-align: center;\">\r\n      <p>All Rights Reserved. ™ by <a target=\"_blank\" color=\"light\" href=\"https://sakbran.github.io\">Sak Bran</a></p>\r\n    </div>\r\n  </ion-text>\r\n\r\n\r\n</ion-toolbar>");

/***/ }),

/***/ "./src/app/login/login-from/login-from.component.scss":
/*!************************************************************!*\
  !*** ./src/app/login/login-from/login-from.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLWZyb20vbG9naW4tZnJvbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/login-from/login-from.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/login-from/login-from.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginFromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFromComponent", function() { return LoginFromComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/userModel/user-model.service */ "./src/app/Services/userModel/user-model.service.ts");
/* harmony import */ var src_app_Services_userType_user_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/userType/user-type.service */ "./src/app/Services/userType/user-type.service.ts");






let LoginFromComponent = class LoginFromComponent {
    constructor(router, userService, appSetting, userTypeService) {
        this.router = router;
        this.userService = userService;
        this.appSetting = appSetting;
        this.userTypeService = userTypeService;
        this.username = "";
        this.password = "";
        this.passwordVisibility = "password";
        this.userData = {
            id: 0,
            username: "",
            password: "",
            usertype: 0,
            phone: "",
            latitude: "",
            longitude: "",
        };
    }
    ngOnInit() { }
    passVisible() {
        if (this.passwordVisibility === "password") {
            this.passwordVisibility = "text";
        }
        else {
            this.passwordVisibility = "password";
        }
    }
    locationUpdate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.userData.latitude = position.coords.latitude.toString();
                this.userData.longitude = position.coords.longitude.toString();
                this.userService.putLocation(this.userData);
            });
        }
    }
    onClick() {
        this.appSetting.showLoading();
        console.log(this.username);
        console.log(this.password);
        this.userService.getLogin(this.username, this.password).subscribe((x) => {
            console.log(x);
            this.appSetting.sessionUserID = x.id;
            this.userData = x;
        }, (err) => this.appSetting.showError(err), () => {
            if (this.appSetting.sessionUserID === 0) {
                this.appSetting.loginFail();
            }
            else {
                this.userTypeService.getSingle(this.userData.usertype).subscribe((y) => {
                    this.appSetting.loginType = y.usertypeName.toLocaleLowerCase();
                }, (err) => this.appSetting.showError(err), () => {
                    if (this.appSetting.loginType === "resturant") {
                        this.appSetting.resturantID = this.appSetting.sessionUserID;
                    }
                    console.log("Type" + this.appSetting.loginType);
                    if (this.appSetting.loginType === "rider") {
                        setInterval(() => {
                            //this.locationUpdate();
                            this.locationUpdate();
                            console.log("Interval running");
                        }, 30000);
                    }
                    this.appSetting.loginSuccess();
                    this.router.navigateByUrl("/tabs");
                });
            }
        });
    }
};
LoginFromComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_4__["UserModelService"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] },
    { type: src_app_Services_userType_user_type_service__WEBPACK_IMPORTED_MODULE_5__["UserTypeService"] }
];
LoginFromComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login-from",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-from.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login-from/login-from.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-from.component.scss */ "./src/app/login/login-from/login-from.component.scss")).default]
    })
], LoginFromComponent);



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_from_login_from_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-from/login-from.component */ "./src/app/login/login-from/login-from.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_authGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/authGuard */ "./src/app/auth/authGuard.ts");






const routes = [
    {
        path: '', component: _login_from_login_from_component__WEBPACK_IMPORTED_MODULE_3__["LoginFromComponent"]
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ../tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(m => m.TabsPageModule),
        canActivate: [_auth_authGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_from_login_from_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-from/login-from.component */ "./src/app/login/login-from/login-from.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_from_login_from_component__WEBPACK_IMPORTED_MODULE_4__["LoginFromComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]
        ],
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map