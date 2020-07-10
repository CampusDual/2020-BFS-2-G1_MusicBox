import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  songId: number;
  songData: any;
  songName: string;
  discImageRoute: string;
  songLength: number;
  songDisc: string;
  songArtist: string;
  songIdData: number;
  songAllData: any;
  genderOfDisc: string;
  test: number;

  @Output()
  appComponent = new AppComponent();

  constructor(
    private route: ActivatedRoute,
    protected songService: SongService
  ) { }

  ngOnInit() {
    this.songData = this.route.params.subscribe(params => {
      this.songId =+ params['SONGID'];
      console.log(params);
      this.discImageRoute = this.appComponent.imageDiscRoute;        
      this.songService.getSong(this.songId)
      .subscribe(
        res => {this.songData = res && res['data'] && res['data'][0] ? res['data'][0] :  [];
        console.log(this.songData);
        var name = "song_name";
        this.songName = this.songData[name];
        var length = "song_length";
        this.songLength = this.songData[length];

        this.songService.getData(this.songId)
        .subscribe(
          res => {this.songAllData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
          console.log(this.songAllData);          
          var discId = "id_disc";
          this.test = this.songAllData[discId];
          console.log(this.test);
          var artistName = "artist_name";
          this.songArtist = this.songAllData[artistName];
          var discName = "disc_name";
          this.songDisc = this.songAllData[discName];
        }
        )
      }
      );
  });
  }
}
