import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from "./../../services/firebase-auth.service";
import { environment } from "./../../../environments/environment";
import * as firebase from 'firebase';
import { SidenavService } from "./../../services/sidenav-service.service";

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	usuario

	constructor(
		public autorizacion: FirebaseAuthService,
		private _sidenavServiceService: SidenavService
	) {

		// Cargar usuario actual si está logeado
		this.autorizacion.gioUsuario.subscribe(data => {
			this.usuario = data
			// this.informacionUsuario(this.usuario.uid)
		})

	}

	ngOnInit() {
	}


	sideNavCerrar() {
		this._sidenavServiceService.close();
	}


	sidenavToggle() {
		console.log("Algo")
		this._sidenavServiceService.open()
		// this._sidenavServiceService.toggle()
	}


	iniciarSesionFacebook() {
		let provider = new firebase.auth.FacebookAuthProvider
		this.autorizacion.autorizacion.auth.signInWithPopup(provider).then(result => {
			console.log(result)
		})
	}
}
