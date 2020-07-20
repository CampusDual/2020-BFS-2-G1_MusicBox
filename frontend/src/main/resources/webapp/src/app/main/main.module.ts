import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ArtistComponent } from './artist/artist.component';
import { DiscComponent } from './disc/disc.component';
import { SongComponent } from './song/song.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    ArtistComponent,
    DiscComponent,
    SongComponent,
    ListComponent
    ]
})
export class MainModule { }
