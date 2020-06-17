(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-favoritos-favoritos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/favoritos/favoritos.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/favoritos/favoritos.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid fondo-foto\" style=\"margin-top: 56px;\">\n    <div class=\"container pt-3\">\n\n        <div *ngIf=\"autorizacion.gioUsuario | async as usuario; else login\">\n            \n            <div class=\"row\">\n                <div class=\"col-12 col-md-6 col-lg-4 animated fadeInUp\" *ngFor=\"let item of departamentos | keyvalue\">    \n                    <div class=\"card shadow mt-3 mb-3\">\n                        <img src=\"{{ item.value.departamento.fotos[0].url }}\" class=\"card-img-top\">\n                        \n                        <div class=\"card-body pb-0\">\n                            <h4>{{ item.value.departamento.desarrollo }}</h4>\n                        </div>\n                        \n                        <div *ngIf=\"item.value.departamento.tipo_venta == '1'\" class=\"bg-success text-center text-light p-2\">\n                            PREVENTA\n                        </div>\n    \n                        <div *ngIf=\"item.value.departamento.tipo_venta == '2'\" class=\"bg-danger text-center text-light p-2\">\n                            ENTREGA INMEDIATA\n                        </div>\n    \n                        <div class=\"card-body text-center\">\n                           \n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                </div>\n                                <div class=\"col-9\">\n                                    <button class=\"btn btn-primary\" [routerLink]=\"['/ficha', item.value.departamento.id]\">\n                                        VER DESARROLLO\n                                    </button>\n                                </div>\n                            </div>\n                           \n                        </div>\n    \n                    </div>\n                </div>\n            </div>\n\n            \n        </div>\n        \n        <ng-template #login>\n            <div class=\"d-block alert alert-warning w-100 mt-3\">\n                <p>Para ver sus favoritos, debe iniciar sesión.</p>\n                \n                <button class=\"btn btn-success\" routerLink=\"/sesion-iniciar\">\n                    Iniciar sesión\n                </button>\n            </div>\n        </ng-template>\n\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/favoritos/favoritos.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/favoritos/favoritos.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmF2b3JpdG9zL2Zhdm9yaXRvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/favoritos/favoritos.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/favoritos/favoritos.component.ts ***!
  \**********************************************************/
/*! exports provided: FavoritosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosComponent", function() { return FavoritosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _services_noderestapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/noderestapi.service */ "./src/app/services/noderestapi.service.ts");
/* harmony import */ var src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase-auth.service */ "./src/app/services/firebase-auth.service.ts");





let FavoritosComponent = class FavoritosComponent {
    constructor(autorizacion, _noderestapiService, dialog) {
        this.autorizacion = autorizacion;
        this._noderestapiService = _noderestapiService;
        this.dialog = dialog;
        this.uid = '';
        this.uid = autorizacion.traerUidSiExisteUsuario();
        this.autorizacion.autorizacion.authState.subscribe(response => {
            if (response == null) {
                console.log("No hay sesión para obtener uid");
            }
            else {
                this.mostrarFavoritos(response.uid);
            }
        });
    }
    mostrarFavoritos(uid) {
        this._noderestapiService.traerFavoritos(uid).subscribe(response => {
            this.departamentos = response['data'];
            for (let index = 0; index < this.departamentos.length; index++) {
                // console.log( JSON.parse(this.departamentos[index]['departamento']) )
                this.departamentos[index]['departamento'] = JSON.parse(this.departamentos[index]['departamento']);
            }
            console.log(this.departamentos);
        });
        // let busqueda = JSON.parse( localStorage.getItem('busqueda') )
        // console.log("La busqueda es:", busqueda)
        // if(busqueda){
        // 	this.buscarHistorico(busqueda)
        // } else {
        // 	console.log("No ha habido busquedas por ahora.")
        // }
    }
};
FavoritosComponent.ctorParameters = () => [
    { type: src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"] },
    { type: _services_noderestapi_service__WEBPACK_IMPORTED_MODULE_3__["NoderestapiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
FavoritosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favoritos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favoritos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/favoritos/favoritos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favoritos.component.scss */ "./src/app/modules/favoritos/favoritos.component.scss")).default]
    })
], FavoritosComponent);



/***/ }),

/***/ "./src/app/modules/favoritos/favoritos.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/favoritos/favoritos.module.ts ***!
  \*******************************************************/
/*! exports provided: FavoritosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosModule", function() { return FavoritosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _favoritos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favoritos.component */ "./src/app/modules/favoritos/favoritos.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_noderestapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/noderestapi.service */ "./src/app/services/noderestapi.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









const routes = [
    {
        path: "**",
        component: _favoritos_component__WEBPACK_IMPORTED_MODULE_3__["FavoritosComponent"],
        children: []
    },
    {
        path: "**",
        component: _favoritos_component__WEBPACK_IMPORTED_MODULE_3__["FavoritosComponent"],
        children: []
    }
];
let FavoritosModule = class FavoritosModule {
};
FavoritosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_favoritos_component__WEBPACK_IMPORTED_MODULE_3__["FavoritosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [_services_noderestapi_service__WEBPACK_IMPORTED_MODULE_7__["NoderestapiService"]]
    })
], FavoritosModule);



/***/ })

}]);
//# sourceMappingURL=modules-favoritos-favoritos-module-es2015.js.map