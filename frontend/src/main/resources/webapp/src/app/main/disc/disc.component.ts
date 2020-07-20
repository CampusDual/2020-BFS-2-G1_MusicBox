import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { ActivatedRoute } from '@angular/router';
import { DiscService } from '../services/disc.service';
import { ArtistService } from '../services/artist.service';
import { SongService } from '../services/song.service';

@Component({
  selector: 'disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.scss']
})
export class DiscComponent implements OnInit {

  discId: number;
  discData: any;  
  discImageRoute: string;   
  discArtistData: any;
  artistIdOfDisc: number; 
  arrayOfSongs: string[] = [];    
  idSongForRoute: number;
  genderDataOfDisc: any;
  
  @Output()
  appComponent = new AppComponent();

  constructor(
    private route: ActivatedRoute,
    protected discService: DiscService,
    protected artistService: ArtistService,
    protected songService: SongService    
  ) { }

  ngOnInit() {
    this.discData = this.route.params.subscribe(params => {
      this.discId = + params['DISCID'];
      console.log(params);
      this.discImageRoute = this.appComponent.imageDiscRoute;
      this.discService.getDisc(this.discId)
        .subscribe(
          res => {
            this.discData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
            console.log(this.discData);            
            console.log(this.artistIdOfDisc);
            this.artistService.getArtist(this.discData['id_artist'])
              .subscribe(
                res => {
                  this.discArtistData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
                  console.log(this.discArtistData);
                  this.discService.getGenderOfDisc(this.discData['id_disc'])
                    .subscribe(
                      res => {
                        this.genderDataOfDisc = res && res['data'] && res['data'][0] ? res['data'][0] : [];
                        console.log(this.genderDataOfDisc);
                      }
                    )
                  this.songService.getSongsOfDisc(this.discId).subscribe(
                    res => {
                      this.arrayOfSongs = res && res['data'] && res['data'] ? res['data'] : [];
                      console.log(this.arrayOfSongs);
                      this.discImageRoute = this.appComponent.imageDiscRoute;                      
                      this.idSongForRoute = this.arrayOfSongs.values['id_song'];
                    }
                  )

                }
              )
          }
        );
    });
  }
}
