import { NgModule } from '@angular/core';
/* import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; */

import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { AppComponent } from 'app/app.component';
import { HomeService } from '../services/home.service';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule
    /* BrowserModule,    
    BrowserAnimationsModule  */   
  ],
  providers: [
    HomeService,
    AppComponent
  ],
  declarations: [
    HomeComponent,
    CarouselComponent
  ]
})
export class HomeModule { }
