import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar.component';
import { DialogOverviewExampleDialog } from './buscar.component';
import { MatCardModule, MatDialogModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatProgressBarModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms'
import { NoderestapiService } from "./../../services/noderestapi.service";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
	{
		path: "**",
		component: BuscarComponent,
		children: []
	}, 
	{
		path: "**",
		component: BuscarComponent,
		children: []
	}
]



@NgModule({
  declarations: [BuscarComponent, DialogOverviewExampleDialog],
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
  entryComponents:[DialogOverviewExampleDialog], 
  providers: [NoderestapiService]
})
export class BuscarModule { }
