import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { NoderestapiService } from "./../../services/noderestapi.service";
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-buscar',
	templateUrl: './buscar.component.html',
	styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {

	animal: string;
	name: string;
	departamentos
	delegaciones

	constructor(
		public _router:Router, 
		private autorizacion: FirebaseAuthService,
		public _noderestapiService:NoderestapiService, 
		private _snackBar: MatSnackBar, 
		public dialog: MatDialog
		) {

		
		if(this._router.url == "/") {
			this.openDialog()
		}

		
		
		this.mostrarBusqueda()

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
		]
	}


	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
			duration: 2000,
		});
	}

	
	buscar(busqueda:NgForm){

		localStorage.setItem('busqueda', JSON.stringify(busqueda.value))

		this._noderestapiService.consultarBusqueda(busqueda.value).subscribe(response=>{

			console.log("Respuesta", response)

			let data = response['body']

			for (var i = 0, len = data['length']; i < len; i++){
				data[i].fotos = JSON.parse(data[i].fotos)
			}
			
			this.departamentos = data
		})
	}


	openDialog(): void {
		const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
			width: '470px',
			data: { name: this.name, animal: this.animal }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			this.animal = result;
		});
	}



	mostrarBusqueda(){

		let busqueda = JSON.parse( localStorage.getItem('busqueda') )
		console.log("La busqueda es:", busqueda)
		
		if(busqueda){
			this.buscarHistorico(busqueda)
		} else {
			console.log("No ha habido busquedas por ahora.")
		}
	}


	buscarHistorico(busqueda){

		localStorage.setItem('busqueda', JSON.stringify(busqueda))

		this._noderestapiService.consultarBusqueda(busqueda).subscribe(response=>{

			let data = response['body']

			for (var i = 0, len = data['length']; i < len; i++){
				data[i].fotos = JSON.parse(data[i].fotos)
			}
			
			this.departamentos = data
		})
	}

	scroll(el: HTMLElement) {
		el.scrollIntoView();
	}


	guardarFavorito(usuario, data) {
		let departamento = JSON.stringify(data)

		let elemento = {
			clave: usuario+data.id, 
			usuario: usuario, 
			departamento: departamento
		}


		this._noderestapiService.guardarFavorito(elemento).subscribe(response=>{
			// alert(response['status'])
			this.openSnackBar(response['status'], "Ok")
		})
	}
}




@Component({
	selector: 'anuncio',
	templateUrl: 'anuncio.html',
})
export class DialogOverviewExampleDialog {

	constructor(
		public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
		@Inject(MAT_DIALOG_DATA) public data) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

}
