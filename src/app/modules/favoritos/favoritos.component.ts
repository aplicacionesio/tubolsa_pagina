import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoderestapiService } from "./../../services/noderestapi.service";
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent {
	uid:string = ''
  	animal: string;
	name: string;
	departamentos
	delegaciones

	constructor(
		private autorizacion: FirebaseAuthService, 
		public _noderestapiService:NoderestapiService, 
		public dialog: MatDialog) {
			
		this.uid = autorizacion.traerUidSiExisteUsuario()

		

		this.autorizacion.autorizacion.authState.subscribe(response=>{
			
			if(response == null) {
				console.log("No hay sesión para obtener uid")
			} else {
				this.mostrarFavoritos(response.uid)
			}
		})
	}


	
	mostrarFavoritos(uid){

		this._noderestapiService.traerFavoritos(uid).subscribe(response=>{
			this.departamentos = response['data']

			for (let index = 0; index < this.departamentos.length; index++) {

				// console.log( JSON.parse(this.departamentos[index]['departamento']) )

				this.departamentos[index]['departamento'] = JSON.parse( this.departamentos[index]['departamento'] )
				
			}

			console.log(this.departamentos)
		})

		// let busqueda = JSON.parse( localStorage.getItem('busqueda') )
		// console.log("La busqueda es:", busqueda)
		
		// if(busqueda){
		// 	this.buscarHistorico(busqueda)
		// } else {
		// 	console.log("No ha habido busquedas por ahora.")
		// }
	}


	// buscarHistorico(busqueda){

	// 	localStorage.setItem('busqueda', JSON.stringify(busqueda))

	// 	this._noderestapiService.consultarBusqueda(busqueda).subscribe(response=>{

	// 		let data = response['body']

	// 		for (var i = 0, len = data['length']; i < len; i++){
	// 			data[i].fotos = JSON.parse(data[i].fotos)
	// 		}
			
	// 		this.departamentos = data
	// 	})
	// }

}
