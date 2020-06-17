import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from "@angular/router";
import { NoderestapiService } from "./../../services/noderestapi.service";
import { Router } from '@angular/router';


import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';







import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons/faRedditAlien';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG';
import { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faVk } from '@fortawesome/free-brands-svg-icons/faVk';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { faMix } from '@fortawesome/free-brands-svg-icons/faMix';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';
import { faLine } from '@fortawesome/free-brands-svg-icons/faLine';

import { faCommentAlt } from '@fortawesome/free-solid-svg-icons/faCommentAlt';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faBook, faCoffee, faInfo, faLightbulb} from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material';

const icons = [
  faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faPinterestP, faRedditAlien, faTumblr,
  faWhatsapp, faVk, faFacebookMessenger, faTelegramPlane, faMix, faXing, faCommentAlt, faBook, faLine,
  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus, faLightbulb, faCoffee, faInfo
];

library.add(...icons);

const shareProp = {
	facebook: {
	  icon: ['fab', 'facebook-square']
	}
  };

interface departamento {
	id:number, 
	empresa:string, 
	desarrollo:string, 
	departamento:string, 
	descripcion:string, 
	tipo_venta:string, 
	metros_cuadrados:string, 
	recamaras:number, 
	banos:number, 
	patio_de_servicio:number, 
	elevador:number, 
	roof_garden_privado:number, 
	roof_garden_publico:number, 
	terraza:number, 
	estacionamiento:number, 
	precio_final:string,
	fotos:{}
	vendido:number, 
	fecha_vendido:string, 
	vendedor:string, 
	direccion:string, 
	ubicacion:{}, 
	contacto:{}
}



@Component({
	selector: 'app-ficha',
	templateUrl: './ficha.component.html',
	styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {
	departamento: any = [];
	url
	datoextra;
	

	constructor(
		public router:Router, 
		private autorizacion: FirebaseAuthService,
		private _activatedRoute: ActivatedRoute, 
		private _noderestapiService: NoderestapiService, 
		private _snackBar: MatSnackBar
		) {
		this._activatedRoute.params.subscribe(res => {

			this.url = this.router.url
			console.log(this.router.url)

			this.cargarDepartamento(res.id)

			this.datoextra = "undatodinamico"
		})
	}

	ngOnInit() {
	}


	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
			duration: 2000,
		});
	}



	cargarDepartamento(id) {
		this._noderestapiService.traerDepartamento(id).subscribe(res => {


			let elemento:departamento = {
				id:undefined, 
				empresa:undefined, 
				desarrollo:undefined, 
				departamento:undefined, 
				descripcion:undefined, 
				tipo_venta:undefined, 
				metros_cuadrados:undefined, 
				recamaras:undefined, 
				banos:undefined, 
				patio_de_servicio:undefined, 
				elevador:undefined, 
				roof_garden_privado:undefined, 
				roof_garden_publico:undefined, 
				terraza:undefined, 
				estacionamiento:undefined, 
				precio_final:undefined, 
				fotos:undefined, 
				vendido:undefined, 
				fecha_vendido:undefined, 
				vendedor:undefined, 
				direccion:undefined, 
				ubicacion:{
					lat: undefined, 
					lng: undefined
				}, 
				contacto:{
					id: undefined, 
					contacto_correo: undefined, 
					contacto_facebook: undefined, 
					contacto_nombre: undefined, 
					contacto_telefono: undefined, 
					contacto_whatsapp: undefined, 
					empresa: undefined
				}
			}

			for (var i = 0, len = res['length']; i < len; i++){

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

					
				this._noderestapiService.traerDesarrollo(res[i].desarrollo).subscribe(data=> {
					elemento.direccion = data['data'][0].direccion
					elemento.ubicacion = {
						lat : data['data'][0].latitud, 
						lng : data['data'][0].longitud
					}
				})

				console.log("Trayendo datos contacto")
				this._noderestapiService.traerEmpresaPorNombre(elemento.empresa).subscribe(data=>{
					let contacto = data['data'][0]

					elemento.contacto = {
						id: contacto.id, 
						contacto_correo: contacto.contacto_correo, 
						contacto_facebook: contacto.contacto_facebook, 
						contacto_nombre: contacto.contacto_nombre, 
						contacto_telefono: contacto.contacto_telefono, 
						contacto_whatsapp: contacto.contacto_whatsapp, 
						empresa: contacto.empresa
					}

					console.log("Cargando el contacto: ", elemento.contacto[0])
				})
				



				this.departamento.push(elemento)
			}

			console.log(this.departamento)
		})
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