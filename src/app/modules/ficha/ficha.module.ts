import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FichaComponent } from './ficha.component';
import { NoderestapiService } from "./../../services/noderestapi.service";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule, MatSnackBarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

// Social
import { ShareButtonsModule } from '@ngx-share/buttons';


// Mapa
import { AgmCoreModule } from '@agm/core';
const routes: Routes = [
	{
		path: "**",
		component: FichaComponent,
		children: []
	}
]


@NgModule({
  declarations: [FichaComponent],
  imports: [
    CommonModule, 
    HttpClientModule, 
    MatIconModule, 
    MatSnackBarModule, 
    MatButtonModule, 
    ShareButtonsModule, 
    RouterModule.forChild(routes), 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBg1h9qOTfHoMU9xd6Wq3GUvuIdQVSX_qs'
    })
  ], 
  providers:[NoderestapiService]
})
export class FichaModule { }
