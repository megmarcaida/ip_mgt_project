import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpAddressComponent } from './ip-address.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: IpAddressComponent,
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IpAddressModule { }
