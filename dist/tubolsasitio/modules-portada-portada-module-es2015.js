(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-portada-portada-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/portada/portada.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/portada/portada.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>portada workasdfasdfasdfs!</p>\n<p>portada works!</p>\n<p>portada works!</p>\n<p>portada works!</p>\n<p>portada works!</p><p>portada works!</p>\n<p>portada works!</p>\n<p>portada works!</p>\n<p>portada works!</p>");

/***/ }),

/***/ "./src/app/modules/portada/portada.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/portada/portada.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9ydGFkYS9wb3J0YWRhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/portada/portada.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/portada/portada.component.ts ***!
  \******************************************************/
/*! exports provided: PortadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortadaComponent", function() { return PortadaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortadaComponent = class PortadaComponent {
    constructor() { }
    ngOnInit() {
    }
};
PortadaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portada',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portada.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/portada/portada.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portada.component.scss */ "./src/app/modules/portada/portada.component.scss")).default]
    })
], PortadaComponent);



/***/ }),

/***/ "./src/app/modules/portada/portada.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/portada/portada.module.ts ***!
  \***************************************************/
/*! exports provided: PortadaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortadaModule", function() { return PortadaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _portada_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portada.component */ "./src/app/modules/portada/portada.component.ts");





const routes = [
    {
        path: "**",
        component: _portada_component__WEBPACK_IMPORTED_MODULE_4__["PortadaComponent"],
        children: []
    }
];
let PortadaModule = class PortadaModule {
};
PortadaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_portada_component__WEBPACK_IMPORTED_MODULE_4__["PortadaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]
    })
], PortadaModule);



/***/ })

}]);
//# sourceMappingURL=modules-portada-portada-module-es2015.js.map