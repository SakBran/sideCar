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


    __webpack_exports__["default"] = "<ion-toolbar class=\"dark\">\r\n  <!----- <ion-buttons slot=\"start\">\r\n    <ion-button (click)=\"login()\">\r\n      <ion-icon class=\"title\" name=\"person-circle-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>----->\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button  routerLink=\"/\">\r\n      <ion-icon class=\"title\" name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-button>\r\n\r\n  </ion-buttons>\r\n\r\n  <ion-title slot=\"end\">Sidecar Delivery</ion-title>\r\n \r\n</ion-toolbar>\r\n\r\n<ion-content color=\"light\">\r\n  <!-----\r\n    <div class=\"center\">\r\n      <ion-card class=\"loginCard\">\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row color=\"secondary\" justify-content-center>\r\n              <ion-col>\r\n                <div padding>\r\n                  <ion-card>\r\n                    <ion-item>\r\n                      <ion-avatar slot=\"start\">\r\n                        <img\r\n                          class=\"icon\"\r\n                          src=\"/../assets/person-circle-outline.svg\"\r\n                        />\r\n                      </ion-avatar>\r\n                      <ion-label>\r\n                        <ion-input\r\n                          id=\"user\"\r\n                          type=\"text\"\r\n                          [(ngModel)]=\"this.username\"\r\n                          placeholder=\"Username\"\r\n                        ></ion-input>\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </ion-card>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n                <div padding>\r\n                  <ion-card>\r\n                    <ion-item>\r\n                      <ion-avatar slot=\"start\">\r\n                        <img class=\"icon\" src=\"/../assets/key-outline.svg\" />\r\n                      </ion-avatar>\r\n                      <ion-label>\r\n                        <ion-input\r\n                          [(ngModel)]=\"this.password\"\r\n                          [type]=\"this.passwordVisibility\"\r\n                          placeholder=\"Password\"\r\n                     \r\n                        >\r\n                        </ion-input>\r\n                      </ion-label>\r\n                    </ion-item>\r\n\r\n                    <ion-button\r\n                      expand=\"block\"\r\n                      (click)=\"passVisible()\"\r\n                      color=\"light\"\r\n                    >\r\n                      <ion-icon\r\n                        *ngIf=\"this.passwordVisibility === 'password'\"\r\n                        name=\"eye-outline\"\r\n                      ></ion-icon>\r\n                      <ion-icon\r\n                        *ngIf=\"this.passwordVisibility === 'text'\"\r\n                        name=\"eye-off-outline\"\r\n                      ></ion-icon>\r\n                    </ion-button>\r\n                  </ion-card>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-button routerLink=\"\" expand=\"block\" color=\"secondary\">\r\n                  Cancel\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-button (click)=\"onClick()\" expand=\"block\" color=\"secondary\">\r\n                  Login\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n------>\r\n  <div class=\"center\">\r\n    \r\n    <ion-card class=\"loginCard\">\r\n      <ion-card-content>\r\n        <ion-toolbar>\r\n          <ion-text><h2>Login Box!</h2></ion-text>\r\n        </ion-toolbar>\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"person-outline\"></ion-icon></ion-label>\r\n          <ion-input [(ngModel)]=\"this.username\" type=\"text\" placeholder=\"Username\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"lock-open-outline\"></ion-icon></ion-label>\r\n          <ion-input [(ngModel)]=\"this.password\" type=\"password\" placeholder=\"Password\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-button (click)=\"onClick()\" expand=\"block\" class=\"dark\">\r\n          Login\r\n        </ion-button>\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "img.icon {\n  border-radius: 0px;\n  max-width: 20px;\n  max-height: 20px;\n}\n\nion-card.loginCard {\n  text-align: center;\n  --background-color:212224 ;\n}\n\nion-title, ion-icon.title {\n  color: #ffe400 !important;\n}\n\nion-button, ion-toolbar.dark {\n  --background:#212224;\n}\n\ndiv.center {\n  text-align: center;\n  padding-top: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: url('desktop.jpg');\n  height: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  div.center {\n    text-align: center;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-image: url('mobile.jpg');\n    height: 100%;\n  }\n}\n\nion-img.icon {\n  max-width: 30px;\n  max-height: 30px;\n  background-color: white;\n  border-radius: 25px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4tZnJvbS9EOlxcc2lkZUNhci9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLWZyb21cXGxvZ2luLWZyb20uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLWZyb20vbG9naW4tZnJvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREdBO0VBQ0ksb0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFDcEMsb0NBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFFSTtJQUVJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQWUsbUJBQUE7SUFBcUIsdUJBQUE7SUFDcEMsbUNBQUE7SUFDQSxZQUFBO0VDRU47QUFDRjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi1mcm9tL2xvZ2luLWZyb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaWNvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIG1heC13aWR0aDogMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLmxvZ2luQ2FyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjoyMTIyMjQgO1xyXG59XHJcblxyXG5pb24tdGl0bGUsaW9uLWljb24udGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZTQwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbixpb24tdG9vbGJhci5kYXJre1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMyMTIyMjQ7XHJcbn1cclxuXHJcbmRpdi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9kZXNrdG9wLmpwZ1wiKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAgIGRpdi5jZW50ZXJ7XHJcbiAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21vYmlsZS5qcGdcIik7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaW9uLWltZy5pY29ue1xyXG4gICAgbWF4LXdpZHRoOiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4iLCJpbWcuaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWF4LXdpZHRoOiAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tY2FyZC5sb2dpbkNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjoyMTIyMjQgO1xufVxuXG5pb24tdGl0bGUsIGlvbi1pY29uLnRpdGxlIHtcbiAgY29sb3I6ICNmZmU0MDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiwgaW9uLXRvb2xiYXIuZGFyayB7XG4gIC0tYmFja2dyb3VuZDojMjEyMjI0O1xufVxuXG5kaXYuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZGVza3RvcC5qcGdcIik7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBkaXYuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbW9iaWxlLmpwZ1wiKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbmlvbi1pbWcuaWNvbiB7XG4gIG1heC13aWR0aDogMzBweDtcbiAgbWF4LWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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
          var _this = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this.userData.latitude = position.coords.latitude.toString();
              _this.userData.longitude = position.coords.longitude.toString();

              _this.userService.putLocation(_this.userData);
            });
          }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          var _this2 = this;

          this.appSetting.showLoading();
          this.userService.getLogin(this.username, this.password).subscribe(function (x) {
            _this2.appSetting.sessionUserID = x.id;
            _this2.userData = x;
          }, function (err) {
            return _this2.appSetting.loginFail();
          }, function () {
            if (_this2.appSetting.sessionUserID === 0) {
              _this2.appSetting.loginFail();
            } else {
              _this2.userTypeService.getSingle(_this2.userData.usertype).subscribe(function (y) {
                _this2.appSetting.loginType = y.usertypeName.toLocaleLowerCase();
              }, function (err) {
                return _this2.appSetting.showError(err);
              }, function () {
                if (_this2.appSetting.loginType === "resturant") {
                  _this2.appSetting.resturantID = _this2.appSetting.sessionUserID;
                }

                if (_this2.appSetting.loginType === "rider") {
                  setInterval(function () {
                    //this.locationUpdate();
                    _this2.locationUpdate();
                  }, 10000);
                }

                _this2.router.navigateByUrl("/managmenet");
              });
            }

            _this2.appSetting.loginSuccess();
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_from_login_from_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-from/login-from.component */
    "./src/app/login/login-from/login-from.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

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