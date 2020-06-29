import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';
import { AppComponent } from 'app/app.component';

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
