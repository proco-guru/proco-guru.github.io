(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common-header/common-header.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common-header/common-header.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header \" [style.background-image]=\"'url(' + (header.imageUrl || './assets/img/bg/4.jpg' )+ ')'\">\r\n  <div *ngIf=\"header.overlay\" class=\"overlay opacity-95\"\r\n    style=\"background-image: linear-gradient(135deg, #ffe2c8 0%, #fff 40%, transparent 100%);\">\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n\r\n        <h1 class=\"fw-200 mb-6\">{{header.title}}</h1>\r\n\r\n        <p class=\"lead-2\">{{header.details}}</p>\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <h1 *ngIf=\"header.playBtn\" class=\"fw-200 mb-6\">\r\n\r\n          <img [routerLink]=\"header.courseLink\" class=\"play-btn\" src=\"https://img.icons8.com/nolan/96/000000/play.png\">\r\n\r\n        </h1>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/md-viewer/md-viewer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/md-viewer/md-viewer.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  md-viewer works!\r\n</p>\r\n");

/***/ }),

/***/ "./src/app/components/common-header/common-header.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/common-header/common-header.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".play-btn{\r\n    margin: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24taGVhZGVyL2NvbW1vbi1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi1oZWFkZXIvY29tbW9uLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXktYnRue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/common-header/common-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/common-header/common-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: CommonHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHeaderComponent", function() { return CommonHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommonHeaderComponent = class CommonHeaderComponent {
    constructor() {
        this.header = {
            title: 'Hello', details: 'Hey there',
            imageUrl: null, overlay: false, playBtn: false,
            courseLink: null
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommonHeaderComponent.prototype, "header", void 0);
CommonHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./common-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common-header/common-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./common-header.component.css */ "./src/app/components/common-header/common-header.component.css")).default]
    })
], CommonHeaderComponent);



/***/ }),

/***/ "./src/app/components/md-viewer/md-viewer.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/md-viewer/md-viewer.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWQtdmlld2VyL21kLXZpZXdlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/md-viewer/md-viewer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/md-viewer/md-viewer.component.ts ***!
  \*************************************************************/
/*! exports provided: MdViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewerComponent", function() { return MdViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MdViewerComponent = class MdViewerComponent {
    constructor() { }
    ngOnInit() {
    }
};
MdViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-md-viewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./md-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/md-viewer/md-viewer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./md-viewer.component.css */ "./src/app/components/md-viewer/md-viewer.component.css")).default]
    })
], MdViewerComponent);



/***/ }),

/***/ "./src/app/modules/course/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/course/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common-header/common-header.component */ "./src/app/components/common-header/common-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_md_viewer_md_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/md-viewer/md-viewer.component */ "./src/app/components/md-viewer/md-viewer.component.ts");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        declarations: [_components_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_3__["CommonHeaderComponent"], _components_md_viewer_md_viewer_component__WEBPACK_IMPORTED_MODULE_5__["MdViewerComponent"]],
        exports: [_components_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_3__["CommonHeaderComponent"], _components_md_viewer_md_viewer_component__WEBPACK_IMPORTED_MODULE_5__["MdViewerComponent"]]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map