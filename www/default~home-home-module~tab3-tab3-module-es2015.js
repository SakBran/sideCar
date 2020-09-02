(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~tab3-tab3-module"],{

/***/ "./src/app/Models/foodModel.ts":
/*!*************************************!*\
  !*** ./src/app/Models/foodModel.ts ***!
  \*************************************/
/*! exports provided: foodModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foodModel", function() { return foodModel; });
class foodModel {
}


/***/ }),

/***/ "./src/app/Models/mainModel.ts":
/*!*************************************!*\
  !*** ./src/app/Models/mainModel.ts ***!
  \*************************************/
/*! exports provided: mainModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainModel", function() { return mainModel; });
class mainModel {
}


/***/ }),

/***/ "./src/app/Services/category/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Services/category/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let CategoryService = class CategoryService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/apiCategoryModels`;
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
    put(data) {
        const searchUrl = `${this.url}/${data.id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe((res) => {
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
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/Services/food/food.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/food/food.service.ts ***!
  \***********************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/foodModel */ "./src/app/Models/foodModel.ts");
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../upload/upload.service */ "./src/app/Services/upload/upload.service.ts");






let FoodService = class FoodService {
    constructor(http, uploadService, appSetting) {
        this.http = http;
        this.uploadService = uploadService;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/foodModels`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
            }),
        };
    }
    get(id) {
        return this.http.get(this.url + `/resturant?ResturantID=${id}`);
    }
    getPending() {
        return this.http.get(this.url + `/pending`);
    }
    getActive() {
        return this.http.get(this.url + `/active`);
    }
    getSingle(id) {
        const searchUrl = `${this.url}/${id}`;
        return this.http.get(searchUrl);
    }
    post(data, imageData) {
        let temp = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        this.http.post(this.url, data, this.httpOptions).subscribe((res) => {
            temp = Object.assign(res);
            this.uploadService.post(imageData, "Image" + temp.id);
        }, (err) => {
            console.log(err);
        });
    }
    put(data) {
        let temp = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        const searchUrl = `${this.url}/${data.id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe(() => {
            this.refreshArray(data.id, data);
            this.appSetting.showSuccess();
        }, (err) => {
            console.log(err);
            this.appSetting.showError(err);
        });
    }
    putConfirm(id, result) {
        this.appSetting.showLoading();
        const searchUrl = `${this.url}/confirm?keyID=${id}&result=${result}`;
        let data = new src_app_Models_foodModel__WEBPACK_IMPORTED_MODULE_4__["foodModel"]();
        this.http.put(searchUrl, data, this.httpOptions).subscribe((res) => {
            this.refreshArray(id);
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
        this.refreshArray(id);
    }
    refreshArray(id, data) {
        let i = -1;
        this.appSetting.foodDataList.forEach((x) => {
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
                }
                catch (ex) {
                    console.log(JSON.stringify(ex));
                }
            }
        });
    }
};
FoodService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _upload_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
FoodService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], FoodService);



/***/ }),

/***/ "./src/app/Services/location/location.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Services/location/location.service.ts ***!
  \*******************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let LocationService = class LocationService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/locationModels`;
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
    put(data) {
        const searchUrl = `${this.url}/${data.id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe((res) => {
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
LocationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], LocationService);



/***/ }),

/***/ "./src/app/Services/mainModel/main-model.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Services/mainModel/main-model.service.ts ***!
  \**********************************************************/
/*! exports provided: MainModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModelService", function() { return MainModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_Models_mainModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/mainModel */ "./src/app/Models/mainModel.ts");
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../upload/upload.service */ "./src/app/Services/upload/upload.service.ts");






let MainModelService = class MainModelService {
    constructor(uploadService, http, appSetting) {
        this.uploadService = uploadService;
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/mainModels`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
            }),
        };
    }
    get() {
        return this.http.get(`${this.url}`);
    }
    getSingle(id) {
        const searchUrl = `${this.url}/${id}`;
        return this.http.get(searchUrl);
    }
    post(data, imageData) {
        let temp = new src_app_Models_mainModel__WEBPACK_IMPORTED_MODULE_4__["mainModel"]();
        this.http.post(this.url, data, this.httpOptions).subscribe((res) => {
            temp = Object.assign(res);
            this.uploadService.post(imageData, "MainImage" + temp.id);
        }, (err) => {
            console.log(err);
        });
    }
    put(data) {
        const searchUrl = `${this.url}/${data.id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe((res) => {
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
MainModelService.ctorParameters = () => [
    { type: _upload_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
MainModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], MainModelService);



/***/ }),

/***/ "./src/app/Services/resturantModel/resturant-model.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/Services/resturantModel/resturant-model.service.ts ***!
  \********************************************************************/
/*! exports provided: ResturantModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantModelService", function() { return ResturantModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let ResturantModelService = class ResturantModelService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/resturantModels`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
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
        this.http.post(this.url, data, this.httpOptions).subscribe(res => {
            this.appSetting.showSuccess();
        }, err => {
            console.log(err);
        });
    }
    put(data) {
        const searchUrl = `${this.url}/${data.id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe(res => {
            this.appSetting.showSuccess();
        }, err => {
            console.log(err);
            this.appSetting.showError(err);
        });
    }
    delete(id) {
        const data = null;
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
            }
        });
        xhr.open('DELETE', this.url + '/' + id);
        xhr.send(data);
    }
};
ResturantModelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
ResturantModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ResturantModelService);



/***/ }),

/***/ "./src/app/Services/upload/upload.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/upload/upload.service.ts ***!
  \***************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let UploadService = class UploadService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/upload`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "multipart/form-data",
            }),
        };
    }
    post(data, filename) {
        let Uploadurl = this.url + `?filename=${filename}`;
        const formData = new FormData();
        const blob = this.dataURItoBlob(data);
        formData.append('file', blob, filename + ".jpg");
        if (formData !== null) {
            this.http.post(Uploadurl, formData).subscribe((x) => console.log(x), (err) => {
                this.appSetting.showError(err);
            }, () => {
                this.appSetting.showSuccess();
            });
        }
    }
    dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        // create a view into the buffer
        var ia = new Uint8Array(ab);
        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], { type: mimeString });
        return blob;
    }
    b64toBlob(dataURI) {
        var byteString = atob(dataURI.split(",")[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: "image/jpeg" });
    }
};
UploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
UploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], UploadService);



/***/ }),

/***/ "./src/app/Services/userModel/user-model.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Services/userModel/user-model.service.ts ***!
  \**********************************************************/
/*! exports provided: UserModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModelService", function() { return UserModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let UserModelService = class UserModelService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/userModels`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    get() {
        return this.http.get(this.url);
    }
    getLogin(username, password) {
        console.log(this.url + `/login?user=${username}&password=${password}`);
        return this.http.get(this.url + `/login?user=${username}&password=${password}`);
    }
    getAvailableRider() {
        return this.http.get(this.url + `/availableRider`);
    }
    getDeliveringRider() {
        return this.http.get(this.url + `/deliveringRider`);
    }
    getSingle(id) {
        const searchUrl = `${this.url}/${id}`;
        return this.http.get(searchUrl);
    }
    post(data) {
        this.http.post(this.url, data, this.httpOptions).subscribe(res => {
            this.appSetting.showSuccess();
        }, err => {
            console.log(err);
        });
    }
    put(data) {
        const searchUrl = `${this.url}/${data.id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe(res => {
            this.appSetting.showSuccess();
        }, err => {
            console.log(err);
            this.appSetting.showError(err);
        });
    }
    putLocation(data) {
        const searchUrl = `${this.url}/${data.id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe(res => {
        }, err => {
            console.log(err);
        });
    }
    delete(id) {
        const data = null;
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
            }
        });
        xhr.open('DELETE', this.url + '/' + id);
        xhr.send(data);
    }
};
UserModelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
UserModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserModelService);



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~tab3-tab3-module-es2015.js.map