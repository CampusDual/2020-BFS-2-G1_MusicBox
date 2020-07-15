import { OntimizeEEService, Observable } from 'ontimize-web-ngx';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { CONFIG } from 'app/app.config';

@Injectable(
     {
     providedIn: 'root'
     }
)
export class HomeService extends OntimizeEEService {

    searchItems(filter: any, columns: string[], urlRoute: string) {
        const url = CONFIG.apiEndpoint + urlRoute ;
        var options = {
            headers: this.buildHeaders()
        };

        var body = JSON.stringify({
            filter: {
                search_name: filter
            },
            columns: columns
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
