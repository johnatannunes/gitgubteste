import { SComponent } from './s/s.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MaterialModule } from '../modules/angular-materials';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { PopupContatosComponent } from './popup-contatos/popup-contatos.component';

const routes: Routes = [
  {path: 'guest-list', component:GuestListComponent},
  {path: 's', component:SComponent},
  {path: 'add-guest', component:AddGuestComponent},
  {path: 'popup-contatos', component:PopupContatosComponent},

  
];




@NgModule({
  imports: [RouterModule.forRoot(routes),
    MaterialModule,
    
   
    


  ],
  exports: [RouterModule, MaterialModule]
})
export class AppRoutingModule { }
