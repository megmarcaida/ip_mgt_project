import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-ip-address-edit',
  templateUrl: './ip-address-edit.component.html',
  styleUrls: ['./ip-address-edit.component.css']
})
export class IpAddressEditComponent implements OnInit {

  ipForm: any;
  id:any=null
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getIpAddress(this.activeRouter.snapshot.params['id']);
    this.ipForm = this.formBuilder.group({
      ip_address: ['', Validators.compose([
        Validators.required,
        Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')
      ])],
      description: ['', Validators.compose([Validators.required])],
    })
  }

  getIpAddress(id:any){
    this.authService.getIPAddress(id)
    .subscribe((res: any) => {
  
      this.id = res.id
      this.ipForm.setValue({
        ip_address: res.ip_address,
        description: res.description
      });
      
    }, (err: any) => {
      console.log(err)
    });
  }
  
  updateIP(form:any){
    if(localStorage.getItem('access_token')){
    this.authService.updateIP(this.id,form)
      .subscribe((res: any) => {
        console.log(res)

        //get timestamp
        const current = new Date();
        const log = {
          action_made: "update_data",
          description: "updated " + JSON.stringify(form) +" on "+ current.toLocaleString()
        }
    
        console.log(log);
        //audit trail save here
        this.authService.saveLogs(log)
          .subscribe((res: any) => {
            console.log(res)
          }, (err: any) => {
            console.log(err)
          });
          alert('Successfully updated!')
        this.router.navigate(['/']);
      }, (err: any) => {
        console.log(err)
      });
    }else{
      this.router.navigate(['/login']);
    }
  }

}
