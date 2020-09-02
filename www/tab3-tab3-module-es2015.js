(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
  \*******************************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
class FileLikeObject {
    /**
     * @param {?} fileOrInput
     */
    constructor(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        let isInput = isElement(fileOrInput);
        /** @type {?} */
        let fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        let postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        let method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    _createFromFakePath(path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    }
    /**
     * @param {?} object
     * @return {?}
     */
    _createFromObject(object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileItem {
    /**
     * @param {?} uploader
     * @param {?} some
     * @param {?} options
     */
    constructor(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    upload() {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.uploader.cancelItem(this);
    }
    /**
     * @return {?}
     */
    remove() {
        this.uploader.removeFromQueue(this);
    }
    /**
     * @return {?}
     */
    onBeforeUpload() {
        return void 0;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    onBuildForm(form) {
        return { form };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgress(progress) {
        return { progress };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccess(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onError(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancel(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onComplete(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @return {?}
     */
    _onBeforeUpload() {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    }
    /**
     * @param {?} form
     * @return {?}
     */
    _onBuildForm(form) {
        this.onBuildForm(form);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccess(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onError(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancel(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileType {
    /**
     * @param {?} file
     * @return {?}
     */
    static getMimeClass(file) {
        /** @type {?} */
        let mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    }
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    static fileTypeDetection(inputFilename) {
        /** @type {?} */
        let types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        /** @type {?} */
        let chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        let extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
class FileUploader {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            (item) => item._file),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    }
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    addToQueue(files, options, filters) {
        /** @type {?} */
        let list = [];
        for (let file of files) {
            list.push(file);
        }
        /** @type {?} */
        let arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        let count = this.queue.length;
        /** @type {?} */
        let addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        (some) => {
            if (!options) {
                options = this.options;
            }
            /** @type {?} */
            let temp = new FileLikeObject(some);
            if (this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                let fileItem = new FileItem(this, some, options);
                addedFileItems.push(fileItem);
                this.queue.push(fileItem);
                this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                let filter = arrayOfFilters[this._failFilterIndex];
                this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeFromQueue(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    }
    /**
     * @return {?}
     */
    clearQueue() {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    uploadItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cancelItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    }
    /**
     * @return {?}
     */
    uploadAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploading));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item._prepareToUploading()));
        items[0].upload();
    }
    /**
     * @return {?}
     */
    cancelAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.cancel()));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFile(value) {
        return isFile(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFileLikeObject(value) {
        return value instanceof FileLikeObject;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getIndexOfItem(value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    }
    /**
     * @return {?}
     */
    getNotUploadedItems() {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploaded));
    }
    /**
     * @return {?}
     */
    getReadyItems() {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => (item.isReady && !item.isUploading)))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        (item1, item2) => item1.index - item2.index));
    }
    /**
     * @return {?}
     */
    destroy() {
        return void 0;
    }
    /**
     * @param {?} fileItems
     * @return {?}
     */
    onAfterAddingAll(fileItems) {
        return { fileItems };
    }
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    onBuildItemForm(fileItem, form) {
        return { fileItem, form };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onAfterAddingFile(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    onWhenAddingFileFailed(item, filter, options) {
        return { item, filter, options };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onBeforeUploadItem(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    onProgressItem(fileItem, progress) {
        return { fileItem, progress };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgressAll(progress) {
        return { progress };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccessItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onErrorItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancelItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCompleteItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @return {?}
     */
    onCompleteAll() {
        return void 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _mimeTypeFilter(item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileSizeFilter(item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileTypeFilter(item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onErrorItem(item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCompleteItem(item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        let nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    }
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    _headersGetter(parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        (name) => {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _xhrTransport(item) {
        /** @type {?} */
        let that = this;
        /** @type {?} */
        let xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        let sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            const appendFile = (/**
             * @return {?}
             */
            () => sendable.append(item.alias, item._file, item.file.name));
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    /** @type {?} */
                    let paramVal = this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            let progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            /** @type {?} */
            let gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            let method = '_on' + gist + 'Item';
            ((/** @type {?} */ (this)))[method](item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onErrorItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onCancelItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (let header of this.options.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (let header of item.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => xhr.send(JSON.stringify(result))));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    }
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    _getTotalProgress(value = 0) {
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        let notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        let uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        let ratio = 100 / this.queue.length;
        /** @type {?} */
        let current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    }
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    _getFilters(filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            let names = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => names.indexOf(filter.name) !== -1));
        }
        return this.options.filters;
    }
    /**
     * @protected
     * @return {?}
     */
    _render() {
        return void 0;
    }
    /**
     * @protected
     * @return {?}
     */
    _queueLimitFilter() {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    _isValidFile(file, filters, options) {
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => {
            this._failFilterIndex++;
            return filter.fn.call(this, file, options);
        }));
    }
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    _isSuccessCode(status) {
        return (status >= 200 && status < 300) || status === 304;
    }
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    _transformResponse(response, headers) {
        return response;
    }
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    _parseHeaders(headers) {
        /** @type {?} */
        let parsed = {};
        /** @type {?} */
        let key;
        /** @type {?} */
        let val;
        /** @type {?} */
        let i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        (line) => {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    _onWhenAddingFileFailed(item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onAfterAddingFile(item) {
        this.onAfterAddingFile(item);
    }
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    _onAfterAddingAll(items) {
        this.onAfterAddingAll(items);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onBeforeUploadItem(item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    _onBuildItemForm(item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    _onProgressItem(item, progress) {
        /** @type {?} */
        let total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccessItem(item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancelItem(item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileSelectDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @return {?}
     */
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */
    onChange() {
        /** @type {?} */
        let files = this.element.nativeElement.files;
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) { return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FileSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FileSelectDirective, selectors: [["", "ng2FileSelect", ""]], hostBindings: function FileSelectDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileSelectDirective_change_HostBindingHandler() { return ctx.onChange(); });
    } }, inputs: { uploader: "uploader" }, outputs: { onFileSelected: "onFileSelected" } });
/** @nocollapse */
FileSelectDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileSelectDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSelectDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng2FileSelect]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onFileSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change']
        }], uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileDropDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    _haveFiles(types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    }
}
FileDropDirective.ɵfac = function FileDropDirective_Factory(t) { return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FileDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FileDropDirective, selectors: [["", "ng2FileDrop", ""]], hostBindings: function FileDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); });
    } }, inputs: { uploader: "uploader" }, outputs: { fileOver: "fileOver", onFileDrop: "onFileDrop" } });
/** @nocollapse */
FileDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileDropDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng2FileDrop]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { fileOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onFileDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
        }], uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadModule {
}
FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FileUploadModule });
FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FileUploadModule_Factory(t) { return new (t || FileUploadModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, { declarations: function () { return [FileDropDirective,
        FileSelectDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [FileDropDirective,
        FileSelectDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng2-file-upload.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  item-confirm-detail works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm/item-confirm.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm/item-confirm.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\">\r\n         \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of this.appSetting.foodDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/../assets/food.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"fast-food-outline\"></ion-icon>\r\n            <ng-container\r\n              *ngIf=\"\r\n                this.item.itemNameTemp !== '' && this.item.status !== 'delete'\r\n              \"\r\n              >{{ item.itemNameTemp\r\n              }}<ion-icon name=\"arrow-redo-outline\"></ion-icon\r\n            ></ng-container>\r\n            <ng-container> {{ item.itemName }}</ng-container>\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"card-outline\"></ion-icon> Price\r\n            <ng-container\r\n              *ngIf=\"this.item.priceTemp !== 0 && this.item.status !== 'delete'\"\r\n              >{{ item.priceTemp\r\n              }}<ion-icon name=\"arrow-redo-outline\"></ion-icon\r\n            ></ng-container>\r\n\r\n            <ng-container> {{ item.price }}</ng-container>\r\n          </p>\r\n\r\n          <p *ngIf=\"this.item.status === 'delete'\">\r\n            <ion-text color=\"danger\">\r\n              <h3>Delete this item</h3>\r\n            </ion-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            \r\n            <ion-col \r\n              ><ion-button\r\n                (click)=\"reject(item.id)\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                color=\"secondary\"\r\n              >\r\n                Reject</ion-button\r\n            ></ion-col>\r\n            <ion-col \r\n              ><ion-button\r\n                (click)=\"acept(item.id)\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                color=\"secondary\"\r\n              >\r\n               Acept </ion-button\r\n            ></ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-create/location-create.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-create/location-create.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\">Location & Price Registration Form</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shop's General Info</ion-card-subtitle>\r\n\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Township<ion-text\r\n                *ngIf=\"this.locationData.TownShip===''||this.locationData.TownShip===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.TownShip\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Zone<ion-text\r\n                *ngIf=\"this.locationData.Zone===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.Zone\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"card-outline\"></ion-icon> Delivery Charges<ion-text\r\n                *ngIf=\"this.locationData.deliveryCharges===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.deliveryCharges\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n         <!-------- <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"bicycle-outline\"></ion-icon> Rider Earnings<ion-text\r\n                *ngIf=\"this.locationData.riderEarning===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.riderEarning\" type=\"text\"></ion-input>\r\n          </ion-item>-------->\r\n\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button *ngIf=\"this.id===0\" (click)=\"create()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Save\r\n            </ion-button>\r\n            <ion-button *ngIf=\"this.id!==0\" (click)=\"update()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-list/location-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-list/location-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/locationCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of locationDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/shop.svg'>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"business-outline\"></ion-icon> {{item.TownShip}}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"card-outline\"></ion-icon> Delivery Charges {{item.deliveryCharges}}\r\n          </p>\r\n        <!-----  <p>\r\n            <ion-icon name=\"bicycle-outline\"></ion-icon> Rider Earnings {{item.riderEarning}}\r\n          </p>---->\r\n        </ion-label>\r\n\r\n        <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-create/main-item-create.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-create/main-item-create.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-chip (click)=\"back()\">\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\n            <ion-label>Back</ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col size=\"5\"> </ion-col>\n        <ion-col size=\"3\"> </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle color=\"primary\"\n        >Main Foods & Drink Registration Form</ion-card-subtitle\n      >\n    </ion-card-header>\n    <ion-card-content>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Foods & Drinks General Info</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"fast-food-outline\"></ion-icon> Food/Drink's\n              Name<ion-text\n                *ngIf=\"\n                  this.foodData.name === '' ||\n                  this.foodData.name === null\n                \"\n                color=\"danger\"\n              >\n                *\n              </ion-text>\n            </ion-label>\n            <ion-input [(ngModel)]=\"foodData.name\" type=\"text\"></ion-input>\n          </ion-item>\n\n    \n\n          <ion-item>\n            <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"cash-outline\"></ion-icon> Descriptions<ion-text\n                *ngIf=\"this.foodData.description === ''\"\n                color=\"danger\"\n              >\n                *\n              </ion-text>\n            </ion-label>\n            <ion-input [(ngModel)]=\"foodData.description\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"cash-outline\"></ion-icon> Resturant\n              <ion-text *ngIf=\"this.foodData.resturant_id === 0\" color=\"danger\">\n                *\n              </ion-text>\n            </ion-label>\n\n            <ion-select [(ngModel)]=\"foodData.resturant_id\">\n              <ion-select-option\n                *ngFor=\"let item of this.appSetting.resturandDataList\"\n                [value]=\"item.id\"\n                >{{ item.shopname }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"cash-outline\"></ion-icon> Category Type\n              <ion-text *ngIf=\"this.foodData.category_id === 0\" color=\"danger\">\n                *\n              </ion-text>\n            </ion-label>\n\n            <ion-select  [(ngModel)]=\"foodData.category_id\">\n              <ion-select-option\n                *ngFor=\"let item of this.appSetting.categoryList\"\n                [value]=\"item.id\"\n                >{{ item.categoryName }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <input type=\"file\" (change)=\"fileChangeEvent($event)\" />\n          </ion-item>\n          <ion-item>\n            <!-----  <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"cash-outline\"></ion-icon> Image\n              Price<ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\n                *\n              </ion-text>\n            </ion-label>----->\n            <image-cropper\n              [imageChangedEvent]=\"imageChangedEvent\"\n              [maintainAspectRatio]=\"true\"\n              [aspectRatio]=\"1 / 1\"\n              format=\"png\"\n              (imageCropped)=\"imageCropped($event)\"\n            ></image-cropper>\n          </ion-item>\n\n          <ion-item>\n            <img [src]=\"croppedImage\" />\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\n              Cancel\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              *ngIf=\"this.id === 0\"\n              (click)=\"create()\"\n              expand=\"block\"\n              color=\"secondary\"\n              shape=\"round\"\n            >\n              Save\n            </ion-button>\n            <ion-button\n              *ngIf=\"this.id !== 0\"\n              (click)=\"update()\"\n              expand=\"block\"\n              color=\"secondary\"\n              shape=\"round\"\n            >\n              Update\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-list/main-item-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-list/main-item-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-chip (click)=\"back()\">\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\n            <ion-label>Back</ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col size=\"5\"> </ion-col>\n        <ion-col size=\"3\">\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/mainItemCreate\">\n            <ion-icon name=\"person-add-outline\"></ion-icon>\n            <ion-label>New</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor=\"let item of this.appSetting.mainItemDataList\">\n    <ion-card-content>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"/../assets/food.svg\" />\n        </ion-avatar>\n        <ion-label>\n          <p>\n            <ion-icon name=\"fast-food-outline\"></ion-icon> {{ item.name }}\n          </p>\n          <p>\n            <ion-icon name=\"card-outline\"></ion-icon> Resturant {{ this.appSetting.resName(item.resturant_id) }}\n          </p>\n        </ion-label>\n\n        <ion-button\n          *ngIf=\"this.item.status === 'active'\"\n          (click)=\"onEdit(item.id)\"\n          color=\"secondary\"\n        >\n          <ion-icon name=\"create-outline\"></ion-icon>\n        </ion-button>\n\n        <ion-button\n          *ngIf=\"this.item.status === 'active'\"\n          (click)=\"onDelete(item.id)\"\n          color=\"danger\"\n        >\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n\n        <ion-button *ngIf=\"this.item.status !== 'active'\" color=\"success\">\n          <ion-icon name=\"shield-checkmark-outline\"></ion-icon> Processing\n        </ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-page/main-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-page/main-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\r\n \r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card\r\n          routerLink=\"/managmenet/tabs/tab1/deliveryPending\"\r\n          class=\"report\"\r\n          button\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Delivery Pending</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/brochure.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Delivery Finished</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/goal.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"userList\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>User</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/person.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"resturantList\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Resturant</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/market.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"itemConfirm\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Item Confirm</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/food.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"locationList\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Location & Price</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/location.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"riderEarning\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Rider Earning</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/price.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Report</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/report.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"openingBalance\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Opening Balance</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/calculator.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"mainItem\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Main Item</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/foodMain.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card\r\n          class=\"report\"\r\n          routerLink=\"/managmenet/tabs/tab3/foodList\"\r\n          button\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Sub Item</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/fried-chicken.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col> </ion-col>\r\n    </ion-row>\r\n\r\n</ion-grid>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-create/opening-create.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-create/opening-create.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\">Opening Balance Registration Form</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      \r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"person-outline\"></ion-icon> Rider<ion-text\r\n                *ngIf=\"this.resData.riderID===0||this.resData.riderID===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-select  [(ngModel)]=\"this.resData.riderID\">\r\n              <ion-select-option *ngFor=\"let item of this.riderList\" [value]='item.id'>{{item.username}} | {{item.phone}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        \r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Opening Balance Amount<ion-text\r\n                *ngIf=\"this.resData.openingAmount===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.openingAmount\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Date<ion-text\r\n                *ngIf=\"this.resData.openingAmount_date===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.openingAmount_date\" type=\"date\"></ion-input>\r\n          </ion-item>\r\n       \r\n      \r\n   \r\n\r\n      \r\n\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button *ngIf=\"this.id===0\" (click)=\"create()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Save\r\n            </ion-button>\r\n            <ion-button *ngIf=\"this.id!==0\" (click)=\"update()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-list/opening-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-list/opening-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/openingBalanceCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of resDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/shop.svg'>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"business-outline\"></ion-icon> Rider :{{this.riderName(item.riderID)}}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"call-outline\"></ion-icon> Amount :{{item.openingAmount}}\r\n          </p>\r\n        </ion-label>\r\n\r\n        <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-item>\r\n    <ion-label>Report Date</ion-label>\r\n    <ion-datetime (ngModelChange)=\"dateChange($event)\" [(ngModel)]=\"searchDate\"displayFormat=\"DD-MMMM-YYYY\" ></ion-datetime>\r\n  </ion-item>\r\n</ion-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-create/order-management-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-create/order-management-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  order-management-create works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-list/order-management-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-list/order-management-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  order-management-list works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-create/resturant-create.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-create/resturant-create.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\"> </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\"\r\n        >Resturant Registration Form</ion-card-subtitle\r\n      >\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shop's General Info</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"person-outline\"></ion-icon> Shop's\r\n              username<ion-text\r\n                *ngIf=\"\r\n                  this.resData.username === '' || this.resData.username === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.username\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Shop's name<ion-text\r\n                *ngIf=\"\r\n                  this.resData.shopname === '' || this.resData.shopname === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.shopname\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"lock-open-outline\"></ion-icon> Password<ion-text\r\n                *ngIf=\"\r\n                  this.resData.password === '' || this.resData.password === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"resData.password\"\r\n              type=\"password\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"call-outline\"></ion-icon> Phone<ion-text\r\n                *ngIf=\"this.resData.phone === '' || this.resData.phone === null\"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.phone\" type=\"tel\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"call-outline\"></ion-icon> Zone<ion-text\r\n                *ngIf=\" this.resData.locationID === null\"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.locationID\" type=\"number\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"card-outline\"></ion-icon> Select Type<ion-text\r\n                *ngIf=\"\r\n                  this.resData.resturantType === '' ||\r\n                  this.resData.resturantType === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n\r\n            <ion-select [(ngModel)]=\"this.resData.resturantType\">\r\n              <ion-select-option [value]=\"this.credit\"\r\n                >Credit</ion-select-option\r\n              >\r\n              <ion-select-option [value]=\"this.debit\">Debit</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shop's Location</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"location-outline\"></ion-icon> Longitude\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"resData.longitude\"\r\n              type=\"number\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"location-outline\"></ion-icon> Latitude\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.latitude\" type=\"number\"></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button\r\n              *ngIf=\"this.id === 0\"\r\n              (click)=\"create()\"\r\n              expand=\"block\"\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n            >\r\n              Save\r\n            </ion-button>\r\n            <ion-button\r\n              *ngIf=\"this.id !== 0\"\r\n              (click)=\"update()\"\r\n              expand=\"block\"\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n            >\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-list/resturant-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-list/resturant-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/resturantCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of resDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/shop.svg'>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"business-outline\"></ion-icon> {{item.shopname}}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"call-outline\"></ion-icon> Ph {{item.phone}}\r\n          </p>\r\n        </ion-label>\r\n\r\n        <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\">Location & Price Registration Form</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shop's General Info</ion-card-subtitle>\r\n\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n\r\n         \r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"card-outline\"></ion-icon> Delivery Charges<ion-text\r\n                *ngIf=\"this.riderEarningData.deliveryCharges===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"riderEarningData.deliveryCharges\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"card-outline\"></ion-icon> Rider Earnging<ion-text\r\n                *ngIf=\"this.riderEarningData.riderEarning===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"riderEarningData.riderEarning\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n         \r\n         <!-------- <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"bicycle-outline\"></ion-icon> Rider Earnings<ion-text\r\n                *ngIf=\"this.locationData.riderEarning===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.riderEarning\" type=\"text\"></ion-input>\r\n          </ion-item>-------->\r\n\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button *ngIf=\"this.id===0\" (click)=\"create()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Save\r\n            </ion-button>\r\n            <ion-button *ngIf=\"this.id!==0\" (click)=\"update()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/riderEarningCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of DataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/shop.svg'>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"business-outline\"></ion-icon> Rider Earnging {{item.riderEarning}}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"card-outline\"></ion-icon> Delivery Charges {{item.deliveryCharges}}\r\n          </p>\r\n        <!-----  <p>\r\n            <ion-icon name=\"bicycle-outline\"></ion-icon> Rider Earnings {{item.riderEarning}}\r\n          </p>---->\r\n        </ion-label>\r\n\r\n        <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-create/user-create.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-create/user-create.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\">User Registration Form</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>User's General Info</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"person-outline\"></ion-icon>Username\r\n              <ion-text *ngIf=\"this.userData.username===''||this.userData.username===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"userData.username\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"lock-open-outline\"></ion-icon>Password\r\n              <ion-text *ngIf=\"this.userData.password===''||this.userData.password===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"userData.password\" type=\"password\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"call-outline\"></ion-icon> Please enter phone\r\n              <ion-text *ngIf=\"this.userData.phone===''||this.userData.phone===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"this.userData.phone\" type=\"tel\"></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Security Info</ion-card-subtitle>\r\n\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"shield-checkmark-outline\"></ion-icon> Select User type\r\n              <ion-text *ngIf=\"this.userData.usertype===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-select [(ngModel)]=\"userData.usertype\" placeholder=\"Select one\">\r\n              <ng-container *ngFor=\"let item of this.userTypeData;let i=index;\">\r\n                <ion-select-option   [value]=\"item.id\">\r\n                  {{i+1}}.{{item.usertypeName}}</ion-select-option>\r\n              </ng-container>\r\n              \r\n             \r\n            </ion-select>\r\n\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button *ngIf=\"this.id===0\" (click)=\"create()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Save\r\n            </ion-button>\r\n            <ion-button *ngIf=\"this.id!==0\" (click)=\"update()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-list/user-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-list/user-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/userCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n    <ion-card *ngFor=\"let item of userDataList\">\r\n     \r\n      <ion-card-content>\r\n        <ion-item> \r\n          <ion-avatar slot=\"start\">\r\n            <img src='/../assets/person.svg'>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <p><ion-icon name=\"person-outline\"></ion-icon>{{item.username}}</p>\r\n            <p><ion-icon name=\"call-outline\"></ion-icon> Ph {{item.phone}}</p>\r\n          </ion-label>\r\n          <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n          </ion-button>\r\n\r\n          <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-create/food-create.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-create/food-create.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\"> </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\"\r\n        >Foods & Drink Registration Form</ion-card-subtitle\r\n      >\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Foods & Drinks General Info</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"fast-food-outline\"></ion-icon> Food/Drink's\r\n              Name<ion-text\r\n                *ngIf=\"\r\n                  this.foodData.itemName === '' ||\r\n                  this.foodData.itemName === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"foodData.itemName\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Food/Drink's\r\n              Price<ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"foodData.price\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Descriptions<ion-text\r\n                *ngIf=\"this.foodData.Descriptions === ''\"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"foodData.Descriptions\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Category Type\r\n              <ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n\r\n            <ion-select [(ngModel)]=\"foodData.categoryType_ID\">\r\n              <ion-select-option\r\n                *ngFor=\"let item of this.appSetting.categoryList\"\r\n                [value]=\"item.id\"\r\n                >{{ item.categoryName }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Main Base Item\r\n              <ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n\r\n            <ion-select [(ngModel)]=\"foodData.mainitem_id\" (ngModelChange)=\"dataChange($event)\">\r\n              <ion-select-option\r\n                *ngFor=\"let item of this.appSetting.mainItemDataList\"\r\n                [value]=\"item.id\"\r\n                >{{ item.name }} |\r\n                {{\r\n                  this.appSetting.resName(item.resturant_id)\r\n                }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <input type=\"file\" (change)=\"fileChangeEvent($event)\" />\r\n          </ion-item>\r\n          <ion-item>\r\n            <!-----  <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Image\r\n              Price<ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>----->\r\n            <image-cropper\r\n              [imageChangedEvent]=\"imageChangedEvent\"\r\n              [maintainAspectRatio]=\"true\"\r\n              [aspectRatio]=\"1 / 1\"\r\n              format=\"png\"\r\n              (imageCropped)=\"imageCropped($event)\"\r\n            ></image-cropper>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <img [src]=\"croppedImage\" />\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button\r\n              *ngIf=\"this.id === 0\"\r\n              (click)=\"create()\"\r\n              expand=\"block\"\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n            >\r\n              Save\r\n            </ion-button>\r\n            <ion-button\r\n              *ngIf=\"this.id !== 0\"\r\n              (click)=\"update()\"\r\n              expand=\"block\"\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n            >\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-list/food-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-list/food-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/foodCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of this.appSetting.foodDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/../assets/food.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"fast-food-outline\"></ion-icon> {{ item.itemName }}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"card-outline\"></ion-icon> Price {{ item.price }}\r\n          </p>\r\n        </ion-label>\r\n\r\n        <ion-button\r\n          *ngIf=\"this.item.status === 'active'\"\r\n          (click)=\"onEdit(item.id)\"\r\n          color=\"secondary\"\r\n        >\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button\r\n          *ngIf=\"this.item.status === 'active'\"\r\n          (click)=\"onDelete(item.id)\"\r\n          color=\"danger\"\r\n        >\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button *ngIf=\"this.item.status !== 'active'\" color=\"success\">\r\n          <ion-icon name=\"shield-checkmark-outline\"></ion-icon> Processing\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/res-main-page/res-main-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/res-main-page/res-main-page.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card routerLink=\"foodList\" class=\"report\" button>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Food & Drinks</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <img src=\"/../assets/food.svg\" />\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card class=\"report\" routerLink=\"resturantList\" button>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Report</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <img src=\"/../assets/graphic.svg\" />\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n \r\n</ion-grid>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <app-main-page *ngIf=\"this.appSetting.loginType==='admin'\"></app-main-page>\r\n  <app-res-main-page *ngIf=\"this.appSetting.loginType==='resturant'\"></app-res-main-page>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/Services/openingBalance/opening-balance.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/Services/openingBalance/opening-balance.service.ts ***!
  \********************************************************************/
/*! exports provided: OpeningBalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningBalanceService", function() { return OpeningBalanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let OpeningBalanceService = class OpeningBalanceService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/OpeningBalanceModels`;
        this.date_url = `${this.appSetting.apiAddress}/api/OpeningBalanceModels/today`;
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
    getDate(date) {
        const tempDate = date.toString().substring(0, 10);
        const searchUrl = `${this.date_url}/?date=${tempDate}`;
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
OpeningBalanceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
OpeningBalanceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OpeningBalanceService);



/***/ }),

/***/ "./src/app/Services/riderEarning/rider-earning.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/Services/riderEarning/rider-earning.service.ts ***!
  \****************************************************************/
/*! exports provided: RiderEarningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderEarningService", function() { return RiderEarningService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let RiderEarningService = class RiderEarningService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.apiAddress}/api/riderEarningModels`;
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
            this.appSetting.showError(err);
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
RiderEarningService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
RiderEarningService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RiderEarningService);



/***/ }),

/***/ "./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vaXRlbS1jb25maXJtLWRldGFpbC9pdGVtLWNvbmZpcm0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ItemConfirmDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemConfirmDetailComponent", function() { return ItemConfirmDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ItemConfirmDetailComponent = class ItemConfirmDetailComponent {
    constructor() { }
    ngOnInit() { }
};
ItemConfirmDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-confirm-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-confirm-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-confirm-detail.component.scss */ "./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.scss")).default]
    })
], ItemConfirmDetailComponent);



/***/ }),

/***/ "./src/app/tab3/admin/item-confirm/item-confirm.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/tab3/admin/item-confirm/item-confirm.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vaXRlbS1jb25maXJtL2l0ZW0tY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab3/admin/item-confirm/item-confirm.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tab3/admin/item-confirm/item-confirm.component.ts ***!
  \*******************************************************************/
/*! exports provided: ItemConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemConfirmComponent", function() { return ItemConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/food/food.service */ "./src/app/Services/food/food.service.ts");







let ItemConfirmComponent = class ItemConfirmComponent {
    constructor(location, appSetting, FoodService, route) {
        this.location = location;
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.route = route;
    }
    ngOnInit() {
        this.dataLoading();
    }
    back() {
        this.location.back();
    }
    dataLoading() {
        this.FoodService.getPending().subscribe((x) => {
            this.appSetting.showLoading();
            this.appSetting.foodDataList = x;
        }, (err) => this.appSetting.showError(err), () => {
            this.appSetting.loadingClose();
        });
    }
    acept(id) {
        this.FoodService.putConfirm(id, "true");
        this.FoodService.getPending().subscribe((x) => {
            this.appSetting.foodDataList = x;
        }, (err) => {
            this.appSetting.showError(err);
        }, () => { });
    }
    reject(id) {
        this.FoodService.putConfirm(id, "false");
        this.FoodService.getPending().subscribe((x) => {
            this.appSetting.foodDataList = x;
        }, (err) => {
            this.appSetting.showError(err);
        }, () => { });
    }
    refresh(event) {
        this.FoodService.getPending().subscribe((x) => {
            this.appSetting.foodDataList = x;
        }, (err) => {
            this.appSetting.showError(err);
            event.target.complete();
        }, () => {
            if (event !== undefined || event !== null) {
                event.target.complete();
            }
        });
    }
    onEdit(id) {
        this.route.navigateByUrl("managmenet/tabs/tab3/foodEdit/" + id);
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.FoodService.delete(id);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
};
ItemConfirmComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ItemConfirmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-item-confirm",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm/item-confirm.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-confirm.component.scss */ "./src/app/tab3/admin/item-confirm/item-confirm.component.scss")).default]
    })
], ItemConfirmComponent);



/***/ }),

/***/ "./src/app/tab3/admin/location-create/location-create.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tab3/admin/location-create/location-create.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vbG9jYXRpb24tY3JlYXRlL2xvY2F0aW9uLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab3/admin/location-create/location-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/admin/location-create/location-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: LocationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationCreateComponent", function() { return LocationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/location/location.service */ "./src/app/Services/location/location.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let LocationCreateComponent = class LocationCreateComponent {
    constructor(location, appSetting, LocationService, route, Router) {
        this.location = location;
        this.appSetting = appSetting;
        this.LocationService = LocationService;
        this.route = route;
        this.Router = Router;
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.locationData = {
            id: 0,
            TownShip: "",
            Zone: "",
            deliveryCharges: 0,
            riderEarning: 0,
        };
    }
    ngOnInit() {
        if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
        }
    }
    back() {
        this.location.back();
    }
    editLoad(id) {
        this.appSetting.showLoading();
        if (id !== 0) {
            this.LocationService.getSingle(id).subscribe((x) => (this.locationData = x), (err) => this.appSetting.showError(err), () => this.appSetting.loadingClose());
        }
        else {
            this.appSetting.loadingClose();
        }
    }
    formValidation() {
        if (this.locationData.TownShip === "" ||
            this.locationData.deliveryCharges === 0) {
            return false;
        }
        return true;
    }
    create() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.LocationService.post(this.locationData);
        }
        else {
            this.appSetting.showInvalid();
        }
    }
    update() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.LocationService.put(this.locationData);
            // this.route.navigateByUrl('tabs/tab3/resturantList');
        }
        else {
            this.appSetting.showInvalid();
        }
    }
};
LocationCreateComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
LocationCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-location-create",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-create/location-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location-create.component.scss */ "./src/app/tab3/admin/location-create/location-create.component.scss")).default]
    })
], LocationCreateComponent);



/***/ }),

/***/ "./src/app/tab3/admin/location-list/location-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/tab3/admin/location-list/location-list.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vbG9jYXRpb24tbGlzdC9sb2NhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab3/admin/location-list/location-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tab3/admin/location-list/location-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: LocationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationListComponent", function() { return LocationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/location/location.service */ "./src/app/Services/location/location.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







let LocationListComponent = class LocationListComponent {
    constructor(location, appSetting, LocationService, route) {
        this.location = location;
        this.appSetting = appSetting;
        this.LocationService = LocationService;
        this.route = route;
        this.locationDataList = [];
    }
    ngOnInit() {
        this.dataLoading();
    }
    back() {
        this.location.back();
    }
    dataLoading() {
        this.LocationService.get().subscribe((x) => {
            this.appSetting.showLoading();
            this.locationDataList = x;
        }, (err) => this.appSetting.showError(err), () => {
            this.appSetting.loadingClose();
        });
    }
    refresh(event) {
        this.LocationService.get().subscribe((x) => {
            this.locationDataList = x;
        }, (err) => {
            this.appSetting.showError(err);
            event.target.complete();
        }, () => {
            if (event !== undefined || event !== null) {
                event.target.complete();
            }
        });
    }
    onEdit(id) {
        this.route.navigateByUrl("managmenet/tabs/tab3/locationEdit/" + id);
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.LocationService.delete(id);
                this.locationDataList.splice(id, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
};
LocationListComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LocationListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-location-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-list/location-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location-list.component.scss */ "./src/app/tab3/admin/location-list/location-list.component.scss")).default]
    })
], LocationListComponent);



/***/ }),

/***/ "./src/app/tab3/admin/main-item-create/main-item-create.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tab3/admin/main-item-create/main-item-create.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vbWFpbi1pdGVtLWNyZWF0ZS9tYWluLWl0ZW0tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab3/admin/main-item-create/main-item-create.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab3/admin/main-item-create/main-item-create.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainItemCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainItemCreateComponent", function() { return MainItemCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/mainModel/main-model.service */ "./src/app/Services/mainModel/main-model.service.ts");
/* harmony import */ var _Services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Services/category/category.service */ "./src/app/Services/category/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







let MainItemCreateComponent = class MainItemCreateComponent {
    constructor(location, appSetting, FoodService, route, Router, categoryService) {
        this.location = location;
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.route = route;
        this.Router = Router;
        this.categoryService = categoryService;
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.foodData = {
            id: 0,
            name: "",
            description: "",
            resturant: "",
            resturant_id: 0,
            category_id: 0,
            mainitem_id: 0,
            imageURI: "",
            status: "active"
        };
        this.croppedImage = '';
        //Image
        this.imageChangedEvent = '';
        this.getCategory();
    }
    ngOnInit() {
        if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
        }
    }
    getCategory() {
        this.categoryService.get().subscribe(x => {
            this.appSetting.categoryList = x;
        });
    }
    back() {
        this.location.back();
    }
    editLoad(id) {
        this.appSetting.showLoading();
        if (id !== 0) {
            this.FoodService.getSingle(id).subscribe((x) => (this.foodData = x), (err) => this.appSetting.showError(err), () => {
                this.appSetting.loadingClose();
            });
        }
        else {
            this.appSetting.loadingClose();
        }
    }
    formValidation() {
        if (this.foodData.name === "" || this.foodData.resturant_id === 0) {
            return false;
        }
        return true;
    }
    create() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.FoodService.post(this.foodData, this.croppedImage);
        }
        else {
            this.appSetting.showInvalid();
        }
    }
    update() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.foodData.status = "pending";
            this.FoodService.put(this.foodData);
            // this.route.navigateByUrl('tabs/tab3/resturantList');
        }
        else {
            this.appSetting.showInvalid();
        }
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
};
MainItemCreateComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: _Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_1__["MainModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _Services_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
MainItemCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main-item-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-item-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-create/main-item-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-item-create.component.scss */ "./src/app/tab3/admin/main-item-create/main-item-create.component.scss")).default]
    })
], MainItemCreateComponent);



/***/ }),

/***/ "./src/app/tab3/admin/main-item-list/main-item-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/admin/main-item-list/main-item-list.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vbWFpbi1pdGVtLWxpc3QvbWFpbi1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab3/admin/main-item-list/main-item-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tab3/admin/main-item-list/main-item-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: MainItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainItemListComponent", function() { return MainItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/mainModel/main-model.service */ "./src/app/Services/mainModel/main-model.service.ts");







let MainItemListComponent = class MainItemListComponent {
    constructor(location, appSetting, FoodService, route) {
        this.location = location;
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.route = route;
    }
    ngOnInit() {
        this.dataLoading();
    }
    back() {
        this.location.back();
    }
    dataLoading() {
        this.FoodService.get().subscribe((x) => {
            this.appSetting.showLoading();
            this.appSetting.mainItemDataList = x;
        }, (err) => this.appSetting.showError(err), () => {
            this.appSetting.loadingClose();
        });
    }
    refresh(event) {
        this.FoodService.get().subscribe((x) => {
            this.appSetting.mainItemDataList = x;
        }, (err) => {
            this.appSetting.showError(err);
            event.target.complete();
        }, () => {
            if (event !== undefined || event !== null) {
                event.target.complete();
            }
        });
    }
    onEdit(id) {
        this.route.navigateByUrl("managmenet/tabs/tab3/mainItemEdit/" + id);
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.FoodService.delete(id);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
};
MainItemListComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_6__["MainModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MainItemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-item-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-item-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-list/main-item-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-item-list.component.scss */ "./src/app/tab3/admin/main-item-list/main-item-list.component.scss")).default]
    })
], MainItemListComponent);



/***/ }),

/***/ "./src/app/tab3/admin/main-page/main-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tab3/admin/main-page/main-page.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (min-width: 601px) {\n  .report {\n    max-width: 300px !important;\n    min-width: 300px !important;\n    min-height: 400px !important;\n    max-height: 400px !important;\n  }\n\n  img.tab {\n    background-color: transparent;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .report {\n    min-height: 150px !important;\n    max-height: 150px !important;\n  }\n\n  img.tab {\n    min-height: 100px !important;\n    max-height: 100px !important;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .report {\n    min-height: 150px !important;\n    max-height: 150px !important;\n  }\n\n  img.tab {\n    min-height: 100px !important;\n    max-height: 100px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9hZG1pbi9tYWluLXBhZ2UvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXHRhYjNcXGFkbWluXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFiMy9hZG1pbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0k7SUFDSSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSw0QkFBQTtFQ0ROOztFRElFO0lBRU0sNkJBQUE7RUNGUjtBQUNGO0FES0E7RUFDSTtJQUVJLDRCQUFBO0lBQ0EsNEJBQUE7RUNKTjs7RURPRTtJQUdNLDRCQUFBO0lBQ0EsNEJBQUE7RUNOUjtBQUNGO0FEU0E7RUFDSTtJQUdJLDRCQUFBO0lBQ0EsNEJBQUE7RUNUTjs7RURZRTtJQUdNLDRCQUFBO0lBQ0EsNEJBQUE7RUNYUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy9hZG1pbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICAucmVwb3J0e1xyXG4gICAgICAgIG1heC13aWR0aDogIDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcudGFie1xyXG4gICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAucmVwb3J0e1xyXG4gLy8gICAgICBtaW4td2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGltZy50YWJ7XHJcbiAgICAgICAgLy8gbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAucmVwb3J0e1xyXG4gICAgICAgIC8vIG1pbi13aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nLnRhYntcclxuICAgICAgICAvLyBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbn1cclxuXHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgLnJlcG9ydCB7XG4gICAgbWF4LXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpbWcudGFiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucmVwb3J0IHtcbiAgICBtaW4taGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpbWcudGFiIHtcbiAgICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnJlcG9ydCB7XG4gICAgbWluLWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW1nLnRhYiB7XG4gICAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/tab3/admin/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab3/admin/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MainPageComponent = class MainPageComponent {
    constructor() { }
    ngOnInit() { }
};
MainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-page/main-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-page.component.scss */ "./src/app/tab3/admin/main-page/main-page.component.scss")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/tab3/admin/opening-create/opening-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/admin/opening-create/opening-create.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vb3BlbmluZy1jcmVhdGUvb3BlbmluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab3/admin/opening-create/opening-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tab3/admin/opening-create/opening-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: OpeningCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningCreateComponent", function() { return OpeningCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/userModel/user-model.service */ "./src/app/Services/userModel/user-model.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Services_openingBalance_opening_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/openingBalance/opening-balance.service */ "./src/app/Services/openingBalance/opening-balance.service.ts");








let OpeningCreateComponent = class OpeningCreateComponent {
    constructor(location, appSetting, OpeningBalanceService, riderSelectService, route, Router) {
        this.location = location;
        this.appSetting = appSetting;
        this.OpeningBalanceService = OpeningBalanceService;
        this.riderSelectService = riderSelectService;
        this.route = route;
        this.Router = Router;
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.resData = {
            id: 0,
            openingAmount: 0,
            openingAmount_date: new Date(),
            operatorID: this.appSetting.sessionUserID,
            riderID: 0
        };
        this.riderList = [];
        this.riderFilter();
    }
    ngOnInit() {
        if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
        }
    }
    back() {
        this.location.back();
    }
    riderFilter() {
        let temp1 = [];
        this.riderSelectService.get().subscribe(x => temp1 = x, err => this.appSetting.showError(err), () => {
            const temp2 = temp1;
            temp2.forEach(x => {
                if (x.usertype === 3) {
                    this.riderList.push(x);
                }
            });
        });
    }
    editLoad(id) {
        this.appSetting.showLoading();
        if (id !== 0) {
            this.OpeningBalanceService.getSingle(id).subscribe((x) => (this.resData = x), (err) => this.appSetting.showError(err), () => this.appSetting.loadingClose());
        }
        else {
            this.appSetting.loadingClose();
        }
    }
    formValidation() {
        if (this.resData.openingAmount === 0 ||
            this.resData.operatorID === 0 ||
            this.resData.riderID === 0) {
            return false;
        }
        return true;
    }
    create() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.OpeningBalanceService.post(this.resData);
        }
        else {
            this.appSetting.showInvalid();
        }
    }
    update() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.OpeningBalanceService.put(this.resData);
            // this.route.navigateByUrl('tabs/tab3/resturantList');
        }
        else {
            this.appSetting.showInvalid();
        }
    }
};
OpeningCreateComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: src_app_Services_openingBalance_opening_balance_service__WEBPACK_IMPORTED_MODULE_6__["OpeningBalanceService"] },
    { type: src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_1__["UserModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
OpeningCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-opening-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./opening-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-create/opening-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./opening-create.component.scss */ "./src/app/tab3/admin/opening-create/opening-create.component.scss")).default]
    })
], OpeningCreateComponent);



/***/ }),

/***/ "./src/app/tab3/admin/opening-list/opening-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/tab3/admin/opening-list/opening-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vb3BlbmluZy1saXN0L29wZW5pbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab3/admin/opening-list/opening-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tab3/admin/opening-list/opening-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: OpeningListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningListComponent", function() { return OpeningListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/userModel/user-model.service */ "./src/app/Services/userModel/user-model.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Services_openingBalance_opening_balance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/openingBalance/opening-balance.service */ "./src/app/Services/openingBalance/opening-balance.service.ts");








let OpeningListComponent = class OpeningListComponent {
    constructor(location, appSetting, OpeningBalanceService, riderSelectService, route) {
        this.location = location;
        this.appSetting = appSetting;
        this.OpeningBalanceService = OpeningBalanceService;
        this.riderSelectService = riderSelectService;
        this.route = route;
        this.resDataList = [];
        this.riderList = [];
        this.searchDate = new Date();
        this.riderFilter();
    }
    dateChange(e) {
        this.searchDate = e;
        this.appSetting.showLoading();
        this.OpeningBalanceService.getDate(e).subscribe((x) => { this.resDataList = x; }, (err) => this.appSetting.showError(err), () => this.appSetting.loadingClose());
    }
    riderFilter() {
        this.appSetting.showLoading();
        let temp1 = [];
        this.riderSelectService.get().subscribe((x) => (temp1 = x), (err) => this.appSetting.showError(err), () => {
            const temp2 = temp1;
            temp2.forEach((x) => {
                if (x.usertype === 3) {
                    this.riderList.push(x);
                }
            });
            this.appSetting.loadingClose();
        });
    }
    riderName(id) {
        let name = "";
        const temp = [...this.riderList];
        temp.forEach((x) => {
            if (x.id === id) {
                name = x.username;
            }
        });
        return name;
    }
    ngOnInit() {
        this.dataLoading();
    }
    back() {
        this.location.back();
    }
    dataLoading() {
        this.appSetting.showLoading();
        this.OpeningBalanceService.get().subscribe((x) => {
            this.resDataList = x;
        }, (err) => this.appSetting.showError(err), () => {
            this.appSetting.loadingClose();
        });
    }
    refresh(event) {
        this.OpeningBalanceService.get().subscribe((x) => {
            this.resDataList = x;
        }, (err) => {
            this.appSetting.showError(err);
            event.target.complete();
        }, () => {
            if (event !== undefined || event !== null) {
                event.target.complete();
            }
        });
    }
    onEdit(id) {
        this.route.navigateByUrl("managmenet/tabs/tab3/openingBalanceEdit/" + id);
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.OpeningBalanceService.delete(id);
                this.resDataList.splice(id, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
};
OpeningListComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"] },
    { type: src_app_Services_openingBalance_opening_balance_service__WEBPACK_IMPORTED_MODULE_7__["OpeningBalanceService"] },
    { type: src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_1__["UserModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OpeningListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-opening-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./opening-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-list/opening-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./opening-list.component.scss */ "./src/app/tab3/admin/opening-list/opening-list.component.scss")).default]
    })
], OpeningListComponent);



/***/ }),

/***/ "./src/app/tab3/admin/order-management-create/order-management-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/tab3/admin/order-management-create/order-management-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vb3JkZXItbWFuYWdlbWVudC1jcmVhdGUvb3JkZXItbWFuYWdlbWVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab3/admin/order-management-create/order-management-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/tab3/admin/order-management-create/order-management-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrderManagementCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManagementCreateComponent", function() { return OrderManagementCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderManagementCreateComponent = class OrderManagementCreateComponent {
    constructor() { }
    ngOnInit() { }
};
OrderManagementCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-management-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-management-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-create/order-management-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-management-create.component.scss */ "./src/app/tab3/admin/order-management-create/order-management-create.component.scss")).default]
    })
], OrderManagementCreateComponent);



/***/ }),

/***/ "./src/app/tab3/admin/order-management-list/order-management-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/tab3/admin/order-management-list/order-management-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vb3JkZXItbWFuYWdlbWVudC1saXN0L29yZGVyLW1hbmFnZW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab3/admin/order-management-list/order-management-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tab3/admin/order-management-list/order-management-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrderManagementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManagementListComponent", function() { return OrderManagementListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderManagementListComponent = class OrderManagementListComponent {
    constructor() { }
    ngOnInit() { }
};
OrderManagementListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-management-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-management-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-list/order-management-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-management-list.component.scss */ "./src/app/tab3/admin/order-management-list/order-management-list.component.scss")).default]
    })
], OrderManagementListComponent);



/***/ }),

/***/ "./src/app/tab3/admin/resturant-create/resturant-create.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tab3/admin/resturant-create/resturant-create.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vcmVzdHVyYW50LWNyZWF0ZS9yZXN0dXJhbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab3/admin/resturant-create/resturant-create.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab3/admin/resturant-create/resturant-create.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResturantCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantCreateComponent", function() { return ResturantCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_location_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/location/location.service */ "./src/app/Services/location/location.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../Services/resturantModel/resturant-model.service */ "./src/app/Services/resturantModel/resturant-model.service.ts");








let ResturantCreateComponent = class ResturantCreateComponent {
    constructor(location, appSetting, ResturantModelService, route, LocationService, Router) {
        this.location = location;
        this.appSetting = appSetting;
        this.ResturantModelService = ResturantModelService;
        this.route = route;
        this.LocationService = LocationService;
        this.Router = Router;
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.locationData = [];
        this.credit = "credit";
        this.debit = "debit";
        this.resData = {
            id: 0,
            username: "",
            password: "",
            phone: "",
            usertype: 2,
            locationID: 0,
            latitude: "0",
            longitude: "0",
            shopname: "",
            resturantType: "debit",
        };
    }
    ngOnInit() {
        this.locationCharges();
        if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
        }
    }
    locationCharges() {
        this.appSetting.showLoading();
        this.LocationService.get().subscribe((x) => {
            this.locationData = x;
        }, (err) => console.log(err), () => {
            this.appSetting.loadingClose();
        });
    }
    back() {
        this.location.back();
    }
    editLoad(id) {
        this.appSetting.showLoading();
        if (id !== 0) {
            this.ResturantModelService.getSingle(id).subscribe((x) => (this.resData = x), (err) => this.appSetting.showError(err), () => this.appSetting.loadingClose());
        }
        else {
            this.appSetting.loadingClose();
        }
    }
    formValidation() {
        if (this.resData.password === "" ||
            this.resData.phone === "" ||
            this.resData.username === "" ||
            this.resData.usertype === 0 ||
            this.resData.shopname === "") {
            return false;
        }
        return true;
    }
    create() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.ResturantModelService.post(this.resData);
        }
        else {
            this.appSetting.showInvalid();
        }
    }
    update() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.ResturantModelService.put(this.resData);
            // this.route.navigateByUrl('tabs/tab3/resturantList');
        }
        else {
            this.appSetting.showInvalid();
        }
    }
};
ResturantCreateComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: _Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_6__["ResturantModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Services_location_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ResturantCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-resturant-create",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resturant-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-create/resturant-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resturant-create.component.scss */ "./src/app/tab3/admin/resturant-create/resturant-create.component.scss")).default]
    })
], ResturantCreateComponent);



/***/ }),

/***/ "./src/app/tab3/admin/resturant-list/resturant-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/admin/resturant-list/resturant-list.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vcmVzdHVyYW50LWxpc3QvcmVzdHVyYW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab3/admin/resturant-list/resturant-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tab3/admin/resturant-list/resturant-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResturantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantListComponent", function() { return ResturantListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Services/resturantModel/resturant-model.service */ "./src/app/Services/resturantModel/resturant-model.service.ts");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let ResturantListComponent = class ResturantListComponent {
    constructor(location, appSetting, ResturantModelService, route) {
        this.location = location;
        this.appSetting = appSetting;
        this.ResturantModelService = ResturantModelService;
        this.route = route;
        this.resDataList = [];
    }
    ngOnInit() {
        this.dataLoading();
    }
    back() {
        this.location.back();
    }
    dataLoading() {
        this.ResturantModelService.get().subscribe((x) => {
            this.appSetting.showLoading();
            this.resDataList = x;
        }, (err) => this.appSetting.showError(err), () => {
            this.appSetting.loadingClose();
        });
    }
    refresh(event) {
        this.ResturantModelService.get().subscribe((x) => {
            this.resDataList = x;
        }, (err) => { this.appSetting.showError(err); event.target.complete(); }, () => {
            if (event !== undefined || event !== null) {
                event.target.complete();
            }
        });
    }
    onEdit(id) {
        this.route.navigateByUrl("managmenet/tabs/tab3/resturantEdit/" + id);
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.ResturantModelService.delete(id);
                this.resDataList.splice(id, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
};
ResturantListComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"] },
    { type: _Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_2__["ResturantModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ResturantListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-resturant-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resturant-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-list/resturant-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resturant-list.component.scss */ "./src/app/tab3/admin/resturant-list/resturant-list.component.scss")).default]
    })
], ResturantListComponent);



/***/ }),

/***/ "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vcmlkZXItZWFybmluZy1jcmVhdGUvcmlkZXItZWFybmluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RiderEarningCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderEarningCreateComponent", function() { return RiderEarningCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_riderEarning_rider_earning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/riderEarning/rider-earning.service */ "./src/app/Services/riderEarning/rider-earning.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let RiderEarningCreateComponent = class RiderEarningCreateComponent {
    constructor(location, appSetting, RiderEarningService, route, Router) {
        this.location = location;
        this.appSetting = appSetting;
        this.RiderEarningService = RiderEarningService;
        this.route = route;
        this.Router = Router;
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.riderEarningData = {
            id: 0,
            deliveryCharges: 0,
            riderEarning: 0,
        };
    }
    ngOnInit() {
        if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
        }
    }
    back() {
        this.location.back();
    }
    editLoad(id) {
        this.appSetting.showLoading();
        if (id !== 0) {
            this.RiderEarningService.getSingle(id).subscribe((x) => (this.riderEarningData = x), (err) => this.appSetting.showError(err), () => this.appSetting.loadingClose());
        }
        else {
            this.appSetting.loadingClose();
        }
    }
    formValidation() {
        if (this.riderEarningData.deliveryCharges === 0) {
            return false;
        }
        return true;
    }
    create() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.RiderEarningService.post(this.riderEarningData);
        }
        else {
            this.appSetting.showInvalid();
        }
    }
    update() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.RiderEarningService.put(this.riderEarningData);
            // this.route.navigateByUrl('tabs/tab3/resturantList');
        }
        else {
            this.appSetting.showInvalid();
        }
    }
};
RiderEarningCreateComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"] },
    { type: _Services_riderEarning_rider_earning_service__WEBPACK_IMPORTED_MODULE_1__["RiderEarningService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
RiderEarningCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rider-earning-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rider-earning-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rider-earning-create.component.scss */ "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.scss")).default]
    })
], RiderEarningCreateComponent);



/***/ }),

/***/ "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vcmlkZXItZWFybmluZy1saXN0L3JpZGVyLWVhcm5pbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RiderEarningListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderEarningListComponent", function() { return RiderEarningListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_Services_riderEarning_rider_earning_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/riderEarning/rider-earning.service */ "./src/app/Services/riderEarning/rider-earning.service.ts");







let RiderEarningListComponent = class RiderEarningListComponent {
    constructor(location, appSetting, riderEarningService, route) {
        this.location = location;
        this.appSetting = appSetting;
        this.riderEarningService = riderEarningService;
        this.route = route;
        this.DataList = [];
    }
    ngOnInit() {
        this.dataLoading();
    }
    back() {
        this.location.back();
    }
    dataLoading() {
        this.riderEarningService.get().subscribe((x) => {
            this.appSetting.showLoading();
            this.DataList = x;
        }, (err) => this.appSetting.showError(err), () => {
            this.appSetting.loadingClose();
        });
    }
    refresh(event) {
        this.riderEarningService.get().subscribe((x) => {
            this.DataList = x;
        }, (err) => {
            this.appSetting.showError(err);
            event.target.complete();
        }, () => {
            if (event !== undefined || event !== null) {
                event.target.complete();
            }
        });
    }
    onEdit(id) {
        this.route.navigateByUrl("managmenet/tabs/tab3/riderEarningEdit/" + id);
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.riderEarningService.delete(id);
                this.DataList.splice(id, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
};
RiderEarningListComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"] },
    { type: src_app_Services_riderEarning_rider_earning_service__WEBPACK_IMPORTED_MODULE_6__["RiderEarningService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RiderEarningListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rider-earning-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rider-earning-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rider-earning-list.component.scss */ "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.scss")).default]
    })
], RiderEarningListComponent);



/***/ }),

/***/ "./src/app/tab3/admin/user-create/user-create.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/tab3/admin/user-create/user-create.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab3/admin/user-create/user-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tab3/admin/user-create/user-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Services/userModel/user-model.service */ "./src/app/Services/userModel/user-model.service.ts");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _Services_userType_user_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../Services/userType/user-type.service */ "./src/app/Services/userType/user-type.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







let UserCreateComponent = class UserCreateComponent {
    constructor(location, appSetting, UserTypeService, UserModelService, route, Router) {
        this.location = location;
        this.appSetting = appSetting;
        this.UserTypeService = UserTypeService;
        this.UserModelService = UserModelService;
        this.route = route;
        this.Router = Router;
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.userTypeData = [];
        this.userData = {
            id: 0,
            username: "",
            password: "",
            phone: "",
            usertype: 0,
            latitude: "0",
            longitude: "0"
        };
        if (this.appSetting.userTypeData.length === 0) {
            this.appSetting.showLoading();
            this.UserTypeService.get().subscribe((x) => (this.appSetting.userTypeData = x), (err) => console.log(err), () => {
                this.userTypeData = [...this.appSetting.userTypeData];
                let i = -1;
                this.appSetting.userTypeData.forEach(x => {
                    i = i + 1;
                    if (x.usertypeName === 'Resturant') {
                        this.userTypeData.splice(i, 1);
                    }
                });
                this.appSetting.loadingClose();
            });
        }
        if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
        }
    }
    ngOnInit() { }
    back() {
        this.location.back();
    }
    editLoad(id) {
        this.appSetting.showLoading();
        if (id !== 0) {
            this.UserModelService.getSingle(id).subscribe((x) => (this.userData = x), (err) => this.appSetting.showError(err), () => this.appSetting.loadingClose());
        }
        else {
            this.appSetting.loadingClose();
        }
    }
    formValidation() {
        if (this.userData.password === "" ||
            this.userData.phone === "" ||
            this.userData.username === "" ||
            this.userData.usertype === 0) {
            return false;
        }
        return true;
    }
    create() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.UserModelService.post(this.userData);
        }
        else {
            this.appSetting.showInvalid();
        }
    }
    update() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.UserModelService.put(this.userData);
            //this.route.navigateByUrl('tabs/tab3/userList');
        }
        else {
            this.appSetting.showInvalid();
        }
    }
};
UserCreateComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"] },
    { type: _Services_userType_user_type_service__WEBPACK_IMPORTED_MODULE_4__["UserTypeService"] },
    { type: _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_2__["UserModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
UserCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-user-create",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-create/user-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-create.component.scss */ "./src/app/tab3/admin/user-create/user-create.component.scss")).default]
    })
], UserCreateComponent);



/***/ }),

/***/ "./src/app/tab3/admin/user-list/user-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tab3/admin/user-list/user-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab3/admin/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab3/admin/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Services/userModel/user-model.service */ "./src/app/Services/userModel/user-model.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let UserListComponent = class UserListComponent {
    constructor(appSetting, location, UserModelService, route) {
        this.appSetting = appSetting;
        this.location = location;
        this.UserModelService = UserModelService;
        this.route = route;
        this.userDataList = [];
    }
    ngOnInit() {
        this.dataLoading();
    }
    back() {
        this.location.back();
    }
    dataLoading() {
        this.UserModelService.get().subscribe((x) => {
            this.appSetting.showLoading();
            this.userDataList = x;
        }, (err) => this.appSetting.showError(err), () => {
            this.appSetting.loadingClose();
        });
    }
    refresh(event) {
        this.UserModelService.get().subscribe((x) => {
            this.userDataList = x;
        }, (err) => this.appSetting.showError(err), () => {
            if (event !== undefined || event !== null) {
                event.target.complete();
            }
        });
    }
    onEdit(id) {
        this.route.navigateByUrl("managmenet/tabs/tab3/userEdit/" + id);
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.UserModelService.delete(id);
                this.userDataList.splice(id, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
};
UserListComponent.ctorParameters = () => [
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_2__["UserModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-user-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-list/user-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-list.component.scss */ "./src/app/tab3/admin/user-list/user-list.component.scss")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/tab3/resturant/food-create/food-create.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/tab3/resturant/food-create/food-create.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvcmVzdHVyYW50L2Zvb2QtY3JlYXRlL2Zvb2QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab3/resturant/food-create/food-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tab3/resturant/food-create/food-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: FoodCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCreateComponent", function() { return FoodCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_category_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/category/category.service */ "./src/app/Services/category/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/food/food.service */ "./src/app/Services/food/food.service.ts");
/* harmony import */ var src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/mainModel/main-model.service */ "./src/app/Services/mainModel/main-model.service.ts");








let FoodCreateComponent = class FoodCreateComponent {
    constructor(location, appSetting, FoodService, route, Router, mainModelService, categoryService) {
        this.location = location;
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.route = route;
        this.Router = Router;
        this.mainModelService = mainModelService;
        this.categoryService = categoryService;
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.foodData = {
            id: 0,
            itemName: "",
            itemNameTemp: "",
            resturant_id: this.appSetting.resturantID,
            mainitem_id: 0,
            price: 0,
            priceTemp: 0,
            //change it to status: 'pending' if Resturant want to Confirm
            status: "active",
            categoryType_ID: 0,
            imageURI: "",
            Descriptions: "",
        };
        this.croppedImage = "";
        //Image
        this.imageChangedEvent = "";
        this.appSetting.showLoading();
        this.getCategory();
    }
    ngOnInit() {
        if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
        }
    }
    getMainModel() {
        this.mainModelService.get().subscribe((x) => {
            this.appSetting.mainItemDataList = x;
        }, (err) => console.log(err), () => {
            this.appSetting.loadingClose();
        });
    }
    dataChange(e) {
        this.appSetting.mainItemDataList.forEach((x) => {
            if (x.id === this.foodData.id) {
                this.foodData.resturant_id = x.resturant_id;
            }
        });
    }
    getCategory() {
        this.categoryService.get().subscribe((x) => {
            this.appSetting.categoryList = x;
        }, (err) => console.log(err), () => {
            this.getMainModel();
        });
    }
    back() {
        this.location.back();
    }
    editLoad(id) {
        this.appSetting.showLoading();
        if (id !== 0) {
            this.FoodService.getSingle(id).subscribe((x) => (this.foodData = x), (err) => this.appSetting.showError(err), () => {
                this.foodData.itemNameTemp = this.foodData.itemName;
                this.foodData.priceTemp = this.foodData.price;
                this.appSetting.loadingClose();
            });
        }
        else {
            this.appSetting.loadingClose();
        }
    }
    formValidation() {
        if (this.foodData.itemName === "" || this.foodData.price === 0) {
            return false;
        }
        return true;
    }
    create() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.FoodService.post(this.foodData, this.croppedImage);
        }
        else {
            this.appSetting.showInvalid();
        }
    }
    update() {
        this.appSetting.showLoading();
        if (this.formValidation() === true) {
            this.foodData.status = "pending";
            this.FoodService.put(this.foodData);
            // this.route.navigateByUrl('tabs/tab3/resturantList');
        }
        else {
            this.appSetting.showInvalid();
        }
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
};
FoodCreateComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"] },
    { type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_7__["MainModelService"] },
    { type: _Services_category_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }
];
FoodCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-food-create",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./food-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-create/food-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./food-create.component.scss */ "./src/app/tab3/resturant/food-create/food-create.component.scss")).default]
    })
], FoodCreateComponent);



/***/ }),

/***/ "./src/app/tab3/resturant/food-list/food-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/tab3/resturant/food-list/food-list.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvcmVzdHVyYW50L2Zvb2QtbGlzdC9mb29kLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab3/resturant/food-list/food-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tab3/resturant/food-list/food-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: FoodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListComponent", function() { return FoodListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/food/food.service */ "./src/app/Services/food/food.service.ts");







let FoodListComponent = class FoodListComponent {
    constructor(location, appSetting, FoodService, route) {
        this.location = location;
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.route = route;
    }
    ngOnInit() {
        this.dataLoading();
    }
    back() {
        this.location.back();
    }
    dataLoading() {
        if (this.appSetting.loginType === "resturant") {
            this.FoodService.get(this.appSetting.resturantID).subscribe((x) => {
                this.appSetting.showLoading();
                this.appSetting.foodDataList = x;
            }, (err) => this.appSetting.showError(err), () => {
                this.appSetting.loadingClose();
            });
        }
        else if (this.appSetting.loginType === "admin") {
            this.FoodService.getActive().subscribe((x) => {
                this.appSetting.showLoading();
                this.appSetting.foodDataList = x;
            }, (err) => this.appSetting.showError(err), () => {
                this.appSetting.loadingClose();
            });
        }
    }
    refresh(event) {
        this.FoodService.get(this.appSetting.resturantID).subscribe((x) => {
            this.appSetting.foodDataList = x;
        }, (err) => {
            this.appSetting.showError(err);
            event.target.complete();
        }, () => {
            if (event !== undefined || event !== null) {
                event.target.complete();
            }
        });
    }
    onEdit(id) {
        this.route.navigateByUrl("managmenet/tabs/tab3/foodEdit/" + id);
    }
    onDelete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.FoodService.delete(id);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
};
FoodListComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FoodListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-food-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./food-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-list/food-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./food-list.component.scss */ "./src/app/tab3/resturant/food-list/food-list.component.scss")).default]
    })
], FoodListComponent);



/***/ }),

/***/ "./src/app/tab3/resturant/res-main-page/res-main-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tab3/resturant/res-main-page/res-main-page.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvcmVzdHVyYW50L3Jlcy1tYWluLXBhZ2UvcmVzLW1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab3/resturant/res-main-page/res-main-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/resturant/res-main-page/res-main-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResMainPageComponent", function() { return ResMainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ResMainPageComponent = class ResMainPageComponent {
    constructor() { }
    ngOnInit() { }
};
ResMainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-res-main-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./res-main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/res-main-page/res-main-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./res-main-page.component.scss */ "./src/app/tab3/resturant/res-main-page/res-main-page.component.scss")).default]
    })
], ResMainPageComponent);



/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_order_management_create_order_management_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/order-management-create/order-management-create.component */ "./src/app/tab3/admin/order-management-create/order-management-create.component.ts");
/* harmony import */ var _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/opening-create/opening-create.component */ "./src/app/tab3/admin/opening-create/opening-create.component.ts");
/* harmony import */ var _admin_opening_list_opening_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/opening-list/opening-list.component */ "./src/app/tab3/admin/opening-list/opening-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/user-list/user-list.component */ "./src/app/tab3/admin/user-list/user-list.component.ts");
/* harmony import */ var _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/user-create/user-create.component */ "./src/app/tab3/admin/user-create/user-create.component.ts");
/* harmony import */ var _admin_resturant_list_resturant_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/resturant-list/resturant-list.component */ "./src/app/tab3/admin/resturant-list/resturant-list.component.ts");
/* harmony import */ var _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/resturant-create/resturant-create.component */ "./src/app/tab3/admin/resturant-create/resturant-create.component.ts");
/* harmony import */ var _admin_item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/item-confirm/item-confirm.component */ "./src/app/tab3/admin/item-confirm/item-confirm.component.ts");
/* harmony import */ var _admin_item_confirm_detail_item_confirm_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/item-confirm-detail/item-confirm-detail.component */ "./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.ts");
/* harmony import */ var _admin_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/location-list/location-list.component */ "./src/app/tab3/admin/location-list/location-list.component.ts");
/* harmony import */ var _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/location-create/location-create.component */ "./src/app/tab3/admin/location-create/location-create.component.ts");
/* harmony import */ var _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resturant/food-list/food-list.component */ "./src/app/tab3/resturant/food-list/food-list.component.ts");
/* harmony import */ var _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resturant/food-create/food-create.component */ "./src/app/tab3/resturant/food-create/food-create.component.ts");
/* harmony import */ var _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/rider-earning-create/rider-earning-create.component */ "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.ts");
/* harmony import */ var _admin_rider_earning_list_rider_earning_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/rider-earning-list/rider-earning-list.component */ "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.ts");
/* harmony import */ var _admin_order_management_list_order_management_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/order-management-list/order-management-list.component */ "./src/app/tab3/admin/order-management-list/order-management-list.component.ts");
/* harmony import */ var _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/main-item-create/main-item-create.component */ "./src/app/tab3/admin/main-item-create/main-item-create.component.ts");
/* harmony import */ var _admin_main_item_list_main_item_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/main-item-list/main-item-list.component */ "./src/app/tab3/admin/main-item-list/main-item-list.component.ts");






















const routes = [
    {
        path: "",
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"],
    },
    {
        path: "userList",
        component: _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"],
    },
    {
        path: "userCreate",
        component: _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_8__["UserCreateComponent"],
    },
    {
        path: "userEdit/:id",
        component: _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_8__["UserCreateComponent"],
    },
    {
        path: "resturantList",
        component: _admin_resturant_list_resturant_list_component__WEBPACK_IMPORTED_MODULE_9__["ResturantListComponent"],
    },
    {
        path: "resturantEdit/:id",
        component: _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_10__["ResturantCreateComponent"],
    },
    {
        path: "resturantCreate",
        component: _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_10__["ResturantCreateComponent"],
    },
    {
        path: "locationList",
        component: _admin_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_13__["LocationListComponent"],
    },
    {
        path: "locationEdit/:id",
        component: _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_14__["LocationCreateComponent"],
    },
    {
        path: "locationCreate",
        component: _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_14__["LocationCreateComponent"],
    },
    {
        path: "foodList",
        component: _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_15__["FoodListComponent"],
    },
    {
        path: "foodList/:id",
        component: _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_15__["FoodListComponent"],
    },
    {
        path: "foodEdit/:id",
        component: _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_16__["FoodCreateComponent"],
    },
    {
        path: "foodCreate",
        component: _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_16__["FoodCreateComponent"],
    },
    {
        path: "itemConfirm",
        component: _admin_item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ItemConfirmComponent"],
    },
    {
        path: "itemConfirmDetail",
        component: _admin_item_confirm_detail_item_confirm_detail_component__WEBPACK_IMPORTED_MODULE_12__["ItemConfirmDetailComponent"],
    },
    {
        path: "riderEarning",
        component: _admin_rider_earning_list_rider_earning_list_component__WEBPACK_IMPORTED_MODULE_18__["RiderEarningListComponent"],
    },
    {
        path: "riderEarningCreate",
        component: _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_17__["RiderEarningCreateComponent"],
    },
    {
        path: "riderEarningEdit/:id",
        component: _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_17__["RiderEarningCreateComponent"],
    },
    {
        path: "openingBalance",
        component: _admin_opening_list_opening_list_component__WEBPACK_IMPORTED_MODULE_3__["OpeningListComponent"],
    },
    {
        path: "openingBalanceCreate",
        component: _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_2__["OpeningCreateComponent"],
    },
    {
        path: "openingBalanceEdit/:id",
        component: _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_2__["OpeningCreateComponent"],
    },
    {
        path: "orderManagement",
        component: _admin_order_management_list_order_management_list_component__WEBPACK_IMPORTED_MODULE_19__["OrderManagementListComponent"],
    },
    {
        path: "orderManagementCreate",
        component: _admin_order_management_create_order_management_create_component__WEBPACK_IMPORTED_MODULE_1__["OrderManagementCreateComponent"],
    },
    {
        path: "orderManagementEdit/:id",
        component: _admin_order_management_create_order_management_create_component__WEBPACK_IMPORTED_MODULE_1__["OrderManagementCreateComponent"],
    },
    {
        path: "mainItem",
        component: _admin_main_item_list_main_item_list_component__WEBPACK_IMPORTED_MODULE_21__["MainItemListComponent"],
    },
    {
        path: "mainItemCreate",
        component: _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_20__["MainItemCreateComponent"],
    },
    {
        path: "mainItemEdit/:id",
        component: _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_20__["MainItemCreateComponent"],
    },
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/main-item-create/main-item-create.component */ "./src/app/tab3/admin/main-item-create/main-item-create.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _admin_opening_list_opening_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/opening-list/opening-list.component */ "./src/app/tab3/admin/opening-list/opening-list.component.ts");
/* harmony import */ var _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/opening-create/opening-create.component */ "./src/app/tab3/admin/opening-create/opening-create.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");
/* harmony import */ var _admin_item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/item-confirm/item-confirm.component */ "./src/app/tab3/admin/item-confirm/item-confirm.component.ts");
/* harmony import */ var _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/user-create/user-create.component */ "./src/app/tab3/admin/user-create/user-create.component.ts");
/* harmony import */ var _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/user-list/user-list.component */ "./src/app/tab3/admin/user-list/user-list.component.ts");
/* harmony import */ var _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/main-page/main-page.component */ "./src/app/tab3/admin/main-page/main-page.component.ts");
/* harmony import */ var _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/resturant-create/resturant-create.component */ "./src/app/tab3/admin/resturant-create/resturant-create.component.ts");
/* harmony import */ var _admin_resturant_list_resturant_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/resturant-list/resturant-list.component */ "./src/app/tab3/admin/resturant-list/resturant-list.component.ts");
/* harmony import */ var _admin_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/location-list/location-list.component */ "./src/app/tab3/admin/location-list/location-list.component.ts");
/* harmony import */ var _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/location-create/location-create.component */ "./src/app/tab3/admin/location-create/location-create.component.ts");
/* harmony import */ var _resturant_res_main_page_res_main_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./resturant/res-main-page/res-main-page.component */ "./src/app/tab3/resturant/res-main-page/res-main-page.component.ts");
/* harmony import */ var _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./resturant/food-create/food-create.component */ "./src/app/tab3/resturant/food-create/food-create.component.ts");
/* harmony import */ var _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./resturant/food-list/food-list.component */ "./src/app/tab3/resturant/food-list/food-list.component.ts");
/* harmony import */ var _admin_rider_earning_list_rider_earning_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/rider-earning-list/rider-earning-list.component */ "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.ts");
/* harmony import */ var _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/rider-earning-create/rider-earning-create.component */ "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _admin_main_item_list_main_item_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/main-item-list/main-item-list.component */ "./src/app/tab3/admin/main-item-list/main-item-list.component.ts");




























let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["ImageCropperModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__["FileUploadModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_11__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{ path: "", component: _tab3_page__WEBPACK_IMPORTED_MODULE_10__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_12__["Tab3PageRoutingModule"],
        ],
        declarations: [
            _tab3_page__WEBPACK_IMPORTED_MODULE_10__["Tab3Page"],
            _admin_rider_earning_list_rider_earning_list_component__WEBPACK_IMPORTED_MODULE_24__["RiderEarningListComponent"],
            _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_25__["RiderEarningCreateComponent"],
            _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_1__["MainItemCreateComponent"],
            _admin_main_item_list_main_item_list_component__WEBPACK_IMPORTED_MODULE_27__["MainItemListComponent"],
            _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__["MainPageComponent"],
            _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"],
            _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_14__["UserCreateComponent"],
            _admin_resturant_list_resturant_list_component__WEBPACK_IMPORTED_MODULE_18__["ResturantListComponent"],
            _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_17__["ResturantCreateComponent"],
            _admin_item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ItemConfirmComponent"],
            _admin_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_19__["LocationListComponent"],
            _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_20__["LocationCreateComponent"],
            _resturant_res_main_page_res_main_page_component__WEBPACK_IMPORTED_MODULE_21__["ResMainPageComponent"],
            _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_22__["FoodCreateComponent"],
            _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_23__["FoodListComponent"],
            _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_4__["OpeningCreateComponent"],
            _admin_opening_list_opening_list_component__WEBPACK_IMPORTED_MODULE_3__["OpeningListComponent"]
        ],
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-setting */ "./src/app/app-setting.ts");



let Tab3Page = class Tab3Page {
    constructor(appSetting) {
        this.appSetting = appSetting;
    }
};
Tab3Page.ctorParameters = () => [
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map