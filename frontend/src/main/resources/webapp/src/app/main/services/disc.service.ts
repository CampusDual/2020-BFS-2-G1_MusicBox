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
export class DiscService extends OntimizeEEService{

  getDisc(discId: number) {
    
        const url = CONFIG.apiEndpoint + '/discs/disc/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_disc: discId
            },
            columns: ['id_disc', 'id_artist', 'disc_name', 'producer']
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