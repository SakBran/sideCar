function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-edit/item-edit.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-edit/item-edit.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2AdminItemEditItemEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n    \r\n        <ion-label lines=\"none\">\r\n          <h2>{{ this.foodData.itemName }}</h2>\r\n          <h3>{{ this.foodData.price }}</h3>\r\n          <h3>{{ this.appSetting.resName(foodData.resturant_id) }}</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n     \r\n        <ion-label>\r\n          <h2>Please enter the quantity</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"calculator-outline\"></ion-icon> Quantity <ion-text *ngIf=\"this.orderDetail.itemQty===0\" color=\"danger\">\r\n            ***\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.itemQty\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n     \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter the Discount amount</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"cash-outline\"></ion-icon> Discount\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.discount\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n    \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter remark</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon> Remark\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.remark\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item lines=\"none\">\r\n     \r\n      <ion-label>\r\n        <h2>Total</h2>\r\n        <h3>{{this.totalAmount()}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.back()\" color=\"light\">\r\n          Back\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.addToInvoice()\" color=\"light\">\r\n          Update Invoice\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-list/item-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-list/item-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2AdminItemListItemListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let i of this.appSetting.orderDetailViewList;let x=index;\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n     \r\n        <ion-label>\r\n          <h2>{{i.itemName}}</h2>\r\n          <h3>Quantity {{i.orderDetialModel.itemQty}}</h3>\r\n          <h3>Price {{i.orderDetialModel.itemFinalPrice}}</h3>\r\n          <h3>{{i.resturantName}}</h3>\r\n        </ion-label>\r\n        <ion-button routerLink='/tabs/tab2/itemEdit/{{x}}' color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button (click)=\"deleteInvoice(x)\" color=\"danger\">\r\n          <ion-icon name=\"trash-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n    \r\n        <ion-label color=\"primary\">\r\n          <h2>Customer Information</h2>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Name</ion-label>\r\n        <ion-input [(ngModel)]=\"this.appSetting.orderData.clientName\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Phone</ion-label>\r\n        <ion-input [(ngModel)]=\"this.appSetting.orderData.clitentPhone\" type=\"tel\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Township</ion-label>\r\n        <ion-select [(ngModel)]=\"this.appSetting.orderData.Township_id\" (ngModelChange)=\"deliverChange($event)\">\r\n          <ion-select-option *ngFor=\"let item of this.appSetting.locationDataList;let i=index;\" [value]=\"item.id\">\r\n            {{i+1}}.{{item.TownShip}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Flat No</ion-label>\r\n        <ion-input [(ngModel)]=\"this.appSetting.orderData.clitentFlatNo\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Address</ion-label>\r\n        <ion-textarea [(ngModel)]=\"this.appSetting.orderData.clientAddress\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n     \r\n        <ion-label color=\"primary\">\r\n          <h2>Delivery Information</h2>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Charges</ion-label>\r\n        <ion-input [(ngModel)]=\"this.appSetting.orderData.deliveryCharegs\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Date for Delivery</ion-label>\r\n        <ion-datetime ionCancel [(ngModel)]=\"this.appSetting.orderData.deliveryDate\"></ion-datetime>\r\n        <ion-label position=\"floating\">Time for Delivery</ion-label>\r\n        <ion-datetime [(ngModel)]=\"this.appSetting.orderData.deliveryDate\" display-format=\"h:mm A\"\r\n          picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Date for Pickup</ion-label>\r\n        <ion-datetime ionCancel [(ngModel)]=\"this.appSetting.orderData.pickupDate\"></ion-datetime>\r\n        <ion-label position=\"floating\">Time for Pickup</ion-label>\r\n        <ion-datetime [(ngModel)]=\"this.appSetting.orderData.pickupDate\" display-format=\"h:mm A\"\r\n          picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n     \r\n        <ion-label color=\"primary\">\r\n          <h2>Cash Receive Information</h2>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Cash Receive Options</ion-label>\r\n          <ion-select [(ngModel)]=\"this.appSetting.orderData.riderTakeOption\">\r\n            <ion-select-option [value]=\"revceiveOpt[0]\">{{revceiveOpt[0]}}</ion-select-option>\r\n            <ion-select-option [value]=\"revceiveOpt[1]\">{{revceiveOpt[1]}}</ion-select-option>\r\n            <ion-select-option [value]=\"revceiveOpt[2]\">{{revceiveOpt[2]}}</ion-select-option>\r\n          </ion-select>\r\n      </ion-item>\r\n   \r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" color=\"light\">\r\n          Cancel\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button (click)=\"sendToResturant()\" expand=\"block\" color=\"light\">\r\n          Send To Resturant\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/main-page/main-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/main-page/main-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2AdminMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-item-list *ngIf=\"this.appSetting.adminTab2Process==='list'\"></app-item-list>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/rider-select/rider-select.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/rider-select/rider-select.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2AdminRiderSelectRiderSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"all\">\r\n      <ion-segment-button (click)=\"this.loadAvailable()\" value=\"all\">\r\n        <ion-label>Available</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button (click)=\"this.loadInProgress()\" value=\"favorites\">\r\n        <ion-label>In Progrss</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"this.riderSelection === 'available'\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let i of rider\">\r\n    <ion-item>\r\n   \r\n      <ion-label>\r\n        <h2>{{ i.username }}</h2>\r\n        <h3>\r\n          ETD KM:{{ locationCalculate(i.longitude, i.latitude).toFixed(2) }}\r\n          Kilometer\r\n        </h3>\r\n        <p>Ph:{{ i.phone }}</p>\r\n      </ion-label>\r\n\r\n      <ion-button (click)=\"onSelect(i.id)\" color=\"secondary\">\r\n        Select\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"this.riderSelection === 'inProgress'\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshDelivering($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let i of progressRider\">\r\n    <ion-item>\r\n    \r\n      <ion-label>\r\n        <h2>{{ i.username }}</h2>\r\n        <h3>\r\n          ETD KM:{{\r\n            locationCalculate(i.longitude, i.latitude).toFixed(2)\r\n          }}\r\n          Kilometer\r\n        </h3>\r\n\r\n        <p>Ph:{{ i.phone }}</p>\r\n      </ion-label>\r\n\r\n      <ion-button (click)=\"onSelect(i.id)\" color=\"secondary\">\r\n        Select\r\n      </ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-checkbox color=\"danger\" slot=\"start\"></ion-checkbox>\r\n      <ion-label color=\"danger\" checked readonnly>Emegency</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/rider/main-rider-page/main-rider-page.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/rider/main-rider-page/main-rider-page.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2RiderMainRiderPageMainRiderPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle color=\"primary\">Summary Report\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Date</ion-label>\r\n        <ion-datetime  ionCancel [(ngModel)]=\"this.dateData\"></ion-datetime>\r\n       \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Status</ion-label>\r\n        <ion-text color=\"primary\">\r\n          <p>Pending</p>\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-card-subtitle>\r\n   \r\n  </ion-card-header>\r\n  <ion-card-content>\r\n  \r\n    <ion-item>\r\n      <ion-avatar slot=\"end\">\r\n        <img src=\"/../assets/agreement.svg\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>Rider Earning</h3>\r\n        <p>{{this.data.riderEarning}} Kyats</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"end\">\r\n        <img src=\"/../assets/agreement.svg\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>ပြန်အပ်ရန်ငွေ</h3>\r\n        <p>{{this.data.dailyReturnAmount}} Kyats</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-button (click)=\"this.search()\" expand=\"block\">\r\n      Refresh Data\r\n    </ion-button>\r\n  </ion-card-content>\r\n</ion-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" *ngIf=\"this.appSetting.adminTab2Process==='riderSelect'\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip>\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip>\r\n            <ion-icon name=\"search-outline\"></ion-icon>\r\n            <ion-label>Search</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header [translucent]=\"true\" *ngIf=\"this.appSetting.loginType==='rider'\">\r\n  <ion-toolbar>\r\n    <ion-title>Today Sumary</ion-title>\r\n    <ion-progress-bar value=\"1\" buffer=\"0.5\"></ion-progress-bar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-main-page *ngIf=\"this.appSetting.loginType==='admin'\"></app-main-page>\r\n  <app-main-rider-page *ngIf=\"this.appSetting.loginType==='rider'\"></app-main-rider-page>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Services/dailyReturn/daily-return.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Services/dailyReturn/daily-return.service.ts ***!
    \**************************************************************/

  /*! exports provided: DailyReturnService */

  /***/
  function srcAppServicesDailyReturnDailyReturnServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DailyReturnService", function () {
      return DailyReturnService;
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

    var DailyReturnService = /*#__PURE__*/function () {
      function DailyReturnService(http, appSetting) {
        _classCallCheck(this, DailyReturnService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/dailyReturn");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(DailyReturnService, [{
        key: "get",
        value: function get(riderID, date) {
          return this.http.get(this.url + "?riderID=".concat(riderID, "&date=").concat(date));
        }
      }]);

      return DailyReturnService;
    }();

    DailyReturnService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    DailyReturnService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], DailyReturnService);
    /***/
  },

  /***/
  "./src/app/tab2/admin/item-edit/item-edit.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/tab2/admin/item-edit/item-edit.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2AdminItemEditItemEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvYWRtaW4vaXRlbS1lZGl0L2l0ZW0tZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab2/admin/item-edit/item-edit.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tab2/admin/item-edit/item-edit.component.ts ***!
    \*************************************************************/

  /*! exports provided: ItemEditComponent */

  /***/
  function srcAppTab2AdminItemEditItemEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemEditComponent", function () {
      return ItemEditComponent;
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


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/foodModel */
    "./src/app/Models/foodModel.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ItemEditComponent = /*#__PURE__*/function () {
      function ItemEditComponent(appSetting, Router, location, route) {
        _classCallCheck(this, ItemEditComponent);

        this.appSetting = appSetting;
        this.Router = Router;
        this.location = location;
        this.route = route;
        this.foodData = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        this.orderDetail = {
          orderDetailID: 0,
          itemID: this.foodData.id,
          itemQty: 1,
          itemOrgPrice: 0,
          discount: 0,
          itemFinalPrice: 0,
          orderID: 0,
          status: 'pending',
          remark: "",
          comment: "",
          isPickUpResturant: false,
          isPickUpRider: false
        };
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.foodData = this.loadData(this.id);
      }

      _createClass(ItemEditComponent, [{
        key: "back",
        value: function back() {
          this.route.navigateByUrl('/tabs/tab2');
        }
      }, {
        key: "loadData",
        value: function loadData(id) {
          var _this = this;

          var result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
          var i = -1;

          var temp = _toConsumableArray(this.appSetting.orderDetailList);

          temp.forEach(function (x) {
            i = i + 1;

            if (i === id) {
              result = _this.loadFoodData(x.itemID);
              _this.orderDetail = x;
            }
          });
          return result;
        }
      }, {
        key: "loadFoodData",
        value: function loadFoodData(id) {
          var result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();

          var temp = _toConsumableArray(this.appSetting.constFoodDataList);

          temp.forEach(function (x) {
            if (x.id === id) {
              result = x;
            }
          });
          return result;
        }
      }, {
        key: "totalAmount",
        value: function totalAmount() {
          if (this.orderDetail.itemQty !== 0) {
            this.orderDetail.itemOrgPrice = this.orderDetail.itemQty * this.foodData.price;
            this.orderDetail.itemFinalPrice = this.orderDetail.itemOrgPrice - this.orderDetail.discount;
            return this.orderDetail.itemFinalPrice.toString();
          } else {
            return "0";
          }
        }
      }, {
        key: "validation",
        value: function validation() {
          if (this.orderDetail.itemQty === 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "addToInvoice",
        value: function addToInvoice() {
          var _this2 = this;

          if (this.validation()) {
            var itemJ = this.appSetting.itemJoin(this.foodData.id);
            var i = -1;
            this.appSetting.orderDetailList.forEach(function (x) {
              i = i + 1;

              if (i === _this2.id) {
                x = _this2.orderDetail;
              }
            });
            var temp = {
              orderDetialModel: this.orderDetail,
              itemName: itemJ.itemName,
              resturantName: itemJ.resturant
            };
            var z = -1;
            this.appSetting.orderDetailViewList.forEach(function (x) {
              z = z + 1;

              if (z === _this2.id) {
                x = temp;
              }
            });
          }

          this.route.navigateByUrl('/tabs/tab2');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemEditComponent;
    }();

    ItemEditComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ItemEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-edit/item-edit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-edit.component.scss */
      "./src/app/tab2/admin/item-edit/item-edit.component.scss"))["default"]]
    })], ItemEditComponent);
    /***/
  },

  /***/
  "./src/app/tab2/admin/item-list/item-list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/tab2/admin/item-list/item-list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2AdminItemListItemListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9hZG1pbi9pdGVtLWxpc3QvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXHRhYjJcXGFkbWluXFxpdGVtLWxpc3RcXGl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFiMi9hZG1pbi9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC90YWIyL2FkbWluL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn0iLCIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab2/admin/item-list/item-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tab2/admin/item-list/item-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: ItemListComponent, itemRest */

  /***/
  function srcAppTab2AdminItemListItemListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemListComponent", function () {
      return ItemListComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "itemRest", function () {
      return itemRest;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../Services/order/order.service */
    "./src/app/Services/order/order.service.ts");
    /* harmony import */


    var _Services_location_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../Services/location/location.service */
    "./src/app/Services/location/location.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");

    var ItemListComponent = /*#__PURE__*/function () {
      function ItemListComponent(appSetting, LocationService, orderService) {
        _classCallCheck(this, ItemListComponent);

        this.appSetting = appSetting;
        this.LocationService = LocationService;
        this.orderService = orderService;
        this.list = [1, 2, 34, 5, 6];
        this.revceiveOpt = ['All', 'COD', 'Epayment'];
        this.locationReload();
      }

      _createClass(ItemListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editInvoice",
        value: function editInvoice(i) {
          this.appSetting.adminTab2Process = "edit";
        }
      }, {
        key: "riderSelect",
        value: function riderSelect() {
          this.appSetting.adminTab2Process = "riderSelect";
        }
      }, {
        key: "locationReload",
        value: function locationReload() {
          var _this3 = this;

          if (this.appSetting.locationDataList.length === 0) {
            this.LocationService.get().subscribe(function (x) {
              return _this3.appSetting.locationDataList = x;
            });
          }
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this4 = this;

          this.LocationService.get().subscribe(function (x) {
            return _this4.appSetting.locationDataList = x;
          }, function (err) {
            return _this4.appSetting.showError(err);
          }, function () {
            event.target.complete();
          });
        }
      }, {
        key: "deliverChange",
        value: function deliverChange(e) {
          var _this5 = this;

          this.appSetting.orderData.Township_id = e;

          var temp = _toConsumableArray(this.appSetting.locationDataList);

          temp.forEach(function (x) {
            if (x.id === e) {
              _this5.appSetting.orderData.deliveryCharegs = x.deliveryCharges;
            }
          });
        }
      }, {
        key: "itemJoin",
        value: function itemJoin(id) {
          var _this6 = this;

          var i = {
            itemName: "",
            resturant: ""
          };

          var temp = _toConsumableArray(this.appSetting.constFoodDataList);

          temp.forEach(function (x) {
            if (x.id === id) {
              i.itemName = x.itemName;
              i.resturant = _this6.appSetting.resName(x.resturant_id);
            }
          });
          return i;
        }
      }, {
        key: "deleteInvoice",
        value: function deleteInvoice(id) {
          this.appSetting.orderDetailList.splice(id, 1);
          this.appSetting.orderDetailViewList.splice(id, 1);
        }
      }, {
        key: "sendToResturant",
        value: function sendToResturant() {
          this.appSetting.showLoading();
          var data = {
            orderModel: this.appSetting.orderData,
            orderDetailModels: this.appSetting.orderDetailList
          };
          this.orderService.post(data);
        }
      }]);

      return ItemListComponent;
    }();

    ItemListComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]
      }, {
        type: _Services_location_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]
      }, {
        type: _Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
      }];
    };

    ItemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-item-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-list/item-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-list.component.scss */
      "./src/app/tab2/admin/item-list/item-list.component.scss"))["default"]]
    })], ItemListComponent);

    var itemRest = function itemRest() {
      _classCallCheck(this, itemRest);
    };
    /***/

  },

  /***/
  "./src/app/tab2/admin/main-page/main-page.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/tab2/admin/main-page/main-page.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2AdminMainPageMainPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvYWRtaW4vbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab2/admin/main-page/main-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tab2/admin/main-page/main-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppTab2AdminMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
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


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent(appSetting) {
        _classCallCheck(this, MainPageComponent);

        this.appSetting = appSetting;
        this.appSetting.adminTab2Process = 'list';
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }];
    };

    MainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/main-page/main-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-page.component.scss */
      "./src/app/tab2/admin/main-page/main-page.component.scss"))["default"]]
    })], MainPageComponent);
    /***/
  },

  /***/
  "./src/app/tab2/admin/rider-select/rider-select.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/tab2/admin/rider-select/rider-select.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2AdminRiderSelectRiderSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvYWRtaW4vcmlkZXItc2VsZWN0L3JpZGVyLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab2/admin/rider-select/rider-select.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/tab2/admin/rider-select/rider-select.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RiderSelectComponent */

  /***/
  function srcAppTab2AdminRiderSelectRiderSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiderSelectComponent", function () {
      return RiderSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/order/order.service */
    "./src/app/Services/order/order.service.ts");
    /* harmony import */


    var _app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../Services/userModel/user-model.service */
    "./src/app/Services/userModel/user-model.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_Models_orderModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Models/orderModel */
    "./src/app/Models/orderModel.ts");

    var RiderSelectComponent = /*#__PURE__*/function () {
      function RiderSelectComponent(route, appSetting, router, UserModelService, orderService) {
        var _this7 = this;

        _classCallCheck(this, RiderSelectComponent);

        this.route = route;
        this.appSetting = appSetting;
        this.router = router;
        this.UserModelService = UserModelService;
        this.orderService = orderService;
        this.rider = [];
        this.progressRider = [];
        this.id = 0;
        this.data = new src_app_Models_orderModel__WEBPACK_IMPORTED_MODULE_6__["orderModel"]();
        this.riderSelection = "available";
        this.id = +this.route.snapshot.paramMap.get("id");
        this.loadAvailable();
        this.appSetting.orderTransationList.forEach(function (x) {
          if (x.orderModel.id === _this7.id) {
            _this7.data = x.orderModel;
          }
        });
      }

      _createClass(RiderSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadAvailable",
        value: function loadAvailable() {
          var _this8 = this;

          this.appSetting.showLoading();
          this.UserModelService.getAvailableRider().subscribe(function (x) {
            return _this8.rider = x;
          }, function (err) {
            return _this8.appSetting.showError(err);
          }, function () {
            _this8.riderSelection = "available";

            _this8.appSetting.loadingClose();
          });
        }
      }, {
        key: "locationCalculate",
        value: function locationCalculate(riderLongitude, riderLatidude) {
          var temp = _toConsumableArray(this.appSetting.orderTransationList);

          var tempDetial = this.tempDetail(temp);

          var tempLocation = _toConsumableArray(this.appSetting.resturandDataList);

          var foodDB = _toConsumableArray(this.appSetting.menuFoodDataList);

          var tempRes = this.tempResMethod(foodDB, tempDetial);
          var resIDlist = this.getUnique(tempRes);
          var locationDB = this.locationDBMethod(tempLocation, resIDlist);
          return Math.min.apply(null, this.distanceCalculation(locationDB, riderLatidude, riderLongitude)) / 1000;
        }
      }, {
        key: "distanceCalculation",
        value: function distanceCalculation(locationDB, riderLatidude, riderLongitude) {
          var _this9 = this;

          var distanceList = [];
          locationDB.forEach(function (y) {
            distanceList.push(_this9.appSetting.distanceCal(y.latitude, y.longitude, riderLatidude, riderLongitude));
          });
          return distanceList;
        }
      }, {
        key: "locationDBMethod",
        value: function locationDBMethod(tempLocation, resIDlist) {
          var locationDB = [];
          tempLocation.forEach(function (x) {
            resIDlist.forEach(function (y) {
              if (y === x.id) {
                locationDB.push(x);
              }
            });
          });
          return locationDB;
        }
      }, {
        key: "tempResMethod",
        value: function tempResMethod(foodDB, tempDetial) {
          var tempRes = [];
          foodDB.forEach(function (x) {
            tempDetial.forEach(function (y) {
              if (y.itemID === x.id) {
                tempRes.push(x.resturant_id);
              } else {}
            });
          });
          return tempRes;
        }
      }, {
        key: "tempDetail",
        value: function tempDetail(temp) {
          var _this10 = this;

          var dataList = [];
          temp.forEach(function (x) {
            x.orderDetailModels.forEach(function (y) {
              if (y.orderID === _this10.id) {
                dataList.push(y);
              }
            });
          });
          return dataList;
        }
      }, {
        key: "getUnique",
        value: function getUnique(array) {
          var uniqueArray = []; // Loop through array values

          for (var i = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
              uniqueArray.push(array[i]);
            }
          }

          return uniqueArray;
        }
      }, {
        key: "loadInProgress",
        value: function loadInProgress() {
          var _this11 = this;

          this.appSetting.showLoading();
          this.UserModelService.getDeliveringRider().subscribe(function (x) {
            return _this11.progressRider = x;
          }, function (err) {
            return _this11.appSetting.showError(err);
          }, function () {
            _this11.riderSelection = "inProgress";

            _this11.appSetting.loadingClose();
          });
        }
      }, {
        key: "refresh",
        value: function refresh(e) {
          var _this12 = this;

          this.UserModelService.getAvailableRider().subscribe(function (x) {
            return _this12.rider = x;
          }, function (err) {
            return _this12.appSetting.showError(err);
          }, function () {
            e.target.complete();
          });
        }
      }, {
        key: "refreshDelivering",
        value: function refreshDelivering(e) {
          var _this13 = this;

          this.UserModelService.getDeliveringRider().subscribe(function (x) {
            return _this13.progressRider = x;
          }, function (err) {
            return _this13.appSetting.showError(err);
          }, function () {
            e.target.complete();
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(id) {
          this.appSetting.showLoading();
          this.data.riderID = id;
          this.data.status = "delivering";
          this.orderService.put(this.data);
          this.router.navigateByUrl("/managmenet/tabs/tab1/deliveryPending");
        }
      }]);

      return RiderSelectComponent;
    }();

    RiderSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_3__["UserModelService"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
      }];
    };

    RiderSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-rider-select",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rider-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/rider-select/rider-select.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rider-select.component.scss */
      "./src/app/tab2/admin/rider-select/rider-select.component.scss"))["default"]]
    })], RiderSelectComponent);
    /***/
  },

  /***/
  "./src/app/tab2/rider/main-rider-page/main-rider-page.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/tab2/rider/main-rider-page/main-rider-page.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2RiderMainRiderPageMainRiderPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvcmlkZXIvbWFpbi1yaWRlci1wYWdlL21haW4tcmlkZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab2/rider/main-rider-page/main-rider-page.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/tab2/rider/main-rider-page/main-rider-page.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MainRiderPageComponent */

  /***/
  function srcAppTab2RiderMainRiderPageMainRiderPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRiderPageComponent", function () {
      return MainRiderPageComponent;
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


    var src_app_Services_dailyReturn_daily_return_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/dailyReturn/daily-return.service */
    "./src/app/Services/dailyReturn/daily-return.service.ts");

    var MainRiderPageComponent = /*#__PURE__*/function () {
      function MainRiderPageComponent(appSetting, datilyReturnService) {
        _classCallCheck(this, MainRiderPageComponent);

        this.appSetting = appSetting;
        this.datilyReturnService = datilyReturnService;
        this.dateData = new Date().toISOString();
        this.data = {
          deliverCharges: 0,
          debit: 0,
          credit: 0,
          openingBalance: 0,
          riderEarning: 0,
          dailyReturnAmount: 0
        };
      }

      _createClass(MainRiderPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "refresh",
        value: function refresh() {}
      }, {
        key: "search",
        value: function search() {
          var _this14 = this;

          if (this.dateData === "") {
            this.appSetting.showInvalid();
          } else {
            this.appSetting.showLoading();
            this.datilyReturnService.get(this.appSetting.sessionUserID, this.dateData).subscribe(function (x) {
              return _this14.data = x;
            }, function (err) {
              return _this14.appSetting.showError(err);
            }, function () {
              _this14.appSetting.loadingClose();
            });
          }
        }
      }]);

      return MainRiderPageComponent;
    }();

    MainRiderPageComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }, {
        type: src_app_Services_dailyReturn_daily_return_service__WEBPACK_IMPORTED_MODULE_3__["DailyReturnService"]
      }];
    };

    MainRiderPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-main-rider-page",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-rider-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/rider/main-rider-page/main-rider-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-rider-page.component.scss */
      "./src/app/tab2/rider/main-rider-page/main-rider-page.component.scss"))["default"]]
    })], MainRiderPageComponent);
    /***/
  },

  /***/
  "./src/app/tab2/tab2-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab2/tab2-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _admin_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin/item-edit/item-edit.component */
    "./src/app/tab2/admin/item-edit/item-edit.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _admin_rider_select_rider_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/rider-select/rider-select.component */
    "./src/app/tab2/admin/rider-select/rider-select.component.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_4__["Tab2Page"]
    }, {
      path: 'riderSelect/:id',
      component: _admin_rider_select_rider_select_component__WEBPACK_IMPORTED_MODULE_5__["RiderSelectComponent"]
    }, {
      path: 'itemEdit/:id',
      component: _admin_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_1__["ItemEditComponent"]
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/tab2/tab2-routing.module.ts");
    /* harmony import */


    var _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin/main-page/main-page.component */
    "./src/app/tab2/admin/main-page/main-page.component.ts");
    /* harmony import */


    var _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/item-list/item-list.component */
    "./src/app/tab2/admin/item-list/item-list.component.ts");
    /* harmony import */


    var _admin_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/item-edit/item-edit.component */
    "./src/app/tab2/admin/item-edit/item-edit.component.ts");
    /* harmony import */


    var _admin_rider_select_rider_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/rider-select/rider-select.component */
    "./src/app/tab2/admin/rider-select/rider-select.component.ts");
    /* harmony import */


    var _rider_main_rider_page_main_rider_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./rider/main-rider-page/main-rider-page.component */
    "./src/app/tab2/rider/main-rider-page/main-rider-page.component.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
      declarations: [_admin_rider_select_rider_select_component__WEBPACK_IMPORTED_MODULE_11__["RiderSelectComponent"], _rider_main_rider_page_main_rider_page_component__WEBPACK_IMPORTED_MODULE_12__["MainRiderPageComponent"], _tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"], _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemListComponent"], _admin_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_10__["ItemEditComponent"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9EOlxcc2lkZUNhci9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4gIFxyXG4iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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


    var _app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Tab2Page = function Tab2Page(appSetting, route) {
      _classCallCheck(this, Tab2Page);

      this.appSetting = appSetting;
      this.route = route; //this.route.navigateByUrl('tabs/tab2');
    };

    Tab2Page.ctorParameters = function () {
      return [{
        type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    })], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map