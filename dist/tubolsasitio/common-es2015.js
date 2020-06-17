(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/noderestapi.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/noderestapi.service.ts ***!
  \*************************************************/
/*! exports provided: NoderestapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoderestapiService", function() { return NoderestapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");




let NoderestapiService = class NoderestapiService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    guardarEmpresa(empresa) {
        return this.http.post(`${this.url}/post/empresa`, empresa);
    }
    guardarFavorito(favorito) {
        return this.http.post(`${this.url}/post/favorito`, favorito);
    }
    guardarDesarrollo(desarrollo) {
        return this.http.post(`${this.url}/post/desarrollo`, desarrollo);
    }
    guardarDepartamento(departamento) {
        return this.http.post(`${this.url}/post/departamento`, departamento);
    }
    traerDepartamentos() {
        return this.http.get(`${this.url}/get/departamentos`);
    }
    traerEmpresas() {
        return this.http.get(`${this.url}/get/empresas`);
    }
    traerEmpresaPorNombre(empresa) {
        return this.http.get(`${this.url}/get/empresapornombre/${empresa}`);
    }
    traerDepartamento(id) {
        return this.http.get(`${this.url}/get/departamento/${id}`);
    }
    traerFavoritos(uid) {
        return this.http.get(`${this.url}/get/favoritos/${uid}`);
    }
    traerDesarrollos() {
        return this.http.get(`${this.url}/get/desarrollos`);
    }
    traerDesarrollo(nombre) {
        return this.http.get(`${this.url}/get/desarrollonombre/${nombre}`);
    }
    borrarEmpresa(id) {
        return this.http.delete(`${this.url}/delete/empresa/${id}`);
    }
    borrarDesarrollo(id) {
        return this.http.delete(`${this.url}/delete/desarrollo/${id}`);
    }
    borrarDepartamento(id) {
        return this.http.delete(`${this.url}/delete/departamento/${id}`);
    }
    consultarBusqueda(busqueda) {
        return this.http.post(`${this.url}/busqueda/general`, busqueda);
    }
};
NoderestapiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NoderestapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NoderestapiService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map