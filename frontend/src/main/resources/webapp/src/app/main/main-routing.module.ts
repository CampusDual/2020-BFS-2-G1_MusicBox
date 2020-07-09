import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { ArtistComponent } from './artist/artist.component';
import { DiscComponent } from './disc/disc.component';
import { SongComponent } from './song/song.component';

export function loadHomeModule() {
  return HomeModule;
}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      },
      {
        path: 'artist/:ARTISTID',
        component: ArtistComponent
      },
      {
        path: 'disc/:DISCID',
        component: DiscComponent
      },
      {
        path: 'song/:SONGID',
        component: SongComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
