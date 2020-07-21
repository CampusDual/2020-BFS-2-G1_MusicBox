import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersAddlistComponent } from './users-addlist/users-addlist.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    UsersRoutingModule
  ],
  declarations: [UsersHomeComponent, UsersDetailComponent, UsersAddlistComponent]
})
export class UsersModule { }
