import { GuestListService } from './guest-list.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from '../guest-list/guest-list';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';




@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  
  
  toogle: (item: any) => void;
  exist: (item: any) => void;

  
  contatos: Contato[] ;
  errorMessage: string;

  constructor( private guestListService: GuestListService  ) { }


  ngOnInit() {


this.exist = function(item){
return this.selected.indexOf(item) > -1;

}

    this.guestListService.getAll()
      .subscribe(
      (contatos: Contato[] ) => this.loadContatos(contatos),
      error => this.errorMessage = <any>error)
      
  }

  loadContatos(contatos: Contato[]) {

    console.log(contatos);

    this.contatos = contatos;

    console.log(this.contatos);
  }

  }


