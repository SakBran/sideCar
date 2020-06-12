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


    __webpack_exports__["default"] = "<ion-toolbar color=\"secondary\">\n  <ion-title>\n    <center>Sidecar Delivery Login </center>\n  </ion-title>\n</ion-toolbar>\n<ion-content color=\"light\" padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          \n            <div padding>\n              <ion-card >\n                <ion-item >\n                  <ion-avatar slot=\"start\">\n                    <img src='/../assets/person.svg'>\n                  </ion-avatar>\n                  <ion-label>\n                    <ion-input name=\"email\" type=\"email\"  placeholder=\"Username\" ngModel required></ion-input>\n                  </ion-label>\n                </ion-item>\n              </ion-card>\n\n              <ion-card >\n                <ion-item >\n                  <ion-avatar slot=\"start\">\n                    <img src='/../assets/key.svg'>\n                  </ion-avatar>\n                  <ion-label>\n                    <ion-input name=\"Password\" type=\"{{this.passwordVisibility}}\"  placeholder=\"Password\" ngModel required></ion-input>\n                  </ion-label>\n                  <ion-button (click)=\"passVisible()\" color=\"secondary\" >\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </ion-card>\n             \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-button (click)=\"onClick()\" expand=\"block\" color=\"danger\">\n              Cancel\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button (click)=\"onClick()\" expand=\"block\" color=\"primary\">\n              Login\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-toolbar color=\"secondary\">\n  <center>\n    <p>© Sidecar Delivery Co., Ltd. 2020.<br/> All Rights Reserved. ™ by <a target=\"_blank\" href=\"https://sakbran.github.io\">Sak Bran</a></p>\n  </center>\n  \n</ion-toolbar>";
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLWZyb20vbG9naW4tZnJvbS5jb21wb25lbnQuc2NzcyJ9 */";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginFromComponent = /*#__PURE__*/function () {
      function LoginFromComponent(router) {
        _classCallCheck(this, LoginFromComponent);

        this.router = router;
        this.passwordVisibility = 'password';
      }

      _createClass(LoginFromComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "passVisible",
        value: function passVisible() {
          if (this.passwordVisibility === 'password') {
            this.passwordVisibility = 'text';
          } else {
            this.passwordVisibility = 'password';
          }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigateByUrl('/tabs');
        }
      }]);

      return LoginFromComponent;
    }();

    LoginFromComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginFromComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-from',
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
      path: '',
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

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map