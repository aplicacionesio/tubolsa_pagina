import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class NoderestapiService {

	url

	constructor(private http: HttpClient) {
		this.url = environment.url
	}



	guardarEmpresa(empresa:any) {
		return this.http.post(`${this.url}/post/empresa`, empresa)
	}


	guardarFavorito(favorito:any) {
		return this.http.post(`${this.url}/post/favorito`, favorito)
	}

	guardarDesarrollo(desarrollo:any) {
		return this.http.post(`${this.url}/post/desarrollo`, desarrollo)
	}


	guardarDepartamento(departamento:any){
		return this.http.post(`${this.url}/post/departamento`, departamento)
	}


	traerDepartamentos(){
		return this.http.get(`${this.url}/get/departamentos`)
	}


	traerEmpresas(){
		return this.http.get(`${this.url}/get/empresas`);
	}

	traerEmpresaPorNombre(empresa){
		return this.http.get(`${this.url}/get/empresapornombre/${empresa}`);
	}

	traerDepartamento(id){
		return this.http.get(`${this.url}/get/departamento/${id}`);
	}


	traerFavoritos(uid){
		return this.http.get(`${this.url}/get/favoritos/${uid}`);
	}

	traerDesarrollos(){
		return this.http.get(`${this.url}/get/desarrollos`);
	}


	traerDesarrollo(nombre){
		return this.http.get(`${this.url}/get/desarrollonombre/${nombre}`);
	}

	borrarEmpresa(id){
		return this.http.delete(`${this.url}/delete/empresa/${id}`);
	}

	borrarDesarrollo(id){
		return this.http.delete(`${this.url}/delete/desarrollo/${id}`);
	}

	borrarDepartamento(id){
		return this.http.delete(`${this.url}/delete/departamento/${id}`);
	}



	consultarBusqueda(busqueda){
		return this.http.post(`${this.url}/busqueda/general`, busqueda)
	}
}