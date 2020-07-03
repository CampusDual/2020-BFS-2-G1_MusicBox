import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artistId: number;
  artistData: any;
  
  constructor(private route: ActivatedRoute) { }

    ngOnInit() {
      this.artistData = this.route.params.subscribe(params => {
        this.artistId =+ params['ARTISDID'];
      });
  }
}
