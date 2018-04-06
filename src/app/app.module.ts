import { AddGuestService } from './add-guest/add-guest.service';
import { HttpModule } from '@angular/http';
import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
import { Routes, RouterModule } from '@angular/router';
import {  MaterialModule } from '../modules/angular-materials'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';






import { AppComponent } from './app.component';

import { GuestListComponent } from './guest-list/guest-list.component';
import { SComponent } from './s/s.component';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { PopupContatosComponent } from './popup-contatos/popup-contatos.component';



import {GuestListService} from './guest-list/guest-list.service';
import { HttpUtilService} from '../shared/http-util.service';
import { SService } from './s/s.service';
import { PopupContatosService } from './popup-contatos/popup-contatos.service';



@NgModule({
  declarations: [
    AppComponent,
    GuestListComponent,
    SComponent,
    AddGuestComponent,
    PopupContatosComponent,

    
    
    

    

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AppRoutingModule, 
    MaterialModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule 
    

 
  ],


  providers: [
    HttpUtilService,
    GuestListService,
    SService,
    PopupContatosService,
    AddGuestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
