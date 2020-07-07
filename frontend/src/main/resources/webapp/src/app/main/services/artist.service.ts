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
export class ArtistService extends OntimizeEEService{

  getArtist(artistId: number) {
    
        const url = CONFIG.apiEndpoint + '/artists/artist/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_artist: artistId
            },
            columns: ['id_artist', 'artist_name', 'artist_bio', 'artist_photo']
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

    buildHeaders () {
        const appData = JSON.parse(localStorage.getItem(CONFIG.uuid));
        return new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + appData.session.id
        });
    }
}
