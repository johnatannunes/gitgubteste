import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-popup-contatos',
  templateUrl: './popup-contatos.component.html',
  styleUrls: ['./popup-contatos.component.css']
})
export class PopupContatosComponent implements OnInit {


  constructor() {}
/*
  openDialog(): void {
    let dialogRef = this.dialog.open(PopupContatosComponentDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }*/
  ngOnInit() {
  }

}

/*@Component({
  selector: 'app-popup-contatos-dialog',
  templateUrl: './popup-contatos-dialog.component.html',
})

/*export class PopupContatosComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<PopupContatosComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/


