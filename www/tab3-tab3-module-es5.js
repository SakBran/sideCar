function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
    \*******************************************************************************/

  /*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */

  /***/
  function node_modulesNg2FileUpload__ivy_ngcc__Fesm2015Ng2FileUploadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileDropDirective", function () {
      return FileDropDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileItem", function () {
      return FileItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileLikeObject", function () {
      return FileLikeObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function () {
      return FileSelectDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return FileUploadModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploader", function () {
      return FileUploader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
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

    var FileLikeObject = /*#__PURE__*/function () {
      /**
       * @param {?} fileOrInput
       */
      function FileLikeObject(fileOrInput) {
        _classCallCheck(this, FileLikeObject);

        this.rawFile = fileOrInput;
        /** @type {?} */

        var isInput = isElement(fileOrInput);
        /** @type {?} */

        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */

        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */

        var method = '_createFrom' + postfix;

        /** @type {?} */
        this[method](fakePathOrObject);
      }
      /**
       * @param {?} path
       * @return {?}
       */


      _createClass(FileLikeObject, [{
        key: "_createFromFakePath",
        value: function _createFromFakePath(path) {
          this.lastModifiedDate = void 0;
          this.size = void 0;
          this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
          this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
        }
        /**
         * @param {?} object
         * @return {?}
         */

      }, {
        key: "_createFromObject",
        value: function _createFromObject(object) {
          this.size = object.size;
          this.type = object.type;
          this.name = object.name;
        }
      }]);

      return FileLikeObject;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileItem = /*#__PURE__*/function () {
      /**
       * @param {?} uploader
       * @param {?} some
       * @param {?} options
       */
      function FileItem(uploader, some, options) {
        _classCallCheck(this, FileItem);

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


      _createClass(FileItem, [{
        key: "upload",
        value: function upload() {
          try {
            this.uploader.uploadItem(this);
          } catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});

            this.uploader._onErrorItem(this, '', 0, {});
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancel",
        value: function cancel() {
          this.uploader.cancelItem(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          this.uploader.removeFromQueue(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onBeforeUpload",
        value: function onBeforeUpload() {
          return void 0;
        }
        /**
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "onBuildForm",
        value: function onBuildForm(form) {
          return {
            form: form
          };
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgress",
        value: function onProgress(progress) {
          return {
            progress: progress
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onSuccess",
        value: function onSuccess(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onError",
        value: function onError(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCancel",
        value: function onCancel(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onComplete",
        value: function onComplete(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBeforeUpload",
        value: function _onBeforeUpload() {
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

      }, {
        key: "_onBuildForm",
        value: function _onBuildForm(form) {
          this.onBuildForm(form);
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "_onProgress",
        value: function _onProgress(progress) {
          this.progress = progress;
          this.onProgress(progress);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onSuccess",
        value: function _onSuccess(response, status, headers) {
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

      }, {
        key: "_onError",
        value: function _onError(response, status, headers) {
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

      }, {
        key: "_onCancel",
        value: function _onCancel(response, status, headers) {
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

      }, {
        key: "_onComplete",
        value: function _onComplete(response, status, headers) {
          this.onComplete(response, status, headers);

          if (this.uploader.options.removeAfterUpload) {
            this.remove();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_prepareToUploading",
        value: function _prepareToUploading() {
          this.index = this.index || ++this.uploader._nextIndex;
          this.isReady = true;
        }
      }]);

      return FileItem;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileType = /*#__PURE__*/function () {
      function FileType() {
        _classCallCheck(this, FileType);
      }

      _createClass(FileType, null, [{
        key: "getMimeClass",

        /**
         * @param {?} file
         * @return {?}
         */
        value: function getMimeClass(file) {
          /** @type {?} */
          var mimeClass = 'application';

          if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
          } else if (file.type.match('image.*')) {
            mimeClass = 'image';
          } else if (file.type.match('video.*')) {
            mimeClass = 'video';
          } else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
          } else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
          } else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
          } else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
          } else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
          } else if (this.mime_ppt.indexOf(file.type) !== -1) {
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

      }, {
        key: "fileTypeDetection",
        value: function fileTypeDetection(inputFilename) {
          /** @type {?} */
          var types = {
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

          var chunks = inputFilename.split('.');

          if (chunks.length < 2) {
            return 'application';
          }
          /** @type {?} */


          var extension = chunks[chunks.length - 1].toLowerCase();

          if (types[extension] === undefined) {
            return 'application';
          } else {
            return types[extension];
          }
        }
      }]);

      return FileType;
    }();
    /*  MS office  */


    FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
    FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
    FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
    /* PSD */

    FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
    /* Compressed files */

    FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function _isFile(value) {
      return File && value instanceof File;
    }
    /**
     * @record
     */


    function Headers() {}

    if (false) {}
    /**
     * @record
     */


    function FileUploaderOptions() {}

    if (false) {}

    var FileUploader = /*#__PURE__*/function () {
      /**
       * @param {?} options
       */
      function FileUploader(options) {
        _classCallCheck(this, FileUploader);

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
          formatDataFunction:
          /**
          * @param {?} item
          * @return {?}
          */
          function formatDataFunction(item) {
            return item._file;
          },
          formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} options
       * @return {?}
       */


      _createClass(FileUploader, [{
        key: "setOptions",
        value: function setOptions(options) {
          this.options = Object.assign(this.options, options);
          this.authToken = this.options.authToken;
          this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
          this.autoUpload = this.options.autoUpload;
          this.options.filters.unshift({
            name: 'queueLimit',
            fn: this._queueLimitFilter
          });

          if (this.options.maxFileSize) {
            this.options.filters.unshift({
              name: 'fileSize',
              fn: this._fileSizeFilter
            });
          }

          if (this.options.allowedFileType) {
            this.options.filters.unshift({
              name: 'fileType',
              fn: this._fileTypeFilter
            });
          }

          if (this.options.allowedMimeType) {
            this.options.filters.unshift({
              name: 'mimeType',
              fn: this._mimeTypeFilter
            });
          }

          for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
          }
        }
        /**
         * @param {?} files
         * @param {?=} options
         * @param {?=} filters
         * @return {?}
         */

      }, {
        key: "addToQueue",
        value: function addToQueue(files, options, filters) {
          var _this = this;

          /** @type {?} */
          var list = [];

          var _iterator = _createForOfIteratorHelper(files),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var file = _step.value;
              list.push(file);
            }
            /** @type {?} */

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var arrayOfFilters = this._getFilters(filters);
          /** @type {?} */


          var count = this.queue.length;
          /** @type {?} */

          var addedFileItems = [];
          list.map(
          /**
          * @param {?} some
          * @return {?}
          */
          function (some) {
            if (!options) {
              options = _this.options;
            }
            /** @type {?} */


            var temp = new FileLikeObject(some);

            if (_this._isValidFile(temp, arrayOfFilters, options)) {
              /** @type {?} */
              var fileItem = new FileItem(_this, some, options);
              addedFileItems.push(fileItem);

              _this.queue.push(fileItem);

              _this._onAfterAddingFile(fileItem);
            } else {
              /** @type {?} */
              var filter = arrayOfFilters[_this._failFilterIndex];

              _this._onWhenAddingFileFailed(temp, filter, options);
            }
          });

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

      }, {
        key: "removeFromQueue",
        value: function removeFromQueue(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];

          if (item.isUploading) {
            item.cancel();
          }

          this.queue.splice(index, 1);
          this.progress = this._getTotalProgress();
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearQueue",
        value: function clearQueue() {
          while (this.queue.length) {
            this.queue[0].remove();
          }

          this.progress = 0;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "uploadItem",
        value: function uploadItem(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];
          /** @type {?} */

          var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

          item._prepareToUploading();

          if (this.isUploading) {
            return;
          }

          this.isUploading = true;

          /** @type {?} */
          this[transport](item);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cancelItem",
        value: function cancelItem(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];
          /** @type {?} */

          var prop = this.options.isHTML5 ? item._xhr : item._form;

          if (item && item.isUploading) {
            prop.abort();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "uploadAll",
        value: function uploadAll() {
          /** @type {?} */
          var items = this.getNotUploadedItems().filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.isUploading;
          });

          if (!items.length) {
            return;
          }

          items.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._prepareToUploading();
          });
          items[0].upload();
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancelAll",
        value: function cancelAll() {
          /** @type {?} */
          var items = this.getNotUploadedItems();
          items.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.cancel();
          });
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isFile",
        value: function isFile(value) {
          return _isFile(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isFileLikeObject",
        value: function isFileLikeObject(value) {
          return value instanceof FileLikeObject;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "getIndexOfItem",
        value: function getIndexOfItem(value) {
          return typeof value === 'number' ? value : this.queue.indexOf(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getNotUploadedItems",
        value: function getNotUploadedItems() {
          return this.queue.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.isUploaded;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getReadyItems",
        value: function getReadyItems() {
          return this.queue.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.isReady && !item.isUploading;
          }).sort(
          /**
          * @param {?} item1
          * @param {?} item2
          * @return {?}
          */
          function (item1, item2) {
            return item1.index - item2.index;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          return void 0;
        }
        /**
         * @param {?} fileItems
         * @return {?}
         */

      }, {
        key: "onAfterAddingAll",
        value: function onAfterAddingAll(fileItems) {
          return {
            fileItems: fileItems
          };
        }
        /**
         * @param {?} fileItem
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "onBuildItemForm",
        value: function onBuildItemForm(fileItem, form) {
          return {
            fileItem: fileItem,
            form: form
          };
        }
        /**
         * @param {?} fileItem
         * @return {?}
         */

      }, {
        key: "onAfterAddingFile",
        value: function onAfterAddingFile(fileItem) {
          return {
            fileItem: fileItem
          };
        }
        /**
         * @param {?} item
         * @param {?} filter
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "onWhenAddingFileFailed",
        value: function onWhenAddingFileFailed(item, filter, options) {
          return {
            item: item,
            filter: filter,
            options: options
          };
        }
        /**
         * @param {?} fileItem
         * @return {?}
         */

      }, {
        key: "onBeforeUploadItem",
        value: function onBeforeUploadItem(fileItem) {
          return {
            fileItem: fileItem
          };
        }
        /**
         * @param {?} fileItem
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgressItem",
        value: function onProgressItem(fileItem, progress) {
          return {
            fileItem: fileItem,
            progress: progress
          };
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgressAll",
        value: function onProgressAll(progress) {
          return {
            progress: progress
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onSuccessItem",
        value: function onSuccessItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onErrorItem",
        value: function onErrorItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCancelItem",
        value: function onCancelItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCompleteItem",
        value: function onCompleteItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "onCompleteAll",
        value: function onCompleteAll() {
          return void 0;
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_mimeTypeFilter",
        value: function _mimeTypeFilter(item) {
          return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_fileSizeFilter",
        value: function _fileSizeFilter(item) {
          return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_fileTypeFilter",
        value: function _fileTypeFilter(item) {
          return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onErrorItem",
        value: function _onErrorItem(item, response, status, headers) {
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

      }, {
        key: "_onCompleteItem",
        value: function _onCompleteItem(item, response, status, headers) {
          item._onComplete(response, status, headers);

          this.onCompleteItem(item, response, status, headers);
          /** @type {?} */

          var nextItem = this.getReadyItems()[0];
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

      }, {
        key: "_headersGetter",
        value: function _headersGetter(parsedHeaders) {
          return (
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
              }

              return parsedHeaders;
            }
          );
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_xhrTransport",
        value: function _xhrTransport(item) {
          var _this2 = this;

          /** @type {?} */
          var that = this;
          /** @type {?} */

          var xhr = item._xhr = new XMLHttpRequest();
          /** @type {?} */

          var sendable;

          this._onBeforeUploadItem(item);

          if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
          }

          if (!this.options.disableMultipart) {
            sendable = new FormData();

            this._onBuildItemForm(item, sendable);
            /** @type {?} */


            var appendFile =
            /**
            * @return {?}
            */
            function appendFile() {
              return sendable.append(item.alias, item._file, item.file.name);
            };

            if (!this.options.parametersBeforeFiles) {
              appendFile();
            } // For AWS, Additional Parameters must come BEFORE Files


            if (this.options.additionalParameter !== undefined) {
              Object.keys(this.options.additionalParameter).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                /** @type {?} */
                var paramVal = _this2.options.additionalParameter[key]; // Allow an additional parameter to include the filename

                if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                  paramVal = paramVal.replace('{{file_name}}', item.file.name);
                }

                sendable.append(key, paramVal);
              });
            }

            if (this.options.parametersBeforeFiles) {
              appendFile();
            }
          } else {
            sendable = this.options.formatDataFunction(item);
          }

          xhr.upload.onprogress =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

            _this2._onProgressItem(item, progress);
          };

          xhr.onload =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);
            /** @type {?} */


            var gist = _this2._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */

            var method = '_on' + gist + 'Item';

            /** @type {?} */
            _this2[method](item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.onerror =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);

            _this2._onErrorItem(item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.onabort =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);

            _this2._onCancelItem(item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.open(item.method, item.url, true);
          xhr.withCredentials = item.withCredentials;

          if (this.options.headers) {
            var _iterator2 = _createForOfIteratorHelper(this.options.headers),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var header = _step2.value;
                xhr.setRequestHeader(header.name, header.value);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          if (item.headers.length) {
            var _iterator3 = _createForOfIteratorHelper(item.headers),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _header = _step3.value;
                xhr.setRequestHeader(_header.name, _header.value);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
          }

          xhr.onreadystatechange =
          /**
          * @return {?}
          */
          function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
              that.response.emit(xhr.responseText);
            }
          };

          if (this.options.formatDataFunctionIsAsync) {
            sendable.then(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return xhr.send(JSON.stringify(result));
            });
          } else {
            xhr.send(sendable);
          }

          this._render();
        }
        /**
         * @protected
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_getTotalProgress",
        value: function _getTotalProgress() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (this.options.removeAfterUpload) {
            return value;
          }
          /** @type {?} */


          var notUploaded = this.getNotUploadedItems().length;
          /** @type {?} */

          var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
          /** @type {?} */

          var ratio = 100 / this.queue.length;
          /** @type {?} */

          var current = value * ratio / 100;
          return Math.round(uploaded * ratio + current);
        }
        /**
         * @protected
         * @param {?} filters
         * @return {?}
         */

      }, {
        key: "_getFilters",
        value: function _getFilters(filters) {
          if (!filters) {
            return this.options.filters;
          }

          if (Array.isArray(filters)) {
            return filters;
          }

          if (typeof filters === 'string') {
            /** @type {?} */
            var names = filters.match(/[^\s,]+/g);
            return this.options.filters.filter(
            /**
            * @param {?} filter
            * @return {?}
            */
            function (filter) {
              return names.indexOf(filter.name) !== -1;
            });
          }

          return this.options.filters;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_render",
        value: function _render() {
          return void 0;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_queueLimitFilter",
        value: function _queueLimitFilter() {
          return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
        }
        /**
         * @protected
         * @param {?} file
         * @param {?} filters
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_isValidFile",
        value: function _isValidFile(file, filters, options) {
          var _this3 = this;

          this._failFilterIndex = -1;
          return !filters.length ? true : filters.every(
          /**
          * @param {?} filter
          * @return {?}
          */
          function (filter) {
            _this3._failFilterIndex++;
            return filter.fn.call(_this3, file, options);
          });
        }
        /**
         * @protected
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "_isSuccessCode",
        value: function _isSuccessCode(status) {
          return status >= 200 && status < 300 || status === 304;
        }
        /**
         * @protected
         * @param {?} response
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_transformResponse",
        value: function _transformResponse(response, headers) {
          return response;
        }
        /**
         * @protected
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_parseHeaders",
        value: function _parseHeaders(headers) {
          /** @type {?} */
          var parsed = {};
          /** @type {?} */

          var key;
          /** @type {?} */

          var val;
          /** @type {?} */

          var i;

          if (!headers) {
            return parsed;
          }

          headers.split('\n').map(
          /**
          * @param {?} line
          * @return {?}
          */
          function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();

            if (key) {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          });
          return parsed;
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} filter
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_onWhenAddingFileFailed",
        value: function _onWhenAddingFileFailed(item, filter, options) {
          this.onWhenAddingFileFailed(item, filter, options);
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_onAfterAddingFile",
        value: function _onAfterAddingFile(item) {
          this.onAfterAddingFile(item);
        }
        /**
         * @protected
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_onAfterAddingAll",
        value: function _onAfterAddingAll(items) {
          this.onAfterAddingAll(items);
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_onBeforeUploadItem",
        value: function _onBeforeUploadItem(item) {
          item._onBeforeUpload();

          this.onBeforeUploadItem(item);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "_onBuildItemForm",
        value: function _onBuildItemForm(item, form) {
          item._onBuildForm(form);

          this.onBuildItemForm(item, form);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "_onProgressItem",
        value: function _onProgressItem(item, progress) {
          /** @type {?} */
          var total = this._getTotalProgress(progress);

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

      }, {
        key: "_onSuccessItem",
        value: function _onSuccessItem(item, response, status, headers) {
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

      }, {
        key: "_onCancelItem",
        value: function _onCancelItem(item, response, status, headers) {
          item._onCancel(response, status, headers);

          this.onCancelItem(item, response, status, headers);
        }
      }]);

      return FileUploader;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileSelectDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       */
      function FileSelectDirective(element) {
        _classCallCheck(this, FileSelectDirective);

        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
      }
      /**
       * @return {?}
       */


      _createClass(FileSelectDirective, [{
        key: "getOptions",
        value: function getOptions() {
          return this.uploader.options;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFilters",
        value: function getFilters() {
          return {};
        }
        /**
         * @return {?}
         */

      }, {
        key: "isEmptyAfterSelection",
        value: function isEmptyAfterSelection() {
          return !!this.element.nativeElement.attributes.multiple;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange() {
          /** @type {?} */
          var files = this.element.nativeElement.files;
          /** @type {?} */

          var options = this.getOptions();
          /** @type {?} */

          var filters = this.getFilters();
          this.uploader.addToQueue(files, options, filters);
          this.onFileSelected.emit(files);

          if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
          }
        }
      }]);

      return FileSelectDirective;
    }();

    FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) {
      return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FileSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FileSelectDirective,
      selectors: [["", "ng2FileSelect", ""]],
      hostBindings: function FileSelectDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileSelectDirective_change_HostBindingHandler() {
            return ctx.onChange();
          });
        }
      },
      inputs: {
        uploader: "uploader"
      },
      outputs: {
        onFileSelected: "onFileSelected"
      }
    });
    /** @nocollapse */

    FileSelectDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FileSelectDirective.propDecorators = {
      uploader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onFileSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['change']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSelectDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng2FileSelect]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onFileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['change']
        }],
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileDropDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       */
      function FileDropDirective(element) {
        _classCallCheck(this, FileDropDirective);

        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
      }
      /**
       * @return {?}
       */


      _createClass(FileDropDirective, [{
        key: "getOptions",
        value: function getOptions() {
          return this.uploader.options;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFilters",
        value: function getFilters() {
          return {};
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDrop",
        value: function onDrop(event) {
          /** @type {?} */
          var transfer = this._getTransfer(event);

          if (!transfer) {
            return;
          }
          /** @type {?} */


          var options = this.getOptions();
          /** @type {?} */

          var filters = this.getFilters();

          this._preventAndStop(event);

          this.uploader.addToQueue(transfer.files, options, filters);
          this.fileOver.emit(false);
          this.onFileDrop.emit(transfer.files);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          /** @type {?} */
          var transfer = this._getTransfer(event);

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

      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          if (
          /** @type {?} */
          this.element) {
            if (event.currentTarget ===
            /** @type {?} */
            this.element[0]) {
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

      }, {
        key: "_getTransfer",
        value: function _getTransfer(event) {
          return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
        }
        /**
         * @protected
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_preventAndStop",
        value: function _preventAndStop(event) {
          event.preventDefault();
          event.stopPropagation();
        }
        /**
         * @protected
         * @param {?} types
         * @return {?}
         */

      }, {
        key: "_haveFiles",
        value: function _haveFiles(types) {
          if (!types) {
            return false;
          }

          if (types.indexOf) {
            return types.indexOf('Files') !== -1;
          } else if (types.contains) {
            return types.contains('Files');
          } else {
            return false;
          }
        }
      }]);

      return FileDropDirective;
    }();

    FileDropDirective.ɵfac = function FileDropDirective_Factory(t) {
      return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FileDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FileDropDirective,
      selectors: [["", "ng2FileDrop", ""]],
      hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
            return ctx.onDragOver($event);
          })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
            return ctx.onDragLeave($event);
          });
        }
      },
      inputs: {
        uploader: "uploader"
      },
      outputs: {
        fileOver: "fileOver",
        onFileDrop: "onFileDrop"
      }
    });
    /** @nocollapse */

    FileDropDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FileDropDirective.propDecorators = {
      uploader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fileOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onFileDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['drop', ['$event']]
      }],
      onDragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['dragover', ['$event']]
      }],
      onDragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['dragleave', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng2FileDrop]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        fileOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }],
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileUploadModule = function FileUploadModule() {
      _classCallCheck(this, FileUploadModule);
    };

    FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FileUploadModule
    });
    FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FileUploadModule_Factory(t) {
        return new (t || FileUploadModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, {
        declarations: function declarations() {
          return [FileDropDirective, FileSelectDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [FileDropDirective, FileSelectDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [FileDropDirective, FileSelectDirective],
          exports: [FileDropDirective, FileSelectDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng2-file-upload.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminItemConfirmDetailItemConfirmDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  item-confirm-detail works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm/item-confirm.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm/item-confirm.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminItemConfirmItemConfirmComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\">\r\n         \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of this.appSetting.foodDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/../assets/food.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"fast-food-outline\"></ion-icon>\r\n            <ng-container\r\n              *ngIf=\"\r\n                this.item.itemNameTemp !== '' && this.item.status !== 'delete'\r\n              \"\r\n              >{{ item.itemNameTemp\r\n              }}<ion-icon name=\"arrow-redo-outline\"></ion-icon\r\n            ></ng-container>\r\n            <ng-container> {{ item.itemName }}</ng-container>\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"card-outline\"></ion-icon> Price\r\n            <ng-container\r\n              *ngIf=\"this.item.priceTemp !== 0 && this.item.status !== 'delete'\"\r\n              >{{ item.priceTemp\r\n              }}<ion-icon name=\"arrow-redo-outline\"></ion-icon\r\n            ></ng-container>\r\n\r\n            <ng-container> {{ item.price }}</ng-container>\r\n          </p>\r\n\r\n          <p *ngIf=\"this.item.status === 'delete'\">\r\n            <ion-text color=\"danger\">\r\n              <h3>Delete this item</h3>\r\n            </ion-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            \r\n            <ion-col \r\n              ><ion-button\r\n                (click)=\"reject(item.id)\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                color=\"secondary\"\r\n              >\r\n                Reject</ion-button\r\n            ></ion-col>\r\n            <ion-col \r\n              ><ion-button\r\n                (click)=\"acept(item.id)\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                color=\"secondary\"\r\n              >\r\n               Acept </ion-button\r\n            ></ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-create/location-create.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-create/location-create.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminLocationCreateLocationCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\">Location & Price Registration Form</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shop's General Info</ion-card-subtitle>\r\n\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Township<ion-text\r\n                *ngIf=\"this.locationData.TownShip===''||this.locationData.TownShip===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.TownShip\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Zone<ion-text\r\n                *ngIf=\"this.locationData.Zone===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.Zone\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"card-outline\"></ion-icon> Delivery Charges<ion-text\r\n                *ngIf=\"this.locationData.deliveryCharges===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.deliveryCharges\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n         <!-------- <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"bicycle-outline\"></ion-icon> Rider Earnings<ion-text\r\n                *ngIf=\"this.locationData.riderEarning===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.riderEarning\" type=\"text\"></ion-input>\r\n          </ion-item>-------->\r\n\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button *ngIf=\"this.id===0\" (click)=\"create()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Save\r\n            </ion-button>\r\n            <ion-button *ngIf=\"this.id!==0\" (click)=\"update()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-list/location-list.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-list/location-list.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminLocationListLocationListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/locationCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of locationDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/shop.svg'>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"business-outline\"></ion-icon> {{item.TownShip}}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"card-outline\"></ion-icon> Delivery Charges {{item.deliveryCharges}}\r\n          </p>\r\n        <!-----  <p>\r\n            <ion-icon name=\"bicycle-outline\"></ion-icon> Rider Earnings {{item.riderEarning}}\r\n          </p>---->\r\n        </ion-label>\r\n\r\n        <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-create/main-item-create.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-create/main-item-create.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminMainItemCreateMainItemCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-chip (click)=\"back()\">\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\n            <ion-label>Back</ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col size=\"5\"> </ion-col>\n        <ion-col size=\"3\"> </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle color=\"primary\"\n        >Main Foods & Drink Registration Form</ion-card-subtitle\n      >\n    </ion-card-header>\n    <ion-card-content>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Foods & Drinks General Info</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"fast-food-outline\"></ion-icon> Food/Drink's\n              Name<ion-text\n                *ngIf=\"\n                  this.foodData.name === '' ||\n                  this.foodData.name === null\n                \"\n                color=\"danger\"\n              >\n                *\n              </ion-text>\n            </ion-label>\n            <ion-input [(ngModel)]=\"foodData.name\" type=\"text\"></ion-input>\n          </ion-item>\n\n    \n\n          <ion-item>\n            <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"cash-outline\"></ion-icon> Descriptions<ion-text\n                *ngIf=\"this.foodData.description === ''\"\n                color=\"danger\"\n              >\n                *\n              </ion-text>\n            </ion-label>\n            <ion-input [(ngModel)]=\"foodData.description\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"cash-outline\"></ion-icon> Resturant\n              <ion-text *ngIf=\"this.foodData.resturant_id === 0\" color=\"danger\">\n                *\n              </ion-text>\n            </ion-label>\n\n            <ion-select [(ngModel)]=\"foodData.resturant_id\">\n              <ion-select-option\n                *ngFor=\"let item of this.appSetting.resturandDataList\"\n                [value]=\"item.id\"\n                >{{ item.shopname }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"cash-outline\"></ion-icon> Category Type\n              <ion-text *ngIf=\"this.foodData.category_id === 0\" color=\"danger\">\n                *\n              </ion-text>\n            </ion-label>\n\n            <ion-select  [(ngModel)]=\"foodData.category_id\">\n              <ion-select-option\n                *ngFor=\"let item of this.appSetting.categoryList\"\n                [value]=\"item.id\"\n                >{{ item.categoryName }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <input type=\"file\" (change)=\"fileChangeEvent($event)\" />\n          </ion-item>\n          <ion-item>\n            <!-----  <ion-label position=\"floating\" color=\"secondary\">\n              <ion-icon name=\"cash-outline\"></ion-icon> Image\n              Price<ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\n                *\n              </ion-text>\n            </ion-label>----->\n            <image-cropper\n              [imageChangedEvent]=\"imageChangedEvent\"\n              [maintainAspectRatio]=\"true\"\n              [aspectRatio]=\"1 / 1\"\n              format=\"png\"\n              (imageCropped)=\"imageCropped($event)\"\n            ></image-cropper>\n          </ion-item>\n\n          <ion-item>\n            <img [src]=\"croppedImage\" />\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\n              Cancel\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              *ngIf=\"this.id === 0\"\n              (click)=\"create()\"\n              expand=\"block\"\n              color=\"secondary\"\n              shape=\"round\"\n            >\n              Save\n            </ion-button>\n            <ion-button\n              *ngIf=\"this.id !== 0\"\n              (click)=\"update()\"\n              expand=\"block\"\n              color=\"secondary\"\n              shape=\"round\"\n            >\n              Update\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-list/main-item-list.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-list/main-item-list.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminMainItemListMainItemListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-chip (click)=\"back()\">\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\n            <ion-label>Back</ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col size=\"5\"> </ion-col>\n        <ion-col size=\"3\">\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/mainItemCreate\">\n            <ion-icon name=\"person-add-outline\"></ion-icon>\n            <ion-label>New</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor=\"let item of this.appSetting.mainItemDataList\">\n    <ion-card-content>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"/../assets/food.svg\" />\n        </ion-avatar>\n        <ion-label>\n          <p>\n            <ion-icon name=\"fast-food-outline\"></ion-icon> {{ item.name }}\n          </p>\n          <p>\n            <ion-icon name=\"card-outline\"></ion-icon> Resturant {{ this.appSetting.resName(item.resturant_id) }}\n          </p>\n        </ion-label>\n\n        <ion-button\n          *ngIf=\"this.item.status === 'active'\"\n          (click)=\"onEdit(item.id)\"\n          color=\"secondary\"\n        >\n          <ion-icon name=\"create-outline\"></ion-icon>\n        </ion-button>\n\n        <ion-button\n          *ngIf=\"this.item.status === 'active'\"\n          (click)=\"onDelete(item.id)\"\n          color=\"danger\"\n        >\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n\n        <ion-button *ngIf=\"this.item.status !== 'active'\" color=\"success\">\n          <ion-icon name=\"shield-checkmark-outline\"></ion-icon> Processing\n        </ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-page/main-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-page/main-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid>\r\n \r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card\r\n          routerLink=\"/managmenet/tabs/tab1/deliveryPending\"\r\n          class=\"report\"\r\n          button\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Delivery Pending</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/brochure.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Delivery Finished</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/goal.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"userList\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>User</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/person.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"resturantList\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Resturant</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/market.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"itemConfirm\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Item Confirm</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/food.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"locationList\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Location & Price</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/location.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"riderEarning\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Rider Earning</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/price.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Report</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/report.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"openingBalance\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Opening Balance</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/calculator.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"report\" routerLink=\"mainItem\" button>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Main Item</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/foodMain.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    \r\n\r\n    \r\n      <ion-col>\r\n        <ion-card\r\n          class=\"report\"\r\n          routerLink=\"/managmenet/tabs/tab3/foodList\"\r\n          button\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Sub Item</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <img class=\"tab\" src=\"/../assets/fried-chicken.svg\" />\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col> </ion-col>\r\n    </ion-row>\r\n\r\n</ion-grid>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-create/opening-create.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-create/opening-create.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminOpeningCreateOpeningCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\">Opening Balance Registration Form</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      \r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"person-outline\"></ion-icon> Rider<ion-text\r\n                *ngIf=\"this.resData.riderID===0||this.resData.riderID===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-select  [(ngModel)]=\"this.resData.riderID\">\r\n              <ion-select-option *ngFor=\"let item of this.riderList\" [value]='item.id'>{{item.username}} | {{item.phone}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        \r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Opening Balance Amount<ion-text\r\n                *ngIf=\"this.resData.openingAmount===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.openingAmount\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Date<ion-text\r\n                *ngIf=\"this.resData.openingAmount_date===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.openingAmount_date\" type=\"date\"></ion-input>\r\n          </ion-item>\r\n       \r\n      \r\n   \r\n\r\n      \r\n\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button *ngIf=\"this.id===0\" (click)=\"create()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Save\r\n            </ion-button>\r\n            <ion-button *ngIf=\"this.id!==0\" (click)=\"update()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-list/opening-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-list/opening-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminOpeningListOpeningListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/openingBalanceCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of resDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/shop.svg'>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"business-outline\"></ion-icon> Rider :{{this.riderName(item.riderID)}}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"call-outline\"></ion-icon> Amount :{{item.openingAmount}}\r\n          </p>\r\n        </ion-label>\r\n\r\n        <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-item>\r\n    <ion-label>Report Date</ion-label>\r\n    <ion-datetime (ngModelChange)=\"dateChange($event)\" [(ngModel)]=\"searchDate\"displayFormat=\"DD-MMMM-YYYY\" ></ion-datetime>\r\n  </ion-item>\r\n</ion-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-create/order-management-create.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-create/order-management-create.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminOrderManagementCreateOrderManagementCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  order-management-create works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-list/order-management-list.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-list/order-management-list.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminOrderManagementListOrderManagementListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  order-management-list works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-create/resturant-create.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-create/resturant-create.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminResturantCreateResturantCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\"> </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\"\r\n        >Resturant Registration Form</ion-card-subtitle\r\n      >\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shop's General Info</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"person-outline\"></ion-icon> Shop's\r\n              username<ion-text\r\n                *ngIf=\"\r\n                  this.resData.username === '' || this.resData.username === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.username\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"business-outline\"></ion-icon> Shop's name<ion-text\r\n                *ngIf=\"\r\n                  this.resData.shopname === '' || this.resData.shopname === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.shopname\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"lock-open-outline\"></ion-icon> Password<ion-text\r\n                *ngIf=\"\r\n                  this.resData.password === '' || this.resData.password === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"resData.password\"\r\n              type=\"password\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"call-outline\"></ion-icon> Phone<ion-text\r\n                *ngIf=\"this.resData.phone === '' || this.resData.phone === null\"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.phone\" type=\"tel\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"call-outline\"></ion-icon> Zone<ion-text\r\n                *ngIf=\" this.resData.locationID === null\"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.locationID\" type=\"number\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"card-outline\"></ion-icon> Select Type<ion-text\r\n                *ngIf=\"\r\n                  this.resData.resturantType === '' ||\r\n                  this.resData.resturantType === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n\r\n            <ion-select [(ngModel)]=\"this.resData.resturantType\">\r\n              <ion-select-option [value]=\"this.credit\"\r\n                >Credit</ion-select-option\r\n              >\r\n              <ion-select-option [value]=\"this.debit\">Debit</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shop's Location</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"location-outline\"></ion-icon> Longitude\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"resData.longitude\"\r\n              type=\"number\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"location-outline\"></ion-icon> Latitude\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"resData.latitude\" type=\"number\"></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button\r\n              *ngIf=\"this.id === 0\"\r\n              (click)=\"create()\"\r\n              expand=\"block\"\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n            >\r\n              Save\r\n            </ion-button>\r\n            <ion-button\r\n              *ngIf=\"this.id !== 0\"\r\n              (click)=\"update()\"\r\n              expand=\"block\"\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n            >\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-list/resturant-list.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-list/resturant-list.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminResturantListResturantListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/resturantCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of resDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/shop.svg'>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"business-outline\"></ion-icon> {{item.shopname}}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"call-outline\"></ion-icon> Ph {{item.phone}}\r\n          </p>\r\n        </ion-label>\r\n\r\n        <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminRiderEarningCreateRiderEarningCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\">Location & Price Registration Form</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Shop's General Info</ion-card-subtitle>\r\n\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n\r\n         \r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"card-outline\"></ion-icon> Delivery Charges<ion-text\r\n                *ngIf=\"this.riderEarningData.deliveryCharges===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"riderEarningData.deliveryCharges\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"card-outline\"></ion-icon> Rider Earnging<ion-text\r\n                *ngIf=\"this.riderEarningData.riderEarning===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"riderEarningData.riderEarning\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n         \r\n         <!-------- <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"bicycle-outline\"></ion-icon> Rider Earnings<ion-text\r\n                *ngIf=\"this.locationData.riderEarning===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"locationData.riderEarning\" type=\"text\"></ion-input>\r\n          </ion-item>-------->\r\n\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button *ngIf=\"this.id===0\" (click)=\"create()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Save\r\n            </ion-button>\r\n            <ion-button *ngIf=\"this.id!==0\" (click)=\"update()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminRiderEarningListRiderEarningListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/riderEarningCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of DataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src='/../assets/shop.svg'>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"business-outline\"></ion-icon> Rider Earnging {{item.riderEarning}}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"card-outline\"></ion-icon> Delivery Charges {{item.deliveryCharges}}\r\n          </p>\r\n        <!-----  <p>\r\n            <ion-icon name=\"bicycle-outline\"></ion-icon> Rider Earnings {{item.riderEarning}}\r\n          </p>---->\r\n        </ion-label>\r\n\r\n        <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-create/user-create.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-create/user-create.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminUserCreateUserCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\">User Registration Form</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>User's General Info</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"person-outline\"></ion-icon>Username\r\n              <ion-text *ngIf=\"this.userData.username===''||this.userData.username===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"userData.username\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"lock-open-outline\"></ion-icon>Password\r\n              <ion-text *ngIf=\"this.userData.password===''||this.userData.password===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"userData.password\" type=\"password\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"call-outline\"></ion-icon> Please enter phone\r\n              <ion-text *ngIf=\"this.userData.phone===''||this.userData.phone===null\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"this.userData.phone\" type=\"tel\"></ion-input>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Security Info</ion-card-subtitle>\r\n\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"shield-checkmark-outline\"></ion-icon> Select User type\r\n              <ion-text *ngIf=\"this.userData.usertype===0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-select [(ngModel)]=\"userData.usertype\" placeholder=\"Select one\">\r\n              <ng-container *ngFor=\"let item of this.userTypeData;let i=index;\">\r\n                <ion-select-option   [value]=\"item.id\">\r\n                  {{i+1}}.{{item.usertypeName}}</ion-select-option>\r\n              </ng-container>\r\n              \r\n             \r\n            </ion-select>\r\n\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button *ngIf=\"this.id===0\" (click)=\"create()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Save\r\n            </ion-button>\r\n            <ion-button *ngIf=\"this.id!==0\" (click)=\"update()\" expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-list/user-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-list/user-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3AdminUserListUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/userCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n    <ion-card *ngFor=\"let item of userDataList\">\r\n     \r\n      <ion-card-content>\r\n        <ion-item> \r\n          <ion-avatar slot=\"start\">\r\n            <img src='/../assets/person.svg'>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <p><ion-icon name=\"person-outline\"></ion-icon>{{item.username}}</p>\r\n            <p><ion-icon name=\"call-outline\"></ion-icon> Ph {{item.phone}}</p>\r\n          </ion-label>\r\n          <ion-button (click)=\"onEdit(item.id)\" color=\"secondary\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n          </ion-button>\r\n\r\n          <ion-button (click)=\"onDelete(item.id)\" color=\"danger\">\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-create/food-create.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-create/food-create.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3ResturantFoodCreateFoodCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\"> </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle color=\"primary\"\r\n        >Foods & Drink Registration Form</ion-card-subtitle\r\n      >\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Foods & Drinks General Info</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"fast-food-outline\"></ion-icon> Food/Drink's\r\n              Name<ion-text\r\n                *ngIf=\"\r\n                  this.foodData.itemName === '' ||\r\n                  this.foodData.itemName === null\r\n                \"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"foodData.itemName\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Food/Drink's\r\n              Price<ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"foodData.price\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Descriptions<ion-text\r\n                *ngIf=\"this.foodData.Descriptions === ''\"\r\n                color=\"danger\"\r\n              >\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input\r\n              [(ngModel)]=\"foodData.Descriptions\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Category Type\r\n              <ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n\r\n            <ion-select [(ngModel)]=\"foodData.categoryType_ID\">\r\n              <ion-select-option\r\n                *ngFor=\"let item of this.appSetting.categoryList\"\r\n                [value]=\"item.id\"\r\n                >{{ item.categoryName }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Main Base Item\r\n              <ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>\r\n\r\n            <ion-select [(ngModel)]=\"foodData.mainitem_id\" (ngModelChange)=\"dataChange($event)\">\r\n              <ion-select-option\r\n                *ngFor=\"let item of this.appSetting.mainItemDataList\"\r\n                [value]=\"item.id\"\r\n                >{{ item.name }} |\r\n                {{\r\n                  this.appSetting.resName(item.resturant_id)\r\n                }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <input type=\"file\" (change)=\"fileChangeEvent($event)\" />\r\n          </ion-item>\r\n          <ion-item>\r\n            <!-----  <ion-label position=\"floating\" color=\"secondary\">\r\n              <ion-icon name=\"cash-outline\"></ion-icon> Image\r\n              Price<ion-text *ngIf=\"this.foodData.price === 0\" color=\"danger\">\r\n                *\r\n              </ion-text>\r\n            </ion-label>----->\r\n            <image-cropper\r\n              [imageChangedEvent]=\"imageChangedEvent\"\r\n              [maintainAspectRatio]=\"true\"\r\n              [aspectRatio]=\"1 / 1\"\r\n              format=\"png\"\r\n              (imageCropped)=\"imageCropped($event)\"\r\n            ></image-cropper>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <img [src]=\"croppedImage\" />\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">\r\n              Cancel\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button\r\n              *ngIf=\"this.id === 0\"\r\n              (click)=\"create()\"\r\n              expand=\"block\"\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n            >\r\n              Save\r\n            </ion-button>\r\n            <ion-button\r\n              *ngIf=\"this.id !== 0\"\r\n              (click)=\"update()\"\r\n              expand=\"block\"\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n            >\r\n              Update\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-list/food-list.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-list/food-list.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3ResturantFoodListFoodListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-chip (click)=\"back()\">\r\n            <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n            <ion-label>Back</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col size=\"5\"> </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-chip routerLink=\"/managmenet/tabs/tab3/foodCreate\">\r\n            <ion-icon name=\"person-add-outline\"></ion-icon>\r\n            <ion-label>New</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card *ngFor=\"let item of this.appSetting.foodDataList\">\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/../assets/food.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>\r\n            <ion-icon name=\"fast-food-outline\"></ion-icon> {{ item.itemName }}\r\n          </p>\r\n          <p>\r\n            <ion-icon name=\"card-outline\"></ion-icon> Price {{ item.price }}\r\n          </p>\r\n        </ion-label>\r\n\r\n        <ion-button\r\n          *ngIf=\"this.item.status === 'active'\"\r\n          (click)=\"onEdit(item.id)\"\r\n          color=\"secondary\"\r\n        >\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button\r\n          *ngIf=\"this.item.status === 'active'\"\r\n          (click)=\"onDelete(item.id)\"\r\n          color=\"danger\"\r\n        >\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button *ngIf=\"this.item.status !== 'active'\" color=\"success\">\r\n          <ion-icon name=\"shield-checkmark-outline\"></ion-icon> Processing\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/res-main-page/res-main-page.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/res-main-page/res-main-page.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3ResturantResMainPageResMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card routerLink=\"foodList\" class=\"report\" button>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Food & Drinks</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <img src=\"/../assets/food.svg\" />\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card class=\"report\" routerLink=\"resturantList\" button>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Report</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <img src=\"/../assets/graphic.svg\" />\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n \r\n</ion-grid>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <app-main-page *ngIf=\"this.appSetting.loginType==='admin'\"></app-main-page>\r\n  <app-res-main-page *ngIf=\"this.appSetting.loginType==='resturant'\"></app-res-main-page>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Services/openingBalance/opening-balance.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Services/openingBalance/opening-balance.service.ts ***!
    \********************************************************************/

  /*! exports provided: OpeningBalanceService */

  /***/
  function srcAppServicesOpeningBalanceOpeningBalanceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpeningBalanceService", function () {
      return OpeningBalanceService;
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OpeningBalanceService = /*#__PURE__*/function () {
      function OpeningBalanceService(http, appSetting) {
        _classCallCheck(this, OpeningBalanceService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/OpeningBalanceModels");
        this.date_url = "".concat(this.appSetting.apiAddress, "/api/OpeningBalanceModels/today");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(OpeningBalanceService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url);
        }
      }, {
        key: "getLogin",
        value: function getLogin(username, password) {
          console.log(this.url + "/login?user=".concat(username, "&password=").concat(password));
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
        key: "getDate",
        value: function getDate(date) {
          var tempDate = date.toString().substring(0, 10);
          var searchUrl = "".concat(this.date_url, "/?date=").concat(tempDate);
          return this.http.get(searchUrl);
        }
      }, {
        key: "post",
        value: function post(data) {
          var _this4 = this;

          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            _this4.appSetting.showSuccess();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var _this5 = this;

          var searchUrl = "".concat(this.url, "/").concat(data.id);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
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
          xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {}
          });
          xhr.open('DELETE', this.url + '/' + id);
          xhr.send(data);
        }
      }]);

      return OpeningBalanceService;
    }();

    OpeningBalanceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    OpeningBalanceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], OpeningBalanceService);
    /***/
  },

  /***/
  "./src/app/Services/riderEarning/rider-earning.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Services/riderEarning/rider-earning.service.ts ***!
    \****************************************************************/

  /*! exports provided: RiderEarningService */

  /***/
  function srcAppServicesRiderEarningRiderEarningServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiderEarningService", function () {
      return RiderEarningService;
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RiderEarningService = /*#__PURE__*/function () {
      function RiderEarningService(http, appSetting) {
        _classCallCheck(this, RiderEarningService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.apiAddress, "/api/riderEarningModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(RiderEarningService, [{
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

            _this6.appSetting.showError(err);
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
          xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {}
          });
          xhr.open('DELETE', this.url + '/' + id);
          xhr.send(data);
        }
      }]);

      return RiderEarningService;
    }();

    RiderEarningService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    RiderEarningService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], RiderEarningService);
    /***/
  },

  /***/
  "./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminItemConfirmDetailItemConfirmDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vaXRlbS1jb25maXJtLWRldGFpbC9pdGVtLWNvbmZpcm0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ItemConfirmDetailComponent */

  /***/
  function srcAppTab3AdminItemConfirmDetailItemConfirmDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemConfirmDetailComponent", function () {
      return ItemConfirmDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ItemConfirmDetailComponent = /*#__PURE__*/function () {
      function ItemConfirmDetailComponent() {
        _classCallCheck(this, ItemConfirmDetailComponent);
      }

      _createClass(ItemConfirmDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemConfirmDetailComponent;
    }();

    ItemConfirmDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-confirm-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-confirm-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-confirm-detail.component.scss */
      "./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.scss"))["default"]]
    })], ItemConfirmDetailComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/item-confirm/item-confirm.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/tab3/admin/item-confirm/item-confirm.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminItemConfirmItemConfirmComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vaXRlbS1jb25maXJtL2l0ZW0tY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/item-confirm/item-confirm.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/tab3/admin/item-confirm/item-confirm.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ItemConfirmComponent */

  /***/
  function srcAppTab3AdminItemConfirmItemConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemConfirmComponent", function () {
      return ItemConfirmComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/food/food.service */
    "./src/app/Services/food/food.service.ts");

    var ItemConfirmComponent = /*#__PURE__*/function () {
      function ItemConfirmComponent(location, appSetting, FoodService, route) {
        _classCallCheck(this, ItemConfirmComponent);

        this.location = location;
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.route = route;
      }

      _createClass(ItemConfirmComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataLoading();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "dataLoading",
        value: function dataLoading() {
          var _this8 = this;

          this.FoodService.getPending().subscribe(function (x) {
            _this8.appSetting.showLoading();

            _this8.appSetting.foodDataList = x;
          }, function (err) {
            return _this8.appSetting.showError(err);
          }, function () {
            _this8.appSetting.loadingClose();
          });
        }
      }, {
        key: "acept",
        value: function acept(id) {
          var _this9 = this;

          this.FoodService.putConfirm(id, "true");
          this.FoodService.getPending().subscribe(function (x) {
            _this9.appSetting.foodDataList = x;
          }, function (err) {
            _this9.appSetting.showError(err);
          }, function () {});
        }
      }, {
        key: "reject",
        value: function reject(id) {
          var _this10 = this;

          this.FoodService.putConfirm(id, "false");
          this.FoodService.getPending().subscribe(function (x) {
            _this10.appSetting.foodDataList = x;
          }, function (err) {
            _this10.appSetting.showError(err);
          }, function () {});
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this11 = this;

          this.FoodService.getPending().subscribe(function (x) {
            _this11.appSetting.foodDataList = x;
          }, function (err) {
            _this11.appSetting.showError(err);

            event.target.complete();
          }, function () {
            if (event !== undefined || event !== null) {
              event.target.complete();
            }
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigateByUrl("managmenet/tabs/tab3/foodEdit/" + id);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this12 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this12.FoodService["delete"](id);

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      }]);

      return ItemConfirmComponent;
    }();

    ItemConfirmComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]
      }, {
        type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ItemConfirmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-item-confirm",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-confirm.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/item-confirm/item-confirm.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-confirm.component.scss */
      "./src/app/tab3/admin/item-confirm/item-confirm.component.scss"))["default"]]
    })], ItemConfirmComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/location-create/location-create.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/tab3/admin/location-create/location-create.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminLocationCreateLocationCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vbG9jYXRpb24tY3JlYXRlL2xvY2F0aW9uLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/location-create/location-create.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/tab3/admin/location-create/location-create.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LocationCreateComponent */

  /***/
  function srcAppTab3AdminLocationCreateLocationCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationCreateComponent", function () {
      return LocationCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/location/location.service */
    "./src/app/Services/location/location.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var LocationCreateComponent = /*#__PURE__*/function () {
      function LocationCreateComponent(location, appSetting, LocationService, route, Router) {
        _classCallCheck(this, LocationCreateComponent);

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
          riderEarning: 0
        };
      }

      _createClass(LocationCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "editLoad",
        value: function editLoad(id) {
          var _this13 = this;

          this.appSetting.showLoading();

          if (id !== 0) {
            this.LocationService.getSingle(id).subscribe(function (x) {
              return _this13.locationData = x;
            }, function (err) {
              return _this13.appSetting.showError(err);
            }, function () {
              return _this13.appSetting.loadingClose();
            });
          } else {
            this.appSetting.loadingClose();
          }
        }
      }, {
        key: "formValidation",
        value: function formValidation() {
          if (this.locationData.TownShip === "" || this.locationData.deliveryCharges === 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "create",
        value: function create() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.LocationService.post(this.locationData);
          } else {
            this.appSetting.showInvalid();
          }
        }
      }, {
        key: "update",
        value: function update() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.LocationService.put(this.locationData); // this.route.navigateByUrl('tabs/tab3/resturantList');
          } else {
            this.appSetting.showInvalid();
          }
        }
      }]);

      return LocationCreateComponent;
    }();

    LocationCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    LocationCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-location-create",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./location-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-create/location-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./location-create.component.scss */
      "./src/app/tab3/admin/location-create/location-create.component.scss"))["default"]]
    })], LocationCreateComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/location-list/location-list.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/tab3/admin/location-list/location-list.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminLocationListLocationListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vbG9jYXRpb24tbGlzdC9sb2NhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/location-list/location-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/tab3/admin/location-list/location-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LocationListComponent */

  /***/
  function srcAppTab3AdminLocationListLocationListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationListComponent", function () {
      return LocationListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/location/location.service */
    "./src/app/Services/location/location.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var LocationListComponent = /*#__PURE__*/function () {
      function LocationListComponent(location, appSetting, LocationService, route) {
        _classCallCheck(this, LocationListComponent);

        this.location = location;
        this.appSetting = appSetting;
        this.LocationService = LocationService;
        this.route = route;
        this.locationDataList = [];
      }

      _createClass(LocationListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataLoading();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "dataLoading",
        value: function dataLoading() {
          var _this14 = this;

          this.LocationService.get().subscribe(function (x) {
            _this14.appSetting.showLoading();

            _this14.locationDataList = x;
          }, function (err) {
            return _this14.appSetting.showError(err);
          }, function () {
            _this14.appSetting.loadingClose();
          });
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this15 = this;

          this.LocationService.get().subscribe(function (x) {
            _this15.locationDataList = x;
          }, function (err) {
            _this15.appSetting.showError(err);

            event.target.complete();
          }, function () {
            if (event !== undefined || event !== null) {
              event.target.complete();
            }
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigateByUrl("managmenet/tabs/tab3/locationEdit/" + id);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this16 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this16.LocationService["delete"](id);

              _this16.locationDataList.splice(id, 1);

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      }]);

      return LocationListComponent;
    }();

    LocationListComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]
      }, {
        type: src_app_Services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LocationListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-location-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./location-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/location-list/location-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./location-list.component.scss */
      "./src/app/tab3/admin/location-list/location-list.component.scss"))["default"]]
    })], LocationListComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/main-item-create/main-item-create.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/tab3/admin/main-item-create/main-item-create.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminMainItemCreateMainItemCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vbWFpbi1pdGVtLWNyZWF0ZS9tYWluLWl0ZW0tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/main-item-create/main-item-create.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/tab3/admin/main-item-create/main-item-create.component.ts ***!
    \***************************************************************************/

  /*! exports provided: MainItemCreateComponent */

  /***/
  function srcAppTab3AdminMainItemCreateMainItemCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainItemCreateComponent", function () {
      return MainItemCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../Services/mainModel/main-model.service */
    "./src/app/Services/mainModel/main-model.service.ts");
    /* harmony import */


    var _Services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../Services/category/category.service */
    "./src/app/Services/category/category.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var MainItemCreateComponent = /*#__PURE__*/function () {
      function MainItemCreateComponent(location, appSetting, FoodService, route, Router, categoryService) {
        _classCallCheck(this, MainItemCreateComponent);

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
        this.croppedImage = ''; //Image

        this.imageChangedEvent = '';
        this.getCategory();
      }

      _createClass(MainItemCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
          }
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this17 = this;

          this.categoryService.get().subscribe(function (x) {
            _this17.appSetting.categoryList = x;
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "editLoad",
        value: function editLoad(id) {
          var _this18 = this;

          this.appSetting.showLoading();

          if (id !== 0) {
            this.FoodService.getSingle(id).subscribe(function (x) {
              return _this18.foodData = x;
            }, function (err) {
              return _this18.appSetting.showError(err);
            }, function () {
              _this18.appSetting.loadingClose();
            });
          } else {
            this.appSetting.loadingClose();
          }
        }
      }, {
        key: "formValidation",
        value: function formValidation() {
          if (this.foodData.name === "" || this.foodData.resturant_id === 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "create",
        value: function create() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.FoodService.post(this.foodData, this.croppedImage);
          } else {
            this.appSetting.showInvalid();
          }
        }
      }, {
        key: "update",
        value: function update() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.foodData.status = "pending";
            this.FoodService.put(this.foodData); // this.route.navigateByUrl('tabs/tab3/resturantList');
          } else {
            this.appSetting.showInvalid();
          }
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.imageChangedEvent = event;
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
        }
      }]);

      return MainItemCreateComponent;
    }();

    MainItemCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]
      }, {
        type: _Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_1__["MainModelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _Services_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }];
    };

    MainItemCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-main-item-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-item-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-create/main-item-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-item-create.component.scss */
      "./src/app/tab3/admin/main-item-create/main-item-create.component.scss"))["default"]]
    })], MainItemCreateComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/main-item-list/main-item-list.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/tab3/admin/main-item-list/main-item-list.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminMainItemListMainItemListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vbWFpbi1pdGVtLWxpc3QvbWFpbi1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/main-item-list/main-item-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/tab3/admin/main-item-list/main-item-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MainItemListComponent */

  /***/
  function srcAppTab3AdminMainItemListMainItemListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainItemListComponent", function () {
      return MainItemListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/mainModel/main-model.service */
    "./src/app/Services/mainModel/main-model.service.ts");

    var MainItemListComponent = /*#__PURE__*/function () {
      function MainItemListComponent(location, appSetting, FoodService, route) {
        _classCallCheck(this, MainItemListComponent);

        this.location = location;
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.route = route;
      }

      _createClass(MainItemListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataLoading();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "dataLoading",
        value: function dataLoading() {
          var _this19 = this;

          this.FoodService.get().subscribe(function (x) {
            _this19.appSetting.showLoading();

            _this19.appSetting.mainItemDataList = x;
          }, function (err) {
            return _this19.appSetting.showError(err);
          }, function () {
            _this19.appSetting.loadingClose();
          });
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this20 = this;

          this.FoodService.get().subscribe(function (x) {
            _this20.appSetting.mainItemDataList = x;
          }, function (err) {
            _this20.appSetting.showError(err);

            event.target.complete();
          }, function () {
            if (event !== undefined || event !== null) {
              event.target.complete();
            }
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigateByUrl("managmenet/tabs/tab3/mainItemEdit/" + id);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this21 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this21.FoodService["delete"](id);

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      }]);

      return MainItemListComponent;
    }();

    MainItemListComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]
      }, {
        type: src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_6__["MainModelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MainItemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-item-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-item-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-item-list/main-item-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-item-list.component.scss */
      "./src/app/tab3/admin/main-item-list/main-item-list.component.scss"))["default"]]
    })], MainItemListComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/main-page/main-page.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/tab3/admin/main-page/main-page.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminMainPageMainPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media only screen and (min-width: 601px) {\n  .report {\n    max-width: 300px !important;\n    min-width: 300px !important;\n    min-height: 400px !important;\n    max-height: 400px !important;\n  }\n\n  img.tab {\n    background-color: transparent;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .report {\n    min-height: 150px !important;\n    max-height: 150px !important;\n  }\n\n  img.tab {\n    min-height: 100px !important;\n    max-height: 100px !important;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .report {\n    min-height: 150px !important;\n    max-height: 150px !important;\n  }\n\n  img.tab {\n    min-height: 100px !important;\n    max-height: 100px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9hZG1pbi9tYWluLXBhZ2UvRDpcXHNpZGVDYXIvc3JjXFxhcHBcXHRhYjNcXGFkbWluXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFiMy9hZG1pbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0k7SUFDSSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSw0QkFBQTtFQ0ROOztFRElFO0lBRU0sNkJBQUE7RUNGUjtBQUNGO0FES0E7RUFDSTtJQUVJLDRCQUFBO0lBQ0EsNEJBQUE7RUNKTjs7RURPRTtJQUdNLDRCQUFBO0lBQ0EsNEJBQUE7RUNOUjtBQUNGO0FEU0E7RUFDSTtJQUdJLDRCQUFBO0lBQ0EsNEJBQUE7RUNUTjs7RURZRTtJQUdNLDRCQUFBO0lBQ0EsNEJBQUE7RUNYUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy9hZG1pbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICAucmVwb3J0e1xyXG4gICAgICAgIG1heC13aWR0aDogIDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcudGFie1xyXG4gICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAucmVwb3J0e1xyXG4gLy8gICAgICBtaW4td2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGltZy50YWJ7XHJcbiAgICAgICAgLy8gbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAucmVwb3J0e1xyXG4gICAgICAgIC8vIG1pbi13aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nLnRhYntcclxuICAgICAgICAvLyBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbn1cclxuXHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgLnJlcG9ydCB7XG4gICAgbWF4LXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpbWcudGFiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucmVwb3J0IHtcbiAgICBtaW4taGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpbWcudGFiIHtcbiAgICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnJlcG9ydCB7XG4gICAgbWluLWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW1nLnRhYiB7XG4gICAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/main-page/main-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tab3/admin/main-page/main-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppTab3AdminMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent() {
        _classCallCheck(this, MainPageComponent);
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainPageComponent;
    }();

    MainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/main-page/main-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-page.component.scss */
      "./src/app/tab3/admin/main-page/main-page.component.scss"))["default"]]
    })], MainPageComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/opening-create/opening-create.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/tab3/admin/opening-create/opening-create.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminOpeningCreateOpeningCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vb3BlbmluZy1jcmVhdGUvb3BlbmluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/opening-create/opening-create.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/tab3/admin/opening-create/opening-create.component.ts ***!
    \***********************************************************************/

  /*! exports provided: OpeningCreateComponent */

  /***/
  function srcAppTab3AdminOpeningCreateOpeningCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpeningCreateComponent", function () {
      return OpeningCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/userModel/user-model.service */
    "./src/app/Services/userModel/user-model.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Services_openingBalance_opening_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/openingBalance/opening-balance.service */
    "./src/app/Services/openingBalance/opening-balance.service.ts");

    var OpeningCreateComponent = /*#__PURE__*/function () {
      function OpeningCreateComponent(location, appSetting, OpeningBalanceService, riderSelectService, route, Router) {
        _classCallCheck(this, OpeningCreateComponent);

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

      _createClass(OpeningCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "riderFilter",
        value: function riderFilter() {
          var _this22 = this;

          var temp1 = [];
          this.riderSelectService.get().subscribe(function (x) {
            return temp1 = x;
          }, function (err) {
            return _this22.appSetting.showError(err);
          }, function () {
            var temp2 = temp1;
            temp2.forEach(function (x) {
              if (x.usertype === 3) {
                _this22.riderList.push(x);
              }
            });
          });
        }
      }, {
        key: "editLoad",
        value: function editLoad(id) {
          var _this23 = this;

          this.appSetting.showLoading();

          if (id !== 0) {
            this.OpeningBalanceService.getSingle(id).subscribe(function (x) {
              return _this23.resData = x;
            }, function (err) {
              return _this23.appSetting.showError(err);
            }, function () {
              return _this23.appSetting.loadingClose();
            });
          } else {
            this.appSetting.loadingClose();
          }
        }
      }, {
        key: "formValidation",
        value: function formValidation() {
          if (this.resData.openingAmount === 0 || this.resData.operatorID === 0 || this.resData.riderID === 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "create",
        value: function create() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.OpeningBalanceService.post(this.resData);
          } else {
            this.appSetting.showInvalid();
          }
        }
      }, {
        key: "update",
        value: function update() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.OpeningBalanceService.put(this.resData); // this.route.navigateByUrl('tabs/tab3/resturantList');
          } else {
            this.appSetting.showInvalid();
          }
        }
      }]);

      return OpeningCreateComponent;
    }();

    OpeningCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]
      }, {
        type: src_app_Services_openingBalance_opening_balance_service__WEBPACK_IMPORTED_MODULE_6__["OpeningBalanceService"]
      }, {
        type: src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_1__["UserModelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    OpeningCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-opening-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./opening-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-create/opening-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./opening-create.component.scss */
      "./src/app/tab3/admin/opening-create/opening-create.component.scss"))["default"]]
    })], OpeningCreateComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/opening-list/opening-list.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/tab3/admin/opening-list/opening-list.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminOpeningListOpeningListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vb3BlbmluZy1saXN0L29wZW5pbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/opening-list/opening-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/tab3/admin/opening-list/opening-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: OpeningListComponent */

  /***/
  function srcAppTab3AdminOpeningListOpeningListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpeningListComponent", function () {
      return OpeningListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/userModel/user-model.service */
    "./src/app/Services/userModel/user-model.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_Services_openingBalance_opening_balance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Services/openingBalance/opening-balance.service */
    "./src/app/Services/openingBalance/opening-balance.service.ts");

    var OpeningListComponent = /*#__PURE__*/function () {
      function OpeningListComponent(location, appSetting, OpeningBalanceService, riderSelectService, route) {
        _classCallCheck(this, OpeningListComponent);

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

      _createClass(OpeningListComponent, [{
        key: "dateChange",
        value: function dateChange(e) {
          var _this24 = this;

          this.searchDate = e;
          this.appSetting.showLoading();
          this.OpeningBalanceService.getDate(e).subscribe(function (x) {
            _this24.resDataList = x;
          }, function (err) {
            return _this24.appSetting.showError(err);
          }, function () {
            return _this24.appSetting.loadingClose();
          });
        }
      }, {
        key: "riderFilter",
        value: function riderFilter() {
          var _this25 = this;

          this.appSetting.showLoading();
          var temp1 = [];
          this.riderSelectService.get().subscribe(function (x) {
            return temp1 = x;
          }, function (err) {
            return _this25.appSetting.showError(err);
          }, function () {
            var temp2 = temp1;
            temp2.forEach(function (x) {
              if (x.usertype === 3) {
                _this25.riderList.push(x);
              }
            });

            _this25.appSetting.loadingClose();
          });
        }
      }, {
        key: "riderName",
        value: function riderName(id) {
          var name = "";

          var temp = _toConsumableArray(this.riderList);

          temp.forEach(function (x) {
            if (x.id === id) {
              name = x.username;
            }
          });
          return name;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataLoading();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "dataLoading",
        value: function dataLoading() {
          var _this26 = this;

          this.appSetting.showLoading();
          this.OpeningBalanceService.get().subscribe(function (x) {
            _this26.resDataList = x;
          }, function (err) {
            return _this26.appSetting.showError(err);
          }, function () {
            _this26.appSetting.loadingClose();
          });
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this27 = this;

          this.OpeningBalanceService.get().subscribe(function (x) {
            _this27.resDataList = x;
          }, function (err) {
            _this27.appSetting.showError(err);

            event.target.complete();
          }, function () {
            if (event !== undefined || event !== null) {
              event.target.complete();
            }
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigateByUrl("managmenet/tabs/tab3/openingBalanceEdit/" + id);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this28 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this28.OpeningBalanceService["delete"](id);

              _this28.resDataList.splice(id, 1);

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      }]);

      return OpeningListComponent;
    }();

    OpeningListComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"]
      }, {
        type: src_app_Services_openingBalance_opening_balance_service__WEBPACK_IMPORTED_MODULE_7__["OpeningBalanceService"]
      }, {
        type: src_app_Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_1__["UserModelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    OpeningListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-opening-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./opening-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/opening-list/opening-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./opening-list.component.scss */
      "./src/app/tab3/admin/opening-list/opening-list.component.scss"))["default"]]
    })], OpeningListComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/order-management-create/order-management-create.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/tab3/admin/order-management-create/order-management-create.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminOrderManagementCreateOrderManagementCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vb3JkZXItbWFuYWdlbWVudC1jcmVhdGUvb3JkZXItbWFuYWdlbWVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/order-management-create/order-management-create.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/tab3/admin/order-management-create/order-management-create.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: OrderManagementCreateComponent */

  /***/
  function srcAppTab3AdminOrderManagementCreateOrderManagementCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderManagementCreateComponent", function () {
      return OrderManagementCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderManagementCreateComponent = /*#__PURE__*/function () {
      function OrderManagementCreateComponent() {
        _classCallCheck(this, OrderManagementCreateComponent);
      }

      _createClass(OrderManagementCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderManagementCreateComponent;
    }();

    OrderManagementCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-management-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-management-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-create/order-management-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-management-create.component.scss */
      "./src/app/tab3/admin/order-management-create/order-management-create.component.scss"))["default"]]
    })], OrderManagementCreateComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/order-management-list/order-management-list.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/tab3/admin/order-management-list/order-management-list.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminOrderManagementListOrderManagementListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vb3JkZXItbWFuYWdlbWVudC1saXN0L29yZGVyLW1hbmFnZW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/order-management-list/order-management-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/tab3/admin/order-management-list/order-management-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: OrderManagementListComponent */

  /***/
  function srcAppTab3AdminOrderManagementListOrderManagementListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderManagementListComponent", function () {
      return OrderManagementListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderManagementListComponent = /*#__PURE__*/function () {
      function OrderManagementListComponent() {
        _classCallCheck(this, OrderManagementListComponent);
      }

      _createClass(OrderManagementListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderManagementListComponent;
    }();

    OrderManagementListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-management-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-management-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/order-management-list/order-management-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-management-list.component.scss */
      "./src/app/tab3/admin/order-management-list/order-management-list.component.scss"))["default"]]
    })], OrderManagementListComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/resturant-create/resturant-create.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/tab3/admin/resturant-create/resturant-create.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminResturantCreateResturantCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vcmVzdHVyYW50LWNyZWF0ZS9yZXN0dXJhbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/resturant-create/resturant-create.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/tab3/admin/resturant-create/resturant-create.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ResturantCreateComponent */

  /***/
  function srcAppTab3AdminResturantCreateResturantCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResturantCreateComponent", function () {
      return ResturantCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Services_location_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../Services/location/location.service */
    "./src/app/Services/location/location.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../Services/resturantModel/resturant-model.service */
    "./src/app/Services/resturantModel/resturant-model.service.ts");

    var ResturantCreateComponent = /*#__PURE__*/function () {
      function ResturantCreateComponent(location, appSetting, ResturantModelService, route, LocationService, Router) {
        _classCallCheck(this, ResturantCreateComponent);

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
          resturantType: "debit"
        };
      }

      _createClass(ResturantCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.locationCharges();

          if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
          }
        }
      }, {
        key: "locationCharges",
        value: function locationCharges() {
          var _this29 = this;

          this.appSetting.showLoading();
          this.LocationService.get().subscribe(function (x) {
            _this29.locationData = x;
          }, function (err) {
            return console.log(err);
          }, function () {
            _this29.appSetting.loadingClose();
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "editLoad",
        value: function editLoad(id) {
          var _this30 = this;

          this.appSetting.showLoading();

          if (id !== 0) {
            this.ResturantModelService.getSingle(id).subscribe(function (x) {
              return _this30.resData = x;
            }, function (err) {
              return _this30.appSetting.showError(err);
            }, function () {
              return _this30.appSetting.loadingClose();
            });
          } else {
            this.appSetting.loadingClose();
          }
        }
      }, {
        key: "formValidation",
        value: function formValidation() {
          if (this.resData.password === "" || this.resData.phone === "" || this.resData.username === "" || this.resData.usertype === 0 || this.resData.shopname === "") {
            return false;
          }

          return true;
        }
      }, {
        key: "create",
        value: function create() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.ResturantModelService.post(this.resData);
          } else {
            this.appSetting.showInvalid();
          }
        }
      }, {
        key: "update",
        value: function update() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.ResturantModelService.put(this.resData); // this.route.navigateByUrl('tabs/tab3/resturantList');
          } else {
            this.appSetting.showInvalid();
          }
        }
      }]);

      return ResturantCreateComponent;
    }();

    ResturantCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]
      }, {
        type: _Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_6__["ResturantModelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _Services_location_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    ResturantCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-resturant-create",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resturant-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-create/resturant-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resturant-create.component.scss */
      "./src/app/tab3/admin/resturant-create/resturant-create.component.scss"))["default"]]
    })], ResturantCreateComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/resturant-list/resturant-list.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/tab3/admin/resturant-list/resturant-list.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminResturantListResturantListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vcmVzdHVyYW50LWxpc3QvcmVzdHVyYW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/resturant-list/resturant-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/tab3/admin/resturant-list/resturant-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ResturantListComponent */

  /***/
  function srcAppTab3AdminResturantListResturantListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResturantListComponent", function () {
      return ResturantListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../Services/resturantModel/resturant-model.service */
    "./src/app/Services/resturantModel/resturant-model.service.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var ResturantListComponent = /*#__PURE__*/function () {
      function ResturantListComponent(location, appSetting, ResturantModelService, route) {
        _classCallCheck(this, ResturantListComponent);

        this.location = location;
        this.appSetting = appSetting;
        this.ResturantModelService = ResturantModelService;
        this.route = route;
        this.resDataList = [];
      }

      _createClass(ResturantListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataLoading();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "dataLoading",
        value: function dataLoading() {
          var _this31 = this;

          this.ResturantModelService.get().subscribe(function (x) {
            _this31.appSetting.showLoading();

            _this31.resDataList = x;
          }, function (err) {
            return _this31.appSetting.showError(err);
          }, function () {
            _this31.appSetting.loadingClose();
          });
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this32 = this;

          this.ResturantModelService.get().subscribe(function (x) {
            _this32.resDataList = x;
          }, function (err) {
            _this32.appSetting.showError(err);

            event.target.complete();
          }, function () {
            if (event !== undefined || event !== null) {
              event.target.complete();
            }
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigateByUrl("managmenet/tabs/tab3/resturantEdit/" + id);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this33 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this33.ResturantModelService["delete"](id);

              _this33.resDataList.splice(id, 1);

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      }]);

      return ResturantListComponent;
    }();

    ResturantListComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"]
      }, {
        type: _Services_resturantModel_resturant_model_service__WEBPACK_IMPORTED_MODULE_2__["ResturantModelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    ResturantListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-resturant-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resturant-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/resturant-list/resturant-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resturant-list.component.scss */
      "./src/app/tab3/admin/resturant-list/resturant-list.component.scss"))["default"]]
    })], ResturantListComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminRiderEarningCreateRiderEarningCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vcmlkZXItZWFybmluZy1jcmVhdGUvcmlkZXItZWFybmluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: RiderEarningCreateComponent */

  /***/
  function srcAppTab3AdminRiderEarningCreateRiderEarningCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiderEarningCreateComponent", function () {
      return RiderEarningCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Services_riderEarning_rider_earning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../Services/riderEarning/rider-earning.service */
    "./src/app/Services/riderEarning/rider-earning.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var RiderEarningCreateComponent = /*#__PURE__*/function () {
      function RiderEarningCreateComponent(location, appSetting, RiderEarningService, route, Router) {
        _classCallCheck(this, RiderEarningCreateComponent);

        this.location = location;
        this.appSetting = appSetting;
        this.RiderEarningService = RiderEarningService;
        this.route = route;
        this.Router = Router;
        this.id = +this.Router.snapshot.paramMap.get("id");
        this.riderEarningData = {
          id: 0,
          deliveryCharges: 0,
          riderEarning: 0
        };
      }

      _createClass(RiderEarningCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "editLoad",
        value: function editLoad(id) {
          var _this34 = this;

          this.appSetting.showLoading();

          if (id !== 0) {
            this.RiderEarningService.getSingle(id).subscribe(function (x) {
              return _this34.riderEarningData = x;
            }, function (err) {
              return _this34.appSetting.showError(err);
            }, function () {
              return _this34.appSetting.loadingClose();
            });
          } else {
            this.appSetting.loadingClose();
          }
        }
      }, {
        key: "formValidation",
        value: function formValidation() {
          if (this.riderEarningData.deliveryCharges === 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "create",
        value: function create() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.RiderEarningService.post(this.riderEarningData);
          } else {
            this.appSetting.showInvalid();
          }
        }
      }, {
        key: "update",
        value: function update() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.RiderEarningService.put(this.riderEarningData); // this.route.navigateByUrl('tabs/tab3/resturantList');
          } else {
            this.appSetting.showInvalid();
          }
        }
      }]);

      return RiderEarningCreateComponent;
    }();

    RiderEarningCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"]
      }, {
        type: _Services_riderEarning_rider_earning_service__WEBPACK_IMPORTED_MODULE_1__["RiderEarningService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    RiderEarningCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-rider-earning-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rider-earning-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rider-earning-create.component.scss */
      "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.scss"))["default"]]
    })], RiderEarningCreateComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminRiderEarningListRiderEarningListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vcmlkZXItZWFybmluZy1saXN0L3JpZGVyLWVhcm5pbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: RiderEarningListComponent */

  /***/
  function srcAppTab3AdminRiderEarningListRiderEarningListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiderEarningListComponent", function () {
      return RiderEarningListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_Services_riderEarning_rider_earning_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/riderEarning/rider-earning.service */
    "./src/app/Services/riderEarning/rider-earning.service.ts");

    var RiderEarningListComponent = /*#__PURE__*/function () {
      function RiderEarningListComponent(location, appSetting, riderEarningService, route) {
        _classCallCheck(this, RiderEarningListComponent);

        this.location = location;
        this.appSetting = appSetting;
        this.riderEarningService = riderEarningService;
        this.route = route;
        this.DataList = [];
      }

      _createClass(RiderEarningListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataLoading();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "dataLoading",
        value: function dataLoading() {
          var _this35 = this;

          this.riderEarningService.get().subscribe(function (x) {
            _this35.appSetting.showLoading();

            _this35.DataList = x;
          }, function (err) {
            return _this35.appSetting.showError(err);
          }, function () {
            _this35.appSetting.loadingClose();
          });
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this36 = this;

          this.riderEarningService.get().subscribe(function (x) {
            _this36.DataList = x;
          }, function (err) {
            _this36.appSetting.showError(err);

            event.target.complete();
          }, function () {
            if (event !== undefined || event !== null) {
              event.target.complete();
            }
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigateByUrl("managmenet/tabs/tab3/riderEarningEdit/" + id);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this37 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this37.riderEarningService["delete"](id);

              _this37.DataList.splice(id, 1);

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      }]);

      return RiderEarningListComponent;
    }();

    RiderEarningListComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"]
      }, {
        type: src_app_Services_riderEarning_rider_earning_service__WEBPACK_IMPORTED_MODULE_6__["RiderEarningService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RiderEarningListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rider-earning-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rider-earning-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rider-earning-list.component.scss */
      "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.scss"))["default"]]
    })], RiderEarningListComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/user-create/user-create.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/tab3/admin/user-create/user-create.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminUserCreateUserCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/user-create/user-create.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/tab3/admin/user-create/user-create.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserCreateComponent */

  /***/
  function srcAppTab3AdminUserCreateUserCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function () {
      return UserCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../Services/userModel/user-model.service */
    "./src/app/Services/userModel/user-model.service.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _Services_userType_user_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../Services/userType/user-type.service */
    "./src/app/Services/userType/user-type.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var UserCreateComponent = /*#__PURE__*/function () {
      function UserCreateComponent(location, appSetting, UserTypeService, UserModelService, route, Router) {
        var _this38 = this;

        _classCallCheck(this, UserCreateComponent);

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
          this.UserTypeService.get().subscribe(function (x) {
            return _this38.appSetting.userTypeData = x;
          }, function (err) {
            return console.log(err);
          }, function () {
            _this38.userTypeData = _toConsumableArray(_this38.appSetting.userTypeData);
            var i = -1;

            _this38.appSetting.userTypeData.forEach(function (x) {
              i = i + 1;

              if (x.usertypeName === 'Resturant') {
                _this38.userTypeData.splice(i, 1);
              }
            });

            _this38.appSetting.loadingClose();
          });
        }

        if (this.id !== null || this.id !== undefined || this.id !== 0) {
          this.editLoad(this.id);
        }
      }

      _createClass(UserCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "editLoad",
        value: function editLoad(id) {
          var _this39 = this;

          this.appSetting.showLoading();

          if (id !== 0) {
            this.UserModelService.getSingle(id).subscribe(function (x) {
              return _this39.userData = x;
            }, function (err) {
              return _this39.appSetting.showError(err);
            }, function () {
              return _this39.appSetting.loadingClose();
            });
          } else {
            this.appSetting.loadingClose();
          }
        }
      }, {
        key: "formValidation",
        value: function formValidation() {
          if (this.userData.password === "" || this.userData.phone === "" || this.userData.username === "" || this.userData.usertype === 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "create",
        value: function create() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.UserModelService.post(this.userData);
          } else {
            this.appSetting.showInvalid();
          }
        }
      }, {
        key: "update",
        value: function update() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.UserModelService.put(this.userData); //this.route.navigateByUrl('tabs/tab3/userList');
          } else {
            this.appSetting.showInvalid();
          }
        }
      }]);

      return UserCreateComponent;
    }();

    UserCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"]
      }, {
        type: _Services_userType_user_type_service__WEBPACK_IMPORTED_MODULE_4__["UserTypeService"]
      }, {
        type: _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_2__["UserModelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    UserCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: "app-user-create",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-create/user-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-create.component.scss */
      "./src/app/tab3/admin/user-create/user-create.component.scss"))["default"]]
    })], UserCreateComponent);
    /***/
  },

  /***/
  "./src/app/tab3/admin/user-list/user-list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/tab3/admin/user-list/user-list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3AdminUserListUserListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvYWRtaW4vdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab3/admin/user-list/user-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tab3/admin/user-list/user-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppTab3AdminUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../Services/userModel/user-model.service */
    "./src/app/Services/userModel/user-model.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var UserListComponent = /*#__PURE__*/function () {
      function UserListComponent(appSetting, location, UserModelService, route) {
        _classCallCheck(this, UserListComponent);

        this.appSetting = appSetting;
        this.location = location;
        this.UserModelService = UserModelService;
        this.route = route;
        this.userDataList = [];
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataLoading();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "dataLoading",
        value: function dataLoading() {
          var _this40 = this;

          this.UserModelService.get().subscribe(function (x) {
            _this40.appSetting.showLoading();

            _this40.userDataList = x;
          }, function (err) {
            return _this40.appSetting.showError(err);
          }, function () {
            _this40.appSetting.loadingClose();
          });
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this41 = this;

          this.UserModelService.get().subscribe(function (x) {
            _this41.userDataList = x;
          }, function (err) {
            return _this41.appSetting.showError(err);
          }, function () {
            if (event !== undefined || event !== null) {
              event.target.complete();
            }
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigateByUrl("managmenet/tabs/tab3/userEdit/" + id);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this42 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this42.UserModelService["delete"](id);

              _this42.userDataList.splice(id, 1);

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ctorParameters = function () {
      return [{
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _Services_userModel_user_model_service__WEBPACK_IMPORTED_MODULE_2__["UserModelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-user-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/admin/user-list/user-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-list.component.scss */
      "./src/app/tab3/admin/user-list/user-list.component.scss"))["default"]]
    })], UserListComponent);
    /***/
  },

  /***/
  "./src/app/tab3/resturant/food-create/food-create.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/tab3/resturant/food-create/food-create.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3ResturantFoodCreateFoodCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvcmVzdHVyYW50L2Zvb2QtY3JlYXRlL2Zvb2QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab3/resturant/food-create/food-create.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/tab3/resturant/food-create/food-create.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FoodCreateComponent */

  /***/
  function srcAppTab3ResturantFoodCreateFoodCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodCreateComponent", function () {
      return FoodCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Services_category_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../Services/category/category.service */
    "./src/app/Services/category/category.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/food/food.service */
    "./src/app/Services/food/food.service.ts");
    /* harmony import */


    var src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Services/mainModel/main-model.service */
    "./src/app/Services/mainModel/main-model.service.ts");

    var FoodCreateComponent = /*#__PURE__*/function () {
      function FoodCreateComponent(location, appSetting, FoodService, route, Router, mainModelService, categoryService) {
        _classCallCheck(this, FoodCreateComponent);

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
          Descriptions: ""
        };
        this.croppedImage = ""; //Image

        this.imageChangedEvent = "";
        this.appSetting.showLoading();
        this.getCategory();
      }

      _createClass(FoodCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.id !== null || this.id !== undefined || this.id !== 0) {
            this.editLoad(this.id);
          }
        }
      }, {
        key: "getMainModel",
        value: function getMainModel() {
          var _this43 = this;

          this.mainModelService.get().subscribe(function (x) {
            _this43.appSetting.mainItemDataList = x;
          }, function (err) {
            return console.log(err);
          }, function () {
            _this43.appSetting.loadingClose();
          });
        }
      }, {
        key: "dataChange",
        value: function dataChange(e) {
          var _this44 = this;

          this.appSetting.mainItemDataList.forEach(function (x) {
            if (x.id === _this44.foodData.id) {
              _this44.foodData.resturant_id = x.resturant_id;
            }
          });
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this45 = this;

          this.categoryService.get().subscribe(function (x) {
            _this45.appSetting.categoryList = x;
          }, function (err) {
            return console.log(err);
          }, function () {
            _this45.getMainModel();
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "editLoad",
        value: function editLoad(id) {
          var _this46 = this;

          this.appSetting.showLoading();

          if (id !== 0) {
            this.FoodService.getSingle(id).subscribe(function (x) {
              return _this46.foodData = x;
            }, function (err) {
              return _this46.appSetting.showError(err);
            }, function () {
              _this46.foodData.itemNameTemp = _this46.foodData.itemName;
              _this46.foodData.priceTemp = _this46.foodData.price;

              _this46.appSetting.loadingClose();
            });
          } else {
            this.appSetting.loadingClose();
          }
        }
      }, {
        key: "formValidation",
        value: function formValidation() {
          if (this.foodData.itemName === "" || this.foodData.price === 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "create",
        value: function create() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.FoodService.post(this.foodData, this.croppedImage);
          } else {
            this.appSetting.showInvalid();
          }
        }
      }, {
        key: "update",
        value: function update() {
          this.appSetting.showLoading();

          if (this.formValidation() === true) {
            this.foodData.status = "pending";
            this.FoodService.put(this.foodData); // this.route.navigateByUrl('tabs/tab3/resturantList');
          } else {
            this.appSetting.showInvalid();
          }
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.imageChangedEvent = event;
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
        }
      }]);

      return FoodCreateComponent;
    }();

    FoodCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_3__["appSetting"]
      }, {
        type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_Services_mainModel_main_model_service__WEBPACK_IMPORTED_MODULE_7__["MainModelService"]
      }, {
        type: _Services_category_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
      }];
    };

    FoodCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-food-create",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./food-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-create/food-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./food-create.component.scss */
      "./src/app/tab3/resturant/food-create/food-create.component.scss"))["default"]]
    })], FoodCreateComponent);
    /***/
  },

  /***/
  "./src/app/tab3/resturant/food-list/food-list.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/tab3/resturant/food-list/food-list.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3ResturantFoodListFoodListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvcmVzdHVyYW50L2Zvb2QtbGlzdC9mb29kLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/resturant/food-list/food-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/tab3/resturant/food-list/food-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FoodListComponent */

  /***/
  function srcAppTab3ResturantFoodListFoodListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodListComponent", function () {
      return FoodListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/food/food.service */
    "./src/app/Services/food/food.service.ts");

    var FoodListComponent = /*#__PURE__*/function () {
      function FoodListComponent(location, appSetting, FoodService, route) {
        _classCallCheck(this, FoodListComponent);

        this.location = location;
        this.appSetting = appSetting;
        this.FoodService = FoodService;
        this.route = route;
      }

      _createClass(FoodListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataLoading();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "dataLoading",
        value: function dataLoading() {
          var _this47 = this;

          if (this.appSetting.loginType === "resturant") {
            this.FoodService.get(this.appSetting.resturantID).subscribe(function (x) {
              _this47.appSetting.showLoading();

              _this47.appSetting.foodDataList = x;
            }, function (err) {
              return _this47.appSetting.showError(err);
            }, function () {
              _this47.appSetting.loadingClose();
            });
          } else if (this.appSetting.loginType === "admin") {
            this.FoodService.getActive().subscribe(function (x) {
              _this47.appSetting.showLoading();

              _this47.appSetting.foodDataList = x;
            }, function (err) {
              return _this47.appSetting.showError(err);
            }, function () {
              _this47.appSetting.loadingClose();
            });
          }
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          var _this48 = this;

          this.FoodService.get(this.appSetting.resturantID).subscribe(function (x) {
            _this48.appSetting.foodDataList = x;
          }, function (err) {
            _this48.appSetting.showError(err);

            event.target.complete();
          }, function () {
            if (event !== undefined || event !== null) {
              event.target.complete();
            }
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigateByUrl("managmenet/tabs/tab3/foodEdit/" + id);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this49 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.value) {
              _this49.FoodService["delete"](id);

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      }]);

      return FoodListComponent;
    }();

    FoodListComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]
      }, {
        type: src_app_Services_food_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    FoodListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-food-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./food-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/food-list/food-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./food-list.component.scss */
      "./src/app/tab3/resturant/food-list/food-list.component.scss"))["default"]]
    })], FoodListComponent);
    /***/
  },

  /***/
  "./src/app/tab3/resturant/res-main-page/res-main-page.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/tab3/resturant/res-main-page/res-main-page.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3ResturantResMainPageResMainPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvcmVzdHVyYW50L3Jlcy1tYWluLXBhZ2UvcmVzLW1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tab3/resturant/res-main-page/res-main-page.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/tab3/resturant/res-main-page/res-main-page.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ResMainPageComponent */

  /***/
  function srcAppTab3ResturantResMainPageResMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResMainPageComponent", function () {
      return ResMainPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResMainPageComponent = /*#__PURE__*/function () {
      function ResMainPageComponent() {
        _classCallCheck(this, ResMainPageComponent);
      }

      _createClass(ResMainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResMainPageComponent;
    }();

    ResMainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-res-main-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./res-main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/resturant/res-main-page/res-main-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./res-main-page.component.scss */
      "./src/app/tab3/resturant/res-main-page/res-main-page.component.scss"))["default"]]
    })], ResMainPageComponent);
    /***/
  },

  /***/
  "./src/app/tab3/tab3-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab3/tab3-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _admin_order_management_create_order_management_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin/order-management-create/order-management-create.component */
    "./src/app/tab3/admin/order-management-create/order-management-create.component.ts");
    /* harmony import */


    var _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin/opening-create/opening-create.component */
    "./src/app/tab3/admin/opening-create/opening-create.component.ts");
    /* harmony import */


    var _admin_opening_list_opening_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/opening-list/opening-list.component */
    "./src/app/tab3/admin/opening-list/opening-list.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/user-list/user-list.component */
    "./src/app/tab3/admin/user-list/user-list.component.ts");
    /* harmony import */


    var _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin/user-create/user-create.component */
    "./src/app/tab3/admin/user-create/user-create.component.ts");
    /* harmony import */


    var _admin_resturant_list_resturant_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/resturant-list/resturant-list.component */
    "./src/app/tab3/admin/resturant-list/resturant-list.component.ts");
    /* harmony import */


    var _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/resturant-create/resturant-create.component */
    "./src/app/tab3/admin/resturant-create/resturant-create.component.ts");
    /* harmony import */


    var _admin_item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/item-confirm/item-confirm.component */
    "./src/app/tab3/admin/item-confirm/item-confirm.component.ts");
    /* harmony import */


    var _admin_item_confirm_detail_item_confirm_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin/item-confirm-detail/item-confirm-detail.component */
    "./src/app/tab3/admin/item-confirm-detail/item-confirm-detail.component.ts");
    /* harmony import */


    var _admin_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin/location-list/location-list.component */
    "./src/app/tab3/admin/location-list/location-list.component.ts");
    /* harmony import */


    var _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin/location-create/location-create.component */
    "./src/app/tab3/admin/location-create/location-create.component.ts");
    /* harmony import */


    var _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./resturant/food-list/food-list.component */
    "./src/app/tab3/resturant/food-list/food-list.component.ts");
    /* harmony import */


    var _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./resturant/food-create/food-create.component */
    "./src/app/tab3/resturant/food-create/food-create.component.ts");
    /* harmony import */


    var _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/rider-earning-create/rider-earning-create.component */
    "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.ts");
    /* harmony import */


    var _admin_rider_earning_list_rider_earning_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin/rider-earning-list/rider-earning-list.component */
    "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.ts");
    /* harmony import */


    var _admin_order_management_list_order_management_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin/order-management-list/order-management-list.component */
    "./src/app/tab3/admin/order-management-list/order-management-list.component.ts");
    /* harmony import */


    var _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin/main-item-create/main-item-create.component */
    "./src/app/tab3/admin/main-item-create/main-item-create.component.ts");
    /* harmony import */


    var _admin_main_item_list_main_item_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./admin/main-item-list/main-item-list.component */
    "./src/app/tab3/admin/main-item-list/main-item-list.component.ts");

    var routes = [{
      path: "",
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
    }, {
      path: "userList",
      component: _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"]
    }, {
      path: "userCreate",
      component: _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_8__["UserCreateComponent"]
    }, {
      path: "userEdit/:id",
      component: _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_8__["UserCreateComponent"]
    }, {
      path: "resturantList",
      component: _admin_resturant_list_resturant_list_component__WEBPACK_IMPORTED_MODULE_9__["ResturantListComponent"]
    }, {
      path: "resturantEdit/:id",
      component: _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_10__["ResturantCreateComponent"]
    }, {
      path: "resturantCreate",
      component: _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_10__["ResturantCreateComponent"]
    }, {
      path: "locationList",
      component: _admin_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_13__["LocationListComponent"]
    }, {
      path: "locationEdit/:id",
      component: _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_14__["LocationCreateComponent"]
    }, {
      path: "locationCreate",
      component: _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_14__["LocationCreateComponent"]
    }, {
      path: "foodList",
      component: _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_15__["FoodListComponent"]
    }, {
      path: "foodList/:id",
      component: _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_15__["FoodListComponent"]
    }, {
      path: "foodEdit/:id",
      component: _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_16__["FoodCreateComponent"]
    }, {
      path: "foodCreate",
      component: _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_16__["FoodCreateComponent"]
    }, {
      path: "itemConfirm",
      component: _admin_item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ItemConfirmComponent"]
    }, {
      path: "itemConfirmDetail",
      component: _admin_item_confirm_detail_item_confirm_detail_component__WEBPACK_IMPORTED_MODULE_12__["ItemConfirmDetailComponent"]
    }, {
      path: "riderEarning",
      component: _admin_rider_earning_list_rider_earning_list_component__WEBPACK_IMPORTED_MODULE_18__["RiderEarningListComponent"]
    }, {
      path: "riderEarningCreate",
      component: _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_17__["RiderEarningCreateComponent"]
    }, {
      path: "riderEarningEdit/:id",
      component: _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_17__["RiderEarningCreateComponent"]
    }, {
      path: "openingBalance",
      component: _admin_opening_list_opening_list_component__WEBPACK_IMPORTED_MODULE_3__["OpeningListComponent"]
    }, {
      path: "openingBalanceCreate",
      component: _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_2__["OpeningCreateComponent"]
    }, {
      path: "openingBalanceEdit/:id",
      component: _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_2__["OpeningCreateComponent"]
    }, {
      path: "orderManagement",
      component: _admin_order_management_list_order_management_list_component__WEBPACK_IMPORTED_MODULE_19__["OrderManagementListComponent"]
    }, {
      path: "orderManagementCreate",
      component: _admin_order_management_create_order_management_create_component__WEBPACK_IMPORTED_MODULE_1__["OrderManagementCreateComponent"]
    }, {
      path: "orderManagementEdit/:id",
      component: _admin_order_management_create_order_management_create_component__WEBPACK_IMPORTED_MODULE_1__["OrderManagementCreateComponent"]
    }, {
      path: "mainItem",
      component: _admin_main_item_list_main_item_list_component__WEBPACK_IMPORTED_MODULE_21__["MainItemListComponent"]
    }, {
      path: "mainItemCreate",
      component: _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_20__["MainItemCreateComponent"]
    }, {
      path: "mainItemEdit/:id",
      component: _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_20__["MainItemCreateComponent"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin/main-item-create/main-item-create.component */
    "./src/app/tab3/admin/main-item-create/main-item-create.component.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _admin_opening_list_opening_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/opening-list/opening-list.component */
    "./src/app/tab3/admin/opening-list/opening-list.component.ts");
    /* harmony import */


    var _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/opening-create/opening-create.component */
    "./src/app/tab3/admin/opening-create/opening-create.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/tab3/tab3-routing.module.ts");
    /* harmony import */


    var _admin_item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin/item-confirm/item-confirm.component */
    "./src/app/tab3/admin/item-confirm/item-confirm.component.ts");
    /* harmony import */


    var _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin/user-create/user-create.component */
    "./src/app/tab3/admin/user-create/user-create.component.ts");
    /* harmony import */


    var _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/user-list/user-list.component */
    "./src/app/tab3/admin/user-list/user-list.component.ts");
    /* harmony import */


    var _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin/main-page/main-page.component */
    "./src/app/tab3/admin/main-page/main-page.component.ts");
    /* harmony import */


    var _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/resturant-create/resturant-create.component */
    "./src/app/tab3/admin/resturant-create/resturant-create.component.ts");
    /* harmony import */


    var _admin_resturant_list_resturant_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin/resturant-list/resturant-list.component */
    "./src/app/tab3/admin/resturant-list/resturant-list.component.ts");
    /* harmony import */


    var _admin_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin/location-list/location-list.component */
    "./src/app/tab3/admin/location-list/location-list.component.ts");
    /* harmony import */


    var _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin/location-create/location-create.component */
    "./src/app/tab3/admin/location-create/location-create.component.ts");
    /* harmony import */


    var _resturant_res_main_page_res_main_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./resturant/res-main-page/res-main-page.component */
    "./src/app/tab3/resturant/res-main-page/res-main-page.component.ts");
    /* harmony import */


    var _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./resturant/food-create/food-create.component */
    "./src/app/tab3/resturant/food-create/food-create.component.ts");
    /* harmony import */


    var _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./resturant/food-list/food-list.component */
    "./src/app/tab3/resturant/food-list/food-list.component.ts");
    /* harmony import */


    var _admin_rider_earning_list_rider_earning_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/rider-earning-list/rider-earning-list.component */
    "./src/app/tab3/admin/rider-earning-list/rider-earning-list.component.ts");
    /* harmony import */


    var _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin/rider-earning-create/rider-earning-create.component */
    "./src/app/tab3/admin/rider-earning-create/rider-earning-create.component.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _admin_main_item_list_main_item_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./admin/main-item-list/main-item-list.component */
    "./src/app/tab3/admin/main-item-list/main-item-list.component.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__["ImageCropperModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__["FileUploadModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_11__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
        path: "",
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_10__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_12__["Tab3PageRoutingModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_10__["Tab3Page"], _admin_rider_earning_list_rider_earning_list_component__WEBPACK_IMPORTED_MODULE_24__["RiderEarningListComponent"], _admin_rider_earning_create_rider_earning_create_component__WEBPACK_IMPORTED_MODULE_25__["RiderEarningCreateComponent"], _admin_main_item_create_main_item_create_component__WEBPACK_IMPORTED_MODULE_1__["MainItemCreateComponent"], _admin_main_item_list_main_item_list_component__WEBPACK_IMPORTED_MODULE_27__["MainItemListComponent"], _admin_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__["MainPageComponent"], _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"], _admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_14__["UserCreateComponent"], _admin_resturant_list_resturant_list_component__WEBPACK_IMPORTED_MODULE_18__["ResturantListComponent"], _admin_resturant_create_resturant_create_component__WEBPACK_IMPORTED_MODULE_17__["ResturantCreateComponent"], _admin_item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ItemConfirmComponent"], _admin_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_19__["LocationListComponent"], _admin_location_create_location_create_component__WEBPACK_IMPORTED_MODULE_20__["LocationCreateComponent"], _resturant_res_main_page_res_main_page_component__WEBPACK_IMPORTED_MODULE_21__["ResMainPageComponent"], _resturant_food_create_food_create_component__WEBPACK_IMPORTED_MODULE_22__["FoodCreateComponent"], _resturant_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_23__["FoodListComponent"], _admin_opening_create_opening_create_component__WEBPACK_IMPORTED_MODULE_4__["OpeningCreateComponent"], _admin_opening_list_opening_list_component__WEBPACK_IMPORTED_MODULE_3__["OpeningListComponent"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-setting */
    "./src/app/app-setting.ts");

    var Tab3Page = function Tab3Page(appSetting) {
      _classCallCheck(this, Tab3Page);

      this.appSetting = appSetting;
    };

    Tab3Page.ctorParameters = function () {
      return [{
        type: _app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }];
    };

    Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    })], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map