import { Component, OnInit } from '@angular/core';
import { NoderestapiService } from "./../../services/noderestapi.service";
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { Departamento } from "./departamento-class";
import { MatSnackBar } from '@angular/material';



@Component({
	selector: 'app-registros',
	templateUrl: './registros.component.html',
	styleUrls: ['./registros.component.scss']
})

export class RegistrosComponent {
	departamentos: any = [];
	
	

	constructor(
		private autorizacion: FirebaseAuthService,
		private servicioNode: NoderestapiService, 
		private _snackBar: MatSnackBar
		) {

		this.traerRegistros()
	}


	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
			duration: 2000,
		});
	}


	traerRegistros() {
		this.servicioNode.traerDepartamentos().subscribe(res => {
				
			for (var i = 0, len = res['length']; i < len; i++){
				let elemento = new Departamento();

				elemento.id = res[i]['id']
				elemento.empresa = res[i].empresa
				elemento.desarrollo = res[i].desarrollo
				elemento.departamento = res[i].departamento
				elemento.descripcion = res[i].descripcion
				elemento.tipo_venta = res[i].tipo_venta
				elemento.metros_cuadrados = res[i].metros_cuadrados
				elemento.recamaras = res[i].recamaras
				elemento.banos = res[i].banos
				elemento.patio_de_servicio = res[i].patio_de_servicio
				elemento.elevador = res[i].elevador
				elemento.roof_garden_privado = res[i].roof_garden_privado
				elemento.roof_garden_publico = res[i].roof_garden_publico
				elemento.terraza = res[i].terraza
				elemento.estacionamiento = res[i].estacionamiento
				elemento.precio_final = res[i].precio_final
				elemento.fotos = JSON.parse(res[i].fotos)
				elemento.vendido = res[i].vendido
				elemento.fecha_vendido = res[i].fecha_vendido
				elemento.vendedor = res[i].vendedor
				
				this.servicioNode.traerDesarrollo(res[i].desarrollo).subscribe(data=> {
					elemento.direccion = data['data'][0].direccion
				})
				
				this.departamentos.push(elemento)
			}
		})
	}



	guardarFavorito(usuario, data) {
		let departamento = JSON.stringify(data)

		let elemento = {
			clave: usuario+data.id, 
			usuario: usuario, 
			departamento: departamento
		}


		this.servicioNode.guardarFavorito(elemento).subscribe(response=>{
			// alert(response['status'])
			this.openSnackBar(response['status'], "Ok")
		})
	}
}
