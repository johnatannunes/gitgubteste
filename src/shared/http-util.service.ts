import { Injectable } from '@angular/core';
import { Response, Headers,Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from './../environments/environment'

@Injectable()
export class HttpUtilService {
    /*private API_URL = environment.pathBase;
    url(path: string) {
        return this.API_URL + path;*/

        constructor(private _http : Http) { }

    getCurrentTime(){
        return this._http.get('http://localhost:8080/api/ListaDePresentes')  
             .map(res=> res.json()); 
            
            }


    postJSON() {
        var json = JSON.stringify({var1: 'teste', var2: 1000});
        var params = 'json=' + json;
        var cabe = new Headers();
        cabe.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post('http://localhost:8080/api/ListaDePresentes', 
        params, {
                 headers : cabe
                })
                .map(res=> res.json());
    }
    


    headers() {
        let headersParams = { 'Content-Type': 'application/json' };
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    Headers(apikey : string){
        let headersParams = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'apikey' : apikey};
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    extrairDados(response: Response) {
        let data = response.json();
        return data || {};
    }

    processarErros(error: Response) {
        return Observable.throw('Erro acessando servidor remoto. ' + error.statusText);
    }
}