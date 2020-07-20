import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistService } from '../services/artist.service';
import { AppComponent } from 'app/app.component';
import { SongService } from '../services/song.service';
import { DiscService } from '../services/disc.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artistId: number;
  artistData: any;
  artistAllData: any;  
  artistImageRoute: string;
  discImageRoute: string;  
  discName: string;  
  arrayOfDiscs: string[] = [];
  
  @Output()
  appComponent = new AppComponent();
  
  constructor(    
    private route: ActivatedRoute,
    protected artistService: ArtistService,
    protected songService: SongService,
    protected discService: DiscService
    ) { }

  ngOnInit() {
    this.artistData = this.route.params.subscribe(params => {
      this.artistId = + params['ARTISTID'];
      console.log(params);
      this.artistImageRoute = this.appComponent.imageArtistRoute;
      this.artistService.getArtist(this.artistId)
        .subscribe(
          res => {
            this.artistData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
            console.log(this.artistData);
            this.songService.getDataArtist(this.artistId)
              .subscribe(
                res => {
                  this.artistAllData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
                  console.log(this.artistAllData);
                  this.discName = this.artistAllData['disc_name'];
                  this.discService.getDiscsOfArtist(this.artistId)
                    .subscribe(
                      res => {
                        this.arrayOfDiscs = res && res['data'] && res['data'] ? res['data'] : [];
                        this.discImageRoute = this.appComponent.imageDiscRoute;
                        console.log(this.arrayOfDiscs);
                      })
                }
              )
          }
        );
    });
  }
}
