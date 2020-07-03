import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { AppComponent } from 'app/app.component';
import { HomeService } from '../services/home.service';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule
  ],
  providers: [
    HomeService,
    AppComponent
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
