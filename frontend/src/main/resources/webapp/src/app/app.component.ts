import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imageArtistRoute: string;
  imageDiscRoute: string;

  constructor() {
    this.imageArtistRoute =  './assets/images/imagesArtists/';
    this.imageDiscRoute = './assets/images/imagesDiscs/';
  }

  ngOnInit() {
  }

}
