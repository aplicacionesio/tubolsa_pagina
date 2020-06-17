import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FirebaseAuthService } from "./../../services/firebase-auth.service";
// import { FirebaseAuthService } from "./../../services/firebase-auth.service";
// import { FirebaseDatabaseService } from "./../../services/firebase-database.service";
import { environment } from "./../../../environments/environment";
// Router
import { Router, NavigationEnd } from '@angular/router';
// Emisor del chat y servicio sidenav
import { SidenavService } from "./../../services/sidenav-service.service";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(
    private autorizacion: FirebaseAuthService,
    // private datos: FirebaseDatabaseService,
    // private _toolbarChatService: ToolbarChatService,
    private _router: Router,
    private _location: Location,
    private _sidenavServiceService: SidenavService
  ) {

  }


  regresar() {
    this._location.back()
  }
  

  sidenavToggle() {
    console.log("Algo")
    this._sidenavServiceService.open()
    // this._sidenavServiceService.toggle()
  }


  llamarFavoritos(){
    let uid = this.autorizacion.traerUidSiExisteUsuario()
    
    if(uid == null) {
      console.log("No hay usuario")
    } else {
      console.log("El usuario a cargar es: " + uid)
    }
  }


  // informacionUsuario(uid) {
  //   let ruta = 'usuarios/' + uid + '/perfil/admin'
  //   this.datos.datos.object(ruta).valueChanges().subscribe(data => {
  //     this.administrador = data
  //   })
  // }
}