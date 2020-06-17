import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NoderestapiService } from "./../../services/noderestapi.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { RegistrosComponent } from './registros.component';

import { MatIconModule, MatSnackBarModule } from "@angular/material";


const routes: Routes = [
	{
		path: "**",
		component: RegistrosComponent,
		children: []
	}
]

@NgModule({
  declarations: [RegistrosComponent],
  imports: [
    CommonModule, 
    HttpClientModule, 
    MatIconModule, 
    MatSnackBarModule, 
    RouterModule.forChild(routes)
  ], 
  providers:[NoderestapiService]
})
export class RegistrosModule { }
