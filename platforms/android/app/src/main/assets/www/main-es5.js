function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  auth works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/client-info/client-info.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/client-info/client-info.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeClientInfoClientInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Delivery Information</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>Your Information</ion-label>\n      </ion-item-divider>\n\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input\n          type=\"text\"\n          [(ngModel)]=\"this.appSetting.orderData.clientName\"\n          placeholder=\"eg:U Mg Mg\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Phone</ion-label>\n        <ion-input\n          type=\"tel\"\n          [(ngModel)]=\"this.appSetting.orderData.clitentPhone\"\n          placeholder=\"eg:09XXXXXXX\"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item-divider>\n        <ion-label>Address</ion-label>\n      </ion-item-divider>\n\n      <ion-item>\n        <ion-label position=\"floating\">Township</ion-label>\n        <ion-select \n          [(ngModel)]=\"this.appSetting.orderData.Township_id\"\n          (ngModelChange)=\"deliverChange($event)\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of this.location; let i = index\"\n            [value]=\"item\"\n          >\n            {{ i + 1 }}.{{ item }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Flat No</ion-label>\n        <ion-input\n          type=\"text\"\n          [(ngModel)]=\"this.appSetting.orderData.clitentFlatNo\"\n          placeholder=\"eg:2104\"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Address</ion-label>\n        <ion-input\n          type=\"text\"\n          [(ngModel)]=\"this.appSetting.orderData.clientAddress\"\n          placeholder=\"eg:Nay Pyi Taw,XXXX\"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item-divider>\n        <ion-label>Delivery Date & Time</ion-label>\n      </ion-item-divider>\n\n      <ion-item>\n        <ion-label position=\"floating\">Date for Delivery</ion-label>\n        <ion-datetime\n          ionCancel\n          [(ngModel)]=\"this.appSetting.orderData.deliveryDate\"\n        ></ion-datetime>\n        <ion-label position=\"floating\">Time for Delivery</ion-label>\n        <ion-datetime\n          [(ngModel)]=\"this.appSetting.orderData.deliveryDate\"\n          display-format=\"h:mm A\"\n          picker-format=\"h:mm A\"\n          value=\"1990-02-19T07:43Z\"\n        ></ion-datetime>\n      </ion-item>\n\n      <ion-item-divider>\n        <ion-label>Delivery Charges</ion-label>\n      </ion-item-divider>\n\n      <ion-item>\n        <ion-label>Estimate!</ion-label>\n        <p *ngIf=\"this.appSetting.orderData.Township_id!==0\" >{{ this.appSetting.orderData.deliveryCharegs }}</p>\n        <p *ngIf=\"this.appSetting.orderData.Township_id===0\">........</p>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <ion-button (click)=\"submitOrder()\" expand=\"block\" color=\"primary\" shape=\"round\">\n    Submit Order\n  </ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/client-invoice/client-invoice.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/client-invoice/client-invoice.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeClientInvoiceClientInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Invoice</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item-divider>\n      <ion-label color=\"medium\">\n        <h2>Search</h2>\n      </ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>\n        Invoice No:\n      </ion-label>\n      <ion-input\n        [(ngModel)]=\"this.invoiceNo\"\n        type=\"number\"\n        placeholder=\"eg:Oxxxxxxx\"\n      ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        Phone No :\n      </ion-label>\n      <ion-input\n        [(ngModel)]=\"this.phoneNo\"\n        type=\"tel\"\n        placeholder=\"eg:09xxxxxxx\"\n      ></ion-input>\n      <ion-button (click)=\"search()\" size=\"small\" shape=\"round\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n    <ion-progress-bar\n      *ngIf=\"this.loading === 1\"\n      type=\"indeterminate\"\n    ></ion-progress-bar>\n    <ng-container *ngIf=\"checkUndefined(this.data)===false\">\n      <ion-item-divider>\n        <ion-label color=\"medium\">\n          <h2>Informations</h2>\n        </ion-label>\n      </ion-item-divider>\n      <ion-item *ngFor=\"let item of this.data.orderDetailModels; let i = index\">\n        <ion-avatar slot=\"start\">\n          <ion-img\n            [src]=\"\n              this.appSetting.apiAddress +\n              '/images/Image' +\n              item.itemID +\n              '.jpg'\n            \"\n          ></ion-img>\n        </ion-avatar>\n        <ion-label>\n          <h2>\n            {{ this.appSetting.itemJoin(item.itemID).itemName }} |\n            {{ this.appSetting.itemJoin(item.itemID).resturant }}\n          </h2>\n          <p>\n            <ion-buttons slot=\"end\">\n              <ion-button disabled *ngIf=\"item.itemQty > 1\">\n                <ion-icon name=\"remove-circle-outline\"></ion-icon>\n              </ion-button>\n\n              <ion-button disabled *ngIf=\"item.itemQty === 1\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-button>\n              <p>{{ item.itemQty }}</p>\n              <ion-button disabled>\n                <ion-icon name=\"add-circle-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </p>\n        </ion-label>\n        <p>{{ item.itemFinalPrice }}</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <h2>Total</h2>\n        </ion-label>\n        <p>{{ displayTotal }}</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Tax</h2>\n        </ion-label>\n        <p>{{ displayTotal * 0.05 }}</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Grand Total</h2>\n        </ion-label>\n        <p>{{ displayTotal + displayTotal * 0.05 }}</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <h2>Status</h2>\n        </ion-label>\n        <p>{{this.status}}</p>\n      </ion-item>\n      <ion-button *ngIf=\"this.status==='delivering'\"  (click)=\"showMap()\" expand=\"block\" color=\"primary\" shape=\"round\">\n        Track Your Order Location\n      </ion-button>\n    </ng-container>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/client-shopcart/client-shopcart.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/client-shopcart/client-shopcart.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeClientShopcartClientShopcartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Goods Informations</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item\n      *ngFor=\"let item of this.appSetting.orderDetailViewList; let i = index\"\n    >\n      <ion-avatar slot=\"start\">\n        <ion-img\n          [src]=\"\n            this.appSetting.apiAddress +\n            '/images/Image' +\n            item.orderDetialModel.itemID +\n            '.jpg'\n          \"\n        ></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ item.itemName }} | {{ item.resturantName }}</h2>\n        <p>\n          <ion-buttons slot=\"end\">\n            <ion-button\n              *ngIf=\"item.orderDetialModel.itemQty > 1\"\n              (click)=\"count(i + 1, 'minus')\"\n            >\n              <ion-icon name=\"remove-circle-outline\"></ion-icon>\n            </ion-button>\n\n            <ion-button\n              *ngIf=\"item.orderDetialModel.itemQty === 1\"\n              (click)=\"delete(i)\"\n            >\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-button>\n            <p>{{ item.orderDetialModel.itemQty }}</p>\n            <ion-button (click)=\"count(i + 1, 'add')\">\n              <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </p>\n      </ion-label>\n      <p>{{ item.orderDetialModel.itemFinalPrice }}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <h2>Total</h2>\n      </ion-label>\n      <p>{{ total() }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Tax</h2>\n      </ion-label>\n      <p>{{ total()*0.05 }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Grand Total</h2>\n      </ion-label>\n      <p>{{ total()+(total()*0.05) }}</p>\n    </ion-item>\n  </ion-list>\n  <ion-button *ngIf=\"this.appSetting.orderDetailViewList.length>0\"  (click)=\"clientInfo()\" expand=\"block\" color=\"primary\" shape=\"round\">\n    Order Now\n  </ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-item-detail/home-item-detail.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-item-detail/home-item-detail.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeItemDetailHomeItemDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Detail</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar\n    *ngIf=\"!this.foodList\"\n    type=\"indeterminate\"\n  ></ion-progress-bar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list>\n    \n        <ion-slides   mode=\"ios\" pager=\"ios\"  scrollbar=\"ios\">\n          <ion-slide *ngFor=\"let item of this.foodList\">\n            <ion-card >\n              <img\n                class=\"center\"\n                src=\"{{\n                  this.appSetting.apiAddress + '/images/Image' + item.id + '.jpg'\n                }}\"\n              />\n              <ion-card-header>\n                <ion-card-title>{{item.itemName}}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,\n                Madison was named the capital of the Wisconsin Territory in 1836.\n              </ion-card-content>\n              \n              <ion-toolbar>\n                <ion-item lines=\"none\">\n                  <ion-label>Select</ion-label>\n                  <ion-checkbox  (click)=\"changeModel(item.id)\"slot=\"end\" *ngIf='this.selectedCard===item.id' checked=\"true\" ></ion-checkbox>\n                  <ion-checkbox  (click)=\"changeModel(item.id)\" slot=\"end\" *ngIf='this.selectedCard!==item.id'  ></ion-checkbox>\n                </ion-item>\n              </ion-toolbar>\n              \n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n    \n    <ion-item>\n      <ion-label *ngIf=\"foodData.id!==0\" >\n        <h2>{{ foodData.itemName }}</h2>\n        <h2>{{ this.appSetting.resName(foodData.resturant_id) }}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Descriptions</h2>\n      </ion-label>\n      <p>{{ foodData.Descriptions }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Price</h2>\n      </ion-label>\n      <p>{{ foodData.price }}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <h2>Remark</h2>\n      </ion-label>\n      <ion-input\n        type=\"text\"\n        [(ngModel)]=\"this.orderDetail.remark\"\n        placeholder=\"Some instructions...\"\n      ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Quantity</h2>\n      </ion-label>\n      <p>\n        <ion-buttons slot=\"end\">\n          <ion-button\n            *ngIf=\"this.orderDetail.itemQty > 1\"\n            (click)=\"count('minus')\"\n          >\n            <ion-icon name=\"remove-circle-outline\"></ion-icon>\n          </ion-button>\n          <p>{{ this.orderDetail.itemQty }}</p>\n          <ion-button (click)=\"count('add')\">\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </p>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Total</h2>\n      </ion-label>\n      <p>{{ this.orderDetail.itemFinalPrice }}</p>\n    </ion-item>\n\n    <ion-button\n      (click)=\"AddtoCart()\"\n      expand=\"block\"\n      color=\"primary\"\n      shape=\"round\"\n    >\n      Add to Shopcart\n    </ion-button>\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-items/home-items.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-items/home-items.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeItemsHomeItemsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar color=\"light\">\r\n\r\n    <ion-chip\r\n      outline\r\n      (click)=\"resturantChoose()\"\r\n      color=\"tertiary\"\r\n      slot=\"end\"\r\n      interface=\"action-sheet\"\r\n    >\r\n      <ion-icon name=\"restaurant\"></ion-icon>\r\n      <ion-label>Resturant</ion-label>\r\n      \r\n    </ion-chip>\r\n    <ion-select\r\n      class=\"none\"\r\n      id=\"select\"\r\n      value=\"notifications\"\r\n      interface=\"action-sheet\"\r\n      [(ngModel)]=\"searchResturant\"\r\n      (ngModelChange)=\"Filter($event)\"\r\n    >\r\n      <ion-select-option\r\n        *ngFor=\"let item of this.appSetting.resturandDataList\"\r\n        [value]=\"item.id\"\r\n        >{{ item.shopname }}</ion-select-option\r\n      >\r\n    </ion-select>\r\n    <ion-chip slot=\"end\" (click)=\"categoryChoose()\" outline color=\"tertiary\">\r\n      <ion-icon name=\"fast-food-outline\"></ion-icon>\r\n      <ion-label>Foods</ion-label>\r\n      \r\n    </ion-chip>\r\n    <ion-select\r\n      class=\"none\"\r\n      id=\"selectCategory\"\r\n      value=\"notifications\"\r\n      interface=\"action-sheet\"\r\n      [(ngModel)]=\"searchCategory\"\r\n      (ngModelChange)=\"FilterCategory($event)\"\r\n    >\r\n      <ion-select-option\r\n        *ngFor=\"let item of this.appSetting.categoryList\"\r\n        [value]=\"item.id\"\r\n        >{{ item.categoryName }}</ion-select-option\r\n      >\r\n    </ion-select>\r\n    <ion-chip slot=\"end\" (click)=\"refresh()\" outline color=\"tertiary\">\r\n      <ion-icon name=\"fast-food-outline\"></ion-icon>\r\n      <ion-label>Refresh</ion-label>\r\n      \r\n    </ion-chip>\r\n \r\n</ion-toolbar>\r\n<ion-toolbar color=\"light\">\r\n  <ion-searchbar\r\n    id='searchBar'\r\n    [(ngModel)]=\"this.appSetting.customerSearch\"\r\n    autofocus=\"true\"\r\n    (ngModelChange)=\"onSearch($event)\"\r\n  ></ion-searchbar>\r\n</ion-toolbar>\r\n\r\n<ion-grid>\r\n  <ion-row *ngIf=\"this.appSetting.mainItemDataList.length !== 0\">\r\n    <ion-col\r\n      *ngFor=\"let item of this.appSetting.mainItemDataList\"\r\n      size=\"{{ this.appSetting.device }}\"\r\n    >\r\n      <div class=\"center\">\r\n        <ion-card button (click)=\"cardClick(item.id)\">\r\n          <img\r\n            class=\"center\"\r\n            src=\"{{\r\n              this.appSetting.apiAddress + '/images/MainImage' + item.id + '.jpg'\r\n            }}\"\r\n          />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>\r\n              {{\r\n                this.appSetting.resName(item.resturant_id)\r\n              }}</ion-card-subtitle\r\n            >\r\n            <ion-card-title>{{ item.name }}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n        <!-----   {{ this.appSetting.resName(item.resturant_id) }}---->\r\n        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,\r\n        Madison was named the capital of the Wisconsin Territory in 1836.\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"this.appSetting.mainItemDataList.length === 0\">\r\n    <ion-col size=\"{{ this.appSetting.device }}\">\r\n      <div>\r\n        <ion-card button (click)=\"cardClick('cardID')\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-card-header>\r\n            <ion-card-subtitle\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-subtitle>\r\n            <ion-card-title\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-skeleton-text animated></ion-skeleton-text><br />\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"{{ this.appSetting.device }}\">\r\n      <div>\r\n        <ion-card button (click)=\"cardClick('cardID')\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-card-header>\r\n            <ion-card-subtitle\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-subtitle>\r\n            <ion-card-title\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-skeleton-text animated></ion-skeleton-text><br />\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"{{ this.appSetting.device }}\">\r\n      <div>\r\n        <ion-card button (click)=\"cardClick('cardID')\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-card-header>\r\n            <ion-card-subtitle\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-subtitle>\r\n            <ion-card-title\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-skeleton-text animated></ion-skeleton-text><br />\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"{{ this.appSetting.device }}\">\r\n      <div>\r\n        <ion-card button (click)=\"cardClick('cardID')\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-card-header>\r\n            <ion-card-subtitle\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-subtitle>\r\n            <ion-card-title\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-skeleton-text animated></ion-skeleton-text><br />\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"{{ this.appSetting.device }}\">\r\n      <div>\r\n        <ion-card button (click)=\"cardClick('cardID')\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-card-header>\r\n            <ion-card-subtitle\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-subtitle>\r\n            <ion-card-title\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-skeleton-text animated></ion-skeleton-text><br />\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"{{ this.appSetting.device }}\">\r\n      <div>\r\n        <ion-card button (click)=\"cardClick('cardID')\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-card-header>\r\n            <ion-card-subtitle\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-subtitle>\r\n            <ion-card-title\r\n              ><ion-skeleton-text animated></ion-skeleton-text\r\n            ></ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-skeleton-text animated></ion-skeleton-text><br />\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-page/home-page.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-page/home-page.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar class=\"dark\">\n  <ion-buttons slot=\"end\">\n    <ion-button routerLink=\"/login\">\n      <ion-icon class=\"title\" name=\"person-circle-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button (click)=\"invoice()\">\n      <ion-icon class=\"title\" name=\"file-tray-full-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button (click)=\"shopCart()\">\n      <ion-badge\n        *ngIf=\"this.appSetting.orderDetailViewList.length > 0\"\n        color=\"warning\"\n        slot=\"end\"\n        >{{ this.appSetting.orderDetailViewList.length }}</ion-badge\n      >\n      <ion-icon class=\"title\" name=\"basket-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-img\n    slot=\"start\"\n    class=\"icon\"\n    src=\"/../assets/icon/favicon.png\"\n  ></ion-img>\n  <ion-title class=\"title\"> Sidecar </ion-title>\n</ion-toolbar>\n<ion-progress-bar  *ngIf=\"!this.appSetting.menuFoodDataList\" type=\"indeterminate\"></ion-progress-bar>\n\n<ion-content>\n  <app-home-items *ngIf=\"this.appSetting.categoryList&&this.appSetting.menuFoodDataList&&this.appSetting.resturandDataList\" ></app-home-items>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Models/foodModel.ts":
  /*!*************************************!*\
    !*** ./src/app/Models/foodModel.ts ***!
    \*************************************/

  /*! exports provided: foodModel */

  /***/
  function srcAppModelsFoodModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "foodModel", function () {
      return foodModel;
    });

    var foodModel = function foodModel() {
      _classCallCheck(this, foodModel);
    };
    /***/

  },

  /***/
  "./src/app/Models/mainModel.ts":
  /*!*************************************!*\
    !*** ./src/app/Models/mainModel.ts ***!
    \*************************************/

  /*! exports provided: mainModel */

  /***/
  function srcAppModelsMainModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mainModel", function () {
      return mainModel;
    });

    var mainModel = function mainModel() {
      _classCallCheck(this, mainModel);
    };
    /***/

  },

  /***/
  "./src/app/Models/orderTransationModel.ts":
  /*!************************************************!*\
    !*** ./src/app/Models/orderTransationModel.ts ***!
    \************************************************/

  /*! exports provided: orderTransationModel */

  /***/
  function srcAppModelsOrderTransationModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "orderTransationModel", function () {
      return orderTransationModel;
    });

    var orderTransationModel = function orderTransationModel() {
      _classCallCheck(this, orderTransationModel);
    };
    /***/

  },

  /***/
  "./src/app/Services/category/category.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Services/category/category.service.ts ***!
    \*******************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http, appSetting) {
        _classCallCheck(this, CategoryService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/apiCategoryModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(CategoryService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url);
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
        key: "delete",
        value: function _delete(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {}
          });
          xhr.open("DELETE", this.url + "/" + id);
          xhr.send(data);
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/Services/food/food.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Services/food/food.service.ts ***!
    \***********************************************/

  /*! exports provided: FoodService */

  /***/
  function srcAppServicesFoodFoodServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodService", function () {
      return FoodService;
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/foodModel */
    "./src/app/Models/foodModel.ts");
    /* harmony import */


    var _upload_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../upload/upload.service */
    "./src/app/Services/upload/upload.service.ts");

    var FoodService = /*#__PURE__*/function () {
      function FoodService(http, uploadService, appSetting) {
        _classCallCheck(this, FoodService);

        this.http = http;
        this.uploadService = uploadService;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/foodModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(FoodService, [{
        key: "get",
        value: function get(id) {
          return this.http.get(this.url + "/resturant?ResturantID=".concat(id));
        }
      }, {
        key: "getPending",
        value: function getPending() {
          return this.http.get(this.url + "/pending");
        }
      }, {
        key: "getActive",
        value: function getActive() {
          return this.http.get(this.url + "/active");
        }
      }, {
        key: "getSingle",
        value: function getSingle(id) {
          var searchUrl = "".concat(this.url, "/").concat(id);
          return this.http.get(searchUrl);
        }
      }, {
        key: "post",
        value: function post(data, imageData) {
          var _this3 = this;

          var temp = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            temp = Object.assign(res);

            _this3.uploadService.post(imageData, "Image" + temp.id);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var _this4 = this;

          var temp = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
          var searchUrl = "".concat(this.url, "/").concat(data.id);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function () {
            _this4.refreshArray(data.id, data);

            _this4.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this4.appSetting.showError(err);
          });
        }
      }, {
        key: "putConfirm",
        value: function putConfirm(id, result) {
          var _this5 = this;

          this.appSetting.showLoading();
          var searchUrl = "".concat(this.url, "/confirm?keyID=").concat(id, "&result=").concat(result);
          var data = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            _this5.refreshArray(id);

            _this5.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this5.appSetting.showError(err);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {}
          });
          xhr.open("DELETE", this.url + "/" + id);
          xhr.send(data);
          this.refreshArray(id);
        }
      }, {
        key: "refreshArray",
        value: function refreshArray(id, data) {
          var i = -1;
          this.appSetting.foodDataList.forEach(function (x) {
            i++;

            if (x.id === id) {
              x.status = "delete";
              console.log(data);

              try {
                if (data !== null || data !== undefined) {
                  x.itemName = data.itemName;
                  x.price = data.price;
                  x.itemNameTemp = data.itemNameTemp;
                  x.priceTemp = data.priceTemp;
                }
              } catch (ex) {
                console.log(JSON.stringify(ex));
              }
            }
          });
        }
      }]);

      return FoodService;
    }();

    FoodService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _upload_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    FoodService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], FoodService);
    /***/
  },

  /***/
  "./src/app/Services/location/location.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Services/location/location.service.ts ***!
    \*******************************************************/

  /*! exports provided: LocationService */

  /***/
  function srcAppServicesLocationLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var LocationService = /*#__PURE__*/function () {
      function LocationService(http, appSetting) {
        _classCallCheck(this, LocationService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/locationModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(LocationService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url);
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
          var _this6 = this;

          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            _this6.appSetting.showSuccess();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var _this7 = this;

          var searchUrl = "".concat(this.url, "/").concat(data.id);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            _this7.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this7.appSetting.showError(err);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {}
          });
          xhr.open("DELETE", this.url + "/" + id);
          xhr.send(data);
        }
      }]);

      return LocationService;
    }();

    LocationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], LocationService);
    /***/
  },

  /***/
  "./src/app/Services/mainModel/main-model.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Services/mainModel/main-model.service.ts ***!
    \**********************************************************/

  /*! exports provided: MainModelService */

  /***/
  function srcAppServicesMainModelMainModelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModelService", function () {
      return MainModelService;
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_Models_mainModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/mainModel */
    "./src/app/Models/mainModel.ts");
    /* harmony import */


    var _upload_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../upload/upload.service */
    "./src/app/Services/upload/upload.service.ts");

    var MainModelService = /*#__PURE__*/function () {
      function MainModelService(uploadService, http, appSetting) {
        _classCallCheck(this, MainModelService);

        this.uploadService = uploadService;
        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/mainModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(MainModelService, [{
        key: "get",
        value: function get() {
          return this.http.get("".concat(this.url));
        }
      }, {
        key: "getSingle",
        value: function getSingle(id) {
          var searchUrl = "".concat(this.url, "/").concat(id);
          return this.http.get(searchUrl);
        }
      }, {
        key: "post",
        value: function post(data, imageData) {
          var _this8 = this;

          var temp = new src_app_Models_mainModel__WEBPACK_IMPORTED_MODULE_4__["mainModel"]();
          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            temp = Object.assign(res);

            _this8.appSetting.mainItemDataList.push(temp);

            _this8.uploadService.post(imageData, "MainImage" + temp.id);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "put",
        value: function put(data, imageData) {
          var _this9 = this;

          var searchUrl = "".concat(this.url, "/").concat(data.id);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            var temp = _toConsumableArray(_this9.appSetting.mainItemDataList.filter(function (x) {
              return x.id !== data.id;
            }));

            temp.push(data);
            _this9.appSetting.mainItemDataList = _toConsumableArray(temp);

            _this9.uploadService.post(imageData, "MainImage" + data.id);
          }, function (err) {
            console.log(err);

            _this9.appSetting.showError(err);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {}
          });
          xhr.open("DELETE", this.url + "/" + id);
          xhr.send(data);

          var temp = _toConsumableArray(this.appSetting.mainItemDataList.filter(function (x) {
            return x.id !== data.id;
          }));

          this.appSetting.mainItemDataList = _toConsumableArray(temp);
        }
      }]);

      return MainModelService;
    }();

    MainModelService.ctorParameters = function () {
      return [{
        type: _upload_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    MainModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], MainModelService);
    /***/
  },

  /***/
  "./src/app/Services/order/order.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/Services/order/order.service.ts ***!
    \*************************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var OrderService = /*#__PURE__*/function () {
      function OrderService(modalCtrl, http, appSetting) {
        _classCallCheck(this, OrderService);

        this.modalCtrl = modalCtrl;
        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/orderModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(OrderService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url + "/" + this.appSetting.sessionUserID);
        }
      }, {
        key: "getInvoice",
        value: function getInvoice(orderID, clientPhone) {
          var searchUrl = "".concat(this.url, "/client/invoice?orderID=").concat(orderID, "&clientPhone=").concat(clientPhone);
          return this.http.get(searchUrl);
        }
      }, {
        key: "getResturantOrder",
        value: function getResturantOrder() {
          console.log(this.url + "/resturant/orderTracking?id=" + this.appSetting.resturantID);
          return this.http.get(this.url + "/resturant/orderTracking?id=" + this.appSetting.resturantID);
        }
      }, {
        key: "getResturantPendings",
        value: function getResturantPendings(id) {
          var searchUrl = "".concat(this.url, "/resturant/pendings?ResturantID=").concat(id);
          return this.http.get(searchUrl);
        }
      }, {
        key: "getResturantComplete",
        value: function getResturantComplete(id) {
          var searchUrl = "".concat(this.url, "/resturant/complete?ResturantID=").concat(id);
          return this.http.get(searchUrl);
        }
      }, {
        key: "getRiderComplete",
        value: function getRiderComplete() {
          var searchUrl = "".concat(this.url, "/rider/complete?id=").concat(this.appSetting.sessionUserID);
          return this.http.get(searchUrl);
        }
      }, {
        key: "getRiderPending",
        value: function getRiderPending() {
          var searchUrl = "".concat(this.url, "/rider/pending?id=").concat(this.appSetting.sessionUserID);
          return this.http.get(searchUrl);
        }
      }, {
        key: "post",
        value: function post(data) {
          var _this10 = this;

          data.orderModel.operatorID = this.appSetting.sessionUserID;
          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            _this10.appSetting.orderTransationClear();

            _this10.modalCtrl.dismiss({
              dismissed: true
            });

            _this10.appSetting.showSuccess();

            _this10.modalCtrl.dismiss({
              dismissed: true
            });
          }, function (err) {
            _this10.appSetting.showError(err);
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var _this11 = this;

          var searchUrl = "".concat(this.url, "/").concat(data.id);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            _this11.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this11.appSetting.showError(err);
          });
        }
      }, {
        key: "putOrderDetail",
        value: function putOrderDetail(data) {
          var _this12 = this;

          var searchUrl = "".concat(this.appSetting.apiAddress, "/api/orderDetailModels/").concat(data.orderDetailID);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            _this12.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this12.appSetting.showError(err);
          });
        }
      }, {
        key: "putResend_From_Resturant",
        value: function putResend_From_Resturant(orderID, data) {
          var _this13 = this;

          console.log(orderID, data); //const searchUrl = `${this.url}/resturant/resend?id=${orderID}&ResturantID=${this.appSetting.resturantID}`;

          var searchUrl = "".concat(this.url, "/resturant/resend?id=").concat(orderID, "&ResturantID=", 0);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            var i = -1;

            var temp = _toConsumableArray(_this13.appSetting.orderTransationList);

            var aClone = temp.filter(function (x) {
              if (x.orderModel.id === orderID) {
                x.orderDetailModels.forEach(function (y) {
                  y.status = "yes";
                });
                return x;
              }
            });
            _this13.appSetting.orderTransationList = _toConsumableArray(temp.filter(function (x) {
              return x.orderModel.id !== orderID;
            }));
            aClone.forEach(function (x) {
              _this13.appSetting.orderTransationList.push(x);
            });
            /*  temp.forEach((x) => {
                i = i + 1;
                if (x.orderModel.id === orderID) {
                  this.appSetting.orderTransationList.splice(i, 1);
                }
              });*/

            _this13.appSetting.showSuccess();

            _this13.appSetting.resendListFromResturant = [];
          }, function (err) {
            console.log(err);

            _this13.appSetting.showError(err);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {}
          });
          xhr.open("DELETE", this.url + "/" + id);
          xhr.send(data);
        }
      }, {
        key: "deleteOrderDetail",
        value: function deleteOrderDetail(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {}
          });
          xhr.open("DELETE", "".concat(this.appSetting.apiAddress, "/api/orderDetailModels/") + id);
          xhr.send(data);
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], OrderService);
    /***/
  },

  /***/
  "./src/app/Services/resturantModel/resturant-model.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Services/resturantModel/resturant-model.service.ts ***!
    \********************************************************************/

  /*! exports provided: ResturantModelService */

  /***/
  function srcAppServicesResturantModelResturantModelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResturantModelService", function () {
      return ResturantModelService;
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ResturantModelService = /*#__PURE__*/function () {
      function ResturantModelService(http, appSetting) {
        _classCallCheck(this, ResturantModelService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/resturantModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(ResturantModelService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url);
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
          var _this14 = this;

          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            _this14.appSetting.showSuccess();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var _this15 = this;

          var searchUrl = "".concat(this.url, "/").concat(data.id);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            _this15.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this15.appSetting.showError(err);
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

      return ResturantModelService;
    }();

    ResturantModelService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    ResturantModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ResturantModelService);
    /***/
  },

  /***/
  "./src/app/Services/upload/upload.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/Services/upload/upload.service.ts ***!
    \***************************************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppServicesUploadUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UploadService = /*#__PURE__*/function () {
      function UploadService(http, appSetting) {
        _classCallCheck(this, UploadService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/upload");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "multipart/form-data"
          })
        };
      }

      _createClass(UploadService, [{
        key: "post",
        value: function post(data, filename) {
          var _this16 = this;

          var Uploadurl = this.url + "?filename=".concat(filename);
          var formData = new FormData();
          var blob = this.dataURItoBlob(data);
          formData.append('file', blob, filename + ".jpg");

          if (formData !== null) {
            this.http.post(Uploadurl, formData).subscribe(function (x) {
              return console.log(x);
            }, function (err) {
              _this16.appSetting.showError(err);
            }, function () {
              _this16.appSetting.showSuccess();
            });
          }
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          // convert base64 to raw binary data held in a string
          // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
          var byteString = atob(dataURI.split(',')[1]); // separate out the mime component

          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

          var ab = new ArrayBuffer(byteString.length); // create a view into the buffer

          var ia = new Uint8Array(ab); // set the bytes of the buffer to the correct values

          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          } // write the ArrayBuffer to a blob, and you're done


          var blob = new Blob([ab], {
            type: mimeString
          });
          return blob;
        }
      }, {
        key: "b64toBlob",
        value: function b64toBlob(dataURI) {
          var byteString = atob(dataURI.split(",")[1]);
          var ab = new ArrayBuffer(byteString.length);
          var ia = new Uint8Array(ab);

          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          return new Blob([ab], {
            type: "image/jpeg"
          });
        }
      }]);

      return UploadService;
    }();

    UploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    UploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], UploadService);
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

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
          var _this17 = this;

          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            _this17.appSetting.showSuccess();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var _this18 = this;

          var searchUrl = "".concat(this.url, "/").concat(data.id);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            _this18.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this18.appSetting.showError(err);
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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _auth_authGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/authGuard */
    "./src/app/auth/authGuard.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'managmenet',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_auth_authGuard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app-setting.ts":
  /*!********************************!*\
    !*** ./src/app/app-setting.ts ***!
    \********************************/

  /*! exports provided: appSetting, itemRest */

  /***/
  function srcAppAppSettingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appSetting", function () {
      return appSetting;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "itemRest", function () {
      return itemRest;
    });
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

    var appSetting = /*#__PURE__*/function () {
      /**
       *
       */
      function appSetting() {
        _classCallCheck(this, appSetting);

        this.loginType = "";
        this.displaySetting = "pending";
        this.adminProcess = "";
        this.adminID = "";
        this.adminTab2Process = "";
        this.adminTab2ID = "";
        this.adminTab3Process = "";
        this.adminTab3ID = "";
        this.zone = [];
        this.device = "";
        this.customerSearch = ""; //public apiAddress = "http://localhost/sidecar";

        this.apiAddress = "https://www.myanmatrishaw.asia";
        this.userTypeData = [];
        this.resturantID = 0;
        this.sessionUserID = 0;
        this.detailID = 0;
        this.mainItemDataList = [];
        this.constmainItemDataList = [];
        this.foodDataList = [];
        this.menuFoodDataList = [];
        this.constFoodDataList = [];
        this.resturandDataList = [];
        this.categoryList = [];
        this.locationDataList = [];
        this.orderDetailList = [];
        this.orderDetailViewList = [];
        this.orderTransationList = [];
        this.resendListFromResturant = [];
        this.orderData = {
          id: 0,
          orderDate: new Date(Date.now()),
          deliveryDate: new Date(Date.now()),
          pickupDate: new Date(Date.now()),
          clientName: "",
          clitentPhone: "09-",
          clitentFlatNo: "",
          clientAddress: "",
          deliveryCharegs: 0,
          riderID: 0,
          Township_id: 0,
          riderEarning: 0,
          operatorID: this.sessionUserID,
          status: "pending",
          riderTakeOption: "all",
          longitude: "",
          latitude: ""
        };
      }

      _createClass(appSetting, [{
        key: "orderTransationClear",
        value: function orderTransationClear() {
          this.orderData = {
            id: 0,
            orderDate: new Date(Date.now()),
            deliveryDate: new Date(Date.now()),
            pickupDate: new Date(Date.now()),
            clientName: "",
            clitentPhone: "09-",
            clitentFlatNo: "",
            clientAddress: "",
            deliveryCharegs: 0,
            riderID: 0,
            Township_id: 0,
            riderEarning: 0,
            operatorID: this.sessionUserID,
            status: "pending",
            riderTakeOption: "all",
            longitude: "",
            latitude: ""
          };
          this.orderDetailList = [];
          this.orderDetailViewList = [];
        }
      }, {
        key: "showLoading",
        value: function showLoading() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: "System Message",
            html: "Please wait! System is processing..",
            confirmButtonText: "Done",
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
            }
          });
        }
      }, {
        key: "loginSuccess",
        value: function loginSuccess() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Success", "Login successful", "success");
        }
      }, {
        key: "loginFail",
        value: function loginFail() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Opps", "Failed to login", "warning");
        }
      }, {
        key: "showSuccess",
        value: function showSuccess() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Success", "Data has been saved successfully", "success");
        }
      }, {
        key: "showError",
        value: function showError(msg) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Error", JSON.stringify(msg), "error");
        }
      }, {
        key: "showInvalid",
        value: function showInvalid() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Invalid Data", "Please fill invalid data!", "info");
        }
      }, {
        key: "loadingClose",
        value: function loadingClose() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.close();
        }
      }, {
        key: "resName",
        value: function resName(id) {
          var res = "null";
          this.resturandDataList.forEach(function (x) {
            if (x.id === id) {
              res = x.shopname;
            }
          });
          return res;
        }
      }, {
        key: "resZone",
        value: function resZone(id) {
          var res = "null";
          this.resturandDataList.forEach(function (x) {
            if (x.id === id) {
              res = x.locationID.toString();
            }
          });
          return res;
        }
      }, {
        key: "resendBtn",
        value: function resendBtn(orderNo) {
          var result = true;

          var temp = _toConsumableArray(this.resendListFromResturant);

          temp.forEach(function (x) {
            if (x.orderNo === orderNo) {
              result = false;
            }
          });
          return result;
        }
      }, {
        key: "riderEarning",
        value: function riderEarning(amount) {
          return 0;
        }
      }, {
        key: "itemJoin",
        value: function itemJoin(id) {
          var _this19 = this;

          var i = {
            itemName: "",
            resturant: ""
          };

          var temp = _toConsumableArray(this.constFoodDataList);

          temp.forEach(function (x) {
            if (x.id === id) {
              i.itemName = x.itemName;
              i.resturant = _this19.resName(x.resturant_id);
            }
          });
          return i;
        }
      }, {
        key: "displayFunction",
        value: function displayFunction(x) {
          this.displaySetting = x;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginType = "";
          this.displaySetting = "pending";
          this.adminProcess = "";
          this.adminID = "";
          this.adminTab2Process = "";
          this.adminTab2ID = "";
          this.adminTab3Process = "";
          this.adminTab3ID = ""; // this.userTypeData = [];

          this.resturantID = 0;
          this.sessionUserID = 0;
          /*
          
              this.foodDataList = [];
              this.menuFoodDataList = [];
              this.constFoodDataList = [];
            
          
              this.locationDataList = [];
          
              this.orderDetailList = [];
              this.orderDetailViewList = [];
          
              this.orderTransationList = [];
              this.resendListFromResturant = [];
              this.orderData = {
                id: 0,
                orderDate: new Date(Date.now()),
                deliveryDate: new Date(Date.now()),
                pickupDate: new Date(Date.now()),
                clientName: "",
                clitentPhone: "09-",
                clitentFlatNo: "",
                clientAddress: "",
                deliveryCharegs: 0,
                riderID: 0,
                Township_id: 0,
                riderEarning: 0,
                operatorID: this.sessionUserID,
                status: "pending",
                riderTakeOption: "all",
                longitude:"",
                latitude:""
              };
              */
        }
      }, {
        key: "distanceCal",
        value: function distanceCal(lat1, lon1, lat2, lon2) {
          var R = 6371e3; // metres

          var φ1 = lat1 * Math.PI / 180; // φ, λ in radians

          var φ2 = lat2 * Math.PI / 180;
          var Δφ = (lat2 - lat1) * Math.PI / 180;
          var Δλ = (lon2 - lon1) * Math.PI / 180;
          var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // in metres

          var result = d;
          return result;
        }
      }]);

      return appSetting;
    }();

    var itemRest = function itemRest() {
      _classCallCheck(this, itemRest);
    };
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content,\nion-content {\n  padding-bottom: 0px !important;\n}\n\ninner-scroll scroll-y overscroll {\n  padding-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUdJLDhCQUFBO0FDQUo7O0FESUE7RUFDSSw4QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsXHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbmlubmVyLXNjcm9sbCBzY3JvbGwteSBvdmVyc2Nyb2xse1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuXHJcbiIsImlvbi1jb250ZW50LFxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlubmVyLXNjcm9sbCBzY3JvbGwteSBvdmVyc2Nyb2xsIHtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this20 = this;

          this.platform.ready().then(function () {
            _this20.statusBar.styleDefault();

            _this20.splashScreen.hide();
          });
        }
      }, {
        key: "interval",
        value: function interval() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_client_info_client_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/client-info/client-info.component */
    "./src/app/home/client-info/client-info.component.ts");
    /* harmony import */


    var _home_client_shopcart_client_shopcart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/client-shopcart/client-shopcart.component */
    "./src/app/home/client-shopcart/client-shopcart.component.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _home_client_invoice_client_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/client-invoice/client-invoice.component */
    "./src/app/home/client-invoice/client-invoice.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_setting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _auth_authGuard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./auth/authGuard */
    "./src/app/auth/authGuard.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _home_home_item_detail_home_item_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./home/home-item-detail/home-item-detail.component */
    "./src/app/home/home-item-detail/home-item-detail.component.ts");
    /* harmony import */


    var _home_home_items_home_items_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./home/home-items/home-items.component */
    "./src/app/home/home-items/home-items.component.ts");
    /* harmony import */


    var _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./home/home-page/home-page.component */
    "./src/app/home/home-page/home-page.component.ts");

    var entryPages = [_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_24__["HomePageComponent"], _home_home_item_detail_home_item_detail_component__WEBPACK_IMPORTED_MODULE_22__["HomeItemDetailComponent"], _home_home_items_home_items_component__WEBPACK_IMPORTED_MODULE_23__["HomeItemsComponent"], _home_client_info_client_info_component__WEBPACK_IMPORTED_MODULE_1__["ClientInfoComponent"], _home_client_shopcart_client_shopcart_component__WEBPACK_IMPORTED_MODULE_2__["ClientShopcartComponent"], _home_client_invoice_client_invoice_component__WEBPACK_IMPORTED_MODULE_4__["ClientInvoiceComponent"]];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_17__["AuthComponent"]],
      entryComponents: entryPages,
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__["ImageCropperModule"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production
      })],
      providers: [_app_setting__WEBPACK_IMPORTED_MODULE_15__["appSetting"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__["SplashScreen"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_17__["AuthComponent"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], _auth_authGuard__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.scss":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
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

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(router, appSetting) {
        _classCallCheck(this, AuthComponent);

        this.router = router;
        this.appSetting = appSetting;
      } // ...


      _createClass(AuthComponent, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = 'no';
          var result = false; //const token = localStorage.getItem('token');

          if (this.appSetting.loginType === '') {
            token = 'no';
            result = false;
          } else {
            token = 'yes';
            result = true;
          }

          if (token === '' || token === null || token === undefined) {
            result = false;
          } // Check whether the token is expired and return
          // true or false


          return result;
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-auth',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./auth.component.scss */
      "./src/app/auth/auth.component.scss"))["default"]]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/auth/authGuard.ts":
  /*!***********************************!*\
    !*** ./src/app/auth/authGuard.ts ***!
    \***********************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
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


    var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/auth/auth.component.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(auth, router, appSetting) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
        this.router = router;
        this.appSetting = appSetting;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isAuthenticated()) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/home/client-info/client-info.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/home/client-info/client-info.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeClientInfoClientInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2xpZW50LWluZm8vY2xpZW50LWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/client-info/client-info.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/home/client-info/client-info.component.ts ***!
    \***********************************************************/

  /*! exports provided: ClientInfoComponent */

  /***/
  function srcAppHomeClientInfoClientInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientInfoComponent", function () {
      return ClientInfoComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/order/order.service */
    "./src/app/Services/order/order.service.ts");

    var ClientInfoComponent = /*#__PURE__*/function () {
      function ClientInfoComponent(modalCtrl, appSetting, orderService) {
        _classCallCheck(this, ClientInfoComponent);

        this.modalCtrl = modalCtrl;
        this.appSetting = appSetting;
        this.orderService = orderService;
        this.location = [];
      }

      _createClass(ClientInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var temp = _toConsumableArray(this.appSetting.locationDataList);

          var tempLocation = [];
          temp.forEach(function (x) {
            return tempLocation.push(x.TownShip);
          });
          this.location = tempLocation.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
          });
        }
      }, {
        key: "deliverChange",
        value: function deliverChange(e) {
          var _this21 = this;

          console.log(e);

          var temp = _toConsumableArray(this.appSetting.locationDataList);

          var orderData = _toConsumableArray(this.appSetting.orderDetailViewList);

          var foodData = _toConsumableArray(this.appSetting.menuFoodDataList);

          var resturnatList = [];
          orderData.forEach(function (x) {
            foodData.forEach(function (a) {
              if (a.id == x.orderDetialModel.itemID) {
                _this21.appSetting.zone.push(_this21.appSetting.resZone(a.resturant_id));

                resturnatList.push(a.resturant_id);
              }
            });
          });

          var arr = _toConsumableArray(this.appSetting.zone);

          var unique = arr.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
          });
          this.appSetting.orderData.Township_id = 0;

          if (unique.length === 1) {
            temp.forEach(function (x) {
              if (x.TownShip === e && x.Zone === unique[0]) {
                _this21.appSetting.orderData.deliveryCharegs = x.deliveryCharges;
                _this21.appSetting.orderData.Township_id = x.id;
              }
            });
            var resturant = resturnatList.filter(function (elem, index, self) {
              return index === self.indexOf(elem);
            });
            var additionalCharges = 0;

            if (resturant.length > 1) {
              additionalCharges = (resturant.length - 1) * 500;
            }

            this.appSetting.orderData.deliveryCharegs = this.appSetting.orderData.deliveryCharegs + additionalCharges;
          } else {
            this.appSetting.orderData.Township_id = 0;
          }
        }
      }, {
        key: "filter",
        value: function filter(arr) {
          var unique = arr.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            dismissed: true
          });
        }
      }, {
        key: "submitOrder",
        value: function submitOrder() {
          var _this22 = this;

          this.appSetting.showLoading();

          var temp = _toConsumableArray(this.appSetting.orderDetailViewList);

          var orderDetial = [];
          temp.forEach(function (x) {
            orderDetial.push(x.orderDetialModel);
          });
          var data = {
            orderModel: this.appSetting.orderData,
            orderDetailModels: orderDetial
          };

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this22.appSetting.orderData.latitude = position.coords.latitude.toString();
              _this22.appSetting.orderData.longitude = position.coords.longitude.toString();
            });
          }

          this.orderService.post(data);
        }
      }]);

      return ClientInfoComponent;
    }();

    ClientInfoComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }];
    };

    ClientInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-client-info",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./client-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/client-info/client-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./client-info.component.scss */
      "./src/app/home/client-info/client-info.component.scss"))["default"]]
    })], ClientInfoComponent);
    /***/
  },

  /***/
  "./src/app/home/client-invoice/client-invoice.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/home/client-invoice/client-invoice.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeClientInvoiceClientInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2xpZW50LWludm9pY2UvY2xpZW50LWludm9pY2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/client-invoice/client-invoice.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/client-invoice/client-invoice.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ClientInvoiceComponent */

  /***/
  function srcAppHomeClientInvoiceClientInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientInvoiceComponent", function () {
      return ClientInvoiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/food/food.service */
    "./src/app/Services/food/food.service.ts");
    /* harmony import */


    var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/order/order.service */
    "./src/app/Services/order/order.service.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_Models_orderTransationModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Models/orderTransationModel */
    "./src/app/Models/orderTransationModel.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/Services/userModel/user-model.service */
    "./src/app/Services/userModel/user-model.service.ts");

    var ClientInvoiceComponent = /*#__PURE__*/function () {
      function ClientInvoiceComponent(appSetting, modalCtrl, modalController, orderService, FoodService, iab, userService) {
        _classCallCheck(this, ClientInvoiceComponent);

        this.appSetting = appSetting;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
        this.orderService = orderService;
        this.FoodService = FoodService;
        this.iab = iab;
        this.userService = userService;
        this.invoiceNo = null;
        this.phoneNo = null;
        this.data = new src_app_Models_orderTransationModel__WEBPACK_IMPORTED_MODULE_6__["orderTransationModel"]();
        this.status = "";
        this.displayTotal = 0;
        this.options = {
          location: "yes",
          hidden: "no",
          zoom: "no",
          hideurlbar: "yes"
        };
        this.loading = 0;
        this.riderID = 0;
        this.ltd = "";
        this.lng = "";
      }

      _createClass(ClientInvoiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.data = new src_app_Models_orderTransationModel__WEBPACK_IMPORTED_MODULE_6__["orderTransationModel"](); // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data

          this.modalCtrl.dismiss({
            dismissed: true
          });
        }
      }, {
        key: "checkUndefined",
        value: function checkUndefined(obj) {
          return Object(util__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(obj);
        }
      }, {
        key: "count",
        value: function count(id, fun) {
          var _this23 = this;

          var i = 0;

          var temp = _toConsumableArray(this.appSetting.orderDetailViewList);

          temp.forEach(function (x) {
            i = i + 1;

            if (i === id) {
              if (fun === "add") {
                x.orderDetialModel.itemQty = x.orderDetialModel.itemQty + 1;
              } else {
                x.orderDetialModel.itemQty = x.orderDetialModel.itemQty - 1;
              }

              x.orderDetialModel.itemFinalPrice = _this23.calculatePrice(x.orderDetialModel.itemID) * x.orderDetialModel.itemQty;
              x.orderDetialModel.itemOrgPrice = x.orderDetialModel.itemFinalPrice;
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this24 = this;

          var i = -1;

          var temp = _toConsumableArray(this.appSetting.orderDetailViewList);

          temp.forEach(function (x) {
            i = i + 1;

            if (i === id) {
              _this24.appSetting.orderDetailViewList.splice(i, 1);
            }
          });
        }
      }, {
        key: "calculatePrice",
        value: function calculatePrice(id) {
          var temp = _toConsumableArray(this.appSetting.menuFoodDataList);

          var res = 0;
          temp.forEach(function (x) {
            if (x.id === id) {
              res = x.price;
            }
          });
          return res;
        }
      }, {
        key: "total",
        value: function total() {
          var total = 0;

          var temp = _toConsumableArray(this.data.orderDetailModels);

          temp.forEach(function (x) {
            total = total + x.itemFinalPrice;
          });
          this.status = this.data.orderModel.status;
          this.displayTotal = total;
        }
      }, {
        key: "search",
        value: function search() {
          var _this25 = this;

          this.loading = 1;
          this.orderService.getInvoice(this.invoiceNo, this.phoneNo).subscribe(function (x) {
            return _this25.data = x;
          }, function (err) {
            _this25.appSetting.showInvalid();
          }, function () {
            _this25.riderID = _this25.data.orderModel.riderID;

            _this25.food();
          });
        }
      }, {
        key: "food",
        value: function food() {
          var _this26 = this;

          if (this.appSetting.constFoodDataList.length === 0) {
            this.FoodService.getActive().subscribe(function (x) {
              return _this26.appSetting.menuFoodDataList = x;
            }, function (err) {
              return _this26.appSetting.showError(err);
            }, function () {
              _this26.appSetting.constFoodDataList = _this26.appSetting.menuFoodDataList;

              _this26.total();

              _this26.loading = 0;
            });
          } else {
            this.total();
            this.loading = 0;
          }
        }
      }, {
        key: "showMap",
        value: function showMap() {
          this.appSetting.showLoading();
          this.getCustomerInfo();
        }
      }, {
        key: "googleMap",
        value: function googleMap(meltd, melng, clientLtd, clientLng) {
          var url = "https://www.google.com/maps/dir/".concat(meltd, ",").concat(melng, "/").concat(clientLtd, ",").concat(clientLng, "/@").concat(clientLtd, ",").concat(clientLng);
          var target = "_blank";
          var browser = this.iab.create(url, target, this.options);
          browser.on("loadstop").subscribe(function (event) {
            browser.insertCSS({
              code: "body{color: red;"
            });
          });
        }
      }, {
        key: "onClick",
        value: function onClick() {
          var userLatitude = this.ltd;
          var userLongitude = this.lng;

          if (userLongitude === "" || userLatitude === "" || userLatitude === null) {
            this.appSetting.showInvalid();
          } else {
            this.appSetting.loadingClose();
            this.geolocation(userLatitude, userLongitude);
          }
        }
      }, {
        key: "geolocation",
        value: function geolocation(lat, _long) {
          var _this27 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              var latitude = position.coords.latitude.toString();
              var longitude = position.coords.longitude.toString();

              _this27.googleMap(latitude, longitude, lat, _long);
            });
          }
        }
      }, {
        key: "getCustomerInfo",
        value: function getCustomerInfo() {
          var _this28 = this;

          this.userService.getSingle(this.riderID).subscribe(function (x) {
            _this28.ltd = x.latitude;
            _this28.lng = x.longitude;
          }, function (err) {
            return console.log(err);
          }, function () {
            _this28.onClick();
          });
        }
      }]);

      return ClientInvoiceComponent;
    }();

    ClientInvoiceComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }, {
        type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
      }, {
        type: src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_9__["UserModelService"]
      }];
    };

    ClientInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-client-invoice",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./client-invoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/client-invoice/client-invoice.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./client-invoice.component.scss */
      "./src/app/home/client-invoice/client-invoice.component.scss"))["default"]]
    })], ClientInvoiceComponent);
    /***/
  },

  /***/
  "./src/app/home/client-shopcart/client-shopcart.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/home/client-shopcart/client-shopcart.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeClientShopcartClientShopcartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2xpZW50LXNob3BjYXJ0L2NsaWVudC1zaG9wY2FydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/client-shopcart/client-shopcart.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/client-shopcart/client-shopcart.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ClientShopcartComponent */

  /***/
  function srcAppHomeClientShopcartClientShopcartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientShopcartComponent", function () {
      return ClientShopcartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../client-info/client-info.component */
    "./src/app/home/client-info/client-info.component.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ClientShopcartComponent = /*#__PURE__*/function () {
      function ClientShopcartComponent(appSetting, modalCtrl, modalController) {
        _classCallCheck(this, ClientShopcartComponent);

        this.appSetting = appSetting;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
      }

      _createClass(ClientShopcartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            dismissed: true
          });
        }
      }, {
        key: "count",
        value: function count(id, fun) {
          var _this29 = this;

          var i = 0;

          var temp = _toConsumableArray(this.appSetting.orderDetailViewList);

          temp.forEach(function (x) {
            i = i + 1;

            if (i === id) {
              if (fun === "add") {
                x.orderDetialModel.itemQty = x.orderDetialModel.itemQty + 1;
              } else {
                x.orderDetialModel.itemQty = x.orderDetialModel.itemQty - 1;
              }

              x.orderDetialModel.itemFinalPrice = _this29.calculatePrice(x.orderDetialModel.itemID) * x.orderDetialModel.itemQty;
              x.orderDetialModel.itemOrgPrice = x.orderDetialModel.itemFinalPrice;
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this30 = this;

          var i = -1;

          var temp = _toConsumableArray(this.appSetting.orderDetailViewList);

          temp.forEach(function (x) {
            i = i + 1;

            if (i === id) {
              _this30.appSetting.orderDetailViewList.splice(i, 1);
            }
          });
        }
      }, {
        key: "calculatePrice",
        value: function calculatePrice(id) {
          var temp = _toConsumableArray(this.appSetting.menuFoodDataList);

          var res = 0;
          temp.forEach(function (x) {
            if (x.id === id) {
              res = x.price;
            }
          });
          return res;
        }
      }, {
        key: "total",
        value: function total() {
          var total = 0;

          var temp = _toConsumableArray(this.appSetting.orderDetailViewList);

          temp.forEach(function (x) {
            total = total + x.orderDetialModel.itemFinalPrice;
          });
          return total;
        }
      }, {
        key: "clientInfo",
        value: function clientInfo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_1__["ClientInfoComponent"]
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ClientShopcartComponent;
    }();

    ClientShopcartComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    ClientShopcartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-client-shopcart",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./client-shopcart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/client-shopcart/client-shopcart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./client-shopcart.component.scss */
      "./src/app/home/client-shopcart/client-shopcart.component.scss"))["default"]]
    })], ClientShopcartComponent);
    /***/
  },

  /***/
  "./src/app/home/home-item-detail/home-item-detail.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/home/home-item-detail/home-item-detail.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeItemDetailHomeItemDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img.emoj {\n  text-align: center;\n  max-width: 50px;\n  max-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWl0ZW0tZGV0YWlsL0Q6XFxzaWRlQ2FyL3NyY1xcYXBwXFxob21lXFxob21lLWl0ZW0tZGV0YWlsXFxob21lLWl0ZW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtaXRlbS1kZXRhaWwvaG9tZS1pdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtaXRlbS1kZXRhaWwvaG9tZS1pdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWcuZW1vantcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbn0iLCJpb24taW1nLmVtb2oge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNTBweDtcbiAgbWF4LWhlaWdodDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home-item-detail/home-item-detail.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/home/home-item-detail/home-item-detail.component.ts ***!
    \*********************************************************************/

  /*! exports provided: HomeItemDetailComponent */

  /***/
  function srcAppHomeHomeItemDetailHomeItemDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeItemDetailComponent", function () {
      return HomeItemDetailComponent;
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


    var _Models_foodModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../Models/foodModel */
    "./src/app/Models/foodModel.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var HomeItemDetailComponent = /*#__PURE__*/function () {
      function HomeItemDetailComponent(modalCtrl, appSetting) {
        _classCallCheck(this, HomeItemDetailComponent);

        this.modalCtrl = modalCtrl;
        this.appSetting = appSetting;
        this.foodData = new _Models_foodModel__WEBPACK_IMPORTED_MODULE_2__["foodModel"]();
        this.foodList = [];
        this.orderDetail = {
          orderDetailID: 0,
          itemID: this.foodData.id,
          itemQty: 1,
          itemOrgPrice: this.foodData.price,
          discount: 0,
          itemFinalPrice: this.foodData.price,
          orderID: 0,
          status: "no",
          remark: "",
          comment: "",
          isPickUpResturant: false,
          isPickUpRider: false
        };
        this.selectedCard = 0;
        this.foodData.id = 0;
        this.editOnload(this.appSetting.detailID);
      }

      _createClass(HomeItemDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.orderDetail.itemOrgPrice = this.foodData.price;
          this.orderDetail.itemFinalPrice = this.foodData.price;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this31.appSetting.orderData.latitude = position.coords.latitude.toString();
              _this31.appSetting.orderData.longitude = position.coords.longitude.toString();
            });
          }
        }
      }, {
        key: "count",
        value: function count(e) {
          if (e === "add") {
            this.orderDetail.itemQty = this.orderDetail.itemQty + 1;
          } else if (e === "minus") {
            this.orderDetail.itemQty = this.orderDetail.itemQty - 1;
          }

          this.orderDetail.itemFinalPrice = this.foodData.price * this.orderDetail.itemQty;
        }
      }, {
        key: "AddtoCart",
        value: function AddtoCart() {
          this.orderDetail.itemID = this.foodData.id;
          var itemJ = this.appSetting.itemJoin(this.foodData.id);
          this.appSetting.orderDetailList.push(this.orderDetail);
          var temp = {
            orderDetialModel: this.orderDetail,
            itemName: itemJ.itemName,
            resturantName: itemJ.resturant
          };
          this.appSetting.orderDetailViewList.push(temp);
          this.dismissModal();
        }
      }, {
        key: "editOnload",
        value: function editOnload(id) {
          var _this32 = this;

          this.appSetting.menuFoodDataList.forEach(function (x) {
            if (x.mainitem_id === id) {
              _this32.foodList.push(x);
            }
          });
        }
      }, {
        key: "changeModel",
        value: function changeModel(id) {
          var _this33 = this;

          var temp = _toConsumableArray(this.foodList);

          this.selectedCard = id;
          temp.forEach(function (x) {
            if (x.id === id) {
              _this33.foodData = x;
              _this33.orderDetail.itemFinalPrice = _this33.foodData.price * _this33.orderDetail.itemQty;
            }
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            dismissed: true
          });
        }
      }]);

      return HomeItemDetailComponent;
    }();

    HomeItemDetailComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    HomeItemDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-home-item-detail",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-item-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-item-detail/home-item-detail.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-item-detail.component.scss */
      "./src/app/home/home-item-detail/home-item-detail.component.scss"))["default"]]
    })], HomeItemDetailComponent);
    /***/
  },

  /***/
  "./src/app/home/home-items/home-items.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/home/home-items/home-items.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeItemsHomeItemsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img, p.center {\n  text-align: center;\n}\n\nion-select.none {\n  display: none;\n}\n\ndiv.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWl0ZW1zL0Q6XFxzaWRlQ2FyL3NyY1xcYXBwXFxob21lXFxob21lLWl0ZW1zXFxob21lLWl0ZW1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtaXRlbXMvaG9tZS1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLWl0ZW1zL2hvbWUtaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcscC5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLXNlbGVjdC5ub25le1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuZGl2LmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsImltZywgcC5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zZWxlY3Qubm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home-items/home-items.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/home/home-items/home-items.component.ts ***!
    \*********************************************************/

  /*! exports provided: HomeItemsComponent */

  /***/
  function srcAppHomeHomeItemsHomeItemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeItemsComponent", function () {
      return HomeItemsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_item_detail_home_item_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../home-item-detail/home-item-detail.component */
    "./src/app/home/home-item-detail/home-item-detail.component.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/location/location.service */
    "./src/app/Services/location/location.service.ts");
    /* harmony import */


    var src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/mainModel/main-model.service */
    "./src/app/Services/mainModel/main-model.service.ts");
    /* harmony import */


    var src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Services/resturantModel/resturant-model.service */
    "./src/app/Services/resturantModel/resturant-model.service.ts");

    var HomeItemsComponent = /*#__PURE__*/function () {
      function HomeItemsComponent(appSetting, LocationService, mainItemService, modalController, ResturantModelService) {
        var _this34 = this;

        _classCallCheck(this, HomeItemsComponent);

        this.appSetting = appSetting;
        this.LocationService = LocationService;
        this.mainItemService = mainItemService;
        this.modalController = modalController;
        this.ResturantModelService = ResturantModelService;
        this.searchResturant = 0;
        this.searchCategory = 0;
        this.mainItemService.get().subscribe(function (x) {
          return _this34.appSetting.mainItemDataList = x;
        }, function (err) {
          return _this34.appSetting.showError(err);
        }, function () {
          _this34.appSetting.constmainItemDataList = _this34.appSetting.mainItemDataList;

          if (_this34.appSetting.customerSearch !== "") {
            _this34.onSearch(_this34.appSetting.customerSearch);
          }
        });
        this.locationReload();
      }

      _createClass(HomeItemsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "locationReload",
        value: function locationReload() {
          var _this35 = this;

          if (this.appSetting.locationDataList.length === 0) {
            this.LocationService.get().subscribe(function (x) {
              return _this35.appSetting.locationDataList = x;
            }, function (err) {
              return console.log(err);
            }, function () {});
          }
        }
      }, {
        key: "cardClick",
        value: function cardClick(cardID) {
          this.itemDetail(cardID.toString());
        }
      }, {
        key: "Filter",
        value: function Filter(e) {
          var temp = _toConsumableArray(this.appSetting.constmainItemDataList);

          var res = [];
          temp.forEach(function (x) {
            if (x.resturant_id === e) {
              res.push(x);
            }
          });
          this.appSetting.mainItemDataList = res;
        }
      }, {
        key: "FilterCategory",
        value: function FilterCategory(e) {
          var temp = _toConsumableArray(this.appSetting.constmainItemDataList);

          var res = [];
          temp.forEach(function (x) {
            if (x.category_id === e) {
              res.push(x);
            }
          });
          this.appSetting.mainItemDataList = res;
        }
      }, {
        key: "resturantChoose",
        value: function resturantChoose() {
          var a = document.getElementById("select");
          a.click();
        }
      }, {
        key: "categoryChoose",
        value: function categoryChoose() {
          var a = document.getElementById("selectCategory");
          a.click();
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this36 = this;

          this.mainItemService.get().subscribe(function (x) {
            return _this36.appSetting.mainItemDataList = x;
          }, function (err) {
            return _this36.appSetting.showError(err);
          }, function () {
            _this36.appSetting.constmainItemDataList = _this36.appSetting.mainItemDataList;
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch(val) {
          var _this37 = this;

          var temp = _toConsumableArray(this.appSetting.constmainItemDataList);

          var z = [];
          temp.forEach(function (x) {
            if (x.name.toLowerCase().includes(_this37.appSetting.customerSearch.toLowerCase())) {
              z.push(x);
            }

            _this37.appSetting.mainItemDataList = z;
          });

          if (this.appSetting.customerSearch === "") {
            this.appSetting.mainItemDataList = temp;
          }
        }
      }, {
        key: "itemDetail",
        value: function itemDetail(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.appSetting.detailID = +id;
                    _context2.next = 3;
                    return this.modalController.create({
                      component: _home_item_detail_home_item_detail_component__WEBPACK_IMPORTED_MODULE_1__["HomeItemDetailComponent"]
                    });

                  case 3:
                    modal = _context2.sent;
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HomeItemsComponent;
    }();

    HomeItemsComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]
      }, {
        type: src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_6__["MainModelService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_7__["ResturantModelService"]
      }];
    };

    HomeItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-home-items",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-items.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-items/home-items.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-items.component.scss */
      "./src/app/home/home-items/home-items.component.scss"))["default"]]
    })], HomeItemsComponent);
    /***/
  },

  /***/
  "./src/app/home/home-page/home-page.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/home/home-page/home-page.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button,\nion-toolbar.dark {\n  --background: #212224;\n}\n\n@media only screen and (max-width: 600px) {\n  ion-card.search {\n    background-image: url('mobile.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    min-height: 667px;\n    text-align: justify;\n    border-radius: 0px;\n    margin: 0px;\n  }\n\n  ion-button {\n    width: 100%;\n  }\n\n  ion-card-content.searchContent {\n    margin-top: 200px;\n    min-height: 500px;\n    max-width: 500px;\n    margin-left: 5%;\n    margin-right: 5%;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  ion-card.search {\n    background-image: url('desktop.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    min-height: 667px;\n    text-align: justify;\n    border-radius: 0px;\n    margin: 0px;\n  }\n\n  ion-card-content.searchContent {\n    border-radius: 5px;\n    background-color: #FFE400;\n    margin-top: 200px;\n    margin-left: 20%;\n    margin-right: 20%;\n    min-height: auto;\n  }\n}\n\nion-slides.foot {\n  background-color: #222428;\n}\n\nh1.searchTitle {\n  line-height: 1.8;\n}\n\nion-title,\nion-icon.title {\n  color: #ffe400 !important;\n}\n\nion-img.icon {\n  max-width: 45px;\n  max-height: 45px;\n  background-color: #FFE400;\n  border-radius: 25px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLXBhZ2UvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXGhvbWVcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUkscUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksbUNBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDQ047O0VERUU7SUFDSSxXQUFBO0VDQ047O0VERUU7SUFFSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNBTjtBQUNGOztBRElBO0VBQ0k7SUFDSSxvQ0FBQTtJQUNBLDRCQUFBO0lBQ0EsMkJBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNGTjs7RURNRTtJQUNJLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFFQSxnQkFBQTtFQ0pOO0FBQ0Y7O0FEVUE7RUFDSSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0ksZ0JBQUE7QUNSSjs7QURXQTs7RUFFSSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24sXHJcbmlvbi10b29sYmFyLmRhcmsge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjEyMjI0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBpb24tY2FyZC5zZWFyY2gge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tb2JpbGUuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjY3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtY29udGVudC5zZWFyY2hDb250ZW50IHtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgIGlvbi1jYXJkLnNlYXJjaCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Rlc2t0b3AuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjY3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQuc2VhcmNoQ29udGVudCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkU0MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuXHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgICAgICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmlvbi1zbGlkZXMuZm9vdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDI4O1xyXG59XHJcblxyXG5oMS5zZWFyY2hUaXRsZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG59XHJcblxyXG5pb24tdGl0bGUsXHJcbmlvbi1pY29uLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZlNDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbWcuaWNvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDQ1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCJpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIuZGFyayB7XG4gIC0tYmFja2dyb3VuZDogIzIxMjIyNDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBpb24tY2FyZC5zZWFyY2gge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tb2JpbGUuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogNjY3cHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnQuc2VhcmNoQ29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICBpb24tY2FyZC5zZWFyY2gge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9kZXNrdG9wLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDY2N3B4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgaW9uLWNhcmQtY29udGVudC5zZWFyY2hDb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIG1hcmdpbi1yaWdodDogMjAlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbn1cbmlvbi1zbGlkZXMuZm9vdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI0Mjg7XG59XG5cbmgxLnNlYXJjaFRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxuaW9uLXRpdGxlLFxuaW9uLWljb24udGl0bGUge1xuICBjb2xvcjogI2ZmZTQwMCAhaW1wb3J0YW50O1xufVxuXG5pb24taW1nLmljb24ge1xuICBtYXgtd2lkdGg6IDQ1cHg7XG4gIG1heC1oZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkU0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home-page/home-page.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/home-page/home-page.component.ts ***!
    \*******************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomeHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _client_invoice_client_invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../client-invoice/client-invoice.component */
    "./src/app/home/client-invoice/client-invoice.component.ts");
    /* harmony import */


    var _Services_food_food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../Services/food/food.service */
    "./src/app/Services/food/food.service.ts");
    /* harmony import */


    var _Services_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../Services/category/category.service */
    "./src/app/Services/category/category.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _client_shopcart_client_shopcart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../client-shopcart/client-shopcart.component */
    "./src/app/home/client-shopcart/client-shopcart.component.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/Services/resturantModel/resturant-model.service */
    "./src/app/Services/resturantModel/resturant-model.service.ts");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(plt, ResturantModelService, router, foodService, modalController, CategoryService, appSetting) {
        _classCallCheck(this, HomePageComponent);

        this.plt = plt;
        this.ResturantModelService = ResturantModelService;
        this.router = router;
        this.foodService = foodService;
        this.modalController = modalController;
        this.CategoryService = CategoryService;
        this.appSetting = appSetting;
        this.loading = 1;

        if (this.plt.is("ios")) {
          // This will only print when on iOS
          this.appSetting.device = "12";
        } else if (this.plt.is("android")) {
          this.appSetting.device = "12";
        } else if (this.plt.is("tablet")) {
          this.appSetting.device = "2";
        } else if (this.plt.is("ipad")) {
          this.appSetting.device = "2";
        } else {
          this.appSetting.device = "2";
        }

        this.resturantLoaddata();
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this38.appSetting.orderData.latitude = position.coords.latitude.toString();
              _this38.appSetting.orderData.longitude = position.coords.longitude.toString();
            });
          }
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigateByUrl("/login");
        }
      }, {
        key: "resturantLoaddata",
        value: function resturantLoaddata() {
          var _this39 = this;

          this.foodService.getActive().subscribe(function (x) {
            return _this39.appSetting.menuFoodDataList = x;
          }, function (err) {
            return console.log(err);
          }, function () {
            _this39.ResturantModelService.get().subscribe(function (x) {
              return _this39.appSetting.resturandDataList = x;
            }, function (err) {
              return _this39.appSetting.showError(err);
            }, function () {
              _this39.loadCategory();
            });
          });
        }
      }, {
        key: "loadCategory",
        value: function loadCategory() {
          var _this40 = this;

          this.CategoryService.get().subscribe(function (y) {
            _this40.appSetting.categoryList = y, function (err) {
              return _this40.appSetting.showError(err);
            }, function () {
              console.log("Complete");
            };
          });
        }
      }, {
        key: "shopCart",
        value: function shopCart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _client_shopcart_client_shopcart_component__WEBPACK_IMPORTED_MODULE_5__["ClientShopcartComponent"]
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "invoice",
        value: function invoice() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: _client_invoice_client_invoice_component__WEBPACK_IMPORTED_MODULE_1__["ClientInvoiceComponent"]
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
      }, {
        type: src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_9__["ResturantModelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _Services_food_food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
      }, {
        type: _Services_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_6__["appSetting"]
      }];
    };

    HomePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
      selector: "app-home-page",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-page/home-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/home/home-page/home-page.component.scss"))["default"]]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home/home-page/home-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], HomeRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _client_invoice_client_invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./client-invoice/client-invoice.component */
    "./src/app/home/client-invoice/client-invoice.component.ts");
    /* harmony import */


    var _home_item_detail_home_item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-item-detail/home-item-detail.component */
    "./src/app/home/home-item-detail/home-item-detail.component.ts");
    /* harmony import */


    var _client_shopcart_client_shopcart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./client-shopcart/client-shopcart.component */
    "./src/app/home/client-shopcart/client-shopcart.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home/home-page/home-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _home_items_home_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home-items/home-items.component */
    "./src/app/home/home-items/home-items.component.ts");
    /* harmony import */


    var _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./client-info/client-info.component */
    "./src/app/home/client-info/client-info.component.ts");

    var pages = [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _home_item_detail_home_item_detail_component__WEBPACK_IMPORTED_MODULE_2__["HomeItemDetailComponent"], _home_items_home_items_component__WEBPACK_IMPORTED_MODULE_10__["HomeItemsComponent"], _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_11__["ClientInfoComponent"], _client_shopcart_client_shopcart_component__WEBPACK_IMPORTED_MODULE_3__["ClientShopcartComponent"], _client_invoice_client_invoice_component__WEBPACK_IMPORTED_MODULE_1__["ClientInvoiceComponent"]];

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: pages,
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"]],
      exports: pages
    })], HomeModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\sideCar\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map