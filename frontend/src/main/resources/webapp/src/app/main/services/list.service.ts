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
export class ListService extends OntimizeEEService{    
    
  getList(listId: number) {
    
        const url = CONFIG.apiEndpoint + '/lists/list/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_list: listId
            },
            columns: ['id_list', 'id_user', 'list_name']
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

     getListAllData(listId: number) {
        const url = CONFIG.apiEndpoint + '/lists/listSong/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_list: listId
            },
            columns: ['id_user', 'user_', 'password', 'name', 'surname',
                 'email', 'userblocked', 'lastpasswordupdate', 'firstlogin', 'id_list',
                  'id_user', 'list_name', 'id_list_song', 'id_list', 'id_song', 'id_gender', 'song_name', 'song_length']
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

      getListsOfUser(userId: number) {
        const url = CONFIG.apiEndpoint + '/lists/list/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_user: userId
            },
            columns: ['id_user', 'id_list', 'id_user', 'list_name']
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

      getSongsOfList(listId: number) {
        const url = CONFIG.apiEndpoint + '/lists/listSong/search';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: {
                id_list: listId
            },
            columns: ['id_list', 'id_song', 'song_name', 'song_length']
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