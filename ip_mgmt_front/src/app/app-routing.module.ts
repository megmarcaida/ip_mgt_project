import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IpAddressAddComponent } from './ip-address-add/ip-address-add.component';
import { IpAddressEditComponent } from './ip-address-edit/ip-address-edit.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ip-address/ip-address.module').then(m => m.IpAddressModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'ip/add',
    component: IpAddressAddComponent,
    data: { title: 'Add IP Address' }
  },
  {
    path: 'ip/edit/:id',
    component: IpAddressEditComponent,
    data: { title: 'Edit IP Address' }
  },
  {
    path: 'audit-trail',
    component: AuditTrailComponent,
    data: { title: 'View Audit Trail' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }