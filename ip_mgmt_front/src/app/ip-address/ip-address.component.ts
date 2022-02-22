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
   errors: any;
   ip_addresses:any;
   ip_address:any;
   description:any;
 
   constructor(
     private authService: AuthService,
     private router: Router
   ) {
     this.accessToken = localStorage.getItem('access_token');
   }
 
  ngOnInit(): void {

    this.authService.ipaddress()
    .subscribe((data)=>{
      this.loading = false;
      console.log(data);
      this.ip_addresses = data;
    });

  }
 
  logout(): void {
     this.loading = true;
     this.authService.logout()
       .subscribe(() => {
         this.loading = false;

          //get timestamp
          const current = new Date();
          const log = {
            action_made: "logout",
            description: "logout on "+ current.toLocaleString()
          }
      
          console.log(log);
          //audit trail save here
          this.authService.saveLogs(log)
            .subscribe((res: any) => {
              console.log(res)
            }, (err: any) => {
              console.log(err)
            });


         localStorage.removeItem('access_token');

         alert('Successfully logout!')

         this.router.navigate(['/login']);
       });
   }

}
