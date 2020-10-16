function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1AdminAddToInvoiceAddToInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n      \r\n        <ion-label lines=\"none\">\r\n          <h2>{{ this.foodData.itemName }}</h2>\r\n          <h3>{{ this.foodData.price }}</h3>\r\n          <h3>{{ this.appSetting.resName(foodData.resturant_id) }}</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n     \r\n        <ion-label>\r\n          <h2>Please enter the quantity</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"calculator-outline\"></ion-icon> Quantity <ion-text *ngIf=\"this.orderDetail.itemQty===0\" color=\"danger\">\r\n            ***\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.itemQty\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter the Discount amount</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"cash-outline\"></ion-icon> Discount\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.discount\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n      \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter remark</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon> Remark\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.remark\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item lines=\"none\">\r\n    \r\n      <ion-label>\r\n        <h2>Total</h2>\r\n        <h3>{{this.totalAmount()}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.back()\" color=\"light\">\r\n          Back\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.addToInvoice()\" color=\"light\">\r\n          Add to Invoice\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/delivery-pending/delivery-pending.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/delivery-pending/delivery-pending.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1AdminDeliveryPendingDeliveryPendingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"all\">\r\n     <!----- <ion-segment-button (click)=\"this.appSetting.displayFunction('pending')\" value=\"Pending\" >\r\n        <ion-label>Pending</ion-label>\r\n      </ion-segment-button>----->\r\n      <ion-segment-button (click)=\"this.appSetting.displayFunction('no')\" value=\"Rejected\">\r\n        <ion-label>Pending</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button (click)=\"this.appSetting.displayFunction('yes')\" value=\"Acepted\">\r\n        <ion-label>Acepted</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button (click)=\"this.appSetting.displayFunction('delivering')\" value=\"Delivering\">\r\n        <ion-label>Delivering</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ng-container *ngFor=\"let x of this.appSetting.orderTransationList\">\r\n    <app-resturant-individual-order *ngIf=\"x\" [orderNo]=x.orderModel.id>\r\n    </app-resturant-individual-order>\r\n  </ng-container>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/item-list/item-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/item-list/item-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1AdminItemListItemListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n  <ion-refresher-content></ion-refresher-content>\r\n</ion-refresher>\r\n\r\n<ion-card *ngFor=\"let i of this.appSetting.menuFoodDataList\">\r\n  <ion-item>\r\n\r\n    <ion-label>\r\n      <h2>{{ i.itemName }}</h2>\r\n      <h3>{{ i.price }}</h3>\r\n      <p>{{ this.appSetting.resName(i.resturant_id) }}</p>\r\n    </ion-label>\r\n    <ion-button routerLink=\"/managmenet/tabs/tab1/add/{{ i.id }}\" color=\"secondary\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-item>\r\n</ion-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/main-page/main-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/main-page/main-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1AdminMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-item-list  *ngIf=\"this.appSetting.adminProcess==='list'\"></app-item-list>\r\n<app-add-to-invoice *ngIf=\"this.appSetting.adminProcess==='new'\"></app-add-to-invoice>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1AdminPendingItemEditPendingItemEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n       \r\n        <ion-label lines=\"none\">\r\n          <h2>{{ this.foodData.itemName }}</h2>\r\n          <h3>{{ this.foodData.price }}</h3>\r\n          <h3>{{ this.appSetting.resName(foodData.resturant_id) }}</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n    \r\n        <ion-label>\r\n          <h2>Please enter the quantity</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"calculator-outline\"></ion-icon> Quantity <ion-text *ngIf=\"this.orderDetail.itemQty===0\" color=\"danger\">\r\n            ***\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.itemQty\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n     \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter the Discount amount</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"cash-outline\"></ion-icon> Discount\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.discount\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n    \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter remark</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon> Remark\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.remark\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item lines=\"none\">\r\n  \r\n      <ion-label>\r\n        <h2>Total</h2>\r\n        <h3>{{this.totalAmount()}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.back()\" color=\"light\">\r\n          Back\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.addToInvoice()\" color=\"light\">\r\n          Update Invoice\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-card/resturant-card.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-card/resturant-card.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1ResturantResturantCardResturantCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"this.appSetting.loginType === 'admin'\">\r\n  <ng-container *ngIf=\"this.orderDetail.isPickUpResturant === true\">\r\n    <ion-label color=\"primary\">\r\n      <p><ion-icon name=\"checkmark-circle-outline\"></ion-icon>Resturant</p>\r\n    </ion-label>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"this.orderDetail.isPickUpRider === true\">\r\n    <ion-label color=\"primary\">\r\n      <p><ion-icon name=\"checkmark-circle-outline\"></ion-icon>Rider</p>\r\n    </ion-label>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    <ng-container *ngIf=\"this.orderDetail.status === 'no'\">\r\n      <ion-text color=\"danger\">Please Check!</ion-text>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"this.orderDetail.status === 'yes'\">\r\n      <ion-text color=\"success\">Acepted</ion-text>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"this.orderDetail.status === 'pending'\">\r\n      <ion-text color=\"secondary\">Processing</ion-text>\r\n    </ng-container>\r\n    <p>{{ this.foodName(orderDetail.itemID).toString() }}</p>\r\n    <p>Quantity:{{ orderDetail.itemQty }}</p>\r\n    <p>Discount:{{ orderDetail.discount }}</p>\r\n    <p>Price:{{ orderDetail.itemFinalPrice }}</p>\r\n  </ion-label>\r\n  <ng-container *ngIf=\"this.orderDetail.status === 'pending'\">\r\n    <ion-checkbox\r\n      [(ngModel)]=\"available\"\r\n      (ngModelChange)=\"resendListFun($event)\"\r\n    ></ion-checkbox>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"this.orderDetail.status === 'no'\">\r\n    <ion-button\r\n      routerLink=\"/managmenet/tabs/tab1/pendingEdit/{{\r\n        orderDetail.orderDetailID\r\n      }}\"\r\n      color=\"secondary\"\r\n    >\r\n      <ion-icon name=\"create-outline\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button\r\n      (click)=\"this.onDelete(orderDetail.orderDetailID)\"\r\n      color=\"danger\"\r\n    >\r\n      <ion-icon name=\"trash-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ng-container>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label color=\"success\">\r\n    <p>Remark:{{ orderDetail.remark }}</p>\r\n  </ion-label>\r\n</ion-item>\r\n<ng-container\r\n  *ngIf=\"this.available === false && this.appSetting.loginType === 'resturant'\"\r\n>\r\n<!-------\r\n  <ion-item>\r\n    <ion-label color=\"danger\" position=\"floating\">Comment</ion-label>\r\n    <ion-input\r\n      [(ngModel)]=\"this.comment\"\r\n      (ngModelChange)=\"resendListKeyPress($event)\"\r\n      type=\"text\"\r\n      placeholder=\"eg: Only four item available\"\r\n    ></ion-input>\r\n  </ion-item>----->\r\n</ng-container>\r\n<ng-container\r\n  *ngIf=\"orderDetail.status === 'no' && this.appSetting.loginType === 'admin'\"\r\n>\r\n<!--------\r\n  <ion-item>\r\n    <ion-label color=\"danger\" position=\"floating\">Comment</ion-label>\r\n    <ion-input\r\n      value=\"{{ orderDetail.comment }}\"\r\n      type=\"text\"\r\n      placeholder=\"eg: Only four item available\"\r\n      readonly\r\n    >\r\n    </ion-input>\r\n  </ion-item>\r\n  ------->\r\n</ng-container>\r\n<hr />\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1ResturantResturantIndividualOrderResturantIndividualOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container\r\n  *ngIf=\"\r\n    this.data !== null &&\r\n    this.status() === this.appSetting.displaySetting &&\r\n    this.appSetting.displaySetting !== 'delivering' &&\r\n    this.data.orderModel.status !== 'delivering' && this.data.orderModel.status !== 'delivered' \r\n  \"\r\n>\r\n  <ion-card\r\n    *ngIf=\"\r\n      this.data !== null && this.status() === this.appSetting.displaySetting\r\n    \"\r\n  >\r\n    <ion-card-content>\r\n      <ion-item>\r\n        \r\n        <ion-label>\r\n          <h2>\r\n            Order: {{ this.data.orderModel.id }}\r\n            <ng-container *ngIf=\"this.data.orderModel.status !== 'delivering'\">\r\n              <ng-container *ngIf=\"this.status() === 'no'\">\r\n                <ion-label color=\"secondary\">Order!</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'pending'\">\r\n                <ion-label color=\"secondary\">Processing</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'yes'\">\r\n                <ion-label color=\"success\">Accepted</ion-label>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"this.data.orderModel.status === 'delivering'\">\r\n              <ion-label color=\"warning\">In Delivery Process</ion-label>\r\n            </ng-container>\r\n          </h2>\r\n          <p>Date: {{ this.data.orderModel.orderDate | date }}</p>\r\n          <p>Item Price Amount: {{ this.total()-this.data.orderModel.deliveryCharegs }}</p>\r\n          <p>Delivery Amount: {{ this.data.orderModel.deliveryCharegs }}</p>\r\n          <p>Total Amount: {{ this.total() }}</p>\r\n        </ion-label>\r\n        <!--------\r\n        <ng-container *ngIf=\"this.appSetting.loginType === 'resturant'\">\r\n          <ng-container\r\n            *ngIf=\"!this.appSetting.resendBtn(this.data.orderModel.id)\"\r\n          >\r\n            <ion-button (click)=\"sendToServer()\" color=\"danger\">\r\n              <ion-icon name=\"thumbs-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n          <ng-container\r\n            *ngIf=\"this.appSetting.resendBtn(this.data.orderModel.id)\"\r\n          >\r\n            <ion-button (click)=\"sendToServer()\" color=\"secondary\">\r\n              <ion-icon name=\"thumbs-up-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n        </ng-container>\r\n------>\r\n        \r\n      </ion-item>\r\n\r\n      <ion-list-header>\r\n        <ion-label>\r\n          <h3>\r\n            Order Detail Descriptions [Qty:{{\r\n              this.data.orderDetailModels.length\r\n            }}]\r\n          </h3>\r\n        </ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible === false\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n\r\n      <ng-container *ngIf=\"this.itemVisible === true\">\r\n        <ng-container *ngFor=\"let item of data.orderDetailModels\">\r\n          <app-resturant-card *ngIf=\"item\" [data]=\"item\"></app-resturant-card>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ion-list-header *ngIf=\"this.itemVisible === true\">\r\n        <ion-label></ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible !== true\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n    </ion-card-content>\r\n\r\n    <ng-container *ngIf=\"this.appSetting.loginType === 'admin'\">\r\n      <ng-container *ngIf=\"this.data.orderModel.status !== 'delivering'\">\r\n        <ng-container>\r\n          <ion-toolbar>\r\n          <ion-buttons slot=\"end\">\r\n  <!-----        <ion-button\r\n            *ngIf=\"this.status() === 'no'\"\r\n            (click)=\"sendToServer()\"\r\n            color=\"warning\"\r\n          >\r\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n          </ion-button>----->\r\n\r\n         \r\n\r\n          <ion-button\r\n            (click)=\"onDelete(this.data.orderModel.id)\"\r\n            color=\"danger\"\r\n          >\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n\r\n          <ion-button\r\n          *ngIf=\"this.status() === 'yes'\"\r\n          routerLink=\"/managmenet/tabs/tab2/riderSelect/{{ Orderid }}\"\r\n          color=\"secondary\"\r\n        >\r\n          <ion-icon name=\"bicycle-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n          <ion-button *ngIf=\"this.status() === 'no'\" (click)=\"sendToServer()\" color=\"secondary\">\r\n            <ion-icon name=\"thumbs-up-outline\"></ion-icon>\r\n          </ion-button>\r\n\r\n          <ion-button routerLink=\"/managmenet/tabs/tab1/customerInfo/{{ Orderid }}\" color=\"success\">\r\n            <ion-icon name=\"location-outline\"></ion-icon>\r\n          </ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n        </ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ion-card>\r\n</ng-container>\r\n\r\n\r\n<ng-container\r\n  *ngIf=\"\r\n    this.data !== null &&\r\n    this.appSetting.displaySetting === 'delivering' &&\r\n    (this.data.orderModel.status === 'delivering' && \r\n    this.data.orderModel.status.toString() !== 'delivered')\r\n  \"\r\n>\r\n  <ion-card\r\n    *ngIf=\"this.data !== null && this.data.orderModel.status === 'delivering'\"\r\n  >\r\n    <ion-card-content>\r\n      <ion-item>\r\n      \r\n        <ion-label>\r\n          <h2>\r\n            Order: {{ this.data.orderModel.id }}\r\n            <ng-container *ngIf=\"this.data.orderModel.status !== 'delivering'\">\r\n              <ng-container *ngIf=\"this.status() === 'no'\">\r\n                <ion-label color=\"danger\">Rejected</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'pending'\">\r\n                <ion-label color=\"secondary\">Processing</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'yes'\">\r\n                <ion-label color=\"success\">Accepted</ion-label>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container\r\n              *ngIf=\"\r\n                this.appSetting.loginType === 'admin' &&\r\n                this.data.orderModel.status === 'delivering'\r\n              \"\r\n            >\r\n              <ion-label color=\"warning\">In Delivery Process</ion-label>\r\n            </ng-container>\r\n\r\n            <ng-container\r\n              *ngIf=\"\r\n                this.appSetting.loginType === 'resturant' &&\r\n                this.data.orderModel.status === 'delivering'\r\n              \"\r\n            >\r\n              <ion-label color=\"secondary\">\r\n                <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n              </ion-label>\r\n            </ng-container>\r\n          </h2>\r\n          <p>Date: {{ this.data.orderModel.orderDate | date }}</p>\r\n          <p>Item Price Amount: {{ this.total()-this.data.orderModel.deliveryCharegs }}</p>\r\n          <p>Delivery Amount: {{ this.data.orderModel.deliveryCharegs }}</p>\r\n          <p>Total Amount: {{ this.total() }}</p>\r\n        </ion-label>\r\n        <ng-container\r\n          *ngIf=\"\r\n            this.appSetting.loginType === 'resturant' &&\r\n            this.data.orderModel.status !== 'delivering'\r\n          \"\r\n        >\r\n          <ng-container\r\n            *ngIf=\"!this.appSetting.resendBtn(this.data.orderModel.id)\"\r\n          >\r\n            <ion-button (click)=\"sendToServer()\" color=\"danger\">\r\n              <ion-icon name=\"thumbs-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n          <ng-container\r\n            *ngIf=\"this.appSetting.resendBtn(this.data.orderModel.id)\"\r\n          >\r\n            <ion-button (click)=\"sendToServer()\" color=\"secondary\">\r\n              <ion-icon name=\"thumbs-up-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container\r\n          *ngIf=\"\r\n            this.appSetting.loginType === 'resturant' &&\r\n            this.data.orderModel.status === 'delivering'\r\n          \"\r\n        >\r\n          <ng-container>\r\n            <ion-button\r\n              (click)=\"delivryRecordSave(this.data.orderModel.id)\"\r\n              color=\"success\"\r\n            >\r\n              <ion-icon name=\"bicycle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"this.appSetting.loginType === 'admin'\">\r\n          <ng-container *ngIf=\"this.data.orderModel.status !== 'delivering'\">\r\n            <ng-container>\r\n              <ion-button\r\n                *ngIf=\"this.status() === 'no'\"\r\n                (click)=\"sendToServer()\"\r\n                color=\"secondary\"\r\n              >\r\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                *ngIf=\"this.status() === 'yes'\"\r\n                routerLink=\"/managmenet/tabs/tab2/riderSelect/{{ Orderid }}\"\r\n                color=\"success\"\r\n              >\r\n                <ion-icon name=\"bicycle-outline\"></ion-icon>\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                (click)=\"onDelete(this.data.orderModel.id)\"\r\n                color=\"danger\"\r\n              >\r\n                <ion-icon name=\"trash\"></ion-icon>\r\n              </ion-button>\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"this.appSetting.loginType === 'rider'\">\r\n          <ion-button (click)=\"sendToServer()\" color=\"success\">\r\n            <ion-icon name=\"golf-outline\"></ion-icon>\r\n          </ion-button>\r\n\r\n          <ion-button routerLink=\"customerInfo/{{ Orderid }}\" color=\"danger\">\r\n            <ion-icon name=\"location-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-list-header>\r\n        <ion-label>\r\n          <h3>\r\n            Order Detail Descriptions [Qty:{{\r\n              this.data.orderDetailModels.length\r\n            }}]\r\n          </h3>\r\n        </ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible !== true\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n\r\n      <ng-container *ngIf=\"this.itemVisible === true\">\r\n        <ng-container *ngFor=\"let item of data.orderDetailModels\">\r\n          <app-resturant-card *ngIf=\"item\" [data]=\"item\"></app-resturant-card>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ion-list-header *ngIf=\"this.itemVisible === true\">\r\n        <ion-label></ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible !== true\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ng-container>\r\n\r\n\r\n\r\n<ng-container\r\n  *ngIf=\"this.data !== null  && this.appSetting.displaySetting === 'delivered' && this.data.orderModel.status === 'delivered'\"\r\n>\r\n  <ion-card\r\n    *ngIf=\"this.data !== null && this.data.orderModel.status === 'delivered'\"\r\n  >\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h2>\r\n            Order: {{ this.data.orderModel.id }}\r\n            <ng-container >\r\n              <ng-container *ngIf=\"this.status() === 'no'\">\r\n                <ion-label color=\"danger\">Rejected</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'pending'\">\r\n                <ion-label color=\"secondary\">Processing</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'yes'\">\r\n                <ion-label color=\"success\">Accepted</ion-label>\r\n              </ng-container>\r\n            </ng-container>\r\n          </h2>\r\n          <p>Date: {{ this.data.orderModel.orderDate | date }}</p>\r\n          <p>Total Amount: {{ this.total() }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-list-header>\r\n        <ion-label>\r\n          <h3>\r\n            Order Detail Descriptions [Qty:{{\r\n              this.data.orderDetailModels.length\r\n            }}]\r\n          </h3>\r\n        </ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible === false\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n\r\n      <ng-container *ngIf=\"this.itemVisible === true\">\r\n        <ng-container *ngFor=\"let item of data.orderDetailModels\">\r\n          <app-resturant-card *ngIf=\"item\" [data]=\"item\"></app-resturant-card>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ion-list-header *ngIf=\"this.itemVisible === true\">\r\n        <ion-label></ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible !== true\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-main/resturant-main.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-main/resturant-main.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1ResturantResturantMainResturantMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <ng-container *ngFor=\"let x of this.appSetting.orderTransationList\">\r\n        <app-resturant-individual-order *ngIf=\"x\" [orderNo]=x.orderModel.id>\r\n        </app-resturant-individual-order>\r\n    </ng-container>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/customer-info/customer-info.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/customer-info/customer-info.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1RiderCustomerInfoCustomerInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\"> </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shipping Information</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Client Name\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"orderData.clientName\"\r\n              type=\"text\"\r\n              readonly\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Address\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"orderData.clientAddress\"\r\n              type=\"text\"\r\n              readonly\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Flat No\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"orderData.clitentFlatNo\"\r\n              type=\"text\"\r\n              readonly\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Phone\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"orderData.clitentPhone\"\r\n              type=\"tel\"\r\n              readonly\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-grid fixed>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-button\r\n                  (click)=\"onClick()\"\r\n                  expand=\"block\"\r\n                  color=\"success\"\r\n                  shape=\"round\"\r\n                >\r\n                  Location\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/rider-main-page/rider-main-page.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/rider-main-page/rider-main-page.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1RiderRiderMainPageRiderMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n<ion-content>\r\n\r\n  <ng-container *ngFor=\"let x of this.appSetting.orderTransationList\">\r\n    <app-resturant-individual-order *ngIf=\"x\" [orderNo]=x.orderModel.id>\r\n    </app-resturant-individual-order>\r\n  </ng-container>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" *ngIf=\"this.appSetting.adminProcess==='list'\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-select\r\n            (ngModelChange)=\"onSearchResturant($event)\"\r\n            [(ngModel)]=\"searchResturant\"\r\n            placeholder=\"Resturant\"\r\n          >\r\n            <ion-select-option\r\n              *ngFor=\"let item of this.appSetting.resturandDataList\"\r\n              [value]=\"item.id\"\r\n              >{{item.shopname}}</ion-select-option\r\n            >\r\n          </ion-select>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-searchbar\r\n            [(ngModel)]=\"searchTxt\"\r\n            (ngModelChange)=\"onSearch($event)\"\r\n          ></ion-searchbar>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"this.appSetting.loginType==='resturant'\" translucent>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"all\">\r\n      <ion-segment-button\r\n        (click)=\"this.appSetting.displayFunction('pending')\"\r\n        value=\"Pending\"\r\n      >\r\n        <ion-label>Available?</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button\r\n        (click)=\"this.appSetting.displayFunction('delivering')\"\r\n        value=\"Delivering\"\r\n      >\r\n        <ion-label>Order</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"this.appSetting.loginType==='rider'\" translucent>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"all\">\r\n      <ion-segment-button\r\n        (click)=\"this.appSetting.displayFunction('delivering');this.riderRefresh()\"\r\n        value=\"delivering\"\r\n      >\r\n        <ion-label>Objectives</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button\r\n        (click)=\"this.appSetting.displayFunction('delivered');this.riderRefresh()\"\r\n        value=\"delivered\"\r\n      >\r\n        <ion-label>Delivered</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-main-page *ngIf=\"this.appSetting.loginType==='admin'\"></app-main-page>\r\n  <app-resturant-main\r\n    *ngIf=\"this.appSetting.loginType==='resturant'\"\r\n  ></app-resturant-main>\r\n  <app-rider-main-page\r\n    *ngIf=\"this.appSetting.loginType==='rider'\"\r\n  ></app-rider-main-page>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/Services/deliveryRecord/delivery-record.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Services/deliveryRecord/delivery-record.service.ts ***!
    \********************************************************************/

  /*! exports provided: DeliveryRecordService */

  /***/
  function srcAppServicesDeliveryRecordDeliveryRecordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveryRecordService", function () {
      return DeliveryRecordService;
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

    var DeliveryRecordService = /*#__PURE__*/function () {
      function DeliveryRecordService(http, appSetting) {
        _classCallCheck(this, DeliveryRecordService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/deliveryRecordModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(DeliveryRecordService, [{
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
        key: "putRider",
        value: function putRider(orderID) {
          var _this2 = this;

          var data = null;
          var searchUrl = "".concat(this.appSetting.apiAddress, "/api/deliveryRecordModel/rider?orderID=").concat(orderID);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            var i = -1;

            var temp = _toConsumableArray(_this2.appSetting.orderTransationList);

            temp.forEach(function (x) {
              i = i + 1;

              if (x.orderModel.id === orderID) {
                _this2.appSetting.orderTransationList.splice(i, 1);
              }
            });

            _this2.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this2.appSetting.showError(err);
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var _this3 = this;

          var searchUrl = "".concat(this.url, "/").concat(data.orderID, "?ResturantID=").concat(this.appSetting.resturantID);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            var i = -1;

            var temp = _toConsumableArray(_this3.appSetting.orderTransationList);

            temp.forEach(function (x) {
              i = i + 1;

              if (x.orderModel.id === data.orderID) {
                _this3.appSetting.orderTransationList.splice(i, 1);
              }
            });

            _this3.appSetting.showSuccess();
          }, function (err) {
            console.log(err);

            _this3.appSetting.showError(err);
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

      return DeliveryRecordService;
    }();

    DeliveryRecordService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    DeliveryRecordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], DeliveryRecordService);
    /***/
  },

  /***/
  "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1AdminAddToInvoiceAddToInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWRtaW4vYWRkLXRvLWludm9pY2UvYWRkLXRvLWludm9pY2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AddToInvoiceComponent */

  /***/
  function srcAppTab1AdminAddToInvoiceAddToInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddToInvoiceComponent", function () {
      return AddToInvoiceComponent;
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

    var AddToInvoiceComponent = /*#__PURE__*/function () {
      function AddToInvoiceComponent(appSetting, Router, location, route) {
        _classCallCheck(this, AddToInvoiceComponent);

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
        this.foodData = this.loadData(+this.Router.snapshot.paramMap.get("id"));
      }

      _createClass(AddToInvoiceComponent, [{
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "loadData",
        value: function loadData(id) {
          var result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
          this.appSetting.constFoodDataList.forEach(function (x) {
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
          if (this.validation()) {
            this.orderDetail.itemID = this.foodData.id;
            var itemJ = this.appSetting.itemJoin(this.foodData.id);
            this.appSetting.orderDetailList.push(this.orderDetail);
            var temp = {
              orderDetialModel: this.orderDetail,
              itemName: itemJ.itemName,
              resturantName: itemJ.resturant
            };
            this.appSetting.orderDetailViewList.push(temp);
          }

          this.route.navigateByUrl('/tabs/tab1');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddToInvoiceComponent;
    }();

    AddToInvoiceComponent.ctorParameters = function () {
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

    AddToInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-to-invoice",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-to-invoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-to-invoice.component.scss */
      "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.scss"))["default"]]
    })], AddToInvoiceComponent);
    /***/
  },

  /***/
  "./src/app/tab1/admin/delivery-pending/delivery-pending.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/tab1/admin/delivery-pending/delivery-pending.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1AdminDeliveryPendingDeliveryPendingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWRtaW4vZGVsaXZlcnktcGVuZGluZy9kZWxpdmVyeS1wZW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab1/admin/delivery-pending/delivery-pending.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/tab1/admin/delivery-pending/delivery-pending.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DeliveryPendingComponent */

  /***/
  function srcAppTab1AdminDeliveryPendingDeliveryPendingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveryPendingComponent", function () {
      return DeliveryPendingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../Services/food/food.service */
    "./src/app/Services/food/food.service.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/order/order.service */
    "./src/app/Services/order/order.service.ts");

    var DeliveryPendingComponent = /*#__PURE__*/function () {
      function DeliveryPendingComponent(appSetting, FoodService, orderService) {
        _classCallCheck(this, DeliveryPendingComponent);

        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.orderService = orderService;
        this.firstLoad();
      }

      _createClass(DeliveryPendingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.firstLoad();
        }
      }, {
        key: "firstLoad",
        value: function firstLoad() {
          var _this4 = this;

          this.appSetting.showLoading();
          this.orderService.get().subscribe(function (x) {
            _this4.appSetting.orderTransationList = x;
          }, function (err) {
            return _this4.appSetting.showError(err);
          }, function () {
            _this4.loadFoodModel();
          });
        }
      }, {
        key: "loadFoodModel",
        value: function loadFoodModel() {
          this.appSetting.foodDataList = this.appSetting.menuFoodDataList;
          this.appSetting.loadingClose();
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this5 = this;

          this.orderService.get().subscribe(function (x) {
            _this5.appSetting.orderTransationList = x;
          }, function (err) {
            return _this5.appSetting.showError(err);
          }, function () {
            event.target.complete();
          });
        }
      }]);

      return DeliveryPendingComponent;
    }();

    DeliveryPendingComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }];
    };

    DeliveryPendingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-delivery-pending",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./delivery-pending.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/delivery-pending/delivery-pending.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./delivery-pending.component.scss */
      "./src/app/tab1/admin/delivery-pending/delivery-pending.component.scss"))["default"]]
    })], DeliveryPendingComponent);
    /***/
  },

  /***/
  "./src/app/tab1/admin/item-list/item-list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/tab1/admin/item-list/item-list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1AdminItemListItemListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWRtaW4vaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab1/admin/item-list/item-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tab1/admin/item-list/item-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: ItemListComponent */

  /***/
  function srcAppTab1AdminItemListItemListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemListComponent", function () {
      return ItemListComponent;
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


    var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/food/food.service */
    "./src/app/Services/food/food.service.ts");
    /* harmony import */


    var src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/resturantModel/resturant-model.service */
    "./src/app/Services/resturantModel/resturant-model.service.ts");

    var ItemListComponent = /*#__PURE__*/function () {
      function ItemListComponent(appSetting, FoodService, ResturantModelService) {
        _classCallCheck(this, ItemListComponent);

        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.ResturantModelService = ResturantModelService;
      }

      _createClass(ItemListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "refresh",
        value: function refresh(e) {
          this.loadData(e);
        }
      }, {
        key: "loadData",
        value: function loadData(e) {
          var _this6 = this;

          this.FoodService.getActive().subscribe(function (x) {
            return _this6.appSetting.menuFoodDataList = x;
          }, function (err) {
            return _this6.appSetting.showError(err);
          }, function () {
            _this6.appSetting.constFoodDataList = _this6.appSetting.menuFoodDataList;
            e.target.complete();
          });
        }
      }]);

      return ItemListComponent;
    }();

    ItemListComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"]
      }, {
        type: src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_4__["ResturantModelService"]
      }];
    };

    ItemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-item-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/item-list/item-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-list.component.scss */
      "./src/app/tab1/admin/item-list/item-list.component.scss"))["default"]]
    })], ItemListComponent);
    /***/
  },

  /***/
  "./src/app/tab1/admin/main-page/main-page.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/tab1/admin/main-page/main-page.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1AdminMainPageMainPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-avatar,\nion-avatar > img {\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9hZG1pbi9tYWluLXBhZ2UvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXHRhYjFcXGFkbWluXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFiMS9hZG1pbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL2FkbWluL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyLFxyXG5pb24tYXZhdGFyID4gaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czowJTtcclxufSIsImlvbi1hdmF0YXIsXG5pb24tYXZhdGFyID4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab1/admin/main-page/main-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tab1/admin/main-page/main-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppTab1AdminMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
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
        this.appSetting.adminProcess = "list";
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
      selector: "app-main-page",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/main-page/main-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-page.component.scss */
      "./src/app/tab1/admin/main-page/main-page.component.scss"))["default"]]
    })], MainPageComponent);
    /***/
  },

  /***/
  "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1AdminPendingItemEditPendingItemEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWRtaW4vcGVuZGluZy1pdGVtLWVkaXQvcGVuZGluZy1pdGVtLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PendingItemEditComponent */

  /***/
  function srcAppTab1AdminPendingItemEditPendingItemEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingItemEditComponent", function () {
      return PendingItemEditComponent;
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
    /* harmony import */


    var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/order/order.service */
    "./src/app/Services/order/order.service.ts");

    var PendingItemEditComponent = /*#__PURE__*/function () {
      function PendingItemEditComponent(appSetting, Router, location, route, orderService) {
        _classCallCheck(this, PendingItemEditComponent);

        this.appSetting = appSetting;
        this.Router = Router;
        this.location = location;
        this.route = route;
        this.orderService = orderService;
        this.foodData = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        this.orderDetail = {
          orderDetailID: 0,
          itemID: this.foodData.id,
          itemQty: 1,
          itemOrgPrice: 0,
          discount: 0,
          itemFinalPrice: 0,
          orderID: 0,
          status: 'no',
          remark: "",
          comment: "",
          isPickUpResturant: false,
          isPickUpRider: false
        };
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.foodData = this.loadData(this.id);
      }

      _createClass(PendingItemEditComponent, [{
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "loadData",
        value: function loadData(id) {
          var _this7 = this;

          var result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
          var i = -1;
          var temp = this.appSetting.orderTransationList;
          temp.forEach(function (x) {
            x.orderDetailModels.forEach(function (y) {
              if (y.orderDetailID === id) {
                _this7.orderDetail = y;
                result = _this7.loadFoodData(y.itemID);
              }
            });
          });
          return result;
        }
      }, {
        key: "loadFoodData",
        value: function loadFoodData(id) {
          var result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();

          var temp = _toConsumableArray(this.appSetting.menuFoodDataList);

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
          this.appSetting.showLoading();

          if (this.validation()) {
            var itemJ = this.appSetting.itemJoin(this.foodData.id);
            this.orderDetail.status = 'no';
            this.orderService.putOrderDetail(this.orderDetail);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PendingItemEditComponent;
    }();

    PendingItemEditComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]
      }];
    };

    PendingItemEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pending-item-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pending-item-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pending-item-edit.component.scss */
      "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.scss"))["default"]]
    })], PendingItemEditComponent);
    /***/
  },

  /***/
  "./src/app/tab1/resturant/resturant-card/resturant-card.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/tab1/resturant/resturant-card/resturant-card.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1ResturantResturantCardResturantCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-header {\n  --background:rgba(253, 0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9yZXN0dXJhbnQvcmVzdHVyYW50LWNhcmQvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXHRhYjFcXHJlc3R1cmFudFxccmVzdHVyYW50LWNhcmRcXHJlc3R1cmFudC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWIxL3Jlc3R1cmFudC9yZXN0dXJhbnQtY2FyZC9yZXN0dXJhbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3Jlc3R1cmFudC9yZXN0dXJhbnQtY2FyZC9yZXN0dXJhbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDpyZ2JhKDI1MywgMCwgMCwgMCk7XHJcblxyXG59IiwiaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOnJnYmEoMjUzLCAwLCAwLCAwKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab1/resturant/resturant-card/resturant-card.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/tab1/resturant/resturant-card/resturant-card.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ResturantCardComponent */

  /***/
  function srcAppTab1ResturantResturantCardResturantCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResturantCardComponent", function () {
      return ResturantCardComponent;
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


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var ResturantCardComponent = /*#__PURE__*/function () {
      function ResturantCardComponent(appSetting, orderService) {
        _classCallCheck(this, ResturantCardComponent);

        this.appSetting = appSetting;
        this.orderService = orderService;
        this.comment = "";
        this.available = true;
      }

      _createClass(ResturantCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resendListKeyPress",
        value: function resendListKeyPress(e) {
          var _this8 = this;

          var data = {
            orderDetailID: this.orderDetail.orderDetailID,
            comment: this.comment,
            orderNo: this.orderDetail.orderID,
            resturantID: this.appSetting.resturantID
          };
          var i = -1;

          var temp = _toConsumableArray(this.appSetting.resendListFromResturant);

          temp.forEach(function (x) {
            i = i + 1;

            if (x.orderNo === data.orderNo && x.orderDetailID === data.orderDetailID) {
              _this8.appSetting.resendListFromResturant[i].comment = _this8.comment;
            }
          });
        }
      }, {
        key: "resendListFun",
        value: function resendListFun(e) {
          var _this9 = this;

          var data = {
            orderDetailID: this.orderDetail.orderDetailID,
            comment: this.comment,
            orderNo: this.orderDetail.orderID,
            resturantID: this.appSetting.resturantID
          };

          if (this.available === false) {
            this.appSetting.resendListFromResturant.push(data);
          } else {
            var i = -1;

            var temp = _toConsumableArray(this.appSetting.resendListFromResturant);

            temp.forEach(function (x) {
              i = i + 1;

              if (x.orderNo === data.orderNo && x.orderDetailID === data.orderDetailID) {
                _this9.appSetting.resendListFromResturant.splice(i, 1);
              }
            });
          }
        }
      }, {
        key: "foodName",
        value: function foodName(id) {
          var result = "";

          var temp = _toConsumableArray(this.appSetting.foodDataList);

          temp.forEach(function (x) {
            if (x.id === id) {
              result = x.itemName;
            }
          });
          return result;
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this10 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this10.orderService.deleteOrderDetail(id);

              _this10.orderService.get().subscribe(function (x) {
                _this10.appSetting.orderTransationList = x;
              }, function (err) {
                return _this10.appSetting.showError(err);
              }, function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Your file has been deleted.", "success");
              });
            }
          });
        }
      }]);

      return ResturantCardComponent;
    }();

    ResturantCardComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('data')], ResturantCardComponent.prototype, "orderDetail", void 0);
    ResturantCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-resturant-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resturant-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-card/resturant-card.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resturant-card.component.scss */
      "./src/app/tab1/resturant/resturant-card/resturant-card.component.scss"))["default"]]
    })], ResturantCardComponent);
    /***/
  },

  /***/
  "./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1ResturantResturantIndividualOrderResturantIndividualOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcmVzdHVyYW50L3Jlc3R1cmFudC1pbmRpdmlkdWFsLW9yZGVyL3Jlc3R1cmFudC1pbmRpdmlkdWFsLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ResturantIndividualOrderComponent */

  /***/
  function srcAppTab1ResturantResturantIndividualOrderResturantIndividualOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResturantIndividualOrderComponent", function () {
      return ResturantIndividualOrderComponent;
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


    var src_app_Models_orderTransationModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Models/orderTransationModel */
    "./src/app/Models/orderTransationModel.ts");
    /* harmony import */


    var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/order/order.service */
    "./src/app/Services/order/order.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_Services_deliveryRecord_delivery_record_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/deliveryRecord/delivery-record.service */
    "./src/app/Services/deliveryRecord/delivery-record.service.ts");

    var ResturantIndividualOrderComponent = /*#__PURE__*/function () {
      function ResturantIndividualOrderComponent(appSetting, orderService, DeliveryRecordService) {
        _classCallCheck(this, ResturantIndividualOrderComponent);

        this.appSetting = appSetting;
        this.orderService = orderService;
        this.DeliveryRecordService = DeliveryRecordService;
        this.itemVisible = false;
        this.data = new src_app_Models_orderTransationModel__WEBPACK_IMPORTED_MODULE_3__["orderTransationModel"]();
        this.invoiceNo = 0;
        this.recordData = {
          id: 0,
          orderID: 0,
          resturant: 0,
          resurant_date: new Date(),
          customer: false,
          customer_date: new Date()
        };
      }

      _createClass(ResturantIndividualOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itemFilter();
        }
      }, {
        key: "itemFilter",
        value: function itemFilter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this11 = this;

            var temp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    temp = _toConsumableArray(this.appSetting.orderTransationList);
                    temp.forEach(function (x) {
                      if (x.orderModel.id === _this11.Orderid) {
                        _this11.data = x;
                      }
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "total",
        value: function total() {
          var _this12 = this;

          var total = 0;
          this.data.orderDetailModels.forEach(function (x) {
            _this12.invoiceNo = x.orderID;
            total = total + x.itemFinalPrice;
          });
          this.appSetting.orderTransationList.forEach(function (x) {
            if (x.orderModel.id === _this12.Orderid) {
              total = total + x.orderModel.deliveryCharegs;
            }
          });
          return total;
        }
      }, {
        key: "itemVisibleMethod",
        value: function itemVisibleMethod() {
          if (this.itemVisible === false) {
            this.itemVisible = true;
          } else {
            this.itemVisible = false;
          }
        }
      }, {
        key: "status",
        value: function status() {
          var result = "yes";
          var temp = this.data;
          temp.orderDetailModels.forEach(function (x) {
            if (x.status === "pending") {
              result = x.status;
            } else if (x.status === "no") {
              result = x.status;
            }
          });
          return result;
        }
      }, {
        key: "delivryRecordSave",
        value: function delivryRecordSave(id) {
          this.recordData.orderID = id;
          this.recordData.resturant = 0;
          this.appSetting.showLoading();
          this.DeliveryRecordService.put(this.recordData);
        }
      }, {
        key: "sendToServer",
        value: function sendToServer() {
          var _this13 = this;

          if (this.appSetting.loginType === "admin") {
            this.appSetting.showLoading();

            var temp = _toConsumableArray(this.appSetting.resendListFromResturant);

            var dataList = [];
            temp.forEach(function (x) {
              if (x.orderNo === _this13.invoiceNo) {
                dataList.push(x);
              }
            });
            this.orderService.putResend_From_Resturant(this.invoiceNo, dataList);
          }
          /*else if (this.appSetting.loginType === "admin") {
          this.appSetting.showLoading();
          const temp = [...this.appSetting.resendListFromResturant];
          let dataList: resendModel[] = [];
          temp.forEach((x) => {
            if (x.orderNo === this.invoiceNo) {
              dataList.push(x);
            }
          });*/
          //this.orderService.putResend_From_Resturant(this.invoiceNo, dataList);
          //Resend function from Admin to resturant}
          else if (this.appSetting.loginType === "rider") {
              this.appSetting.showLoading();
              this.DeliveryRecordService.putRider(this.Orderid); //this.orderService.putResend_From_Resturant(this.invoiceNo, dataList);
              //Resend function from Admin to resturant
            }
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this14 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this14.orderService["delete"](id);

              var temp = _toConsumableArray(_this14.appSetting.orderTransationList);

              var i = -1;
              temp.forEach(function (x) {
                i = i + 1;

                if (x.orderModel.id === id) {
                  _this14.appSetting.orderTransationList.splice(i, 1);
                }
              });
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      }]);

      return ResturantIndividualOrderComponent;
    }();

    ResturantIndividualOrderComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }, {
        type: src_app_Services_deliveryRecord_delivery_record_service__WEBPACK_IMPORTED_MODULE_6__["DeliveryRecordService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])("orderNo")], ResturantIndividualOrderComponent.prototype, "Orderid", void 0);
    ResturantIndividualOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-resturant-individual-order",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resturant-individual-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resturant-individual-order.component.scss */
      "./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.scss"))["default"]]
    })], ResturantIndividualOrderComponent);
    /***/
  },

  /***/
  "./src/app/tab1/resturant/resturant-main/resturant-main.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/tab1/resturant/resturant-main/resturant-main.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1ResturantResturantMainResturantMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcmVzdHVyYW50L3Jlc3R1cmFudC1tYWluL3Jlc3R1cmFudC1tYWluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab1/resturant/resturant-main/resturant-main.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/tab1/resturant/resturant-main/resturant-main.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ResturantMainComponent */

  /***/
  function srcAppTab1ResturantResturantMainResturantMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResturantMainComponent", function () {
      return ResturantMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../Services/food/food.service */
    "./src/app/Services/food/food.service.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/order/order.service */
    "./src/app/Services/order/order.service.ts");

    var ResturantMainComponent = /*#__PURE__*/function () {
      function ResturantMainComponent(appSetting, FoodService, orderService) {
        _classCallCheck(this, ResturantMainComponent);

        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.orderService = orderService;
        this.firstLoad();
      }

      _createClass(ResturantMainComponent, [{
        key: "firstLoad",
        value: function firstLoad() {
          var _this15 = this;

          this.appSetting.showLoading();

          if (this.appSetting.loginType === "admin") {
            this.orderService.get().subscribe(function (x) {
              _this15.appSetting.orderTransationList = x;
            }, function (err) {
              return _this15.appSetting.showError(err);
            }, function () {
              _this15.loadFoodModel();
            });
          } else if (this.appSetting.loginType === "resturant") {
            this.orderService.getResturantPendings(this.appSetting.resturantID).subscribe(function (x) {
              _this15.appSetting.orderTransationList = x;
            }, function (err) {
              return _this15.appSetting.showError(err);
            }, function () {
              _this15.loadFoodModel();
            });
          } else if (this.appSetting.loginType === "rider") {}
        }
      }, {
        key: "loadFoodModel",
        value: function loadFoodModel() {
          var _this16 = this;

          this.FoodService.getActive().subscribe(function (x) {
            return _this16.appSetting.foodDataList = x;
          }, function (err) {
            return _this16.appSetting.showError(err);
          }, function () {
            return _this16.appSetting.loadingClose();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this17 = this;

          if (this.appSetting.displaySetting === 'pending') {
            this.orderService.getResturantPendings(this.appSetting.resturantID).subscribe(function (x) {
              _this17.appSetting.orderTransationList = x;
            }, function (err) {
              return _this17.appSetting.showError(err);
            }, function () {
              event.target.complete();
            });
          } else if (this.appSetting.displaySetting === 'delivering') {
            this.orderService.getResturantOrder().subscribe(function (x) {
              _this17.appSetting.orderTransationList = x;
            }, function (err) {
              return _this17.appSetting.showError(err);
            }, function () {
              event.target.complete();
            });
          }
        }
      }]);

      return ResturantMainComponent;
    }();

    ResturantMainComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }];
    };

    ResturantMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-resturant-main",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resturant-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-main/resturant-main.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resturant-main.component.scss */
      "./src/app/tab1/resturant/resturant-main/resturant-main.component.scss"))["default"]]
    })], ResturantMainComponent);
    /***/
  },

  /***/
  "./src/app/tab1/rider/customer-info/customer-info.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/tab1/rider/customer-info/customer-info.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1RiderCustomerInfoCustomerInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcmlkZXIvY3VzdG9tZXItaW5mby9jdXN0b21lci1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab1/rider/customer-info/customer-info.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/tab1/rider/customer-info/customer-info.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CustomerInfoComponent */

  /***/
  function srcAppTab1RiderCustomerInfoCustomerInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerInfoComponent", function () {
      return CustomerInfoComponent;
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
    /*! ./../../../app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_Models_orderModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/orderModel */
    "./src/app/Models/orderModel.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var CustomerInfoComponent = /*#__PURE__*/function () {
      function CustomerInfoComponent(appSetting, location, iab, route) {
        _classCallCheck(this, CustomerInfoComponent);

        this.appSetting = appSetting;
        this.location = location;
        this.iab = iab;
        this.route = route;
        this.id = 0;
        this.options = {
          location: "yes",
          hidden: "no",
          zoom: "no",
          hideurlbar: "yes"
        };
        this.orderData = new src_app_Models_orderModel__WEBPACK_IMPORTED_MODULE_4__["orderModel"]();
        this.ltd = '';
        this.lng = '';
        this.id = +this.route.snapshot.paramMap.get("id");
      }

      _createClass(CustomerInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCustomerInfo();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
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
          this.appSetting.showLoading();
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
          var _this18 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              var latitude = position.coords.latitude.toString();
              var longitude = position.coords.longitude.toString();

              _this18.googleMap(latitude, longitude, lat, _long);
            });
          }
        }
      }, {
        key: "getCustomerInfo",
        value: function getCustomerInfo() {
          var _this19 = this;

          var temp = this.appSetting.orderTransationList;
          temp.forEach(function (x) {
            if (x.orderModel.id === _this19.id) {
              _this19.orderData = x.orderModel;
              _this19.ltd = _this19.orderData.latitude;
              _this19.lng = _this19.orderData.longitude;
            }
          });
        }
      }]);

      return CustomerInfoComponent;
    }();

    CustomerInfoComponent.ctorParameters = function () {
      return [{
        type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CustomerInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-customer-info",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customer-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/customer-info/customer-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./customer-info.component.scss */
      "./src/app/tab1/rider/customer-info/customer-info.component.scss"))["default"]]
    })], CustomerInfoComponent);
    /***/
  },

  /***/
  "./src/app/tab1/rider/rider-main-page/rider-main-page.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/tab1/rider/rider-main-page/rider-main-page.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1RiderRiderMainPageRiderMainPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcmlkZXIvcmlkZXItbWFpbi1wYWdlL3JpZGVyLW1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab1/rider/rider-main-page/rider-main-page.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/tab1/rider/rider-main-page/rider-main-page.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RiderMainPageComponent */

  /***/
  function srcAppTab1RiderRiderMainPageRiderMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiderMainPageComponent", function () {
      return RiderMainPageComponent;
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


    var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/food/food.service */
    "./src/app/Services/food/food.service.ts");
    /* harmony import */


    var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/order/order.service */
    "./src/app/Services/order/order.service.ts");

    var RiderMainPageComponent = /*#__PURE__*/function () {
      function RiderMainPageComponent(appSetting, FoodService, orderService) {
        _classCallCheck(this, RiderMainPageComponent);

        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.orderService = orderService;
        this.loadFoodModel();
      }

      _createClass(RiderMainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "firstLoad",
        value: function firstLoad() {
          var _this20 = this;

          if (this.appSetting.displaySetting === "delivering") {
            this.orderService.getRiderPending().subscribe(function (x) {
              _this20.appSetting.orderTransationList = x;
            }, function (err) {
              return _this20.appSetting.showError(err);
            }, function () {
              _this20.appSetting.loadingClose();
            });
          } else if (this.appSetting.displaySetting === "delivered") {
            this.orderService.getRiderComplete().subscribe(function (x) {
              _this20.appSetting.orderTransationList = x;
            }, function (err) {
              return _this20.appSetting.showError(err);
            }, function () {
              _this20.appSetting.loadingClose();
            });
          }
        }
      }, {
        key: "loadFoodModel",
        value: function loadFoodModel() {
          var _this21 = this;

          this.appSetting.showLoading();
          this.FoodService.getActive().subscribe(function (x) {
            return _this21.appSetting.foodDataList = x;
          }, function (err) {
            return _this21.appSetting.showError(err);
          }, function () {
            _this21.appSetting.menuFoodDataList = _this21.appSetting.foodDataList;

            _this21.appSetting.loadingClose(); //this.firstLoad();

          });
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this22 = this;

          if (this.appSetting.displaySetting === "delivering") {
            this.orderService.getRiderPending().subscribe(function (x) {
              _this22.appSetting.orderTransationList = x;
            }, function (err) {
              return _this22.appSetting.showError(err);
            }, function () {
              event.target.complete();
            });
          } else if (this.appSetting.displaySetting === "delivered") {
            this.orderService.getRiderComplete().subscribe(function (x) {
              _this22.appSetting.orderTransationList = x;
            }, function (err) {
              return _this22.appSetting.showError(err);
            }, function () {
              event.target.complete();
            });
          } else {
            this.orderService.getRiderPending().subscribe(function (x) {
              _this22.appSetting.orderTransationList = x;
            }, function (err) {
              return _this22.appSetting.showError(err);
            }, function () {
              event.target.complete();
            });
          }
        }
      }]);

      return RiderMainPageComponent;
    }();

    RiderMainPageComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }, {
        type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }];
    };

    RiderMainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-rider-main-page",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rider-main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/rider-main-page/rider-main-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rider-main-page.component.scss */
      "./src/app/tab1/rider/rider-main-page/rider-main-page.component.scss"))["default"]]
    })], RiderMainPageComponent);
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _admin_pending_item_edit_pending_item_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin/pending-item-edit/pending-item-edit.component */
    "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.ts");
    /* harmony import */


    var _admin_delivery_pending_delivery_pending_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin/delivery-pending/delivery-pending.component */
    "./src/app/tab1/admin/delivery-pending/delivery-pending.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin/add-to-invoice/add-to-invoice.component */
    "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.ts");
    /* harmony import */


    var _rider_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./rider/customer-info/customer-info.component */
    "./src/app/tab1/rider/customer-info/customer-info.component.ts");

    var routes = [{
      path: "",
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]
    }, {
      path: "add/:id",
      component: _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_6__["AddToInvoiceComponent"]
    }, {
      path: "deliveryPending",
      component: _admin_delivery_pending_delivery_pending_component__WEBPACK_IMPORTED_MODULE_2__["DeliveryPendingComponent"]
    }, {
      path: "pendingEdit/:id",
      component: _admin_pending_item_edit_pending_item_edit_component__WEBPACK_IMPORTED_MODULE_1__["PendingItemEditComponent"]
    }, {
      path: "customerInfo/:id",
      component: _rider_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_7__["CustomerInfoComponent"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _admin_delivery_pending_delivery_pending_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin/delivery-pending/delivery-pending.component */
    "./src/app/tab1/admin/delivery-pending/delivery-pending.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");
    /* harmony import */


    var _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/item-list/item-list.component */
    "./src/app/tab1/admin/item-list/item-list.component.ts");
    /* harmony import */


    var _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/add-to-invoice/add-to-invoice.component */
    "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.ts");
    /* harmony import */


    var _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/main-page/main-page.component */
    "./src/app/tab1/admin/main-page/main-page.component.ts");
    /* harmony import */


    var _resturant_resturant_main_resturant_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./resturant/resturant-main/resturant-main.component */
    "./src/app/tab1/resturant/resturant-main/resturant-main.component.ts");
    /* harmony import */


    var _resturant_resturant_individual_order_resturant_individual_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./resturant/resturant-individual-order/resturant-individual-order.component */
    "./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.ts");
    /* harmony import */


    var _resturant_resturant_card_resturant_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./resturant/resturant-card/resturant-card.component */
    "./src/app/tab1/resturant/resturant-card/resturant-card.component.ts");
    /* harmony import */


    var _admin_pending_item_edit_pending_item_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/pending-item-edit/pending-item-edit.component */
    "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.ts");
    /* harmony import */


    var _rider_rider_main_page_rider_main_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./rider/rider-main-page/rider-main-page.component */
    "./src/app/tab1/rider/rider-main-page/rider-main-page.component.ts");
    /* harmony import */


    var _rider_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./rider/customer-info/customer-info.component */
    "./src/app/tab1/rider/customer-info/customer-info.component.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"], _rider_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_17__["CustomerInfoComponent"], _rider_rider_main_page_rider_main_page_component__WEBPACK_IMPORTED_MODULE_16__["RiderMainPageComponent"], _admin_pending_item_edit_pending_item_edit_component__WEBPACK_IMPORTED_MODULE_15__["PendingItemEditComponent"], _admin_delivery_pending_delivery_pending_component__WEBPACK_IMPORTED_MODULE_1__["DeliveryPendingComponent"], _resturant_resturant_card_resturant_card_component__WEBPACK_IMPORTED_MODULE_14__["ResturantCardComponent"], _resturant_resturant_individual_order_resturant_individual_order_component__WEBPACK_IMPORTED_MODULE_13__["ResturantIndividualOrderComponent"], _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemListComponent"], _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__["MainPageComponent"], _resturant_resturant_main_resturant_main_component__WEBPACK_IMPORTED_MODULE_12__["ResturantMainComponent"], _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_10__["AddToInvoiceComponent"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9EOlxcc2lkZUNhci9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4gIFxyXG4iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/resturantModel/resturant-model.service */
    "./src/app/Services/resturantModel/resturant-model.service.ts");
    /* harmony import */


    var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/food/food.service */
    "./src/app/Services/food/food.service.ts");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(appSetting, FoodService, orderService, ResturantModelService) {
        _classCallCheck(this, Tab1Page);

        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.orderService = orderService;
        this.ResturantModelService = ResturantModelService;
        this.searchTxt = "";
        this.searchResturant = 0;

        if (this.appSetting.loginType === "rider") {
          this.appSetting.displaySetting === "delivering";
        }

        this.loadData();
      }

      _createClass(Tab1Page, [{
        key: "loadData",
        value: function loadData() {
          var _this23 = this;

          if (this.appSetting.menuFoodDataList.length === 0) {
            this.appSetting.showLoading();
            this.FoodService.getActive().subscribe(function (x) {
              return _this23.appSetting.menuFoodDataList = x;
            }, function (err) {
              return _this23.appSetting.showError(err);
            }, function () {
              _this23.appSetting.constFoodDataList = _this23.appSetting.menuFoodDataList;

              _this23.resturantLoaddata();
            });
          }
        }
      }, {
        key: "onSearch",
        value: function onSearch(val) {
          var _this24 = this;

          var temp = _toConsumableArray(this.appSetting.constFoodDataList);

          var z = [];
          temp.forEach(function (x) {
            if (x.itemName.toLowerCase().includes(_this24.searchTxt.toLowerCase())) {
              z.push(x);
            }

            _this24.appSetting.menuFoodDataList = z;
          });

          if (this.searchTxt === "") {
            this.appSetting.menuFoodDataList = temp;
          }
        }
      }, {
        key: "onSearchResturant",
        value: function onSearchResturant(val) {
          var _this25 = this;

          this.searchResturant = val;

          var temp = _toConsumableArray(this.appSetting.constFoodDataList);

          var z = [];
          temp.forEach(function (x) {
            if (x.resturant_id === _this25.searchResturant) {
              z.push(x);
            }

            _this25.appSetting.menuFoodDataList = z;
          });

          if (this.searchResturant === 0) {
            this.appSetting.menuFoodDataList = temp;
          }
        }
      }, {
        key: "resName",
        value: function resName(id) {
          var res = "";
          this.appSetting.resturandDataList.forEach(function (x) {
            if (x.id === id) {
              res = x.shopname;
            }
          });
          return res;
        }
      }, {
        key: "resturantLoaddata",
        value: function resturantLoaddata() {
          var _this26 = this;

          if (this.appSetting.resturandDataList.length === 0) {
            this.ResturantModelService.get().subscribe(function (x) {
              return _this26.appSetting.resturandDataList = x;
            }, function (err) {
              return _this26.appSetting.showError(err);
            }, function () {
              _this26.appSetting.loadingClose();
            });
          }
        }
      }, {
        key: "riderRefresh",
        value: function riderRefresh() {
          var _this27 = this;

          this.appSetting.showLoading();

          if (this.appSetting.displaySetting === "delivering") {
            this.orderService.getRiderPending().subscribe(function (x) {
              _this27.appSetting.orderTransationList = x;
            }, function (err) {
              return _this27.appSetting.showError(err);
            }, function () {
              _this27.appSetting.loadingClose();
            });
          } else if (this.appSetting.displaySetting === "delivered") {
            this.orderService.getRiderComplete().subscribe(function (x) {
              _this27.appSetting.orderTransationList = x;
            }, function (err) {
              return _this27.appSetting.showError(err);
            }, function () {
              _this27.appSetting.loadingClose();
            });
          } else {
            this.orderService.getRiderPending().subscribe(function (x) {
              _this27.appSetting.orderTransationList = x;
            }, function (err) {
              return _this27.appSetting.showError(err);
            }, function () {
              _this27.appSetting.loadingClose();
            });
          }
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"]
      }, {
        type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_5__["FoodService"]
      }, {
        type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
      }, {
        type: src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_4__["ResturantModelService"]
      }];
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-tab1",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    })], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map