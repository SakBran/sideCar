function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/admin/admin.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/admin/admin.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\" color=\"secondary\">\r\n    <ion-tab-button (click)=\"onClick()\" tab=\"tab1\">\r\n      <ion-icon (click)=\"onClick()\" name=\"reader-outline\"></ion-icon>\r\n      <ion-label (click)=\"onClick()\" >Menu</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"navigateTab2()\"tab=\"tab2\">\r\n      <ion-icon (click)=\"navigateTab2()\" name=\"print-outline\"></ion-icon>\r\n      <ion-label (click)=\"navigateTab2()\" >Invoice</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon name=\"file-tray-full-outline\"></ion-icon>\r\n      <ion-label>Configurations</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"this.appSetting.logout()\" routerLink=\"\" >\r\n      <ion-icon name=\"log-out-outline\"></ion-icon>\r\n      <ion-label>Logout</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/delivery/delivery.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/delivery/delivery.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsDeliveryDeliveryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon name=\"reader-outline\"></ion-icon>\r\n      <ion-label>Tasks</ion-label>\r\n    </ion-tab-button>\r\n\r\n   <ion-tab-button tab=\"tab2\">\r\n      <ion-icon name=\"trophy-outline\"></ion-icon>\r\n      <ion-label>Today</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon name=\"server-outline\"></ion-icon>\r\n      <ion-label>Records</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"this.appSetting.logout()\" routerLink=\"\" >\r\n      <ion-icon name=\"log-out-outline\"></ion-icon>\r\n      <ion-label>Logout</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/resturant/resturant.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/resturant/resturant.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsResturantResturantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\" color=\"secondary\">\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon name=\"reader-outline\"></ion-icon>\r\n      <ion-label>Order</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <ion-icon name=\"print-outline\"></ion-icon>\r\n      <ion-label>Complete</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon name=\"file-tray-full-outline\"></ion-icon>\r\n      <ion-label>Configurations</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"this.appSetting.logout()\" routerLink=\"\" >\r\n      <ion-icon name=\"log-out-outline\"></ion-icon>\r\n      <ion-label>Logout</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <app-admin *ngIf=\"this.appsetting.loginType==='admin'\"></app-admin>\r\n\r\n  <app-delivery *ngIf=\"this.appsetting.loginType==='rider'\"></app-delivery>\r\n\r\n  <app-resturant *ngIf=\"this.appsetting.loginType==='resturant'\"></app-resturant>\r\n";
    /***/
  },

  /***/
  "./src/app/tabs/admin/admin.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/tabs/admin/admin.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/admin/admin.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/tabs/admin/admin.component.ts ***!
    \***********************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppTabsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(router, appSetting) {
        _classCallCheck(this, AdminComponent);

        this.router = router;
        this.appSetting = appSetting;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigateByUrl("/tabs/tab1");
        }
      }, {
        key: "navigateTab2",
        value: function navigateTab2() {
          this.router.navigateByUrl("/tabs/tab2");
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-admin",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/admin/admin.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/tabs/admin/admin.component.scss"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/tabs/delivery/delivery.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/tabs/delivery/delivery.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsDeliveryDeliveryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGVsaXZlcnkvZGVsaXZlcnkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/delivery/delivery.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/tabs/delivery/delivery.component.ts ***!
    \*****************************************************/

  /*! exports provided: DeliveryComponent */

  /***/
  function srcAppTabsDeliveryDeliveryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function () {
      return DeliveryComponent;
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


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");

    var DeliveryComponent = /*#__PURE__*/function () {
      function DeliveryComponent(appSetting) {
        _classCallCheck(this, DeliveryComponent);

        this.appSetting = appSetting;
      }

      _createClass(DeliveryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeliveryComponent;
    }();

    DeliveryComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }];
    };

    DeliveryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delivery',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./delivery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/delivery/delivery.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./delivery.component.scss */
      "./src/app/tabs/delivery/delivery.component.scss"))["default"]]
    })], DeliveryComponent);
    /***/
  },

  /***/
  "./src/app/tabs/resturant/resturant.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/tabs/resturant/resturant.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsResturantResturantComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvcmVzdHVyYW50L3Jlc3R1cmFudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tabs/resturant/resturant.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/tabs/resturant/resturant.component.ts ***!
    \*******************************************************/

  /*! exports provided: ResturantComponent */

  /***/
  function srcAppTabsResturantResturantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResturantComponent", function () {
      return ResturantComponent;
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


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");

    var ResturantComponent = /*#__PURE__*/function () {
      function ResturantComponent(appSetting) {
        _classCallCheck(this, ResturantComponent);

        this.appSetting = appSetting;
      }

      _createClass(ResturantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResturantComponent;
    }();

    ResturantComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }];
    };

    ResturantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resturant',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resturant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/resturant/resturant.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resturant.component.scss */
      "./src/app/tabs/resturant/resturant.component.scss"))["default"]]
    })], ResturantComponent);
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'tab1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab1-tab1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
          /*! ../tab1/tab1.module */
          "./src/app/tab1/tab1.module.ts")).then(function (m) {
            return m.Tab1PageModule;
          });
        }
      }, {
        path: 'tab2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab2-tab2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
          /*! ../tab2/tab2.module */
          "./src/app/tab2/tab2.module.ts")).then(function (m) {
            return m.Tab2PageModule;
          });
        }
      }, {
        path: 'tab3',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab3-tab3-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
          /*! ../tab3/tab3.module */
          "./src/app/tab3/tab3.module.ts")).then(function (m) {
            return m.Tab3PageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/tab1',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _resturant_resturant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./resturant/resturant.component */
    "./src/app/tabs/resturant/resturant.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/tabs/admin/admin.component.ts");
    /* harmony import */


    var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./delivery/delivery.component */
    "./src/app/tabs/delivery/delivery.component.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _resturant_resturant_component__WEBPACK_IMPORTED_MODULE_7__["ResturantComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryComponent"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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


    var _app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-setting */
    "./src/app/app-setting.ts");

    var TabsPage = function TabsPage(appsetting) {
      _classCallCheck(this, TabsPage);

      this.appsetting = appsetting;
    };

    TabsPage.ctorParameters = function () {
      return [{
        type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }];
    };

    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    })], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map