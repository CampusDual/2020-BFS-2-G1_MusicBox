import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeService } from '../services/home.service';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  radioSelectedValue = '';
  inputSearchValue: any;
  counter = 0;
  columns: string[];
  urlRoute: string;
  startSearch = false;
  result: any;
  fieldsListSearch: string;
  fieldListKey: string;
  fieldName: any;
  routeImage: string;
  arrayRadioValues = [{'key': 'artist_name',
    'value': 'Artist'}, {'key': 'disc_name',
    'value': 'Disc'}, {'key': 'song_name',
    'value': 'Song'}];
  
  @Output()
  appComponet = new AppComponent();

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    protected homeService: HomeService
  ) {
  }

  ngOnInit() {
  }

  radioValue(value: any) {
    console.log(value);
    this.startSearch = true;
    this.radioSelectedValue = value.value;
    console.log(this.radioSelectedValue);    

    if (this.startSearch && this.inputSearchValue != '') {
      this.homeService.searchItems(this.inputSearchValue, 
        this.getColumns(this.radioSelectedValue), this.getUrlRoute(this.radioSelectedValue))
      .subscribe(
        res => this.result = res && res['data'] ? res['data'] :  []
        );
    }
    return event;
  }

  /* Valor por defecto del radio-button */
  getValue() {
    return 'artist_name';
  }
  
  textValue(event: any) {
    console.log(event.target.value.value);  
    this.counter++;
    this.inputSearchValue = event.target.value.value;

    if (this.startSearch && this.inputSearchValue.length >= 3) {
      this.homeService.searchItems(this.inputSearchValue, this.getColumns(this.radioSelectedValue), this.getUrlRoute(this.radioSelectedValue))
      .subscribe(
        res => this.result = res && res['data'] ? res['data'] :  []
        );
    } else {
      this.result = [];
    }
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  getColumns(radioValue: string) { 
    if (radioValue === 'artist_name') {
      this.columns = ['id_artist', 'artist_name', 'artist_bio', 'artist_photo'];
      this.fieldsListSearch = 'id_artist;artist_name;artist_bio;artist_photo';
      this.fieldListKey = 'id_artist';
      this.fieldName = 'artist_name';
      this.routeImage = this.appComponet.imageArtistRoute;
    } else if (radioValue === 'disc_name') {
      this.columns = ['id_disc', 'id_artist', 'disc_name', 'producer'];
      this.fieldsListSearch = 'id_disc;id_artist;disc_name;producer';
      this.fieldListKey = 'id_disc';
      this.fieldName = 'disc_name';
      this.routeImage = this.appComponet.imageDiscRoute;
    } else if (radioValue === 'song_name') {
      this.columns = ['id_song', 'id_gender', 'song_name', 'song_length'];
      this.fieldsListSearch = 'id_song';'id_gender';'song_name';'song_length';
      this.fieldListKey = 'id_song';
      this.fieldName = 'song_name';
      this.routeImage = this.appComponet.imageSongRoute;
    }
    return this.columns;
    }

    getUrlRoute(radioValue: string) {
      if (radioValue === 'artist_name') {
        this.urlRoute = '/artists/artistsSearch';
      } else if (radioValue === 'disc_name') {
        this.urlRoute = '/discs/discSearch';
      } else if (radioValue === 'song_name') {
        this.urlRoute = '/songs/songSearch';
      }
      return this.urlRoute;
      }
}