import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Frete } from './frete';
import { SService } from '../s/s.service';

@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.css']
})
export class SComponent implements OnInit {
  cep: any;

  frete: Frete;        
    
  constructor(private _sService: SService) {



  }

  CalcularFrete(): void {
     this._sService.getFrete(this.cep)
        .subscribe((data: Frete) => this.frete = data,
        error => console.log(error));
}

  ngOnInit() {
  }

}
