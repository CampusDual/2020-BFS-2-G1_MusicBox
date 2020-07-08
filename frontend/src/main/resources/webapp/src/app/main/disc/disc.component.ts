import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { ActivatedRoute } from '@angular/router';
import { DiscService } from '../services/disc.service';
import { ArtistService } from '../services/artist.service';

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

  @Output()
  appComponent = new AppComponent();

  constructor(
    private route: ActivatedRoute,
    protected discService: DiscService,
    protected artistService: ArtistService
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
      }
      )  
      }
      );
    });
  }
}
