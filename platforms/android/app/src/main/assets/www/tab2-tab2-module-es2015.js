(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-edit/item-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-edit/item-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar color=\"success\">\n    <ion-title>Item Edit Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src='/../assets/food.svg'>\n      </ion-avatar>\n      <ion-label>\n        <h2>Fried Chicken</h2>\n        <h3>1000</h3>\n        <p>KFC</p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n\n\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src='/../assets/number.svg'>\n        </ion-avatar>\n        <ion-label>\n          <h2>Please enter the quantity</h2>\n        </ion-label>\n\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Quantity</ion-label>\n        <ion-input type=\"number\"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n\n\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src='/../assets/sale.svg'>\n        </ion-avatar>\n        <ion-label>\n          <h2>Please enter the Discount amount</h2>\n        </ion-label>\n\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Discount</ion-label>\n        <ion-input type=\"number\"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src='/../assets/money.svg'>\n      </ion-avatar>\n      <ion-label>\n        <h2>Total</h2>\n        <h3>1000</h3>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" (click)=\"this.appSetting.adminTab2Process='list'\" color=\"danger\" >\n          Back\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" (click)=\"this.appSetting.adminTab2Process='list'\" color=\"primary\" >\n          Edit this Item\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-list/item-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-list/item-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar color=\"success\">\n    <ion-title>Invoice Management Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\">\n  <ion-infinite-scroll>\n    <ion-card *ngFor=\"let i of list\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src='/../assets/food.svg'>\n        </ion-avatar>\n        <ion-label>\n          <h2>Fried Chicken</h2>\n          <h3>1000</h3>\n          <p>KFC</p>\n        </ion-label>\n        <ion-button (click)=\"editInvoice(i)\" color=\"secondary\">\n          <ion-icon name=\"create-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src='/../assets/person.svg'>\n          </ion-avatar>\n          <ion-label>\n            <h2>Customer Information</h2>\n          </ion-label>\n\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Phone</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Latitude</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Longitude</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src='/../assets/food-delivery.svg'>\n          </ion-avatar>\n          <ion-label>\n            <h2>Delivery Charges</h2>\n          </ion-label>\n\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Amount</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-button (click)=\"riderSelect()\" expand=\"block\" color=\"primary\">\n      Send To Rider & Resturant\n    </ion-button>\n  </ion-infinite-scroll>\n<br/>\n<br/>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/main-page/main-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/main-page/main-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <app-item-list *ngIf=\"this.appSetting.adminTab2Process==='list'\"></app-item-list>\n    <app-item-edit *ngIf=\"this.appSetting.adminTab2Process==='edit'\"></app-item-edit>\n    <app-rider-select *ngIf=\"this.appSetting.adminTab2Process==='riderSelect'\"></app-rider-select>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/rider-select/rider-select.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/rider-select/rider-select.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-grid fixed>\n  \n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button  expand=\"block\" color=\"primary\">\n            Back\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button  expand=\"block\" color=\"primary\">\n            Search\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding=\"false\" class=\"ion-padding-bottom\" [fullscreen]=\"true\" slot=\"fixed\">\n  <ion-infinite-scroll>\n    <ion-card *ngFor=\"let i of list\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src='/../assets/food-delivery.svg'>\n        </ion-avatar>\n        <ion-label>\n          <h2>Ko Aung Aung</h2>\n          <h3>Estimate distance in KM:1000</h3>\n          <p>NPT-0520121</p>\n          <p>Ph:0920154786</p>\n        </ion-label>\n        <ion-button color=\"secondary\">\n          Select\n        </ion-button>\n      </ion-item>\n    </ion-card>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content><app-main-page *ngIf=\"this.appSetting.loginType==='admin'\"></app-main-page></ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/admin/item-edit/item-edit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tab2/admin/item-edit/item-edit.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvYWRtaW4vaXRlbS1lZGl0L2l0ZW0tZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab2/admin/item-edit/item-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab2/admin/item-edit/item-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditComponent", function() { return ItemEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");



let ItemEditComponent = class ItemEditComponent {
    constructor(appSetting) {
        this.appSetting = appSetting;
    }
    ngOnInit() { }
};
ItemEditComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
ItemEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-edit/item-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-edit.component.scss */ "./src/app/tab2/admin/item-edit/item-edit.component.scss")).default]
    })
], ItemEditComponent);



/***/ }),

/***/ "./src/app/tab2/admin/item-list/item-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tab2/admin/item-list/item-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvYWRtaW4vaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab2/admin/item-list/item-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab2/admin/item-list/item-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");



let ItemListComponent = class ItemListComponent {
    constructor(appSetting) {
        this.appSetting = appSetting;
        this.list = [1, 2, 34, 5, 6];
    }
    ngOnInit() { }
    editInvoice(i) {
        this.appSetting.adminTab2Process = 'edit';
    }
    riderSelect() {
        this.appSetting.adminTab2Process = 'riderSelect';
    }
};
ItemListComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
ItemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-list/item-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-list.component.scss */ "./src/app/tab2/admin/item-list/item-list.component.scss")).default]
    })
], ItemListComponent);



/***/ }),

/***/ "./src/app/tab2/admin/main-page/main-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tab2/admin/main-page/main-page.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvYWRtaW4vbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab2/admin/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab2/admin/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");



let MainPageComponent = class MainPageComponent {
    constructor(appSetting) {
        this.appSetting = appSetting;
        this.appSetting.adminTab2Process = 'list';
    }
    ngOnInit() { }
};
MainPageComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
MainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/main-page/main-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-page.component.scss */ "./src/app/tab2/admin/main-page/main-page.component.scss")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/tab2/admin/rider-select/rider-select.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/tab2/admin/rider-select/rider-select.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvYWRtaW4vcmlkZXItc2VsZWN0L3JpZGVyLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab2/admin/rider-select/rider-select.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tab2/admin/rider-select/rider-select.component.ts ***!
  \*******************************************************************/
/*! exports provided: RiderSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderSelectComponent", function() { return RiderSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RiderSelectComponent = class RiderSelectComponent {
    constructor() {
        this.list = [1, 2, 34, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
    }
    ngOnInit() { }
};
RiderSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rider-select',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rider-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/rider-select/rider-select.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rider-select.component.scss */ "./src/app/tab2/admin/rider-select/rider-select.component.scss")).default]
    })
], RiderSelectComponent);



/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");
/* harmony import */ var _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/main-page/main-page.component */ "./src/app/tab2/admin/main-page/main-page.component.ts");
/* harmony import */ var _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/item-list/item-list.component */ "./src/app/tab2/admin/item-list/item-list.component.ts");
/* harmony import */ var _admin_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/item-edit/item-edit.component */ "./src/app/tab2/admin/item-edit/item-edit.component.ts");
/* harmony import */ var _admin_rider_select_rider_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/rider-select/rider-select.component */ "./src/app/tab2/admin/rider-select/rider-select.component.ts");












let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_admin_rider_select_rider_select_component__WEBPACK_IMPORTED_MODULE_11__["RiderSelectComponent"], _tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"], _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemListComponent"], _admin_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_10__["ItemEditComponent"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9zYWsvUHJvamVjdHMvc2lkZWNhckFwcC9zaWRlQ2FyL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG4gIH1cbiAgXG4iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-setting */ "./src/app/app-setting.ts");



let Tab2Page = class Tab2Page {
    constructor(appSetting) {
        this.appSetting = appSetting;
    }
};
Tab2Page.ctorParameters = () => [
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    })
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map