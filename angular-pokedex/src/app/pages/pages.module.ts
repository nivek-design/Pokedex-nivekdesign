import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RoutingModule } from './routing.module';


import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    

    
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    MatProgressBarModule
    
  ]
})
export class PagesModule { }
