(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n      \r\n        <ion-label lines=\"none\">\r\n          <h2>{{ this.foodData.itemName }}</h2>\r\n          <h3>{{ this.foodData.price }}</h3>\r\n          <h3>{{ this.appSetting.resName(foodData.resturant_id) }}</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n     \r\n        <ion-label>\r\n          <h2>Please enter the quantity</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"calculator-outline\"></ion-icon> Quantity <ion-text *ngIf=\"this.orderDetail.itemQty===0\" color=\"danger\">\r\n            ***\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.itemQty\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter the Discount amount</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"cash-outline\"></ion-icon> Discount\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.discount\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n      \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter remark</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon> Remark\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.remark\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item lines=\"none\">\r\n    \r\n      <ion-label>\r\n        <h2>Total</h2>\r\n        <h3>{{this.totalAmount()}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.back()\" color=\"light\">\r\n          Back\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.addToInvoice()\" color=\"light\">\r\n          Add to Invoice\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/delivery-pending/delivery-pending.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/delivery-pending/delivery-pending.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"all\">\r\n     <!----- <ion-segment-button (click)=\"this.appSetting.displayFunction('pending')\" value=\"Pending\" >\r\n        <ion-label>Pending</ion-label>\r\n      </ion-segment-button>----->\r\n      <ion-segment-button (click)=\"this.appSetting.displayFunction('no')\" value=\"Rejected\">\r\n        <ion-label>Pending</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button (click)=\"this.appSetting.displayFunction('yes')\" value=\"Acepted\">\r\n        <ion-label>Acepted</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button (click)=\"this.appSetting.displayFunction('delivering')\" value=\"Delivering\">\r\n        <ion-label>Delivering</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ng-container *ngFor=\"let x of this.appSetting.orderTransationList\">\r\n    <app-resturant-individual-order *ngIf=\"x\" [orderNo]=x.orderModel.id>\r\n    </app-resturant-individual-order>\r\n  </ng-container>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/item-list/item-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/item-list/item-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n  <ion-refresher-content></ion-refresher-content>\r\n</ion-refresher>\r\n\r\n<ion-card *ngFor=\"let i of this.appSetting.menuFoodDataList\">\r\n  <ion-item>\r\n\r\n    <ion-label>\r\n      <h2>{{ i.itemName }}</h2>\r\n      <h3>{{ i.price }}</h3>\r\n      <p>{{ this.appSetting.resName(i.resturant_id) }}</p>\r\n    </ion-label>\r\n    <ion-button routerLink=\"/managmenet/tabs/tab1/add/{{ i.id }}\" color=\"secondary\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-item>\r\n</ion-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/main-page/main-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/main-page/main-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-item-list  *ngIf=\"this.appSetting.adminProcess==='list'\"></app-item-list>\r\n<app-add-to-invoice *ngIf=\"this.appSetting.adminProcess==='new'\"></app-add-to-invoice>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n       \r\n        <ion-label lines=\"none\">\r\n          <h2>{{ this.foodData.itemName }}</h2>\r\n          <h3>{{ this.foodData.price }}</h3>\r\n          <h3>{{ this.appSetting.resName(foodData.resturant_id) }}</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n    \r\n        <ion-label>\r\n          <h2>Please enter the quantity</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"calculator-outline\"></ion-icon> Quantity <ion-text *ngIf=\"this.orderDetail.itemQty===0\" color=\"danger\">\r\n            ***\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.itemQty\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n     \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter the Discount amount</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"cash-outline\"></ion-icon> Discount\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.discount\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n    \r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter remark</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon> Remark\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.remark\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item lines=\"none\">\r\n  \r\n      <ion-label>\r\n        <h2>Total</h2>\r\n        <h3>{{this.totalAmount()}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.back()\" color=\"light\">\r\n          Back\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.addToInvoice()\" color=\"light\">\r\n          Update Invoice\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-card/resturant-card.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-card/resturant-card.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"this.appSetting.loginType === 'admin'\">\r\n  <ng-container *ngIf=\"this.orderDetail.isPickUpResturant === true\">\r\n    <ion-label color=\"primary\">\r\n      <p><ion-icon name=\"checkmark-circle-outline\"></ion-icon>Resturant</p>\r\n    </ion-label>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"this.orderDetail.isPickUpRider === true\">\r\n    <ion-label color=\"primary\">\r\n      <p><ion-icon name=\"checkmark-circle-outline\"></ion-icon>Rider</p>\r\n    </ion-label>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    <ng-container *ngIf=\"this.orderDetail.status === 'no'\">\r\n      <ion-text color=\"danger\">Please Check!</ion-text>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"this.orderDetail.status === 'yes'\">\r\n      <ion-text color=\"success\">Acepted</ion-text>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"this.orderDetail.status === 'pending'\">\r\n      <ion-text color=\"secondary\">Processing</ion-text>\r\n    </ng-container>\r\n    <p>{{ this.foodName(orderDetail.itemID).toString() }}</p>\r\n    <p>Quantity:{{ orderDetail.itemQty }}</p>\r\n    <p>Discount:{{ orderDetail.discount }}</p>\r\n    <p>Price:{{ orderDetail.itemFinalPrice }}</p>\r\n  </ion-label>\r\n  <ng-container *ngIf=\"this.orderDetail.status === 'pending'\">\r\n    <ion-checkbox\r\n      [(ngModel)]=\"available\"\r\n      (ngModelChange)=\"resendListFun($event)\"\r\n    ></ion-checkbox>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"this.orderDetail.status === 'no'\">\r\n    <ion-button\r\n      routerLink=\"/managmenet/tabs/tab1/pendingEdit/{{\r\n        orderDetail.orderDetailID\r\n      }}\"\r\n      color=\"secondary\"\r\n    >\r\n      <ion-icon name=\"create-outline\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button\r\n      (click)=\"this.onDelete(orderDetail.orderDetailID)\"\r\n      color=\"danger\"\r\n    >\r\n      <ion-icon name=\"trash-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ng-container>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label color=\"success\">\r\n    <p>Remark:{{ orderDetail.remark }}</p>\r\n  </ion-label>\r\n</ion-item>\r\n<ng-container\r\n  *ngIf=\"this.available === false && this.appSetting.loginType === 'resturant'\"\r\n>\r\n<!-------\r\n  <ion-item>\r\n    <ion-label color=\"danger\" position=\"floating\">Comment</ion-label>\r\n    <ion-input\r\n      [(ngModel)]=\"this.comment\"\r\n      (ngModelChange)=\"resendListKeyPress($event)\"\r\n      type=\"text\"\r\n      placeholder=\"eg: Only four item available\"\r\n    ></ion-input>\r\n  </ion-item>----->\r\n</ng-container>\r\n<ng-container\r\n  *ngIf=\"orderDetail.status === 'no' && this.appSetting.loginType === 'admin'\"\r\n>\r\n<!--------\r\n  <ion-item>\r\n    <ion-label color=\"danger\" position=\"floating\">Comment</ion-label>\r\n    <ion-input\r\n      value=\"{{ orderDetail.comment }}\"\r\n      type=\"text\"\r\n      placeholder=\"eg: Only four item available\"\r\n      readonly\r\n    >\r\n    </ion-input>\r\n  </ion-item>\r\n  ------->\r\n</ng-container>\r\n<hr />\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container\r\n  *ngIf=\"\r\n    this.data !== null &&\r\n    this.status() === this.appSetting.displaySetting &&\r\n    this.appSetting.displaySetting !== 'delivering' &&\r\n    this.data.orderModel.status !== 'delivering' && this.data.orderModel.status !== 'delivered' \r\n  \"\r\n>\r\n  <ion-card\r\n    *ngIf=\"\r\n      this.data !== null && this.status() === this.appSetting.displaySetting\r\n    \"\r\n  >\r\n    <ion-card-content>\r\n      <ion-item>\r\n        \r\n        <ion-label>\r\n          <h2>\r\n            Order: {{ this.data.orderModel.id }}\r\n            <ng-container *ngIf=\"this.data.orderModel.status !== 'delivering'\">\r\n              <ng-container *ngIf=\"this.status() === 'no'\">\r\n                <ion-label color=\"secondary\">Order!</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'pending'\">\r\n                <ion-label color=\"secondary\">Processing</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'yes'\">\r\n                <ion-label color=\"success\">Accepted</ion-label>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"this.data.orderModel.status === 'delivering'\">\r\n              <ion-label color=\"warning\">In Delivery Process</ion-label>\r\n            </ng-container>\r\n          </h2>\r\n          <p>Date: {{ this.data.orderModel.orderDate | date }}</p>\r\n          <p>Item Price Amount: {{ this.total()-this.data.orderModel.deliveryCharegs }}</p>\r\n          <p>Delivery Amount: {{ this.data.orderModel.deliveryCharegs }}</p>\r\n          <p>Total Amount: {{ this.total() }}</p>\r\n        </ion-label>\r\n        <!--------\r\n        <ng-container *ngIf=\"this.appSetting.loginType === 'resturant'\">\r\n          <ng-container\r\n            *ngIf=\"!this.appSetting.resendBtn(this.data.orderModel.id)\"\r\n          >\r\n            <ion-button (click)=\"sendToServer()\" color=\"danger\">\r\n              <ion-icon name=\"thumbs-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n          <ng-container\r\n            *ngIf=\"this.appSetting.resendBtn(this.data.orderModel.id)\"\r\n          >\r\n            <ion-button (click)=\"sendToServer()\" color=\"secondary\">\r\n              <ion-icon name=\"thumbs-up-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n        </ng-container>\r\n------>\r\n        \r\n      </ion-item>\r\n\r\n      <ion-list-header>\r\n        <ion-label>\r\n          <h3>\r\n            Order Detail Descriptions [Qty:{{\r\n              this.data.orderDetailModels.length\r\n            }}]\r\n          </h3>\r\n        </ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible === false\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n\r\n      <ng-container *ngIf=\"this.itemVisible === true\">\r\n        <ng-container *ngFor=\"let item of data.orderDetailModels\">\r\n          <app-resturant-card *ngIf=\"item\" [data]=\"item\"></app-resturant-card>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ion-list-header *ngIf=\"this.itemVisible === true\">\r\n        <ion-label></ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible !== true\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n    </ion-card-content>\r\n\r\n    <ng-container *ngIf=\"this.appSetting.loginType === 'admin'\">\r\n      <ng-container *ngIf=\"this.data.orderModel.status !== 'delivering'\">\r\n        <ng-container>\r\n          <ion-toolbar>\r\n          <ion-buttons slot=\"end\">\r\n  <!-----        <ion-button\r\n            *ngIf=\"this.status() === 'no'\"\r\n            (click)=\"sendToServer()\"\r\n            color=\"warning\"\r\n          >\r\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n          </ion-button>----->\r\n\r\n         \r\n\r\n          <ion-button\r\n            (click)=\"onDelete(this.data.orderModel.id)\"\r\n            color=\"danger\"\r\n          >\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n\r\n          <ion-button\r\n          *ngIf=\"this.status() === 'yes'\"\r\n          routerLink=\"/managmenet/tabs/tab2/riderSelect/{{ Orderid }}\"\r\n          color=\"secondary\"\r\n        >\r\n          <ion-icon name=\"bicycle-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n          <ion-button *ngIf=\"this.status() === 'no'\" (click)=\"sendToServer()\" color=\"secondary\">\r\n            <ion-icon name=\"thumbs-up-outline\"></ion-icon>\r\n          </ion-button>\r\n\r\n          <ion-button routerLink=\"/managmenet/tabs/tab1/customerInfo/{{ Orderid }}\" color=\"success\">\r\n            <ion-icon name=\"location-outline\"></ion-icon>\r\n          </ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n        </ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ion-card>\r\n</ng-container>\r\n\r\n\r\n<ng-container\r\n  *ngIf=\"\r\n    this.data !== null &&\r\n    this.appSetting.displaySetting === 'delivering' &&\r\n    (this.data.orderModel.status === 'delivering' && \r\n    this.data.orderModel.status.toString() !== 'delivered')\r\n  \"\r\n>\r\n  <ion-card\r\n    *ngIf=\"this.data !== null && this.data.orderModel.status === 'delivering'\"\r\n  >\r\n    <ion-card-content>\r\n      <ion-item>\r\n      \r\n        <ion-label>\r\n          <h2>\r\n            Order: {{ this.data.orderModel.id }}\r\n            <ng-container *ngIf=\"this.data.orderModel.status !== 'delivering'\">\r\n              <ng-container *ngIf=\"this.status() === 'no'\">\r\n                <ion-label color=\"danger\">Rejected</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'pending'\">\r\n                <ion-label color=\"secondary\">Processing</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'yes'\">\r\n                <ion-label color=\"success\">Accepted</ion-label>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container\r\n              *ngIf=\"\r\n                this.appSetting.loginType === 'admin' &&\r\n                this.data.orderModel.status === 'delivering'\r\n              \"\r\n            >\r\n              <ion-label color=\"warning\">In Delivery Process</ion-label>\r\n            </ng-container>\r\n\r\n            <ng-container\r\n              *ngIf=\"\r\n                this.appSetting.loginType === 'resturant' &&\r\n                this.data.orderModel.status === 'delivering'\r\n              \"\r\n            >\r\n              <ion-label color=\"secondary\">\r\n                <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n              </ion-label>\r\n            </ng-container>\r\n          </h2>\r\n          <p>Date: {{ this.data.orderModel.orderDate | date }}</p>\r\n          <p>Item Price Amount: {{ this.total()-this.data.orderModel.deliveryCharegs }}</p>\r\n          <p>Delivery Amount: {{ this.data.orderModel.deliveryCharegs }}</p>\r\n          <p>Total Amount: {{ this.total() }}</p>\r\n        </ion-label>\r\n        <ng-container\r\n          *ngIf=\"\r\n            this.appSetting.loginType === 'resturant' &&\r\n            this.data.orderModel.status !== 'delivering'\r\n          \"\r\n        >\r\n          <ng-container\r\n            *ngIf=\"!this.appSetting.resendBtn(this.data.orderModel.id)\"\r\n          >\r\n            <ion-button (click)=\"sendToServer()\" color=\"danger\">\r\n              <ion-icon name=\"thumbs-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n          <ng-container\r\n            *ngIf=\"this.appSetting.resendBtn(this.data.orderModel.id)\"\r\n          >\r\n            <ion-button (click)=\"sendToServer()\" color=\"secondary\">\r\n              <ion-icon name=\"thumbs-up-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container\r\n          *ngIf=\"\r\n            this.appSetting.loginType === 'resturant' &&\r\n            this.data.orderModel.status === 'delivering'\r\n          \"\r\n        >\r\n          <ng-container>\r\n            <ion-button\r\n              (click)=\"delivryRecordSave(this.data.orderModel.id)\"\r\n              color=\"success\"\r\n            >\r\n              <ion-icon name=\"bicycle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"this.appSetting.loginType === 'admin'\">\r\n          <ng-container *ngIf=\"this.data.orderModel.status !== 'delivering'\">\r\n            <ng-container>\r\n              <ion-button\r\n                *ngIf=\"this.status() === 'no'\"\r\n                (click)=\"sendToServer()\"\r\n                color=\"secondary\"\r\n              >\r\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                *ngIf=\"this.status() === 'yes'\"\r\n                routerLink=\"/managmenet/tabs/tab2/riderSelect/{{ Orderid }}\"\r\n                color=\"success\"\r\n              >\r\n                <ion-icon name=\"bicycle-outline\"></ion-icon>\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                (click)=\"onDelete(this.data.orderModel.id)\"\r\n                color=\"danger\"\r\n              >\r\n                <ion-icon name=\"trash\"></ion-icon>\r\n              </ion-button>\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"this.appSetting.loginType === 'rider'\">\r\n          <ion-button (click)=\"sendToServer()\" color=\"success\">\r\n            <ion-icon name=\"golf-outline\"></ion-icon>\r\n          </ion-button>\r\n\r\n          <ion-button routerLink=\"customerInfo/{{ Orderid }}\" color=\"danger\">\r\n            <ion-icon name=\"location-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-list-header>\r\n        <ion-label>\r\n          <h3>\r\n            Order Detail Descriptions [Qty:{{\r\n              this.data.orderDetailModels.length\r\n            }}]\r\n          </h3>\r\n        </ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible !== true\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n\r\n      <ng-container *ngIf=\"this.itemVisible === true\">\r\n        <ng-container *ngFor=\"let item of data.orderDetailModels\">\r\n          <app-resturant-card *ngIf=\"item\" [data]=\"item\"></app-resturant-card>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ion-list-header *ngIf=\"this.itemVisible === true\">\r\n        <ion-label></ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible !== true\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ng-container>\r\n\r\n\r\n\r\n<ng-container\r\n  *ngIf=\"this.data !== null  && this.appSetting.displaySetting === 'delivered' && this.data.orderModel.status === 'delivered'\"\r\n>\r\n  <ion-card\r\n    *ngIf=\"this.data !== null && this.data.orderModel.status === 'delivered'\"\r\n  >\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h2>\r\n            Order: {{ this.data.orderModel.id }}\r\n            <ng-container >\r\n              <ng-container *ngIf=\"this.status() === 'no'\">\r\n                <ion-label color=\"danger\">Rejected</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'pending'\">\r\n                <ion-label color=\"secondary\">Processing</ion-label>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.status() === 'yes'\">\r\n                <ion-label color=\"success\">Accepted</ion-label>\r\n              </ng-container>\r\n            </ng-container>\r\n          </h2>\r\n          <p>Date: {{ this.data.orderModel.orderDate | date }}</p>\r\n          <p>Total Amount: {{ this.total() }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-list-header>\r\n        <ion-label>\r\n          <h3>\r\n            Order Detail Descriptions [Qty:{{\r\n              this.data.orderDetailModels.length\r\n            }}]\r\n          </h3>\r\n        </ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible === false\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n\r\n      <ng-container *ngIf=\"this.itemVisible === true\">\r\n        <ng-container *ngFor=\"let item of data.orderDetailModels\">\r\n          <app-resturant-card *ngIf=\"item\" [data]=\"item\"></app-resturant-card>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ion-list-header *ngIf=\"this.itemVisible === true\">\r\n        <ion-label></ion-label>\r\n        <ion-button (click)=\"itemVisibleMethod()\">\r\n          <ion-text color=\"primary\">\r\n            <p *ngIf=\"this.itemVisible !== true\">See All</p>\r\n            <p *ngIf=\"this.itemVisible === true\">Collapse</p>\r\n          </ion-text>\r\n        </ion-button>\r\n      </ion-list-header>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-main/resturant-main.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-main/resturant-main.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <ng-container *ngFor=\"let x of this.appSetting.orderTransationList\">\r\n        <app-resturant-individual-order *ngIf=\"x\" [orderNo]=x.orderModel.id>\r\n        </app-resturant-individual-order>\r\n    </ng-container>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/customer-info/customer-info.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/customer-info/customer-info.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\"> </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shipping Information</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Client Name\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"orderData.clientName\"\r\n              type=\"text\"\r\n              readonly\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Address\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"orderData.clientAddress\"\r\n              type=\"text\"\r\n              readonly\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Flat No\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"orderData.clitentFlatNo\"\r\n              type=\"text\"\r\n              readonly\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Phone\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"orderData.clitentPhone\"\r\n              type=\"tel\"\r\n              readonly\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-grid fixed>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-button\r\n                  (click)=\"onClick()\"\r\n                  expand=\"block\"\r\n                  color=\"success\"\r\n                  shape=\"round\"\r\n                >\r\n                  Location\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/rider-main-page/rider-main-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/rider-main-page/rider-main-page.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n<ion-content>\r\n\r\n  <ng-container *ngFor=\"let x of this.appSetting.orderTransationList\">\r\n    <app-resturant-individual-order *ngIf=\"x\" [orderNo]=x.orderModel.id>\r\n    </app-resturant-individual-order>\r\n  </ng-container>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" *ngIf=\"this.appSetting.adminProcess==='list'\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-select\r\n            (ngModelChange)=\"onSearchResturant($event)\"\r\n            [(ngModel)]=\"searchResturant\"\r\n            placeholder=\"Resturant\"\r\n          >\r\n            <ion-select-option\r\n              *ngFor=\"let item of this.appSetting.resturandDataList\"\r\n              [value]=\"item.id\"\r\n              >{{item.shopname}}</ion-select-option\r\n            >\r\n          </ion-select>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-searchbar\r\n            [(ngModel)]=\"searchTxt\"\r\n            (ngModelChange)=\"onSearch($event)\"\r\n          ></ion-searchbar>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"this.appSetting.loginType==='resturant'\" translucent>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"all\">\r\n      <ion-segment-button\r\n        (click)=\"this.appSetting.displayFunction('pending')\"\r\n        value=\"Pending\"\r\n      >\r\n        <ion-label>Available?</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button\r\n        (click)=\"this.appSetting.displayFunction('delivering')\"\r\n        value=\"Delivering\"\r\n      >\r\n        <ion-label>Order</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"this.appSetting.loginType==='rider'\" translucent>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"all\">\r\n      <ion-segment-button\r\n        (click)=\"this.appSetting.displayFunction('delivering');this.riderRefresh()\"\r\n        value=\"delivering\"\r\n      >\r\n        <ion-label>Objectives</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button\r\n        (click)=\"this.appSetting.displayFunction('delivered');this.riderRefresh()\"\r\n        value=\"delivered\"\r\n      >\r\n        <ion-label>Delivered</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-main-page *ngIf=\"this.appSetting.loginType==='admin'\"></app-main-page>\r\n  <app-resturant-main\r\n    *ngIf=\"this.appSetting.loginType==='resturant'\"\r\n  ></app-resturant-main>\r\n  <app-rider-main-page\r\n    *ngIf=\"this.appSetting.loginType==='rider'\"\r\n  ></app-rider-main-page>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/Services/deliveryRecord/delivery-record.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/Services/deliveryRecord/delivery-record.service.ts ***!
  \********************************************************************/
/*! exports provided: DeliveryRecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryRecordService", function() { return DeliveryRecordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let DeliveryRecordService = class DeliveryRecordService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/deliveryRecordModels`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
            }),
        };
    }
    get() {
        return this.http.get(this.url);
    }
    getSingle(id) {
        const searchUrl = `${this.url}/${id}`;
        return this.http.get(searchUrl);
    }
    post(data) {
        this.http.post(this.url, data, this.httpOptions).subscribe((res) => {
            this.appSetting.showSuccess();
        }, (err) => {
            console.log(err);
        });
    }
    putRider(orderID) {
        let data = null;
        const searchUrl = `${this.appSetting.apiAddress}/api/deliveryRecordModel/rider?orderID=${orderID}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe((res) => {
            let i = -1;
            const temp = [
                ...this.appSetting.orderTransationList,
            ];
            temp.forEach((x) => {
                i = i + 1;
                if (x.orderModel.id === orderID) {
                    this.appSetting.orderTransationList.splice(i, 1);
                }
            });
            this.appSetting.showSuccess();
        }, (err) => {
            console.log(err);
            this.appSetting.showError(err);
        });
    }
    put(data) {
        const searchUrl = `${this.url}/${data.orderID}?ResturantID=${this.appSetting.resturantID}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe((res) => {
            let i = -1;
            const temp = [
                ...this.appSetting.orderTransationList,
            ];
            temp.forEach((x) => {
                i = i + 1;
                if (x.orderModel.id === data.orderID) {
                    this.appSetting.orderTransationList.splice(i, 1);
                }
            });
            this.appSetting.showSuccess();
        }, (err) => {
            console.log(err);
            this.appSetting.showError(err);
        });
    }
    delete(id) {
        const data = null;
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
            }
        });
        xhr.open("DELETE", this.url + "/" + id);
        xhr.send(data);
    }
};
DeliveryRecordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
DeliveryRecordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], DeliveryRecordService);



/***/ }),

/***/ "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWRtaW4vYWRkLXRvLWludm9pY2UvYWRkLXRvLWludm9pY2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddToInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToInvoiceComponent", function() { return AddToInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/foodModel */ "./src/app/Models/foodModel.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let AddToInvoiceComponent = class AddToInvoiceComponent {
    constructor(appSetting, Router, location, route) {
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
    back() {
        this.location.back();
    }
    loadData(id) {
        let result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        this.appSetting.constFoodDataList.forEach((x) => {
            if (x.id === id) {
                result = x;
            }
        });
        return result;
    }
    totalAmount() {
        if (this.orderDetail.itemQty !== 0) {
            this.orderDetail.itemOrgPrice =
                this.orderDetail.itemQty * this.foodData.price;
            this.orderDetail.itemFinalPrice =
                this.orderDetail.itemOrgPrice - this.orderDetail.discount;
            return this.orderDetail.itemFinalPrice.toString();
        }
        else {
            return "0";
        }
    }
    validation() {
        if (this.orderDetail.itemQty === 0) {
            return false;
        }
        return true;
    }
    addToInvoice() {
        if (this.validation()) {
            this.orderDetail.itemID = this.foodData.id;
            let itemJ = this.appSetting.itemJoin(this.foodData.id);
            this.appSetting.orderDetailList.push(this.orderDetail);
            let temp = {
                orderDetialModel: this.orderDetail,
                itemName: itemJ.itemName,
                resturantName: itemJ.resturant
            };
            this.appSetting.orderDetailViewList.push(temp);
        }
        this.route.navigateByUrl('/tabs/tab1');
    }
    ngOnInit() { }
};
AddToInvoiceComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddToInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-to-invoice",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-to-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-to-invoice.component.scss */ "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.scss")).default]
    })
], AddToInvoiceComponent);



/***/ }),

/***/ "./src/app/tab1/admin/delivery-pending/delivery-pending.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/admin/delivery-pending/delivery-pending.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWRtaW4vZGVsaXZlcnktcGVuZGluZy9kZWxpdmVyeS1wZW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab1/admin/delivery-pending/delivery-pending.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/admin/delivery-pending/delivery-pending.component.ts ***!
  \***************************************************************************/
/*! exports provided: DeliveryPendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPendingComponent", function() { return DeliveryPendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/food/food.service */ "./src/app/Services/food/food.service.ts");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/order/order.service */ "./src/app/Services/order/order.service.ts");





let DeliveryPendingComponent = class DeliveryPendingComponent {
    constructor(appSetting, FoodService, orderService) {
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.orderService = orderService;
        this.firstLoad();
    }
    ngOnInit() {
        //this.firstLoad();
    }
    firstLoad() {
        this.appSetting.showLoading();
        this.orderService.get().subscribe((x) => {
            this.appSetting.orderTransationList = x;
        }, (err) => this.appSetting.showError(err), () => {
            this.loadFoodModel();
        });
    }
    loadFoodModel() {
        this.appSetting.foodDataList = this.appSetting.menuFoodDataList;
        this.appSetting.loadingClose();
    }
    refresh(event) {
        this.orderService.get().subscribe((x) => {
            this.appSetting.orderTransationList = x;
        }, (err) => this.appSetting.showError(err), () => {
            event.target.complete();
        });
    }
};
DeliveryPendingComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: _Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"] },
    { type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }
];
DeliveryPendingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-delivery-pending",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delivery-pending.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/delivery-pending/delivery-pending.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delivery-pending.component.scss */ "./src/app/tab1/admin/delivery-pending/delivery-pending.component.scss")).default]
    })
], DeliveryPendingComponent);



/***/ }),

/***/ "./src/app/tab1/admin/item-list/item-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tab1/admin/item-list/item-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWRtaW4vaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab1/admin/item-list/item-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab1/admin/item-list/item-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/food/food.service */ "./src/app/Services/food/food.service.ts");
/* harmony import */ var src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/resturantModel/resturant-model.service */ "./src/app/Services/resturantModel/resturant-model.service.ts");





let ItemListComponent = class ItemListComponent {
    constructor(appSetting, FoodService, ResturantModelService) {
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.ResturantModelService = ResturantModelService;
    }
    ngOnInit() { }
    refresh(e) {
        this.loadData(e);
    }
    loadData(e) {
        this.FoodService.getActive().subscribe((x) => (this.appSetting.menuFoodDataList = x), (err) => this.appSetting.showError(err), () => {
            this.appSetting.constFoodDataList = this.appSetting.menuFoodDataList;
            e.target.complete();
        });
    }
};
ItemListComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"] },
    { type: src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_4__["ResturantModelService"] }
];
ItemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-item-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/item-list/item-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-list.component.scss */ "./src/app/tab1/admin/item-list/item-list.component.scss")).default]
    })
], ItemListComponent);



/***/ }),

/***/ "./src/app/tab1/admin/main-page/main-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tab1/admin/main-page/main-page.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar,\nion-avatar > img {\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9hZG1pbi9tYWluLXBhZ2UvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXHRhYjFcXGFkbWluXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFiMS9hZG1pbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL2FkbWluL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyLFxyXG5pb24tYXZhdGFyID4gaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czowJTtcclxufSIsImlvbi1hdmF0YXIsXG5pb24tYXZhdGFyID4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab1/admin/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab1/admin/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");



let MainPageComponent = class MainPageComponent {
    constructor(appSetting) {
        this.appSetting = appSetting;
        this.appSetting.adminProcess = "list";
    }
    ngOnInit() { }
};
MainPageComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
MainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main-page",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/main-page/main-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-page.component.scss */ "./src/app/tab1/admin/main-page/main-page.component.scss")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWRtaW4vcGVuZGluZy1pdGVtLWVkaXQvcGVuZGluZy1pdGVtLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PendingItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingItemEditComponent", function() { return PendingItemEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/foodModel */ "./src/app/Models/foodModel.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/order/order.service */ "./src/app/Services/order/order.service.ts");








let PendingItemEditComponent = class PendingItemEditComponent {
    constructor(appSetting, Router, location, route, orderService) {
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
    back() {
        this.location.back();
    }
    loadData(id) {
        let result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        let i = -1;
        const temp = this.appSetting.orderTransationList;
        temp.forEach((x) => {
            x.orderDetailModels.forEach(y => {
                if (y.orderDetailID === id) {
                    this.orderDetail = y;
                    result = this.loadFoodData(y.itemID);
                }
            });
        });
        return result;
    }
    loadFoodData(id) {
        let result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        const temp = [...this.appSetting.menuFoodDataList];
        temp.forEach((x) => {
            if (x.id === id) {
                result = x;
            }
        });
        return result;
    }
    totalAmount() {
        if (this.orderDetail.itemQty !== 0) {
            this.orderDetail.itemOrgPrice =
                this.orderDetail.itemQty * this.foodData.price;
            this.orderDetail.itemFinalPrice =
                this.orderDetail.itemOrgPrice - this.orderDetail.discount;
            return this.orderDetail.itemFinalPrice.toString();
        }
        else {
            return "0";
        }
    }
    validation() {
        if (this.orderDetail.itemQty === 0) {
            return false;
        }
        return true;
    }
    addToInvoice() {
        this.appSetting.showLoading();
        if (this.validation()) {
            let itemJ = this.appSetting.itemJoin(this.foodData.id);
            this.orderDetail.status = 'no';
            this.orderService.putOrderDetail(this.orderDetail);
        }
    }
    ngOnInit() { }
};
PendingItemEditComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }
];
PendingItemEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-item-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pending-item-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pending-item-edit.component.scss */ "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.scss")).default]
    })
], PendingItemEditComponent);



/***/ }),

/***/ "./src/app/tab1/resturant/resturant-card/resturant-card.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/resturant/resturant-card/resturant-card.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-header {\n  --background:rgba(253, 0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9yZXN0dXJhbnQvcmVzdHVyYW50LWNhcmQvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXHRhYjFcXHJlc3R1cmFudFxccmVzdHVyYW50LWNhcmRcXHJlc3R1cmFudC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWIxL3Jlc3R1cmFudC9yZXN0dXJhbnQtY2FyZC9yZXN0dXJhbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3Jlc3R1cmFudC9yZXN0dXJhbnQtY2FyZC9yZXN0dXJhbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDpyZ2JhKDI1MywgMCwgMCwgMCk7XHJcblxyXG59IiwiaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOnJnYmEoMjUzLCAwLCAwLCAwKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/resturant/resturant-card/resturant-card.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/resturant/resturant-card/resturant-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResturantCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantCardComponent", function() { return ResturantCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/order/order.service */ "./src/app/Services/order/order.service.ts");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ResturantCardComponent = class ResturantCardComponent {
    constructor(appSetting, orderService) {
        this.appSetting = appSetting;
        this.orderService = orderService;
        this.comment = "";
        this.available = true;
    }
    ngOnInit() { }
    resendListKeyPress(e) {
        let data = {
            orderDetailID: this.orderDetail.orderDetailID,
            comment: this.comment,
            orderNo: this.orderDetail.orderID,
            resturantID: this.appSetting.resturantID
        };
        let i = -1;
        const temp = [...this.appSetting.resendListFromResturant];
        temp.forEach(x => {
            i = i + 1;
            if (x.orderNo === data.orderNo && x.orderDetailID === data.orderDetailID) {
                this.appSetting.resendListFromResturant[i].comment = this.comment;
            }
        });
    }
    resendListFun(e) {
        let data = {
            orderDetailID: this.orderDetail.orderDetailID,
            comment: this.comment,
            orderNo: this.orderDetail.orderID,
            resturantID: this.appSetting.resturantID
        };
        if (this.available === false) {
            this.appSetting.resendListFromResturant.push(data);
        }
        else {
            let i = -1;
            const temp = [...this.appSetting.resendListFromResturant];
            temp.forEach(x => {
                i = i + 1;
                if (x.orderNo === data.orderNo && x.orderDetailID === data.orderDetailID) {
                    this.appSetting.resendListFromResturant.splice(i, 1);
                }
            });
        }
    }
    foodName(id) {
        let result = "";
        const temp = [...this.appSetting.foodDataList];
        temp.forEach(x => {
            if (x.id === id) {
                result = x.itemName;
            }
        });
        return result;
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.orderService.deleteOrderDetail(id);
                this.orderService
                    .get()
                    .subscribe((x) => {
                    this.appSetting.orderTransationList = x;
                }, (err) => this.appSetting.showError(err), () => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Your file has been deleted.", "success");
                });
            }
        });
    }
};
ResturantCardComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('data')
], ResturantCardComponent.prototype, "orderDetail", void 0);
ResturantCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resturant-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resturant-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-card/resturant-card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resturant-card.component.scss */ "./src/app/tab1/resturant/resturant-card/resturant-card.component.scss")).default]
    })
], ResturantCardComponent);



/***/ }),

/***/ "./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcmVzdHVyYW50L3Jlc3R1cmFudC1pbmRpdmlkdWFsLW9yZGVyL3Jlc3R1cmFudC1pbmRpdmlkdWFsLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ResturantIndividualOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantIndividualOrderComponent", function() { return ResturantIndividualOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Models_orderTransationModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/orderTransationModel */ "./src/app/Models/orderTransationModel.ts");
/* harmony import */ var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/order/order.service */ "./src/app/Services/order/order.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_Services_deliveryRecord_delivery_record_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/deliveryRecord/delivery-record.service */ "./src/app/Services/deliveryRecord/delivery-record.service.ts");







let ResturantIndividualOrderComponent = class ResturantIndividualOrderComponent {
    constructor(appSetting, orderService, DeliveryRecordService) {
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
            customer_date: new Date(),
        };
    }
    ngOnInit() {
        this.itemFilter();
    }
    itemFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const temp = [...this.appSetting.orderTransationList];
            temp.forEach((x) => {
                if (x.orderModel.id === this.Orderid) {
                    this.data = x;
                }
            });
        });
    }
    total() {
        let total = 0;
        this.data.orderDetailModels.forEach((x) => {
            this.invoiceNo = x.orderID;
            total = total + x.itemFinalPrice;
        });
        this.appSetting.orderTransationList.forEach((x) => {
            if (x.orderModel.id === this.Orderid) {
                total = total + x.orderModel.deliveryCharegs;
            }
        });
        return total;
    }
    itemVisibleMethod() {
        if (this.itemVisible === false) {
            this.itemVisible = true;
        }
        else {
            this.itemVisible = false;
        }
    }
    status() {
        let result = "yes";
        const temp = this.data;
        temp.orderDetailModels.forEach((x) => {
            if (x.status === "pending") {
                result = x.status;
            }
            else if (x.status === "no") {
                result = x.status;
            }
        });
        return result;
    }
    delivryRecordSave(id) {
        this.recordData.orderID = id;
        this.recordData.resturant = 0;
        this.appSetting.showLoading();
        this.DeliveryRecordService.put(this.recordData);
    }
    sendToServer() {
        if (this.appSetting.loginType === "admin") {
            this.appSetting.showLoading();
            const temp = [...this.appSetting.resendListFromResturant];
            let dataList = [];
            temp.forEach((x) => {
                if (x.orderNo === this.invoiceNo) {
                    dataList.push(x);
                }
            });
            this.orderService.putResend_From_Resturant(this.invoiceNo, dataList);
        } /*else if (this.appSetting.loginType === "admin") {
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
            this.DeliveryRecordService.putRider(this.Orderid);
            //this.orderService.putResend_From_Resturant(this.invoiceNo, dataList);
            //Resend function from Admin to resturant
        }
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.orderService.delete(id);
                const temp = [
                    ...this.appSetting.orderTransationList,
                ];
                let i = -1;
                temp.forEach((x) => {
                    i = i + 1;
                    if (x.orderModel.id === id) {
                        this.appSetting.orderTransationList.splice(i, 1);
                    }
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
};
ResturantIndividualOrderComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] },
    { type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: src_app_Services_deliveryRecord_delivery_record_service__WEBPACK_IMPORTED_MODULE_6__["DeliveryRecordService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])("orderNo")
], ResturantIndividualOrderComponent.prototype, "Orderid", void 0);
ResturantIndividualOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-resturant-individual-order",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resturant-individual-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resturant-individual-order.component.scss */ "./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.scss")).default]
    })
], ResturantIndividualOrderComponent);



/***/ }),

/***/ "./src/app/tab1/resturant/resturant-main/resturant-main.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/resturant/resturant-main/resturant-main.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcmVzdHVyYW50L3Jlc3R1cmFudC1tYWluL3Jlc3R1cmFudC1tYWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab1/resturant/resturant-main/resturant-main.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/resturant/resturant-main/resturant-main.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResturantMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantMainComponent", function() { return ResturantMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/food/food.service */ "./src/app/Services/food/food.service.ts");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/order/order.service */ "./src/app/Services/order/order.service.ts");





let ResturantMainComponent = class ResturantMainComponent {
    constructor(appSetting, FoodService, orderService) {
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.orderService = orderService;
        this.firstLoad();
    }
    firstLoad() {
        this.appSetting.showLoading();
        if (this.appSetting.loginType === "admin") {
            this.orderService.get().subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                this.loadFoodModel();
            });
        }
        else if (this.appSetting.loginType === "resturant") {
            this.orderService
                .getResturantPendings(this.appSetting.resturantID)
                .subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                this.loadFoodModel();
            });
        }
        else if (this.appSetting.loginType === "rider") {
        }
    }
    loadFoodModel() {
        this.FoodService.getActive().subscribe((x) => (this.appSetting.foodDataList = x), (err) => this.appSetting.showError(err), () => this.appSetting.loadingClose());
    }
    ngOnInit() { }
    refresh(event) {
        if (this.appSetting.displaySetting === 'pending') {
            this.orderService
                .getResturantPendings(this.appSetting.resturantID)
                .subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                event.target.complete();
            });
        }
        else if (this.appSetting.displaySetting === 'delivering') {
            this.orderService
                .getResturantOrder()
                .subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                event.target.complete();
            });
        }
    }
};
ResturantMainComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: _Services_food_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"] },
    { type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }
];
ResturantMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-resturant-main",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resturant-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/resturant/resturant-main/resturant-main.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resturant-main.component.scss */ "./src/app/tab1/resturant/resturant-main/resturant-main.component.scss")).default]
    })
], ResturantMainComponent);



/***/ }),

/***/ "./src/app/tab1/rider/customer-info/customer-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/tab1/rider/customer-info/customer-info.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcmlkZXIvY3VzdG9tZXItaW5mby9jdXN0b21lci1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab1/rider/customer-info/customer-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tab1/rider/customer-info/customer-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInfoComponent", function() { return CustomerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Models_orderModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/orderModel */ "./src/app/Models/orderModel.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");







let CustomerInfoComponent = class CustomerInfoComponent {
    constructor(appSetting, location, iab, route) {
        this.appSetting = appSetting;
        this.location = location;
        this.iab = iab;
        this.route = route;
        this.id = 0;
        this.options = {
            location: "yes",
            hidden: "no",
            zoom: "no",
            hideurlbar: "yes",
        };
        this.orderData = new src_app_Models_orderModel__WEBPACK_IMPORTED_MODULE_4__["orderModel"]();
        this.ltd = '';
        this.lng = '';
        this.id = +this.route.snapshot.paramMap.get("id");
    }
    ngOnInit() {
        this.getCustomerInfo();
    }
    back() {
        this.location.back();
    }
    googleMap(meltd, melng, clientLtd, clientLng) {
        const url = `https://www.google.com/maps/dir/${meltd},${melng}/${clientLtd},${clientLng}/@${clientLtd},${clientLng}`;
        let target = "_blank";
        const browser = this.iab.create(url, target, this.options);
        browser.on("loadstop").subscribe((event) => {
            browser.insertCSS({ code: "body{color: red;" });
        });
    }
    onClick() {
        this.appSetting.showLoading();
        let userLatitude = this.ltd;
        let userLongitude = this.lng;
        if (userLongitude === "" || userLatitude === "" || userLatitude === null) {
            this.appSetting.showInvalid();
        }
        else {
            this.appSetting.loadingClose();
            this.geolocation(userLatitude, userLongitude);
        }
    }
    geolocation(lat, long) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let latitude = position.coords.latitude.toString();
                let longitude = position.coords.longitude.toString();
                this.googleMap(latitude, longitude, lat, long);
            });
        }
    }
    getCustomerInfo() {
        const temp = this.appSetting.orderTransationList;
        temp.forEach((x) => {
            if (x.orderModel.id === this.id) {
                this.orderData = x.orderModel;
                this.ltd = this.orderData.latitude;
                this.lng = this.orderData.longitude;
            }
        });
    }
};
CustomerInfoComponent.ctorParameters = () => [
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CustomerInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-customer-info",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customer-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/customer-info/customer-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customer-info.component.scss */ "./src/app/tab1/rider/customer-info/customer-info.component.scss")).default]
    })
], CustomerInfoComponent);



/***/ }),

/***/ "./src/app/tab1/rider/rider-main-page/rider-main-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/rider/rider-main-page/rider-main-page.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcmlkZXIvcmlkZXItbWFpbi1wYWdlL3JpZGVyLW1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab1/rider/rider-main-page/rider-main-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tab1/rider/rider-main-page/rider-main-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: RiderMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderMainPageComponent", function() { return RiderMainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/food/food.service */ "./src/app/Services/food/food.service.ts");
/* harmony import */ var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/order/order.service */ "./src/app/Services/order/order.service.ts");





let RiderMainPageComponent = class RiderMainPageComponent {
    constructor(appSetting, FoodService, orderService) {
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.orderService = orderService;
        this.loadFoodModel();
    }
    ngOnInit() {
    }
    firstLoad() {
        if (this.appSetting.displaySetting === "delivering") {
            this.orderService.getRiderPending().subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                this.appSetting.loadingClose();
            });
        }
        else if (this.appSetting.displaySetting === "delivered") {
            this.orderService.getRiderComplete().subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                this.appSetting.loadingClose();
            });
        }
    }
    loadFoodModel() {
        this.appSetting.showLoading();
        this.FoodService.getActive().subscribe((x) => (this.appSetting.foodDataList = x), (err) => this.appSetting.showError(err), () => {
            this.appSetting.menuFoodDataList = this.appSetting.foodDataList;
            this.appSetting.loadingClose();
            //this.firstLoad();
        });
    }
    refresh(event) {
        if (this.appSetting.displaySetting === "delivering") {
            this.orderService.getRiderPending().subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                event.target.complete();
            });
        }
        else if (this.appSetting.displaySetting === "delivered") {
            this.orderService.getRiderComplete().subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                event.target.complete();
            });
        }
        else {
            this.orderService.getRiderPending().subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                event.target.complete();
            });
        }
    }
};
RiderMainPageComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] },
    { type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"] },
    { type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }
];
RiderMainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-rider-main-page",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rider-main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/rider/rider-main-page/rider-main-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rider-main-page.component.scss */ "./src/app/tab1/rider/rider-main-page/rider-main-page.component.scss")).default]
    })
], RiderMainPageComponent);



/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_pending_item_edit_pending_item_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/pending-item-edit/pending-item-edit.component */ "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.ts");
/* harmony import */ var _admin_delivery_pending_delivery_pending_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/delivery-pending/delivery-pending.component */ "./src/app/tab1/admin/delivery-pending/delivery-pending.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/add-to-invoice/add-to-invoice.component */ "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.ts");
/* harmony import */ var _rider_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rider/customer-info/customer-info.component */ "./src/app/tab1/rider/customer-info/customer-info.component.ts");








const routes = [
    {
        path: "",
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"],
    },
    {
        path: "add/:id",
        component: _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_6__["AddToInvoiceComponent"],
    },
    {
        path: "deliveryPending",
        component: _admin_delivery_pending_delivery_pending_component__WEBPACK_IMPORTED_MODULE_2__["DeliveryPendingComponent"],
    },
    {
        path: "pendingEdit/:id",
        component: _admin_pending_item_edit_pending_item_edit_component__WEBPACK_IMPORTED_MODULE_1__["PendingItemEditComponent"],
    },
    {
        path: "customerInfo/:id",
        component: _rider_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_7__["CustomerInfoComponent"],
    },
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_delivery_pending_delivery_pending_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/delivery-pending/delivery-pending.component */ "./src/app/tab1/admin/delivery-pending/delivery-pending.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");
/* harmony import */ var _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/item-list/item-list.component */ "./src/app/tab1/admin/item-list/item-list.component.ts");
/* harmony import */ var _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/add-to-invoice/add-to-invoice.component */ "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.ts");
/* harmony import */ var _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/main-page/main-page.component */ "./src/app/tab1/admin/main-page/main-page.component.ts");
/* harmony import */ var _resturant_resturant_main_resturant_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resturant/resturant-main/resturant-main.component */ "./src/app/tab1/resturant/resturant-main/resturant-main.component.ts");
/* harmony import */ var _resturant_resturant_individual_order_resturant_individual_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resturant/resturant-individual-order/resturant-individual-order.component */ "./src/app/tab1/resturant/resturant-individual-order/resturant-individual-order.component.ts");
/* harmony import */ var _resturant_resturant_card_resturant_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resturant/resturant-card/resturant-card.component */ "./src/app/tab1/resturant/resturant-card/resturant-card.component.ts");
/* harmony import */ var _admin_pending_item_edit_pending_item_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/pending-item-edit/pending-item-edit.component */ "./src/app/tab1/admin/pending-item-edit/pending-item-edit.component.ts");
/* harmony import */ var _rider_rider_main_page_rider_main_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rider/rider-main-page/rider-main-page.component */ "./src/app/tab1/rider/rider-main-page/rider-main-page.component.ts");
/* harmony import */ var _rider_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rider/customer-info/customer-info.component */ "./src/app/tab1/rider/customer-info/customer-info.component.ts");


















let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab1PageRoutingModule"],
        ],
        declarations: [
            _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"],
            _rider_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_17__["CustomerInfoComponent"],
            _rider_rider_main_page_rider_main_page_component__WEBPACK_IMPORTED_MODULE_16__["RiderMainPageComponent"],
            _admin_pending_item_edit_pending_item_edit_component__WEBPACK_IMPORTED_MODULE_15__["PendingItemEditComponent"],
            _admin_delivery_pending_delivery_pending_component__WEBPACK_IMPORTED_MODULE_1__["DeliveryPendingComponent"],
            _resturant_resturant_card_resturant_card_component__WEBPACK_IMPORTED_MODULE_14__["ResturantCardComponent"],
            _resturant_resturant_individual_order_resturant_individual_order_component__WEBPACK_IMPORTED_MODULE_13__["ResturantIndividualOrderComponent"],
            _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemListComponent"],
            _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__["MainPageComponent"],
            _resturant_resturant_main_resturant_main_component__WEBPACK_IMPORTED_MODULE_12__["ResturantMainComponent"],
            _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_10__["AddToInvoiceComponent"],
        ],
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9EOlxcc2lkZUNhci9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4gIFxyXG4iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/order/order.service */ "./src/app/Services/order/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/resturantModel/resturant-model.service */ "./src/app/Services/resturantModel/resturant-model.service.ts");
/* harmony import */ var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/food/food.service */ "./src/app/Services/food/food.service.ts");






let Tab1Page = class Tab1Page {
    constructor(appSetting, FoodService, orderService, ResturantModelService) {
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
    loadData() {
        if (this.appSetting.menuFoodDataList.length === 0) {
            this.appSetting.showLoading();
            this.FoodService.getActive().subscribe((x) => (this.appSetting.menuFoodDataList = x), (err) => this.appSetting.showError(err), () => {
                this.appSetting.constFoodDataList = this.appSetting.menuFoodDataList;
                this.resturantLoaddata();
            });
        }
    }
    onSearch(val) {
        const temp = [...this.appSetting.constFoodDataList];
        let z = [];
        temp.forEach((x) => {
            if (x.itemName.toLowerCase().includes(this.searchTxt.toLowerCase())) {
                z.push(x);
            }
            this.appSetting.menuFoodDataList = z;
        });
        if (this.searchTxt === "") {
            this.appSetting.menuFoodDataList = temp;
        }
    }
    onSearchResturant(val) {
        this.searchResturant = val;
        const temp = [...this.appSetting.constFoodDataList];
        let z = [];
        temp.forEach((x) => {
            if (x.resturant_id === this.searchResturant) {
                z.push(x);
            }
            this.appSetting.menuFoodDataList = z;
        });
        if (this.searchResturant === 0) {
            this.appSetting.menuFoodDataList = temp;
        }
    }
    resName(id) {
        let res = "";
        this.appSetting.resturandDataList.forEach((x) => {
            if (x.id === id) {
                res = x.shopname;
            }
        });
        return res;
    }
    resturantLoaddata() {
        if (this.appSetting.resturandDataList.length === 0) {
            this.ResturantModelService.get().subscribe((x) => (this.appSetting.resturandDataList = x), (err) => this.appSetting.showError(err), () => {
                this.appSetting.loadingClose();
            });
        }
    }
    riderRefresh() {
        this.appSetting.showLoading();
        if (this.appSetting.displaySetting === "delivering") {
            this.orderService.getRiderPending().subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                this.appSetting.loadingClose();
            });
        }
        else if (this.appSetting.displaySetting === "delivered") {
            this.orderService.getRiderComplete().subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                this.appSetting.loadingClose();
            });
        }
        else {
            this.orderService.getRiderPending().subscribe((x) => {
                this.appSetting.orderTransationList = x;
            }, (err) => this.appSetting.showError(err), () => {
                this.appSetting.loadingClose();
            });
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"] },
    { type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_5__["FoodService"] },
    { type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] },
    { type: src_app_Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_4__["ResturantModelService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-tab1",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map