import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:8000/oauth/token';
  apiUrl = 'http://localhost:8000/api';
  options: any;

  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
  }

  //login method
  login(u: string, p: string) {
    return this.http.post(this.authUrl, {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'pSMexZE6q7VgfSZbasol4f86YxMmpCOJ9XXw21nm',
      username: u,
      password: p,
      scope: ''
    }, this.options);
  }

  //logout method
  logout() {
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer " + localStorage.getItem('access_token'));
    
    return this.http.get(this.apiUrl + '/token/revoke', { headers: parameters });
  }

  //get ip addresses method
  ipaddress() {
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer " + localStorage.getItem('access_token'));
    
    return this.http.get(this.apiUrl + '/ipaddress', { headers: parameters });
  }

  //add ip method
  addIP(data:any) {
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer " + localStorage.getItem('access_token'));
    return this.http.post(this.apiUrl + '/ipaddress',data,  { headers: parameters });
  }

  //get ip addresses method
  getIPAddress(id:any) {
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer " + localStorage.getItem('access_token'));
    
    return this.http.get(this.apiUrl + '/ipaddress/'+id, { headers: parameters });
  }

  //update ip address
  updateIP(id:any,data:any){
    
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer " + localStorage.getItem('access_token'));
    console.log(data)
    return this.http.put(this.apiUrl + '/ipaddress/'+id, data ,  { headers: parameters });
  }

  //save logs in audit trail
  saveLogs(data:any){
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer " + localStorage.getItem('access_token'));
    return this.http.post(this.apiUrl + '/audit_trail',data,  { headers: parameters });
  }

  //get audit trail
  getAuditTrail() {
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer " + localStorage.getItem('access_token'));
    
    return this.http.get(this.apiUrl + '/audit_trail', { headers: parameters });
  }

}
