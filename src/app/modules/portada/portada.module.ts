import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { PortadaComponent } from './portada.component';


const routes: Routes = [
	{
		path: "**",
		component: PortadaComponent,
		children: []
	}
]


@NgModule({
  declarations: [PortadaComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class PortadaModule { }
