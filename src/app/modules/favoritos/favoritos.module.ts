import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatDialogModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatProgressBarModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms'
import { NoderestapiService } from "./../../services/noderestapi.service";
import { HttpClientModule } from "@angular/common/http";


const routes: Routes = [
	{
		path: "**",
		component: FavoritosComponent,
		children: []
	}, 
	{
		path: "**",
		component: FavoritosComponent,
		children: []
	}
]


@NgModule({
  declarations: [FavoritosComponent],
  imports: [
    CommonModule, 
	FormsModule, 
	MatProgressBarModule,
	MatProgressBarModule,
	MatDialogModule,
	MatCheckboxModule,
	MatButtonModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatSelectModule,
	MatStepperModule,
	MatCardModule,
	MatSnackBarModule, 
	HttpClientModule, 
    RouterModule.forChild(routes)
  ], 
  providers: [NoderestapiService]
})
export class FavoritosModule { }
