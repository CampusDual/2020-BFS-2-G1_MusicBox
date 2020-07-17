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
  discName: string;
  discImageRoute: string;
  discProducer: string;
  discArtistId: number; 
  discArtistData: any;
  artistIdOfDisc: number;
  artistNameShow: string;
  arrayOfSongs: string[] = [];
  ifDiscForSongs: number;
  routerDisc: string;
  routerSong:string;
  idSongForRoute: number;
  genderDataOfDisc: any;
  genderNameOfDisc: string;

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
      this.discId =+ params['DISCID'];
      console.log(params);
      this.discImageRoute = this.appComponent.imageDiscRoute;
      this.discService.getDisc(this.discId)
      .subscribe(
        res => {this.discData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
        console.log(this.discData);
        var name = "disc_name";
        this.discName = this.discData[name];
        console.log(this.discName);
        var producer = "producer"
        this.discProducer = this.discData[producer];
        console.log(this.discProducer);
        var idDiscForGetSongs = "id_disc";
        this.ifDiscForSongs = this.discData[idDiscForGetSongs];
        
        var artistNameId = "id_artist";
        this.artistIdOfDisc = this.discData[artistNameId];
        console.log(this.artistIdOfDisc);
      this.artistService.getArtist(this.artistIdOfDisc)
      .subscribe(
        res => {this.discArtistData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
        console.log(this.discArtistData);
        var artistName = "artist_name"
        this.artistNameShow = this.discArtistData[artistName]
        console.log(this.artistNameShow)

      this.discService.getGenderOfDisc(this.ifDiscForSongs)
      .subscribe(
        res => {this.genderDataOfDisc = res && res['data'] && res['data'][0] ? res['data'][0] : [];
      console.log(this.genderDataOfDisc);
      var gender = "gender_name";
      this.genderNameOfDisc = this.genderDataOfDisc[gender];
      }
      )  
      
      this.songService.getSongsOfDisc(this.discId).subscribe(
        res => {this.arrayOfSongs = res && res['data'] && res['data'] ? res['data'] : [];
        console.log(this.arrayOfSongs);

        this.discImageRoute = this.appComponent.imageDiscRoute;
            this.routerSong = '/main/song';

        var idSong= "id_song";
        this.idSongForRoute = this.arrayOfSongs.values[idSong];
                 
        }
      )
      
      }
      )  
      }
      );
    });
  }
}
