import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../services/artist.service';
import { AppComponent } from 'app/app.component';
import { SongService } from '../services/song.service';

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
  artistBio: string;
  discName: string;
  arrayOfDiscs: string[];
  
  @Output()
  appComponent = new AppComponent();
  
  constructor(
    private route: ActivatedRoute,
    protected artistService: ArtistService,
    protected songService: SongService
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
            // ¿¿¿¿ ?????
            var arrDisc = this.arrayOfDiscs.push(this.discName);
            console.log(arrDisc);
          }
          ) 
            }
          );
      });      
  }
}
