import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contato  } from './guest-list'
import { Http, Response} from '@angular/http'
import { HttpUtilService} from '../../shared/http-util.service'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';





@Injectable()
export class GuestListService {
    private _Url = "http://www.mocky.io/v2/5abd8e662f00006400e6c349";
    
     //"http://localhost:8080/api/ListaDePresentes"
    //'http:www.mocky.io/v2/5a58fa1a2d0000ae2fd2e6bc';
    //


  constructor(private _http: Http, private httpUtil: HttpUtilService) { }
   
    
  getAll(): Observable<Contato[]> {
    return this._http.get(this._Url)
    .map((response: Response) => <Contato[]>response.json())
     .catch(this.httpUtil.processarErros); 

}

  private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}
 
