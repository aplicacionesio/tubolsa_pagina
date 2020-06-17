(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-buscar-buscar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/buscar/anuncio.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/buscar/anuncio.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated bounceIn\">\n    <!-- <img src=\"./../../../assets/img/anuncio_tbi_home_01.jpg\" style=\"width:100%\" alt=\"\"> -->\n\n    <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n                <img src=\"./assets/img/slider/publicidad_tbi_01.jpg\" class=\"d-block w-100 slider-portada\" alt=\"...\" style=\"width: 100%\">\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"./assets/img/slider/publicidad_tbi_02.jpg\" class=\"d-block w-100 slider-portada\" alt=\"...\" style=\"width: 100%\">\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"./assets/img/slider/publicidad_tbi_03.jpg\" class=\"d-block w-100 slider-portada\" alt=\"...\" style=\"width: 100%\">\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"./assets/img/slider/publicidad_tbi_04.jpg\" class=\"d-block w-100 slider-portada\" alt=\"...\" style=\"width: 100%\">\n            </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n\n    \n\n\n\n\n    <div mat-dialog-actions>\n        <button mat-button [mat-dialog-close] cdkFocusInitial>Cerrar</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/buscar/buscar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/buscar/buscar.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fondo-foto\">\n    <div class=\"container-fluid\" style=\"padding-top: 56px; padding-bottom: 100px;\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12 pt-5 pb-1 pl-3 pr-3 col-md-6 offset-md-3 animated fadeInUp\">\n        \n                    \n                    \n                <form (ngSubmit)=\"buscar(forma)\" #forma=\"ngForm\">    \n                    <mat-form-field appearance=\"outline\" class=\"d-block w-100\">\n                        <mat-label>Delegación</mat-label>\n    \n                        <mat-select [(ngModel)]=\"selectedValueDelegacion\" name=\"delegacion\">\n                            <mat-option *ngFor=\"let delegacion of delegaciones\" [value]=\"delegacion.delegacion\">\n                                {{ delegacion.delegacion }}\n                            </mat-option>\n                        </mat-select>\n    \n                        <mat-icon matSuffix class=\"secondary-text\">navigation</mat-icon>\n                        <mat-error>La Delegación es un campo requerido</mat-error>\n                    </mat-form-field>\n    \n    \n                    <mat-form-field appearance=\"outline\" class=\"d-block w-100\">\n                        <mat-label>Número de recamaras</mat-label>\n    \n                        <mat-select [(ngModel)]=\"selectedValueRecamaras\" name=\"recamaras\">\n                            <mat-option [value]=\"1\">1</mat-option>\n                            <mat-option [value]=\"2\">2</mat-option>\n                            <mat-option [value]=\"3\">3</mat-option>\n                        </mat-select>\n    \n                        <mat-icon matSuffix class=\"secondary-text\">local_hotel</mat-icon>\n                        <mat-error>El número de recamaras es un campo requerido</mat-error>\n                    </mat-form-field>\n    \n    \n    \n                    <mat-form-field appearance=\"outline\" class=\"d-block w-100\">\n                        <mat-label>Tipo de venta</mat-label>\n    \n                        <mat-select [(ngModel)]=\"selectedValueTipo\" name=\"tipo\">\n                            <mat-option [value]=\"1\">Preventa</mat-option>\n                            <mat-option [value]=\"2\">Entrega inmediata</mat-option>\n                        </mat-select>\n    \n                        <mat-icon matSuffix class=\"secondary-text\">account_tree</mat-icon>\n                        <mat-error>El tipo de venta es un campo requerido</mat-error>\n                    </mat-form-field>\n    \n        \n                    <div class=\"form-group text-center\">\n                        <div class=\"row\">\n                            <div class=\"col-6 offset-3\">\n                                    <!-- <button class=\"btn btn-primary w-100\" routerLink=\"/registros\"> -->\n                                    <button class=\"btn btn-primary w-100\" (click)=\"scroll(busqueda)\">\n                                        BUSCAR\n                                    </button>\n    \n    \n                                    <!-- <button mat-raised-button (click)=\"openDialog()\">Pick one</button> -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                </div>\n            </div>\n    \n    \n            <div class=\"row\">\n                <div class=\"col-10 offset-1 col-md-6 offset-md-3 mt-5 mb-5\">\n                    <!-- <img src=\"./../../../assets/img/anuncio_index.jpg\" style=\"width:100%\" alt=\"\"> -->\n    \n    \n                    <div id=\"carouselIndex\" class=\"carousel slide\" data-ride=\"carousel\">\n                        <div class=\"carousel-inner\">\n                            <div class=\"carousel-item active\">\n                                <img src=\"./assets/img/banners/banner_index_01.png\" class=\"d-block w-100 slider-portada\" alt=\"...\" style=\"width: 100%\">\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img src=\"./assets/img/banners/banner_index_02.png\" class=\"d-block w-100 slider-portada\" alt=\"...\" style=\"width: 100%\">\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img src=\"./assets/img/banners/banner_index_03.png\" class=\"d-block w-100 slider-portada\" alt=\"...\" style=\"width: 100%\">\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img src=\"./assets/img/banners/banner_index_04.png\" class=\"d-block w-100 slider-portada\" alt=\"...\" style=\"width: 100%\">\n                            </div>\n                        </div>\n                        <a class=\"carousel-control-prev\" href=\"#carouselIndex\" role=\"button\" data-slide=\"prev\">\n                            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#carouselIndex\" role=\"button\" data-slide=\"next\">\n                            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n    \n    \n    \n    \n            <div class=\"row resultados\" #busqueda>\n                <div class=\"col-12 col-md-6 col-lg-4 animated fadeInUp\" *ngFor=\"let item of departamentos | keyvalue\">    \n                    <div class=\"card shadow mt-3 mb-3\">\n                        <img src=\"{{ item.value.fotos[0].url }}\" class=\"card-img-top\">\n                        \n                        <div class=\"card-body pb-0\">\n                            <h4>{{ item.value.desarrollo }}</h4>\n                        </div>\n                        \n                        <div *ngIf=\"item.value.tipo_venta == '1'\" class=\"bg-success text-center text-light p-2\">\n                            PREVENTA\n                        </div>\n    \n                        <div *ngIf=\"item.value.tipo_venta == '2'\" class=\"bg-danger text-center text-light p-2\">\n                            ENTREGA INMEDIATA\n                        </div>\n    \n                        <div class=\"card-body text-center\">\n                           \n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <a class=\"text-danger\" (click)=\"guardarFavorito(autorizacion.traerUidSiExisteUsuario(), item.value)\" *ngIf=\"autorizacion.gioUsuario | async as usuario; else login\">\n                                        <mat-icon class=\"text-material-primary\">favorite</mat-icon>\n                                    </a>\n                                </div>\n                                \n                                <div class=\"col-9\">\n                                     <!-- <button class=\"btn btn-primary\" (click)=\"cargarDepartamento(item.value.id)\"> -->\n                                    <button class=\"btn btn-primary\" [routerLink]=\"['/ficha', item.value.id]\">\n                                        VER DESARROLLO\n                                    </button>\n                                </div>\n                            </div>\n                           \n                        </div>\n    \n                    </div>\n            </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/buscar/buscar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/buscar/buscar.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo-foto {\n  overflow: hidden;\n  background: url('tbi_home.jpg') bottom center fixed;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2JpZXJub2lvL3R1Ym9sc2FfcGFnZS9zcmMvYXBwL21vZHVsZXMvYnVzY2FyL2J1c2Nhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9idXNjYXIvYnVzY2FyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2J1c2Nhci9idXNjYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG8tZm90byB7XG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvaW1nL3RiaV9ob21lLmpwZycpIGJvdHRvbSBjZW50ZXIgZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iLCIuZm9uZG8tZm90byB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltZy90YmlfaG9tZS5qcGdcIikgYm90dG9tIGNlbnRlciBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/buscar/buscar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/buscar/buscar.component.ts ***!
  \****************************************************/
/*! exports provided: BuscarComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarComponent", function() { return BuscarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _services_noderestapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/noderestapi.service */ "./src/app/services/noderestapi.service.ts");
/* harmony import */ var src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase-auth.service */ "./src/app/services/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let BuscarComponent = class BuscarComponent {
    constructor(_router, autorizacion, _noderestapiService, _snackBar, dialog) {
        this._router = _router;
        this.autorizacion = autorizacion;
        this._noderestapiService = _noderestapiService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        if (this._router.url == "/") {
            this.openDialog();
        }
        this.mostrarBusqueda();
        this.delegaciones = [
            {
                delegacion: 'Álvaro Obregón'
            },
            {
                delegacion: 'Azcapotzalco'
            },
            {
                delegacion: 'Benito Juárez'
            },
            {
                delegacion: 'Coyoacán'
            },
            {
                delegacion: 'Cuajimalpa de Morelos'
            },
            {
                delegacion: 'Cuauhtémoc'
            },
            {
                delegacion: 'Gustavo A. Madero'
            },
            {
                delegacion: 'Iztacalco'
            },
            {
                delegacion: 'Iztapalapa'
            },
            {
                delegacion: 'Magdalena Contreras'
            },
            {
                delegacion: 'Miguel Hidalgo'
            },
            {
                delegacion: 'Milpa Alta'
            },
            {
                delegacion: 'Tláhuac'
            },
            {
                delegacion: 'Tlalpan'
            },
            {
                delegacion: 'Venustiano Carranza'
            },
            {
                delegacion: 'Xochimilco'
            }
        ];
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    buscar(busqueda) {
        localStorage.setItem('busqueda', JSON.stringify(busqueda.value));
        this._noderestapiService.consultarBusqueda(busqueda.value).subscribe(response => {
            console.log("Respuesta", response);
            let data = response['body'];
            for (var i = 0, len = data['length']; i < len; i++) {
                data[i].fotos = JSON.parse(data[i].fotos);
            }
            this.departamentos = data;
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '470px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    mostrarBusqueda() {
        let busqueda = JSON.parse(localStorage.getItem('busqueda'));
        console.log("La busqueda es:", busqueda);
        if (busqueda) {
            this.buscarHistorico(busqueda);
        }
        else {
            console.log("No ha habido busquedas por ahora.");
        }
    }
    buscarHistorico(busqueda) {
        localStorage.setItem('busqueda', JSON.stringify(busqueda));
        this._noderestapiService.consultarBusqueda(busqueda).subscribe(response => {
            let data = response['body'];
            for (var i = 0, len = data['length']; i < len; i++) {
                data[i].fotos = JSON.parse(data[i].fotos);
            }
            this.departamentos = data;
        });
    }
    scroll(el) {
        el.scrollIntoView();
    }
    guardarFavorito(usuario, data) {
        let departamento = JSON.stringify(data);
        let elemento = {
            clave: usuario + data.id,
            usuario: usuario,
            departamento: departamento
        };
        this._noderestapiService.guardarFavorito(elemento).subscribe(response => {
            // alert(response['status'])
            this.openSnackBar(response['status'], "Ok");
        });
    }
};
BuscarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"] },
    { type: _services_noderestapi_service__WEBPACK_IMPORTED_MODULE_3__["NoderestapiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
BuscarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buscar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buscar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/buscar/buscar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buscar.component.scss */ "./src/app/modules/buscar/buscar.component.scss")).default]
    })
], BuscarComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'anuncio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anuncio.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/buscar/anuncio.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogOverviewExampleDialog);



/***/ }),

/***/ "./src/app/modules/buscar/buscar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/buscar/buscar.module.ts ***!
  \*************************************************/
/*! exports provided: BuscarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarModule", function() { return BuscarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _buscar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buscar.component */ "./src/app/modules/buscar/buscar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_noderestapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/noderestapi.service */ "./src/app/services/noderestapi.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");










const routes = [
    {
        path: "**",
        component: _buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"],
        children: []
    },
    {
        path: "**",
        component: _buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"],
        children: []
    }
];
let BuscarModule = class BuscarModule {
};
BuscarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"], _buscar_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewExampleDialog"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        entryComponents: [_buscar_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewExampleDialog"]],
        providers: [_services_noderestapi_service__WEBPACK_IMPORTED_MODULE_7__["NoderestapiService"]]
    })
], BuscarModule);



/***/ })

}]);
//# sourceMappingURL=modules-buscar-buscar-module-es2015.js.map