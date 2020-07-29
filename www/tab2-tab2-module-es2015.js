(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-edit/item-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-edit/item-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/../assets/food.svg\" />\r\n        </ion-avatar>\r\n        <ion-label lines=\"none\">\r\n          <h2>{{ this.foodData.itemName }}</h2>\r\n          <h3>{{ this.foodData.price }}</h3>\r\n          <h3>{{ this.appSetting.resName(foodData.resturant_id) }}</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/../assets/number.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Please enter the quantity</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"calculator-outline\"></ion-icon> Quantity <ion-text *ngIf=\"this.orderDetail.itemQty===0\" color=\"danger\">\r\n            ***\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.itemQty\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/../assets/sale.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter the Discount amount</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"cash-outline\"></ion-icon> Discount\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.discount\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/../assets/remark.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2 color=\"primary\">Please enter remark</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\" position=\"floating\">\r\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon> Remark\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"this.orderDetail.remark\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"/../assets/money.svg\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Total</h2>\r\n        <h3>{{this.totalAmount()}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.back()\" color=\"light\">\r\n          Back\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"this.addToInvoice()\" color=\"light\">\r\n          Update Invoice\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-list/item-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-list/item-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let i of this.appSetting.orderDetailViewList;let x=index;\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/food.svg'>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{i.itemName}}</h2>\r\n          <h3>Quantity {{i.orderDetialModel.itemQty}}</h3>\r\n          <h3>Price {{i.orderDetialModel.itemFinalPrice}}</h3>\r\n          <h3>{{i.resturantName}}</h3>\r\n        </ion-label>\r\n        <ion-button routerLink='/tabs/tab2/itemEdit/{{x}}' color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button (click)=\"deleteInvoice(x)\" color=\"danger\">\r\n          <ion-icon name=\"trash-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/person.svg'>\r\n        </ion-avatar>\r\n        <ion-label color=\"primary\">\r\n          <h2>Customer Information</h2>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Name</ion-label>\r\n        <ion-input [(ngModel)]=\"this.appSetting.orderData.clientName\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Phone</ion-label>\r\n        <ion-input [(ngModel)]=\"this.appSetting.orderData.clitentPhone\" type=\"tel\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Township</ion-label>\r\n        <ion-select [(ngModel)]=\"this.appSetting.orderData.Township_id\" (ngModelChange)=\"deliverChange($event)\">\r\n          <ion-select-option *ngFor=\"let item of this.appSetting.locationDataList;let i=index;\" [value]=\"item.id\">\r\n            {{i+1}}.{{item.TownShip}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Flat No</ion-label>\r\n        <ion-input [(ngModel)]=\"this.appSetting.orderData.clitentFlatNo\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Address</ion-label>\r\n        <ion-textarea [(ngModel)]=\"this.appSetting.orderData.clientAddress\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/food-delivery.svg'>\r\n        </ion-avatar>\r\n        <ion-label color=\"primary\">\r\n          <h2>Delivery Information</h2>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Charges</ion-label>\r\n        <ion-input [(ngModel)]=\"this.appSetting.orderData.deliveryCharegs\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Date for Delivery</ion-label>\r\n        <ion-datetime ionCancel [(ngModel)]=\"this.appSetting.orderData.deliveryDate\"></ion-datetime>\r\n        <ion-label position=\"floating\">Time for Delivery</ion-label>\r\n        <ion-datetime [(ngModel)]=\"this.appSetting.orderData.deliveryDate\" display-format=\"h:mm A\"\r\n          picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Date for Pickup</ion-label>\r\n        <ion-datetime ionCancel [(ngModel)]=\"this.appSetting.orderData.pickupDate\"></ion-datetime>\r\n        <ion-label position=\"floating\">Time for Pickup</ion-label>\r\n        <ion-datetime [(ngModel)]=\"this.appSetting.orderData.pickupDate\" display-format=\"h:mm A\"\r\n          picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/agreement.svg'>\r\n        </ion-avatar>\r\n        <ion-label color=\"primary\">\r\n          <h2>Cash Receive Information</h2>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Cash Receive Options</ion-label>\r\n          <ion-select [(ngModel)]=\"this.appSetting.orderData.riderTakeOption\">\r\n            <ion-select-option [value]=\"revceiveOpt[0]\">{{revceiveOpt[0]}}</ion-select-option>\r\n            <ion-select-option [value]=\"revceiveOpt[1]\">{{revceiveOpt[1]}}</ion-select-option>\r\n            <ion-select-option [value]=\"revceiveOpt[2]\">{{revceiveOpt[2]}}</ion-select-option>\r\n          </ion-select>\r\n      </ion-item>\r\n   \r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" color=\"light\">\r\n          Cancel\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button (click)=\"sendToResturant()\" expand=\"block\" color=\"light\">\r\n          Send To Resturant\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/main-page/main-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/main-page/main-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-item-list *ngIf=\"this.appSetting.adminTab2Process==='list'\"></app-item-list>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/rider-select/rider-select.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/rider-select/rider-select.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"all\">\r\n      <ion-segment-button (click)=\"this.loadAvailable()\" value=\"all\">\r\n        <ion-label>Available</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button (click)=\"this.loadInProgress()\" value=\"favorites\">\r\n        <ion-label>In Progrss</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"this.riderSelection === 'available'\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let i of rider\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"/../assets/food-delivery.svg\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{ i.username }}</h2>\r\n        <h3>\r\n          ETD KM:{{ locationCalculate(i.longitude, i.latitude).toFixed(2) }}\r\n          Kilometer\r\n        </h3>\r\n        <p>Ph:{{ i.phone }}</p>\r\n      </ion-label>\r\n\r\n      <ion-button (click)=\"onSelect(i.id)\" color=\"secondary\">\r\n        Select\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"this.riderSelection === 'inProgress'\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshDelivering($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let i of progressRider\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"/../assets/food-delivery.svg\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{ i.username }}</h2>\r\n        <h3>\r\n          ETD KM:{{\r\n            locationCalculate(i.longitude, i.latitude).toFixed(2)\r\n          }}\r\n          Kilometer\r\n        </h3>\r\n\r\n        <p>Ph:{{ i.phone }}</p>\r\n      </ion-label>\r\n\r\n      <ion-button (click)=\"onSelect(i.id)\" color=\"secondary\">\r\n        Select\r\n      </ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-checkbox color=\"danger\" slot=\"start\"></ion-checkbox>\r\n      <ion-label color=\"danger\" checked readonnly>Emegency</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/rider/main-rider-page/main-rider-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/rider/main-rider-page/main-rider-page.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle color=\"dark\">Summary Report\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Date</ion-label>\r\n        <ion-datetime  ionCancel [(ngModel)]=\"this.dateData\"></ion-datetime>\r\n       \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Status</ion-label>\r\n        <ion-text color=\"primary\">\r\n          <p>Pending</p>\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-card-subtitle>\r\n   \r\n  </ion-card-header>\r\n  <ion-card-content>\r\n  \r\n    <ion-item>\r\n      <ion-avatar slot=\"end\">\r\n        <img src=\"/../assets/agreement.svg\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>Rider Earning</h3>\r\n        <p>{{this.data.riderEarning}} Kyats</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"end\">\r\n        <img src=\"/../assets/agreement.svg\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>ပြန်အပ်ရန်ငွေ</h3>\r\n        <p>{{this.data.dailyReturnAmount}} Kyats</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-button (click)=\"this.search()\" expand=\"block\">\r\n      Refresh Data\r\n    </ion-button>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" *ngIf=\"this.appSetting.adminTab2Process==='riderSelect'\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip>\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip>\r\n            <ion-icon name=\"search-outline\"></ion-icon>\r\n            <ion-label>Search</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header [translucent]=\"true\" *ngIf=\"this.appSetting.loginType==='rider'\">\r\n  <ion-toolbar>\r\n    <ion-title>Today Sumary</ion-title>\r\n    <ion-progress-bar value=\"1\" buffer=\"0.5\"></ion-progress-bar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-main-page *ngIf=\"this.appSetting.loginType==='admin'\"></app-main-page>\r\n  <app-main-rider-page *ngIf=\"this.appSetting.loginType==='rider'\"></app-main-rider-page>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/Services/dailyReturn/daily-return.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/Services/dailyReturn/daily-return.service.ts ***!
  \**************************************************************/
/*! exports provided: DailyReturnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReturnService", function() { return DailyReturnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let DailyReturnService = class DailyReturnService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/dailyReturn`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
            }),
        };
    }
    get(riderID, date) {
        return this.http.get(this.url + `?riderID=${riderID}&date=${date}`);
    }
};
DailyReturnService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
DailyReturnService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DailyReturnService);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/foodModel */ "./src/app/Models/foodModel.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







let ItemEditComponent = class ItemEditComponent {
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
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.foodData = this.loadData(this.id);
    }
    back() {
        this.route.navigateByUrl('/tabs/tab2');
    }
    loadData(id) {
        let result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        let i = -1;
        const temp = [...this.appSetting.orderDetailList];
        temp.forEach((x) => {
            i = i + 1;
            if (i === id) {
                result = this.loadFoodData(x.itemID);
                this.orderDetail = x;
            }
        });
        return result;
    }
    loadFoodData(id) {
        let result = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        const temp = [...this.appSetting.constFoodDataList];
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
        if (this.validation()) {
            let itemJ = this.appSetting.itemJoin(this.foodData.id);
            let i = -1;
            this.appSetting.orderDetailList.forEach(x => {
                i = i + 1;
                if (i === this.id) {
                    x = this.orderDetail;
                }
            });
            let temp = {
                orderDetialModel: this.orderDetail,
                itemName: itemJ.itemName,
                resturantName: itemJ.resturant
            };
            let z = -1;
            this.appSetting.orderDetailViewList.forEach(x => {
                z = z + 1;
                if (z === this.id) {
                    x = temp;
                }
            });
        }
        this.route.navigateByUrl('/tabs/tab2');
    }
    ngOnInit() { }
};
ItemEditComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9hZG1pbi9pdGVtLWxpc3QvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXHRhYjJcXGFkbWluXFxpdGVtLWxpc3RcXGl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFiMi9hZG1pbi9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC90YWIyL2FkbWluL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn0iLCIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab2/admin/item-list/item-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab2/admin/item-list/item-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemListComponent, itemRest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemRest", function() { return itemRest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/order/order.service */ "./src/app/Services/order/order.service.ts");
/* harmony import */ var _Services_location_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Services/location/location.service */ "./src/app/Services/location/location.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");





let ItemListComponent = class ItemListComponent {
    constructor(appSetting, LocationService, orderService) {
        this.appSetting = appSetting;
        this.LocationService = LocationService;
        this.orderService = orderService;
        this.list = [1, 2, 34, 5, 6];
        this.revceiveOpt = ['All', 'COD', 'Epayment'];
        this.locationReload();
    }
    ngOnInit() { }
    editInvoice(i) {
        this.appSetting.adminTab2Process = "edit";
    }
    riderSelect() {
        this.appSetting.adminTab2Process = "riderSelect";
    }
    locationReload() {
        if (this.appSetting.locationDataList.length === 0) {
            this.LocationService.get().subscribe((x) => (this.appSetting.locationDataList = x));
        }
    }
    refresh(event) {
        this.LocationService.get().subscribe((x) => (this.appSetting.locationDataList = x), (err) => this.appSetting.showError(err), () => {
            event.target.complete();
        });
    }
    deliverChange(e) {
        this.appSetting.orderData.Township_id = e;
        const temp = [...this.appSetting.locationDataList];
        temp.forEach((x) => {
            if (x.id === e) {
                this.appSetting.orderData.deliveryCharegs = x.deliveryCharges;
            }
        });
    }
    itemJoin(id) {
        let i = {
            itemName: "",
            resturant: "",
        };
        const temp = [...this.appSetting.constFoodDataList];
        temp.forEach((x) => {
            if (x.id === id) {
                i.itemName = x.itemName;
                i.resturant = this.appSetting.resName(x.resturant_id);
            }
        });
        return i;
    }
    deleteInvoice(id) {
        this.appSetting.orderDetailList.splice(id, 1);
        this.appSetting.orderDetailViewList.splice(id, 1);
    }
    sendToResturant() {
        this.appSetting.showLoading();
        console.log(this.appSetting.orderData.deliveryDate);
        let data = {
            orderModel: this.appSetting.orderData,
            orderDetailModels: this.appSetting.orderDetailList
        };
        console.log(data);
        this.orderService.post(data);
    }
};
ItemListComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: _Services_location_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] },
    { type: _Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }
];
ItemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-item-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/item-list/item-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-list.component.scss */ "./src/app/tab2/admin/item-list/item-list.component.scss")).default]
    })
], ItemListComponent);

class itemRest {
}


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
/* harmony import */ var src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/order/order.service */ "./src/app/Services/order/order.service.ts");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../Services/userModel/user-model.service */ "./src/app/Services/userModel/user-model.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Models_orderModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/orderModel */ "./src/app/Models/orderModel.ts");







let RiderSelectComponent = class RiderSelectComponent {
    constructor(route, appSetting, router, UserModelService, orderService) {
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
        this.appSetting.orderTransationList.forEach((x) => {
            if (x.orderModel.id === this.id) {
                this.data = x.orderModel;
            }
        });
    }
    ngOnInit() { }
    loadAvailable() {
        this.appSetting.showLoading();
        this.UserModelService.getAvailableRider().subscribe((x) => (this.rider = x), (err) => this.appSetting.showError(err), () => {
            this.riderSelection = "available";
            this.appSetting.loadingClose();
        });
    }
    locationCalculate(riderLongitude, riderLatidude) {
        const temp = [
            ...this.appSetting.orderTransationList,
        ];
        let tempDetial = this.tempDetail(temp);
        const tempLocation = [
            ...this.appSetting.resturandDataList,
        ];
        const foodDB = [...this.appSetting.menuFoodDataList];
        let tempRes = this.tempResMethod(foodDB, tempDetial);
        console.log(tempDetial);
        let resIDlist = this.getUnique(tempRes);
        let locationDB = this.locationDBMethod(tempLocation, resIDlist);
        return (Math.min.apply(null, this.distanceCalculation(locationDB, riderLatidude, riderLongitude)) / 1000);
    }
    distanceCalculation(locationDB, riderLatidude, riderLongitude) {
        let distanceList = [];
        locationDB.forEach((y) => {
            distanceList.push(this.appSetting.distanceCal(y.latitude, y.longitude, riderLatidude, riderLongitude));
        });
        return distanceList;
    }
    locationDBMethod(tempLocation, resIDlist) {
        let locationDB = [];
        tempLocation.forEach((x) => {
            resIDlist.forEach((y) => {
                if (y === x.id) {
                    locationDB.push(x);
                }
            });
        });
        return locationDB;
    }
    tempResMethod(foodDB, tempDetial) {
        let tempRes = [];
        foodDB.forEach((x) => {
            tempDetial.forEach((y) => {
                console.log("Item Y ID=" + y.itemID + " and " + x.id);
                if (y.itemID === x.id) {
                    tempRes.push(x.resturant_id);
                }
                else {
                    console.log("Not include in data");
                }
            });
        });
        return tempRes;
    }
    tempDetail(temp) {
        let dataList = [];
        temp.forEach((x) => {
            x.orderDetailModels.forEach((y) => {
                if (y.orderID === this.id) {
                    dataList.push(y);
                }
            });
        });
        return dataList;
    }
    getUnique(array) {
        var uniqueArray = [];
        // Loop through array values
        for (let i = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    loadInProgress() {
        this.appSetting.showLoading();
        this.UserModelService.getDeliveringRider().subscribe((x) => (this.progressRider = x), (err) => this.appSetting.showError(err), () => {
            this.riderSelection = "inProgress";
            this.appSetting.loadingClose();
        });
    }
    refresh(e) {
        this.UserModelService.getAvailableRider().subscribe((x) => (this.rider = x), (err) => this.appSetting.showError(err), () => {
            e.target.complete();
        });
    }
    refreshDelivering(e) {
        this.UserModelService.getDeliveringRider().subscribe((x) => (this.progressRider = x), (err) => this.appSetting.showError(err), () => {
            e.target.complete();
        });
    }
    onSelect(id) {
        this.appSetting.showLoading();
        this.data.riderID = id;
        this.data.status = "delivering";
        this.orderService.put(this.data);
        this.router.navigateByUrl("/tabs/tab1/deliveryPending");
    }
};
RiderSelectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_3__["UserModelService"] },
    { type: src_app_Services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }
];
RiderSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-rider-select",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rider-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/admin/rider-select/rider-select.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rider-select.component.scss */ "./src/app/tab2/admin/rider-select/rider-select.component.scss")).default]
    })
], RiderSelectComponent);



/***/ }),

/***/ "./src/app/tab2/rider/main-rider-page/main-rider-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tab2/rider/main-rider-page/main-rider-page.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvcmlkZXIvbWFpbi1yaWRlci1wYWdlL21haW4tcmlkZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab2/rider/main-rider-page/main-rider-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tab2/rider/main-rider-page/main-rider-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: MainRiderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRiderPageComponent", function() { return MainRiderPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_dailyReturn_daily_return_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/dailyReturn/daily-return.service */ "./src/app/Services/dailyReturn/daily-return.service.ts");




let MainRiderPageComponent = class MainRiderPageComponent {
    constructor(appSetting, datilyReturnService) {
        this.appSetting = appSetting;
        this.datilyReturnService = datilyReturnService;
        this.dateData = new Date().toISOString();
        this.data = {
            deliverCharges: 0,
            debit: 0,
            credit: 0,
            openingBalance: 0,
            riderEarning: 0,
            dailyReturnAmount: 0,
        };
        console.log(this.appSetting.loginType);
    }
    ngOnInit() { }
    refresh() {
        console.log(this.appSetting.loginType);
    }
    search() {
        if (this.dateData === "") {
            this.appSetting.showInvalid();
        }
        else {
            this.appSetting.showLoading();
            this.datilyReturnService
                .get(this.appSetting.sessionUserID, this.dateData)
                .subscribe((x) => (this.data = x), (err) => this.appSetting.showError(err), () => {
                console.log(this.data);
                this.appSetting.loadingClose();
            });
        }
    }
};
MainRiderPageComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] },
    { type: src_app_Services_dailyReturn_daily_return_service__WEBPACK_IMPORTED_MODULE_3__["DailyReturnService"] }
];
MainRiderPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-main-rider-page",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-rider-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/rider/main-rider-page/main-rider-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-rider-page.component.scss */ "./src/app/tab2/rider/main-rider-page/main-rider-page.component.scss")).default]
    })
], MainRiderPageComponent);



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
/* harmony import */ var _admin_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/item-edit/item-edit.component */ "./src/app/tab2/admin/item-edit/item-edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _admin_rider_select_rider_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/rider-select/rider-select.component */ "./src/app/tab2/admin/rider-select/rider-select.component.ts");






const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_4__["Tab2Page"],
    },
    {
        path: 'riderSelect/:id',
        component: _admin_rider_select_rider_select_component__WEBPACK_IMPORTED_MODULE_5__["RiderSelectComponent"],
    },
    {
        path: 'itemEdit/:id',
        component: _admin_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_1__["ItemEditComponent"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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
/* harmony import */ var _rider_main_rider_page_main_rider_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rider/main-rider-page/main-rider-page.component */ "./src/app/tab2/rider/main-rider-page/main-rider-page.component.ts");













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
        declarations: [_admin_rider_select_rider_select_component__WEBPACK_IMPORTED_MODULE_11__["RiderSelectComponent"], _rider_main_rider_page_main_rider_page_component__WEBPACK_IMPORTED_MODULE_12__["MainRiderPageComponent"], _tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"], _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _admin_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemListComponent"], _admin_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_10__["ItemEditComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9EOlxcc2lkZUNhci9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4gIFxyXG4iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let Tab2Page = class Tab2Page {
    constructor(appSetting, route) {
        this.appSetting = appSetting;
        this.route = route;
        this.route.navigateByUrl('tabs/tab2');
    }
};
Tab2Page.ctorParameters = () => [
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
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