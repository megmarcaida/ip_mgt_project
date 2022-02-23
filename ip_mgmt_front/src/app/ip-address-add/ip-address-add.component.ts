import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ip-address-add',
  templateUrl: './ip-address-add.component.html',
  styleUrls: ['./ip-address-add.component.css']
})
export class IpAddressAddComponent implements OnInit {

  ipForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ipForm = this.formBuilder.group({
      ip_address: ['', Validators.compose([
        Validators.required,
        Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')
      ])],
      description: ['', Validators.compose([Validators.required])],
    })
  }
  
  addIP(){
    if(localStorage.getItem('access_token')){
    const data = {
      ip_address: this.ipForm.controls.ip_address.value,
      description: this.ipForm.controls.description.value,
    }

    console.log(data);
    this.authService.addIP(data)
      .subscribe((res: any) => {
        console.log(res)

        //get timestamp
      const current = new Date();
      const log = {
        action_made: "add_data",
        description: "added " + JSON.stringify(data) +" on "+ current.toLocaleString()
      }
  
      console.log(log);
      //audit trail save here
      this.authService.saveLogs(log)
        .subscribe((res: any) => {
          console.log(res)
        }, (err: any) => {
          console.log(err)
        });
        alert('Successfully added!')
        this.router.navigate(['/']);
      }, (err: any) => {
        console.log(err)
      });


      
    }else{
      this.router.navigate(['/login']);
    }
  }
}
