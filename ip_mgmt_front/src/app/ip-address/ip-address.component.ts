import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.css']
})
export class IpAddressComponent implements OnInit {

   accessToken: any;
   accessTokenDetails: any;
   loading: any;
 
   constructor(
     private authService: AuthService,
     private router: Router
   ) {
     this.accessToken = localStorage.getItem('access_token');
   }
 
   ngOnInit(): void { }
 
  
   logout(): void {
     this.loading = true;
     this.authService.logout()
       .subscribe(() => {
         this.loading = false;
         localStorage.removeItem('access_token');
         this.router.navigate(['/login']);
       });
   }

}
