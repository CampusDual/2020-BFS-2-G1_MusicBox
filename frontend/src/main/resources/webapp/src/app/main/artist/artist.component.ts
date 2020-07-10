import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  artistName: string;
  artistImageRoute: string;
  discImageRoute: string;
  artistBio: string;
  discName: string;
  routerDisc: string;
  test: any;
  arrayOfDiscs: string[] = [];
  
  @Output()
  appComponent = new AppComponent();
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected artistService: ArtistService,
    protected songService: SongService,
    protected discService: DiscService
    ) { }

    ngOnInit() {
      this.artistData = this.route.params.subscribe(params => {
        this.artistId =+ params['ARTISTID'];
        console.log(params);
        this.artistImageRoute = this.appComponent.imageArtistRoute;        
        this.artistService.getArtist(this.artistId)
        .subscribe(          
            res => {this.artistData = res && res['data'] && res['data'][0] ? res['data'][0] :  [];
            console.log(this.artistData);
            var name = "artist_name";
            this.artistName = this.artistData[name];
            console.log(this.artistName);
            var bio = "artist_bio";
            this.artistBio = this.artistData[bio];
            console.log(this.artistBio);
          this.songService.getDataArtist(this.artistId)
          .subscribe(
            res => {this.artistAllData = res && res['data'] && res['data'][0] ? res['data'][0] :  [];
            console.log(this.artistAllData);
            var name = "disc_name";
            this.discName = this.artistAllData[name];
            console.log(this.discName);
          this.discService.getDiscsOfArtist(this.artistId)
          .subscribe(
            res => {this.arrayOfDiscs = res && res['data'] && res['data'] ? res['data'] :  [];
            this.discImageRoute = this.appComponent.imageDiscRoute;
            this.routerDisc = '/main/disc';
          console.log(this.arrayOfDiscs);
          
          })          
          }
          ) 
            }
          );
      });      
  }
}
