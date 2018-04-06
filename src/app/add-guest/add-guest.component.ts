import { Component, OnInit, Inject } from '@angular/core';
import { Contato } from '../guest-list/guest-list'
import { AddGuestService } from './add-guest.service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpUtilService } from '../.././shared/http-util.service'


@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css'],
  providers : [HttpUtilService] 
})
export class AddGuestComponent implements OnInit {

  postData:  string;
  selected = [];
  contatoslista: Contato;
  errorMessage: string;
  agendarDentistaForm :FormGroup;

  constructor(private addGuestService: AddGuestService, private httpService : HttpUtilService) { }

  /* openDialog(): void {
     let dialogRef = this.dialog.open(AddGuestDialog, {
       width: '250px',
 
     });
 as
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
 
     });
   }
 */

onTestPost() {
  this.httpService.postJSON()
  .subscribe(
     data => this.postData = JSON.stringify(data),
     error => alert(error),
     () => console.log("acesso a webapi post ok...")
  );
}
  ngOnInit() {




 /* this.addGuestService.save(this.contatoslista)
  .subscribe(
  () => this.onSaveComplete(),
  (error: any) => this.errorMessage = <any>error
  );

  }


  onSaveComplete(): void {
    this.agendarDentistaForm.reset();

  }
  

  loadContatos(contatoslista: Contato) {

    console.log(contatoslista);

    this.contatoslista = contatoslista;

    console.log(this.contatoslista);
  }*/


}









/*@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest-dialog.component.html',
})

export class AddGuestDialog {
  toogle: (item: any) => void;
  exist: (item: any) => void;






  selected = [];


  contatoslista: Contato[];
  errorMessage: string;



  constructor(
    public dialogRef: MatDialogRef<AddGuestDialog>, private addGuestService: AddGuestService,
    @Inject(MAT_DIALOG_DATA) public data: any) {    /*this.getContatos();*/ //}

  /* salvar(){
     if(this.nome){
       this._service.editar(this.nome).then(res => {
         this.getContatos();
       //  $('#myModal').modal('hide');
       });
     }else{
       console.log("nao salvou nada")
       //this._service.novo(this.nome).then(res => 
       //  this.getContatos();
         //$('#myModal').modal('hide');
       //});
     }
   }




  onNoClick(): void {
    this.dialogRef.close();
  }



  ngOnInit() {


    this.addGuestService.getAll()
      .subscribe(
        (contatoslista: Contato[]) => this.loadContatos(contatoslista),
        error => this.errorMessage = <any>error);
  }

  loadContatos(contatoslista: Contato[]) {

    console.log(contatoslista);

    this.contatoslista = contatoslista;

    console.log(this.contatoslista);
  }

}


this.exist = function (item) {
  return this.selected.indexOf(item) > -1;
}

this.toogle = function (item) {
  var idx = this.selected.indexOf(item);
  if (idx > -1) {
    this.selected.splice(idx, 1);
  } else {

    this.selected.push(item);


  }


}

/*this.addGuestService.getAll()
  .subscribe(
    (contatoslista: Contato[]) => this.loadContatos(contatoslista),
    error => this.errorMessage = <any>error);
  }

loadContatos(contatoslista: Contato[]) {

  console.log(contatoslista);

  this.contatoslista = contatoslista;

  console.log(this.contatoslista);
}*/
}