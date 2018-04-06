import { Injectable } from '@angular/core';
import { Contato  } from '../guest-list/guest-list'
import { Http, Response} from '@angular/http'
import { HttpUtilService} from '../../shared/http-util.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { environment } from '../../environments/environment';

@Injectable()
export class AddGuestService {
  private _Url =  "http://localhost:8080/api/ListaDePresentes";         //http://www.mocky.io/v2/5a9df4373000008a002349b5"; //'http://localhost:8080/api/ListaDePresentes'; 



  constructor(private _http: Http, private httpUtil: HttpUtilService) { }


/*save(contatoslista: Contato){

  return this._http.post(this.httpUtil.url(this._Url), contatoslista)
      .map((response: Response) => {
          return response.json();
      }).catch(this.httpUtil.processarErros);
}*/





novo(contatoslista:  Contato){
  let body = JSON.stringify(contatoslista);
  let headers = new Headers({'Content-Type': 'application/json'});
  //let options = new RequestOptions({ headers: headers });

  //return this.http.post(this.apiUrl, body, options)
   // .toPromise()
   // .then(res => res.json())
  //  .catch(this.handleError);
}



  private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}
 


