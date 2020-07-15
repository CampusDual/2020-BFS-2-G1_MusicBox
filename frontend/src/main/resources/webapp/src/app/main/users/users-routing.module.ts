import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UserService } from '../services/user.service';

const routes: Routes = [{
  path: '',
  component: UsersHomeComponent
},
{
  path: 'new',
  component: UsersDetailComponent
},
{
  path: 'user/:user_',
  component: UsersDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserService]
})
export class UsersRoutingModule { }
