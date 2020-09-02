function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
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


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Detail</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar\n    *ngIf=\"this.foodData.id === 0\"\n    type=\"indeterminate\"\n  ></ion-progress-bar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list *ngIf=\"this.foodData.id !== 0\">\n    <ion-img class=\"emoj\"\n    src=\"/../assets/icon/favicon.png\"\n        ></ion-img>\n    <ion-card> \n      <ion-card-content>\n        <ion-label position=\"floating\" color=\"secondary\">\n          <ion-icon name=\"fast-food-outline\"></ion-icon> Select One\n          <ion-text *ngIf=\"this.foodData.id === 0\" color=\"danger\"> * </ion-text>\n        </ion-label>\n\n        <ion-select\n          (ngModelChange)=\"changeModel($event)\"\n          [(ngModel)]=\"foodData.id\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of this.foodList\"\n            [value]=\"item.id\"\n            >{{ item.itemName }}</ion-select-option\n          >\n        </ion-select>\n      </ion-card-content>\n    </ion-card>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-img\n          [src]=\"\n            this.appSetting.apiAddress + '/images/Image' + foodData.id + '.jpg'\n          \"\n        ></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ foodData.itemName }}</h2>\n        <h2>{{ this.appSetting.resName(foodData.resturant_id) }}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Descriptions</h2>\n      </ion-label>\n      <p>{{ foodData.Descriptions }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Price</h2>\n      </ion-label>\n      <p>{{ foodData.price }}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <h2>Remark</h2>\n      </ion-label>\n      <ion-input\n        type=\"text\"\n        [(ngModel)]=\"this.orderDetail.remark\"\n        placeholder=\"Some instructions...\"\n      ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Quantity</h2>\n      </ion-label>\n      <p>\n        <ion-buttons slot=\"end\">\n          <ion-button\n            *ngIf=\"this.orderDetail.itemQty > 1\"\n            (click)=\"count('minus')\"\n          >\n            <ion-icon name=\"remove-circle-outline\"></ion-icon>\n          </ion-button>\n          <p>{{ this.orderDetail.itemQty }}</p>\n          <ion-button (click)=\"count('add')\">\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </p>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Total</h2>\n      </ion-label>\n      <p>{{ this.orderDetail.itemFinalPrice }}</p>\n    </ion-item>\n\n    <ion-button\n      (click)=\"AddtoCart()\"\n      expand=\"block\"\n      color=\"primary\"\n      shape=\"round\"\n    >\n      Add to Shopcart\n    </ion-button>\n  </ion-list>\n\n  <ion-list *ngIf=\"this.foodData.id === 0\">\n    <ion-img class=\"emoj\"\n    src=\"/../assets/icon/favicon.png\"\n  ></ion-img>\n    <ion-card>\n      <ion-card-content>\n        <ion-label position=\"floating\" color=\"secondary\">\n          <ion-icon name=\"fast-food-outline\"></ion-icon> Select One\n          <ion-text *ngIf=\"this.foodData.id === 0\" color=\"danger\"> * </ion-text>\n        </ion-label>\n\n        <ion-select\n          (ngModelChange)=\"changeModel($event)\"\n          [(ngModel)]=\"foodData.id\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of this.foodList\"\n            [value]=\"item.id\"\n            >{{ item.itemName }}</ion-select-option\n          >\n        </ion-select>\n      </ion-card-content>\n    </ion-card>\n    <ion-item>\n      <ion-avatar slot=\"start\"> </ion-avatar>\n      <ion-label>\n        <h2>\n          <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n        </h2>\n        <h2>\n          <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n        </h2>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Descriptions</h2>\n      </ion-label>\n      <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Price</h2>\n      </ion-label>\n      <p><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <h2>Remark</h2>\n      </ion-label>\n      <ion-input type=\"text\" placeholder=\"Awesome Input\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Quantity</h2>\n      </ion-label>\n      <p>\n        <ion-buttons slot=\"end\">\n          <ion-button\n            *ngIf=\"this.orderDetail.itemQty > 1\"\n            (click)=\"count('minus')\"\n          >\n            <ion-icon name=\"remove-circle-outline\"></ion-icon>\n          </ion-button>\n          <p>{{ this.orderDetail.itemQty }}</p>\n          <ion-button (click)=\"count('add')\">\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </p>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Total</h2>\n      </ion-label>\n      <p><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n    </ion-item>\n\n    <ion-button\n      disabled\n      (click)=\"AddtoCart()\"\n      expand=\"block\"\n      color=\"primary\"\n      shape=\"round\"\n    >\n      Add to Shopcart\n    </ion-button>\n  </ion-list>\n</ion-content>\n";
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


    __webpack_exports__["default"] = "<ion-toolbar color=\"light\">\n  <p class=\"center\">\n    <ion-chip\n      outline\n      (click)=\"resturantChoose()\"\n      color=\"tertiary\"\n      interface=\"action-sheet\"\n    >\n      <ion-icon name=\"restaurant\"></ion-icon>\n      <ion-label>Resturant</ion-label>\n      <ion-icon name=\"filter-outline\"></ion-icon>\n    </ion-chip>\n    <ion-select\n      class=\"none\"\n      id=\"select\"\n      value=\"notifications\"\n      interface=\"action-sheet\"\n      [(ngModel)]=\"searchResturant\"\n      (ngModelChange)=\"Filter($event)\"\n    >\n      <ion-select-option\n        *ngFor=\"let item of this.appSetting.resturandDataList\"\n        [value]=\"item.id\"\n        >{{ item.shopname }}</ion-select-option\n      >\n    </ion-select>\n    <ion-chip  (click)=\"categoryChoose()\" outline color=\"tertiary\">\n      <ion-icon name=\"fast-food-outline\"></ion-icon>\n      <ion-label>Foods</ion-label>\n      <ion-icon name=\"filter-outline\"></ion-icon>\n    </ion-chip>\n    <ion-select\n      class=\"none\"\n      id=\"selectCategory\"\n      value=\"notifications\"\n      interface=\"action-sheet\"\n      [(ngModel)]=\"searchCategory\"\n      (ngModelChange)=\"FilterCategory($event)\"\n    >\n      <ion-select-option\n        *ngFor=\"let item of this.appSetting.categoryList\"\n        [value]=\"item.id\"\n        >{{ item.categoryName }}</ion-select-option\n      >\n    </ion-select>\n    <ion-chip (click)=\"refresh()\" outline color=\"tertiary\">\n      <ion-icon name=\"fast-food-outline\"></ion-icon>\n      <ion-label>Refresh</ion-label>\n      <ion-icon name=\"filter-outline\"></ion-icon>\n    </ion-chip>\n  </p>\n</ion-toolbar>\n<ion-toolbar color=\"light\">\n  <ion-searchbar\n    [(ngModel)]=\"searchTxt\"\n    autofocus=\"true\"\n    (ngModelChange)=\"onSearch($event)\"\n  ></ion-searchbar>\n</ion-toolbar>\n\n<ion-grid>\n  <ion-row *ngIf=\"this.appSetting.mainItemDataList.length !== 0\">\n    <ion-col\n      *ngFor=\"let item of this.appSetting.mainItemDataList\"\n      size=\"{{ this.appSetting.device }}\"\n    >\n      <div>\n        <ion-card button (click)=\"cardClick(item.id)\">\n          <img\n            class=\"center\"\n            src=\"{{\n              this.appSetting.apiAddress + '/images/MainImage' + item.id + '.jpg'\n            }}\"\n          />\n          <ion-card-header>\n            <ion-card-subtitle>\n              {{\n                this.appSetting.resName(item.resturant_id)\n              }}</ion-card-subtitle\n            >\n            <ion-card-title>{{ item.name }}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n        <!-----   {{ this.appSetting.resName(item.resturant_id) }}---->\n       <!-----     <br />{{ item.Descriptions }}------>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"this.appSetting.mainItemDataList.length === 0\">\n    <ion-col size=\"{{ this.appSetting.device }}\">\n      <div>\n        <ion-card button (click)=\"cardClick('cardID')\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-card-header>\n            <ion-card-subtitle\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-subtitle>\n            <ion-card-title\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-skeleton-text animated></ion-skeleton-text><br />\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-col>\n\n    <ion-col size=\"{{ this.appSetting.device }}\">\n      <div>\n        <ion-card button (click)=\"cardClick('cardID')\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-card-header>\n            <ion-card-subtitle\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-subtitle>\n            <ion-card-title\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-skeleton-text animated></ion-skeleton-text><br />\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-col>\n\n    <ion-col size=\"{{ this.appSetting.device }}\">\n      <div>\n        <ion-card button (click)=\"cardClick('cardID')\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-card-header>\n            <ion-card-subtitle\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-subtitle>\n            <ion-card-title\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-skeleton-text animated></ion-skeleton-text><br />\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-col>\n\n    <ion-col size=\"{{ this.appSetting.device }}\">\n      <div>\n        <ion-card button (click)=\"cardClick('cardID')\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-card-header>\n            <ion-card-subtitle\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-subtitle>\n            <ion-card-title\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-skeleton-text animated></ion-skeleton-text><br />\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-col>\n\n    <ion-col size=\"{{ this.appSetting.device }}\">\n      <div>\n        <ion-card button (click)=\"cardClick('cardID')\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-card-header>\n            <ion-card-subtitle\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-subtitle>\n            <ion-card-title\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-skeleton-text animated></ion-skeleton-text><br />\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-col>\n\n    <ion-col size=\"{{ this.appSetting.device }}\">\n      <div>\n        <ion-card button (click)=\"cardClick('cardID')\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-card-header>\n            <ion-card-subtitle\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-subtitle>\n            <ion-card-title\n              ><ion-skeleton-text animated></ion-skeleton-text\n            ></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-skeleton-text animated></ion-skeleton-text><br />\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";
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


    __webpack_exports__["default"] = "<ion-toolbar color=\"dark\">\n  <!----- <ion-buttons slot=\"start\">\n    <ion-button (click)=\"login()\">\n      <ion-icon class=\"title\" name=\"person-circle-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>----->\n  <ion-buttons slot=\"end\">\n    <ion-button routerLink=\"/login\">\n      <ion-icon class=\"title\" name=\"person-circle-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button (click)=\"invoice()\">\n      <ion-icon class=\"title\" name=\"file-tray-full-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button (click)=\"shopCart()\">\n      <ion-badge\n        *ngIf=\"this.appSetting.orderDetailViewList.length > 0\"\n        color=\"warning\"\n        slot=\"end\"\n        >{{ this.appSetting.orderDetailViewList.length }}</ion-badge\n      >\n      <ion-icon class=\"title\" name=\"basket-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title class=\"title\" (click)=\"reset()\">\n    <table>\n      <tr>\n        <td>\n          <ion-img class=\"icon\" src=\"/../assets/icon/favicon.png\"></ion-img>\n        </td>\n        <td>&nbsp;Sidecar</td>\n      </tr>\n    </table></ion-title\n  >\n</ion-toolbar>\n\n<ion-content *ngIf=\"this.appSetting.customerSearch === ''\">\n\n    <ion-card class=\"search\">\n      <ion-card-content class=\"searchContent\">\n        <div style=\"text-align: center;\">\n          <h1 class=\"searchTitle\">\n            သင်ချစ်တဲ့ အစားအသောက်တွေကို သင့်ဆီအရောက် ပို့ဆောင်ပေးနေပါပြီ\n          </h1>\n        </div>\n        <ion-searchbar animated></ion-searchbar>\n        <div style=\"text-align: center;\">\n          <ion-button (click)=\"search()\" color=\"dark\"> Find Foods </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n \n  <ion-slides\n    *ngIf=\"this.appSetting.device === '12'\"\n    class=\"foot\"\n    pager=\"true\"\n    [options]=\"true\"\n  >\n    <ion-slide>\n      <ion-card>\n        <img\n          src=\"https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/vietnam-top10s/best-vietnamese-food/pagePropertiesImage/best-vietnamese-food.jpg.jpg\"\n        />\n        <ion-card-header>\n          <ion-card-subtitle>Destination</ion-card-subtitle>\n          <ion-card-title>Madison, WI</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,\n          Madison was named the capital of the Wisconsin Territory in 1836.\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card>\n        <img\n          src=\"https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/vietnam-top10s/best-vietnamese-food/pagePropertiesImage/best-vietnamese-food.jpg.jpg\"\n        />\n        <ion-card-header>\n          <ion-card-subtitle>Destination</ion-card-subtitle>\n          <ion-card-title>Madison, WI</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,\n          Madison was named the capital of the Wisconsin Territory in 1836.\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card>\n        <img\n          src=\"https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/vietnam-top10s/best-vietnamese-food/pagePropertiesImage/best-vietnamese-food.jpg.jpg\"\n        />\n        <ion-card-header>\n          <ion-card-subtitle>Destination</ion-card-subtitle>\n          <ion-card-title>Madison, WI</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,\n          Madison was named the capital of the Wisconsin Territory in 1836.\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid *ngIf=\"this.appSetting.device === '2'\">\n    <ion-row>\n      <ion-col size-md=\"3\">\n        <div>\n          <ion-card>\n            <img\n              src=\"https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/vietnam-top10s/best-vietnamese-food/pagePropertiesImage/best-vietnamese-food.jpg.jpg\"\n            />\n            <ion-card-header>\n              <ion-card-subtitle>Destination</ion-card-subtitle>\n              <ion-card-title>Madison, WI</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Founded in 1829 on an isthmus between Lake Monona and Lake\n              Mendota, Madison was named the capital of the Wisconsin Territory\n              in 1836.\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-col>\n      <ion-col size-md=\"3\">\n        <div>\n          <ion-card>\n            <img\n              src=\"https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/vietnam-top10s/best-vietnamese-food/pagePropertiesImage/best-vietnamese-food.jpg.jpg\"\n            />\n            <ion-card-header>\n              <ion-card-subtitle>Destination</ion-card-subtitle>\n              <ion-card-title>Madison, WI</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Founded in 1829 on an isthmus between Lake Monona and Lake\n              Mendota, Madison was named the capital of the Wisconsin Territory\n              in 1836.\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-col>\n      <ion-col size-md=\"3\">\n        <div>\n          <ion-card>\n            <img\n              src=\"https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/vietnam-top10s/best-vietnamese-food/pagePropertiesImage/best-vietnamese-food.jpg.jpg\"\n            />\n            <ion-card-header>\n              <ion-card-subtitle>Destination</ion-card-subtitle>\n              <ion-card-title>Madison, WI</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Founded in 1829 on an isthmus between Lake Monona and Lake\n              Mendota, Madison was named the capital of the Wisconsin Territory\n              in 1836.\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-col>\n      <ion-col size-md=\"3\">\n        <div>\n          <ion-card>\n            <img\n              src=\"https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/vietnam-top10s/best-vietnamese-food/pagePropertiesImage/best-vietnamese-food.jpg.jpg\"\n            />\n            <ion-card-header>\n              <ion-card-subtitle>Destination</ion-card-subtitle>\n              <ion-card-title>Madison, WI</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Founded in 1829 on an isthmus between Lake Monona and Lake\n              Mendota, Madison was named the capital of the Wisconsin Territory\n              in 1836.\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"this.appSetting.customerSearch !== ''\">\n  <app-home-items></app-home-items>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/util/node_modules/inherits/inherits_browser.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesUtilNode_modulesInheritsInherits_browserJs(module, exports) {
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;

        var TempCtor = function TempCtor() {};

        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    /***/

  },

  /***/
  "./node_modules/util/support/isBufferBrowser.js":
  /*!******************************************************!*\
    !*** ./node_modules/util/support/isBufferBrowser.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesUtilSupportIsBufferBrowserJs(module, exports) {
    module.exports = function isBuffer(arg) {
      return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
    };
    /***/

  },

  /***/
  "./node_modules/util/util.js":
  /*!***********************************!*\
    !*** ./node_modules/util/util.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesUtilUtilJs(module, exports, __webpack_require__) {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
      var keys = Object.keys(obj);
      var descriptors = {};

      for (var i = 0; i < keys.length; i++) {
        descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
      }

      return descriptors;
    };

    var formatRegExp = /%[sdj%]/g;

    exports.format = function (f) {
      if (!isString(f)) {
        var objects = [];

        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }

        return objects.join(' ');
      }

      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function (x) {
        if (x === '%%') return '%';
        if (i >= len) return x;

        switch (x) {
          case '%s':
            return String(args[i++]);

          case '%d':
            return Number(args[i++]);

          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }

          default:
            return x;
        }
      });

      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }

      return str;
    }; // Mark that a method should not be used.
    // Returns a modified function which warns once by default.
    // If --no-deprecation is set, then it is a no-op.


    exports.deprecate = function (fn, msg) {
      if (typeof process !== 'undefined' && process.noDeprecation === true) {
        return fn;
      } // Allow for deprecating things in the process of starting up.


      if (typeof process === 'undefined') {
        return function () {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }

      var warned = false;

      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }

          warned = true;
        }

        return fn.apply(this, arguments);
      }

      return deprecated;
    };

    var debugs = {};
    var debugEnviron;

    exports.debuglog = function (set) {
      if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
      set = set.toUpperCase();

      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = process.pid;

          debugs[set] = function () {
            var msg = exports.format.apply(exports, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function () {};
        }
      }

      return debugs[set];
    };
    /**
     * Echos the value of a value. Trys to print the value out
     * in the best way possible given the different types.
     *
     * @param {Object} obj The object to print out.
     * @param {Object} opts Optional options object that alters the output.
     */

    /* legacy: obj, showHidden, depth, colors*/


    function inspect(obj, opts) {
      // default options
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      }; // legacy...

      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];

      if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
      } else if (opts) {
        // got an "options" object
        exports._extend(ctx, opts);
      } // set default options


      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }

    exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

    inspect.colors = {
      'bold': [1, 22],
      'italic': [3, 23],
      'underline': [4, 24],
      'inverse': [7, 27],
      'white': [37, 39],
      'grey': [90, 39],
      'black': [30, 39],
      'blue': [34, 39],
      'cyan': [36, 39],
      'green': [32, 39],
      'magenta': [35, 39],
      'red': [31, 39],
      'yellow': [33, 39]
    }; // Don't use 'blue' not visible on cmd.exe

    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      // "name": intentionally not styling
      'regexp': 'red'
    };

    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];

      if (style) {
        return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }

    function stylizeNoColor(str, styleType) {
      return str;
    }

    function arrayToHash(array) {
      var hash = {};
      array.forEach(function (val, idx) {
        hash[val] = true;
      });
      return hash;
    }

    function formatValue(ctx, value, recurseTimes) {
      // Provide a hook for user-specified inspect functions.
      // Check that value is an object with an inspect function on it
      if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);

        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }

        return ret;
      } // Primitive types cannot have properties


      var primitive = formatPrimitive(ctx, value);

      if (primitive) {
        return primitive;
      } // Look up the keys of the object.


      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);

      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      } // IE doesn't make error fields non-enumerable
      // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


      if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      } // Some type of object without properties can be shortcutted.


      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }

        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }

        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }

        if (isError(value)) {
          return formatError(value);
        }
      }

      var base = '',
          array = false,
          braces = ['{', '}']; // Make Array say that they are Array

      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      } // Make functions say that they are functions


      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      } // Make RegExps say that they are RegExps


      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      } // Make dates with properties first say the date


      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      } // Make error with message first say the error


      if (isError(value)) {
        base = ' ' + formatError(value);
      }

      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }

      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }

      ctx.seen.push(value);
      var output;

      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function (key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }

      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }

    function formatPrimitive(ctx, value) {
      if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }

      if (isNumber(value)) return ctx.stylize('' + value, 'number');
      if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

      if (isNull(value)) return ctx.stylize('null', 'null');
    }

    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }

    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];

      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push('');
        }
      }

      keys.forEach(function (key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }

    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
      };

      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }

      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }

      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }

          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function (line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function (line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }

      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }

        name = JSON.stringify('' + key);

        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    }

    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function (prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);

      if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
      }

      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    } // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.


    function isArray(ar) {
      return Array.isArray(ar);
    }

    exports.isArray = isArray;

    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }

    exports.isBoolean = isBoolean;

    function isNull(arg) {
      return arg === null;
    }

    exports.isNull = isNull;

    function isNullOrUndefined(arg) {
      return arg == null;
    }

    exports.isNullOrUndefined = isNullOrUndefined;

    function isNumber(arg) {
      return typeof arg === 'number';
    }

    exports.isNumber = isNumber;

    function isString(arg) {
      return typeof arg === 'string';
    }

    exports.isString = isString;

    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }

    exports.isSymbol = isSymbol;

    function isUndefined(arg) {
      return arg === void 0;
    }

    exports.isUndefined = isUndefined;

    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }

    exports.isRegExp = isRegExp;

    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }

    exports.isObject = isObject;

    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }

    exports.isDate = isDate;

    function isError(e) {
      return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    }

    exports.isError = isError;

    function isFunction(arg) {
      return typeof arg === 'function';
    }

    exports.isFunction = isFunction;

    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
      typeof arg === 'undefined';
    }

    exports.isPrimitive = isPrimitive;
    exports.isBuffer = __webpack_require__(
    /*! ./support/isBuffer */
    "./node_modules/util/support/isBufferBrowser.js");

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }

    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    } // log is just a thin wrapper to console.log that prepends a timestamp


    exports.log = function () {
      console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
    };
    /**
     * Inherit the prototype methods from one constructor into another.
     *
     * The Function.prototype.inherits from lang.js rewritten as a standalone
     * function (not on Function.prototype). NOTE: If this file is to be loaded
     * during bootstrapping this function needs to be rewritten using some native
     * functions as prototype setup using normal JavaScript does not work as
     * expected during bootstrapping (see mirror.js in r114903).
     *
     * @param {function} ctor Constructor function which needs to inherit the
     *     prototype.
     * @param {function} superCtor Constructor function to inherit prototype from.
     */


    exports.inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/util/node_modules/inherits/inherits_browser.js");

    exports._extend = function (origin, add) {
      // Don't do anything if add isn't an object
      if (!add || !isObject(add)) return origin;
      var keys = Object.keys(add);
      var i = keys.length;

      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }

      return origin;
    };

    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

    exports.promisify = function promisify(original) {
      if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];

        if (typeof fn !== 'function') {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }

        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn;
      }

      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function (resolve, reject) {
          promiseResolve = resolve;
          promiseReject = reject;
        });
        var args = [];

        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }

        args.push(function (err, value) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value);
          }
        });

        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }

        return promise;
      }

      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
    };

    exports.promisify.custom = kCustomPromisifiedSymbol;

    function callbackifyOnRejected(reason, cb) {
      // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
      // Because `null` is a special error value in callbacks which means "no error
      // occurred", we error-wrap so the callback consumer can distinguish between
      // "the promise rejected with null" or "the promise fulfilled with undefined".
      if (!reason) {
        var newReason = new Error('Promise was rejected with a falsy value');
        newReason.reason = reason;
        reason = newReason;
      }

      return cb(reason);
    }

    function callbackify(original) {
      if (typeof original !== 'function') {
        throw new TypeError('The "original" argument must be of type Function');
      } // We DO NOT return the promise as it gives the user a false sense that
      // the promise is actually somehow related to the callback's execution
      // and that the callback throwing will reject the promise.


      function callbackified() {
        var args = [];

        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }

        var maybeCb = args.pop();

        if (typeof maybeCb !== 'function') {
          throw new TypeError('The last argument must be of type Function');
        }

        var self = this;

        var cb = function cb() {
          return maybeCb.apply(self, arguments);
        }; // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)


        original.apply(this, args).then(function (ret) {
          process.nextTick(cb, null, ret);
        }, function (rej) {
          process.nextTick(callbackifyOnRejected, rej, cb);
        });
      }

      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
      return callbackified;
    }

    exports.callbackify = callbackify;
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
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
          var _this = this;

          console.log(e);

          var temp = _toConsumableArray(this.appSetting.locationDataList);

          var orderData = _toConsumableArray(this.appSetting.orderDetailViewList);

          var foodData = _toConsumableArray(this.appSetting.menuFoodDataList);

          var resturnatList = [];
          orderData.forEach(function (x) {
            foodData.forEach(function (a) {
              if (a.id == x.orderDetialModel.itemID) {
                _this.appSetting.zone.push(_this.appSetting.resZone(a.resturant_id));

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
                _this.appSetting.orderData.deliveryCharegs = x.deliveryCharges;
                _this.appSetting.orderData.Township_id = x.id;
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
          var _this2 = this;

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
              _this2.appSetting.orderData.latitude = position.coords.latitude.toString();
              _this2.appSetting.orderData.longitude = position.coords.longitude.toString();
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
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
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
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
          var _this3 = this;

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

              x.orderDetialModel.itemFinalPrice = _this3.calculatePrice(x.orderDetialModel.itemID) * x.orderDetialModel.itemQty;
              x.orderDetialModel.itemOrgPrice = x.orderDetialModel.itemFinalPrice;
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this4 = this;

          var i = -1;

          var temp = _toConsumableArray(this.appSetting.orderDetailViewList);

          temp.forEach(function (x) {
            i = i + 1;

            if (i === id) {
              _this4.appSetting.orderDetailViewList.splice(i, 1);
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
          var _this5 = this;

          this.loading = 1;
          this.orderService.getInvoice(this.invoiceNo, this.phoneNo).subscribe(function (x) {
            return _this5.data = x;
          }, function (err) {
            _this5.appSetting.showInvalid();
          }, function () {
            _this5.riderID = _this5.data.orderModel.riderID;

            _this5.food();
          });
        }
      }, {
        key: "food",
        value: function food() {
          var _this6 = this;

          if (this.appSetting.constFoodDataList.length === 0) {
            this.FoodService.getActive().subscribe(function (x) {
              return _this6.appSetting.menuFoodDataList = x;
            }, function (err) {
              return _this6.appSetting.showError(err);
            }, function () {
              _this6.appSetting.constFoodDataList = _this6.appSetting.menuFoodDataList;

              _this6.total();

              _this6.loading = 0;
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
          var _this7 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              var latitude = position.coords.latitude.toString();
              var longitude = position.coords.longitude.toString();

              _this7.googleMap(latitude, longitude, lat, _long);
            });
          }
        }
      }, {
        key: "getCustomerInfo",
        value: function getCustomerInfo() {
          var _this8 = this;

          this.userService.getSingle(this.riderID).subscribe(function (x) {
            _this8.ltd = x.latitude;
            _this8.lng = x.longitude;
          }, function (err) {
            return console.log(err);
          }, function () {
            _this8.onClick();
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

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
          var _this9 = this;

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

              x.orderDetialModel.itemFinalPrice = _this9.calculatePrice(x.orderDetialModel.itemID) * x.orderDetialModel.itemQty;
              x.orderDetialModel.itemOrgPrice = x.orderDetialModel.itemFinalPrice;
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this10 = this;

          var i = -1;

          var temp = _toConsumableArray(this.appSetting.orderDetailViewList);

          temp.forEach(function (x) {
            i = i + 1;

            if (i === id) {
              _this10.appSetting.orderDetailViewList.splice(i, 1);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

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
          status: "pending",
          remark: "",
          comment: "",
          isPickUpResturant: false,
          isPickUpRider: false
        };
        this.foodData.id = 0;
        this.editOnload(this.appSetting.detailID);
      }

      _createClass(HomeItemDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.orderDetail.itemOrgPrice = this.foodData.price;
          this.orderDetail.itemFinalPrice = this.foodData.price;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this11.appSetting.orderData.latitude = position.coords.latitude.toString();
              _this11.appSetting.orderData.longitude = position.coords.longitude.toString();
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
          var _this12 = this;

          this.appSetting.menuFoodDataList.forEach(function (x) {
            if (x.mainitem_id === id) {
              _this12.foodList.push(x);
            }
          });
        }
      }, {
        key: "changeModel",
        value: function changeModel(id) {
          var _this13 = this;

          var temp = _toConsumableArray(this.foodList);

          temp.forEach(function (x) {
            if (x.id === id) {
              _this13.foodData = x;
              _this13.orderDetail.itemFinalPrice = _this13.foodData.price * _this13.orderDetail.itemQty;
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


    __webpack_exports__["default"] = "img, p.center {\n  text-align: center;\n}\n\nion-select.none {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWl0ZW1zL0Q6XFxzaWRlQ2FyL3NyY1xcYXBwXFxob21lXFxob21lLWl0ZW1zXFxob21lLWl0ZW1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtaXRlbXMvaG9tZS1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtaXRlbXMvaG9tZS1pdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyxwLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tc2VsZWN0Lm5vbmV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59IiwiaW1nLCBwLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXNlbGVjdC5ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/location/location.service */
    "./src/app/Services/location/location.service.ts");
    /* harmony import */


    var src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/mainModel/main-model.service */
    "./src/app/Services/mainModel/main-model.service.ts");

    var HomeItemsComponent = /*#__PURE__*/function () {
      function HomeItemsComponent(appSetting, LocationService, mainItemService, modalController) {
        var _this14 = this;

        _classCallCheck(this, HomeItemsComponent);

        this.appSetting = appSetting;
        this.LocationService = LocationService;
        this.mainItemService = mainItemService;
        this.modalController = modalController;
        this.searchResturant = 0;
        this.searchCategory = 0;
        this.searchTxt = "";
        this.mainItemService.get().subscribe(function (x) {
          return _this14.appSetting.mainItemDataList = x;
        }, function (err) {
          return _this14.appSetting.showError(err);
        }, function () {
          _this14.appSetting.constmainItemDataList = _this14.appSetting.mainItemDataList;
        });
        this.locationReload();
      }

      _createClass(HomeItemsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "locationReload",
        value: function locationReload() {
          var _this15 = this;

          if (this.appSetting.locationDataList.length === 0) {
            this.LocationService.get().subscribe(function (x) {
              return _this15.appSetting.locationDataList = x;
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
          var _this16 = this;

          this.mainItemService.get().subscribe(function (x) {
            return _this16.appSetting.mainItemDataList = x;
          }, function (err) {
            return _this16.appSetting.showError(err);
          }, function () {
            _this16.appSetting.constmainItemDataList = _this16.appSetting.mainItemDataList;
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch(val) {
          var _this17 = this;

          var temp = _toConsumableArray(this.appSetting.constmainItemDataList);

          var z = [];
          temp.forEach(function (x) {
            if (x.name.toLowerCase().includes(_this17.searchTxt.toLowerCase())) {
              z.push(x);
            }

            _this17.appSetting.mainItemDataList = z;
          });

          if (this.searchTxt === "") {
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


    __webpack_exports__["default"] = "@media only screen and (max-width: 600px) {\n  ion-card.search {\n    background-image: url('mobile.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    min-height: 667px;\n    text-align: justify;\n    border-radius: 0px;\n    margin: 0px;\n  }\n\n  ion-card-content.searchContent {\n    margin-top: 200px;\n    min-height: 500px;\n    max-width: 500px;\n    margin-left: 5%;\n    margin-right: 5%;\n  }\n}\n@media only screen and (min-width: 601px) {\n  ion-card.search {\n    background-image: url('desktop.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    min-height: 667px;\n    text-align: justify;\n    border-radius: 0px;\n    margin: 0px;\n  }\n\n  ion-card-content.searchContent {\n    border-radius: 5px;\n    background-color: #FFE400;\n    margin-top: 200px;\n    margin-left: 20%;\n    margin-right: 20%;\n    min-height: auto;\n  }\n}\nion-slides.foot {\n  background-color: #222428;\n}\nh1.searchTitle {\n  line-height: 1.8;\n}\nion-title, ion-icon.title {\n  color: #ffe400 !important;\n}\nion-img.icon {\n  max-width: 45px;\n  max-height: 45px;\n  background-color: #FFE400;\n  border-radius: 25px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLXBhZ2UvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXGhvbWVcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQTtJQUNJLG1DQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ0NGOztFREVGO0lBRUksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDQUY7QUFDRjtBRElBO0VBQ0k7SUFDSSxvQ0FBQTtJQUNBLDRCQUFBO0lBQ0EsMkJBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNGTjs7RURNRTtJQUNJLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFFQSxnQkFBQTtFQ0pOO0FBQ0Y7QURVSTtFQUNJLHlCQUFBO0FDUlI7QURXQTtFQUNJLGdCQUFBO0FDUko7QURXQTtFQUNJLHlCQUFBO0FDUko7QURXQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbmlvbi1jYXJkLnNlYXJjaHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tb2JpbGUuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA2NjdweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSAgIFxyXG5cclxuaW9uLWNhcmQtY29udGVudC5zZWFyY2hDb250ZW50e1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gICAgaW9uLWNhcmQuc2VhcmNoe1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9kZXNrdG9wLmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDY2N3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfSAgIFxyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQuc2VhcmNoQ29udGVudHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG5cclxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgLy8gbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpb24tc2xpZGVzLmZvb3R7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQyODtcclxuICAgIH1cclxuXHJcbmgxLnNlYXJjaFRpdGxle1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxufVxyXG5cclxuaW9uLXRpdGxlLGlvbi1pY29uLnRpdGxle1xyXG4gICAgY29sb3I6ICNmZmU0MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWltZy5pY29ue1xyXG4gICAgbWF4LXdpZHRoOiA0NXB4O1xyXG4gICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkU0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGlvbi1jYXJkLnNlYXJjaCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21vYmlsZS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiA2NjdweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnQuc2VhcmNoQ29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICBpb24tY2FyZC5zZWFyY2gge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9kZXNrdG9wLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDY2N3B4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgaW9uLWNhcmQtY29udGVudC5zZWFyY2hDb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIG1hcmdpbi1yaWdodDogMjAlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbn1cbmlvbi1zbGlkZXMuZm9vdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI0Mjg7XG59XG5cbmgxLnNlYXJjaFRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxuaW9uLXRpdGxlLCBpb24taWNvbi50aXRsZSB7XG4gIGNvbG9yOiAjZmZlNDAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbWcuaWNvbiB7XG4gIG1heC13aWR0aDogNDVweDtcbiAgbWF4LWhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
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
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
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
          var _this18 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this18.appSetting.orderData.latitude = position.coords.latitude.toString();
              _this18.appSetting.orderData.longitude = position.coords.longitude.toString();
            });
          }

          this.foodService.getActive().subscribe(function (x) {
            return _this18.appSetting.menuFoodDataList = x;
          });
        }
      }, {
        key: "search",
        value: function search() {
          this.appSetting.customerSearch = "Search";
        }
      }, {
        key: "reset",
        value: function reset() {
          this.appSetting.customerSearch = "";
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigateByUrl("/login");
        }
      }, {
        key: "resturantLoaddata",
        value: function resturantLoaddata() {
          var _this19 = this;

          if (this.appSetting.resturandDataList.length === 0) {
            this.ResturantModelService.get().subscribe(function (x) {
              return _this19.appSetting.resturandDataList = x;
            }, function (err) {
              return _this19.appSetting.showError(err);
            }, function () {
              _this19.CategoryService.get().subscribe(function (x) {
                _this19.appSetting.categoryList = x, function (err) {
                  return _this19.appSetting.showError(err);
                }, function () {
                  _this19.appSetting.loadingClose();
                };
              });
            });
          }
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_items_home_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home-items/home-items.component */
    "./src/app/home/home-items/home-items.component.ts");
    /* harmony import */


    var _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./client-info/client-info.component */
    "./src/app/home/client-info/client-info.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _home_item_detail_home_item_detail_component__WEBPACK_IMPORTED_MODULE_2__["HomeItemDetailComponent"], _home_items_home_items_component__WEBPACK_IMPORTED_MODULE_10__["HomeItemsComponent"], _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_11__["ClientInfoComponent"], _client_shopcart_client_shopcart_component__WEBPACK_IMPORTED_MODULE_3__["ClientShopcartComponent"], _client_invoice_client_invoice_component__WEBPACK_IMPORTED_MODULE_1__["ClientInvoiceComponent"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"]]
    })], HomeModule);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map