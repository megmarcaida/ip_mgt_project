import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { IpAddressComponent } from './ip-address/ip-address.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IpAddressAddComponent } from './ip-address-add/ip-address-add.component';
import { IpAddressEditComponent } from './ip-address-edit/ip-address-edit.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
@NgModule({
  declarations: [
    AppComponent,
    IpAddressComponent,
    LoginComponent,
    IpAddressAddComponent,
    IpAddressEditComponent,
    AuditTrailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
