import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  radioSelectedValue = '';
  inputSearchValue: string;
  contador = 0;
  columns: string[];
  urlRoute: string;
  startSearch = false;
  displayComlums: string[];
  result: any;
  fieldsListSearch: string;
  fieldListKey: string;
  fieldName: any;
  routeImage: string;
  @Output() appComponet = new AppComponent();

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    protected homeService: HomeService
  ) {
  }

  ngOnInit() {
  }

  radioValue(nameFiled: any) {
    this.startSearch = true;
    this.radioSelectedValue = nameFiled;

    if (this.startSearch && this.inputSearchValue != '') {
      this.homeService.searchItems(this.inputSearchValue, this.getColumns(this.radioSelectedValue), this.getUrlRoute(this.radioSelectedValue))
      .subscribe(
        res => this.result = res && res['data'] ? res['data'] :  []
        );
    }
    return event;
  }

  inputTextvalue(event: any) {
    this.contador++;
    this.inputSearchValue = event.target.value;

    if (this.startSearch && this.inputSearchValue.length >= 3) {
      this.homeService.searchItems(this.inputSearchValue, this.getColumns(this.radioSelectedValue), this.getUrlRoute(this.radioSelectedValue))
      .subscribe(
        res => this.result = res && res['data'] ? res['data'] :  []
        );
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
      this.fieldListKey  = 'disc_name';
      this.fieldListKey = 'id_disc';
      this.fieldName = 'disc_name';
      this.routeImage = this.appComponet.imageDiscRoute;
    } else if (radioValue === 'song_name') {
      this.columns = []; // introducir columnas cancion cuando se implemente el servicio
    }
    return this.columns;
  }

  getUrlRoute(radioValue: string) {
    if (radioValue === 'artist_name') {
      this.urlRoute = '/artists/artistsSearch';
    } else if (radioValue === 'disc_name') {
      this.urlRoute = '/discs/discSearch';
    }
    return this.urlRoute;
  }
}
