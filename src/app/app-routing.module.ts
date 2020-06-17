import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: 'buscar',
		loadChildren: () => import('./modules/buscar/buscar.module').then(modulo => modulo.BuscarModule)
	}, 
	{
		path: 'portada',
		loadChildren: () => import('./modules/portada/portada.module').then(modulo => modulo.PortadaModule)
	}, 
	{
		path: 'registros',
		loadChildren: () => import('./modules/registros/registros.module').then(modulo => modulo.RegistrosModule)
	},
	{
		path: 'favoritos',
		loadChildren: () => import('./modules/favoritos/favoritos.module').then(modulo => modulo.FavoritosModule)
	},
	{
		path: 'ficha/:id',
		loadChildren: () => import('./modules/ficha/ficha.module').then(modulo => modulo.FichaModule)
	},
	{
		path        : 'sesion-iniciar',
		loadChildren: () => import('./modules/usuarios/sesion-iniciar/sesion-iniciar.module').then(modulo => modulo.SesionIniciarModule)
	},
	{
		path: '',
		loadChildren: () => import('./modules/buscar/buscar.module').then(modulo => modulo.BuscarModule)
	}, 
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
