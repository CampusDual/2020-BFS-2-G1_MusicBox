import { Injectable } from '@angular/core';
import { OntimizeEEService, Observable } from 'ontimize-web-ngx';
import { CONFIG } from 'app/app.config';
import { share } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable(
     {
     providedIn: 'root'
     }
  )
export class SongService extends OntimizeEEService{    
    
  getSong(songId: number) {
    
        const url = CONFIG.apiEndpoint + '/songs/song/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_song: songId
            },
            columns: ['id_song', 'id_gender', 'song_name', 'song_length']
        });
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.post(url, body, options).subscribe(function (resp) {
                self.parseSuccessfulQueryResponse(resp, _innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); });
        });
        return dataObservable.pipe(share());
     //   return this.httpClient.post(url, body, options);
     }

     getData(songId: number) {
        const url = CONFIG.apiEndpoint + '/songs/discSong/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_song: songId
            },
            columns: ['id_gender', 'gender_name', 'id_song' , 'song_name', 'song_length',
                 'id_disc_song', 'id_disc', 'id_artist', 'disc_name', 'producer',
                  'artist_name', 'artist_bio']
        });
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.post(url, body, options).subscribe(function (resp) {
                self.parseSuccessfulQueryResponse(resp, _innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); });
        });
        return dataObservable.pipe(share()); 
      }
      
      getDataArtist(artistId: number) {
        const url = CONFIG.apiEndpoint + '/songs/discSong/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_artist: artistId
            },
            columns: ['id_song', 'id_gender', 'song_name', 'song_length',
                 'id_disc_song', 'id_disc', 'id_artist', 'disc_name', 'producer',
                  'artist_name', 'artist_bio']
        });
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.post(url, body, options).subscribe(function (resp) {
                self.parseSuccessfulQueryResponse(resp, _innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); });
        });
        return dataObservable.pipe(share()); 
      }  
      //*********************************** */
      getSongsOfDisc(disctId: number) {
        const url = CONFIG.apiEndpoint + '/songs/discSong/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_disc: disctId
            },
            columns: ['id_song', 'song_name', 'song_length']
        });
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.post(url, body, options).subscribe(function (resp) {
                self.parseSuccessfulQueryResponse(resp, _innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); });
        });
        return dataObservable.pipe(share()); 
      }  



    buildHeaders () {
        const appData = JSON.parse(localStorage.getItem(CONFIG.uuid));
        return new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + appData.session.id
        });
    }
}