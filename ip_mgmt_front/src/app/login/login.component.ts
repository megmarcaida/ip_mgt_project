import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables
  loading:any;
  errors:any;
  email:any;
  password:any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void { }

  login(): void {
    this.loading = true;
    this.errors = false;
    this.authService.login(this.email, this.password)
      .subscribe((res: any) => {
        // Store the access token in the localstorage
        localStorage.setItem('access_token', res.access_token);
        this.loading = false;

        //get timestamp
        const current = new Date();
        const log = {
          action_made: "login",
          description: "login on "+ current.toLocaleString()
        }
    
        console.log(log);
        //audit trail save here
        this.authService.saveLogs(log)
          .subscribe((res: any) => {
            console.log(res)
          }, (err: any) => {
            console.log(err)
          });
          alert('Successfully login!')
        // Navigate to home page
        this.router.navigate(['/']);
      }, (err: any) => {
        this.loading = false;
        this.errors = true;
      });
  }

}