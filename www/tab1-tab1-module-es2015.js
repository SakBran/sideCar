(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar color=\"success\">\n    <ion-title>Item Management Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src='/../assets/food.svg'>\n      </ion-avatar>\n      <ion-label>\n        <h2>Fried Chicken</h2>\n        <h3>1000</h3>\n        <p>KFC</p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n\n\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src='/../assets/number.svg'>\n        </ion-avatar>\n        <ion-label>\n          <h2>Please enter the quantity</h2>\n        </ion-label>\n\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Quantity</ion-label>\n        <ion-input type=\"number\"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n\n\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src='/../assets/sale.svg'>\n        </ion-avatar>\n        <ion-label>\n          <h2 color=\"primary\">Please enter the Discount amount</h2>\n        </ion-label>\n\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Discount</ion-label>\n        <ion-input type=\"number\"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src='/../assets/money.svg'>\n      </ion-avatar>\n      <ion-label>\n        <h2>Total</h2>\n        <h3>1000</h3>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" (click)=\"this.appSetting.adminProcess='list'\" color=\"danger\" >\n          Back\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" (click)=\"this.appSetting.adminProcess='list'\" color=\"primary\" >\n          Add to Invoice\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/item-list/item-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/item-list/item-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" *ngIf=\"this.searchVisible===true\">\n    <ion-grid fixed>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-searchbar></ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-fab horizontal=\"start\" vertical=\"center\" slot=\"fixed\" edge>\n  <ion-fab-button color=\"primary\" (click)=\"searchVisiblity()\">\n    <ion-icon name=\"search-outline\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"end\"></ion-fab-list>\n</ion-fab>\n\n<ion-content padding=\"false\" class=\"ion-padding-bottom\" [fullscreen]=\"true\" slot=\"fixed\">\n  <ion-infinite-scroll>\n    <ion-card *ngFor=\"let i of list\">\n      <ion-item> \n        <ion-avatar slot=\"start\">\n          <img src='/../assets/food.svg'>\n        </ion-avatar>\n        <ion-label>\n          <h2>Fried Chicken</h2>\n          <h3>1000</h3>\n          <p>KFC</p>\n        </ion-label>\n        <ion-button (click)=\"addToInvoice(i)\" color=\"secondary\">\n          <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-card>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/main-page/main-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/main-page/main-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-item-list  *ngIf=\"this.appSetting.adminProcess==='list'\"></app-item-list>\n<app-add-to-invoice *ngIf=\"this.appSetting.adminProcess==='new'\"></app-add-to-invoice>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <app-main-page *ngIf=\"this.appSetting.loginType==='admin'\"></app-main-page>\n</ion-content>\n\n\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");



let AddToInvoiceComponent = class AddToInvoiceComponent {
    constructor(appSetting) {
        this.appSetting = appSetting;
    }
    ngOnInit() { }
};
AddToInvoiceComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
AddToInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-to-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-to-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-to-invoice.component.scss */ "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.scss")).default]
    })
], AddToInvoiceComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");



let ItemListComponent = class ItemListComponent {
    constructor(appSetting) {
        this.appSetting = appSetting;
        this.list = [1, 2, 34, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
        this.searchVisible = false;
    }
    ngOnInit() { }
    searchVisiblity() {
        if (this.searchVisible === true) {
            this.searchVisible = false;
        }
        else {
            this.searchVisible = true;
        }
    }
    addToInvoice(e) {
        this.appSetting.adminProcess = 'new';
        this.appSetting.adminID = e;
        console.log('Work');
    }
};
ItemListComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
ItemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-list',
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar,\nion-avatar > img {\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9zYWsvUHJvamVjdHMvc2lkZWNhckFwcC9zaWRlQ2FyL3NyYy9hcHAvdGFiMS9hZG1pbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWIxL2FkbWluL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWRtaW4vbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIsXG5pb24tYXZhdGFyID4gaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6MCU7XG59IiwiaW9uLWF2YXRhcixcbmlvbi1hdmF0YXIgPiBpbWcge1xuICBib3JkZXItcmFkaXVzOiAwJTtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");



let MainPageComponent = class MainPageComponent {
    constructor(appSetting) {
        this.appSetting = appSetting;
        this.appSetting.adminProcess = 'list';
    }
    ngOnInit() { }
};
MainPageComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
MainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/admin/main-page/main-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-page.component.scss */ "./src/app/tab1/admin/main-page/main-page.component.scss")).default]
    })
], MainPageComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");
/* harmony import */ var _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/item-list/item-list.component */ "./src/app/tab1/admin/item-list/item-list.component.ts");
/* harmony import */ var _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/main-page/main-page.component */ "./src/app/tab1/admin/main-page/main-page.component.ts");
/* harmony import */ var _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/add-to-invoice/add-to-invoice.component */ "./src/app/tab1/admin/add-to-invoice/add-to-invoice.component.ts");











let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["ItemListComponent"], _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__["MainPageComponent"], _admin_add_to_invoice_add_to_invoice_component__WEBPACK_IMPORTED_MODULE_10__["AddToInvoiceComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9zYWsvUHJvamVjdHMvc2lkZWNhckFwcC9zaWRlQ2FyL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG4gIH1cbiAgXG4iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-setting */ "./src/app/app-setting.ts");



let Tab1Page = class Tab1Page {
    constructor(appSetting) {
        this.appSetting = appSetting;
    }
};
Tab1Page.ctorParameters = () => [
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map