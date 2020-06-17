import { Component, ViewChild } from '@angular/core';


// Sidenav
import { MatSidenav } from "@angular/material";
import { SidenavService } from "./services/sidenav-service.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild('sidenav', { static: true }) public sidenav:MatSidenav;

	title = 'tubolsasitio';
	// @ViewChild('sidenav') public sidenav: MatSidenav;


	constructor(
		public sidenavService: SidenavService,
	) {
		// Colocar el título a partir de la configuración en enviroment
		// this.titleService.setTitle(environment.titulo)
	}


	ngOnInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
	}
}
