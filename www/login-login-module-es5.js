function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login-from/login-from.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login-from/login-from.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginFromLoginFromComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar color=\"dark\">\r\n  <!----- <ion-buttons slot=\"start\">\r\n    <ion-button (click)=\"login()\">\r\n      <ion-icon class=\"title\" name=\"person-circle-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>----->\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button color=\"light\" routerLink=\"/\">\r\n      Back\r\n    </ion-button>\r\n  \r\n  </ion-buttons>\r\n  <ion-title class=\"title\" >\r\n    <table>\r\n      <tr>\r\n        <td>\r\n          <ion-img class=\"icon\" src=\"/../assets/icon/favicon.png\"></ion-img>\r\n        </td>\r\n        <td>&nbsp;Sidecar</td>\r\n      </tr>\r\n    </table></ion-title\r\n  >\r\n</ion-toolbar>\r\n<ion-toolbar color=\"light\">\r\n  <ion-title> </ion-title>\r\n</ion-toolbar>\r\n<ion-content color=\"light\" padding>\r\n \r\n    <div class=\"center\">\r\n      <ion-card class=\"loginCard\">\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row color=\"primary\" justify-content-center>\r\n              <ion-col>\r\n                <div padding>\r\n                  <ion-card>\r\n                    <ion-item>\r\n                      <ion-avatar slot=\"start\">\r\n                        <img\r\n                          class=\"icon\"\r\n                          src=\"/../assets/person-circle-outline.svg\"\r\n                        />\r\n                      </ion-avatar>\r\n                      <ion-label>\r\n                        <ion-input\r\n                          id=\"user\"\r\n                          type=\"text\"\r\n                          [(ngModel)]=\"this.username\"\r\n                          placeholder=\"Username\"\r\n                        ></ion-input>\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </ion-card>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n                <div padding>\r\n                  <ion-card>\r\n                    <ion-item>\r\n                      <ion-avatar slot=\"start\">\r\n                        <img class=\"icon\" src=\"/../assets/key-outline.svg\" />\r\n                      </ion-avatar>\r\n                      <ion-label>\r\n                        <ion-input\r\n                          [(ngModel)]=\"this.password\"\r\n                          [type]=\"this.passwordVisibility\"\r\n                          placeholder=\"Password\"\r\n                     \r\n                        >\r\n                        </ion-input>\r\n                      </ion-label>\r\n                    </ion-item>\r\n\r\n                    <ion-button\r\n                      expand=\"block\"\r\n                      (click)=\"passVisible()\"\r\n                      color=\"light\"\r\n                    >\r\n                      <ion-icon\r\n                        *ngIf=\"this.passwordVisibility === 'password'\"\r\n                        name=\"eye-outline\"\r\n                      ></ion-icon>\r\n                      <ion-icon\r\n                        *ngIf=\"this.passwordVisibility === 'text'\"\r\n                        name=\"eye-off-outline\"\r\n                      ></ion-icon>\r\n                    </ion-button>\r\n                  </ion-card>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-button routerLink=\"\" expand=\"block\" color=\"primary\">\r\n                  Cancel\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-button (click)=\"onClick()\" expand=\"block\" color=\"primary\">\r\n                  Login\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n<ion-toolbar color=\"dark\">\r\n  <ion-text color=\"\" class=\"ion-align-items-center\">\r\n    <div style=\"text-align: center\">\r\n      <p>\r\n        All Rights Reserved. ™ by\r\n        <a target=\"_blank\" color=\"light\" href=\"https://sakbran.github.io\"\r\n          >Sak Bran</a\r\n        >\r\n      </p>\r\n    </div>\r\n  </ion-text>\r\n</ion-toolbar>\r\n";
    /***/
  },

  /***/
  "./src/app/Services/userModel/user-model.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Services/userModel/user-model.service.ts ***!
    \**********************************************************/

  /*! exports provided: UserModelService */

  /***/
  function srcAppServicesUserModelUserModelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModelService", function () {
      return UserModelService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserModelService = /*#__PURE__*/function () {
      function UserModelService(http, appSetting) {
        _classCallCheck(this, UserModelService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/userModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(UserModelService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url);
        }
      }, {
        key: "getLogin",
        value: function getLogin(username, password) {
          console.log(this.url + "/login?user=".concat(username, "&password=").concat(password));
          return this.http.get(this.url + "/login?user=".concat(username, "&password=").concat(password));
        }
      }, {
        key: "getAvailableRider",
        value: function getAvailableRider() {
          return this.http.get(this.url + "/availableRider");
        }
      }, {
        key: "getDeliveringRider",
        value: function getDeliveringRider() {
          return this.http.get(this.url + "/deliveringRider");
        }
      }, {
        key: "getSingle",
        value: function getSingle(id) {
          var searchUrl = "".concat(this.url, "/").concat(id);
          return this.http.get(searchUrl);
        }
      }, {
        key: "post",
        value: function post(data) {
          var _this = this;

          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            _this.appSetting.showSuccess();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var _this2 = this;

          var searchUrl = "".concat(this.url, "/").concat(data.id);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            _this2.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this2.appSetting.showError(err);
          });
        }
      }, {
        key: "putLocation",
        value: function putLocation(data) {
          var searchUrl = "".concat(this.url, "/").concat(data.id);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {}, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {}
          });
          xhr.open('DELETE', this.url + '/' + id);
          xhr.send(data);
        }
      }]);

      return UserModelService;
    }();

    UserModelService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    UserModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserModelService);
    /***/
  },

  /***/
  "./src/app/login/login-from/login-from.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/login/login-from/login-from.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginFromLoginFromComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img.icon {\n  border-radius: 0px;\n  max-width: 20px;\n  max-height: 20px;\n}\n\nion-card.loginCard {\n  max-width: 500px;\n  text-align: center;\n}\n\ndiv.center {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-img.icon {\n  max-width: 30px;\n  max-height: 30px;\n  background-color: white;\n  border-radius: 25px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4tZnJvbS9EOlxcc2lkZUNhci9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLWZyb21cXGxvZ2luLWZyb20uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLWZyb20vbG9naW4tZnJvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FES0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtBQ0F4Qzs7QURLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi1mcm9tL2xvZ2luLWZyb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaWNvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIG1heC13aWR0aDogMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLmxvZ2luQ2FyZHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgXHJcbn1cclxuXHJcblxyXG5kaXYuY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWltZy5pY29ue1xyXG4gICAgbWF4LXdpZHRoOiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiaW1nLmljb24ge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1heC13aWR0aDogMjBweDtcbiAgbWF4LWhlaWdodDogMjBweDtcbn1cblxuaW9uLWNhcmQubG9naW5DYXJkIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWltZy5pY29uIHtcbiAgbWF4LXdpZHRoOiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login-from/login-from.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/login/login-from/login-from.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginFromComponent */

  /***/
  function srcAppLoginLoginFromLoginFromComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFromComponent", function () {
      return LoginFromComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/userModel/user-model.service */
    "./src/app/Services/userModel/user-model.service.ts");
    /* harmony import */


    var src_app_Services_userType_user_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/userType/user-type.service */
    "./src/app/Services/userType/user-type.service.ts");

    var LoginFromComponent = /*#__PURE__*/function () {
      function LoginFromComponent(router, userService, appSetting, userTypeService) {
        _classCallCheck(this, LoginFromComponent);

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
          longitude: ""
        };
      }

      _createClass(LoginFromComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "passVisible",
        value: function passVisible() {
          if (this.passwordVisibility === "password") {
            this.passwordVisibility = "text";
          } else {
            this.passwordVisibility = "password";
          }
        }
      }, {
        key: "locationUpdate",
        value: function locationUpdate() {
          var _this3 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this3.userData.latitude = position.coords.latitude.toString();
              _this3.userData.longitude = position.coords.longitude.toString();

              _this3.userService.putLocation(_this3.userData);
            });
          }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          var _this4 = this;

          this.appSetting.showLoading();
          this.userService.getLogin(this.username, this.password).subscribe(function (x) {
            _this4.appSetting.sessionUserID = x.id;
            _this4.userData = x;
          }, function (err) {
            return _this4.appSetting.loginFail();
          }, function () {
            if (_this4.appSetting.sessionUserID === 0) {
              _this4.appSetting.loginFail();
            } else {
              _this4.userTypeService.getSingle(_this4.userData.usertype).subscribe(function (y) {
                _this4.appSetting.loginType = y.usertypeName.toLocaleLowerCase();
              }, function (err) {
                return _this4.appSetting.showError(err);
              }, function () {
                if (_this4.appSetting.loginType === "resturant") {
                  _this4.appSetting.resturantID = _this4.appSetting.sessionUserID;
                }

                if (_this4.appSetting.loginType === "rider") {
                  setInterval(function () {
                    //this.locationUpdate();
                    _this4.locationUpdate();
                  }, 10000);
                }

                _this4.appSetting.loginSuccess();

                _this4.router.navigateByUrl("/managmenet");
              });
            }

            _this4.appSetting.loginSuccess();
          });
        }
      }]);

      return LoginFromComponent;
    }();

    LoginFromComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_4__["UserModelService"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }, {
        type: src_app_Services_userType_user_type_service__WEBPACK_IMPORTED_MODULE_5__["UserTypeService"]
      }];
    };

    LoginFromComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-login-from",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login-from.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login-from/login-from.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login-from.component.scss */
      "./src/app/login/login-from/login-from.component.scss"))["default"]]
    })], LoginFromComponent);
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_from_login_from_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-from/login-from.component */
    "./src/app/login/login-from/login-from.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_authGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/authGuard */
    "./src/app/auth/authGuard.ts");

    var routes = [{
      path: '',
      component: _login_from_login_from_component__WEBPACK_IMPORTED_MODULE_3__["LoginFromComponent"]
    }, {
      path: 'managmenet',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ../tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_auth_authGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_from_login_from_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-from/login-from.component */
    "./src/app/login/login-from/login-from.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_from_login_from_component__WEBPACK_IMPORTED_MODULE_4__["LoginFromComponent"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map