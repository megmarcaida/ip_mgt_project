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
        this.router.navigate(['/']);
      }, (err: any) => {
        console.log(err)
      });
    }else{
      this.router.navigate(['/login']);
    }
  }
}
