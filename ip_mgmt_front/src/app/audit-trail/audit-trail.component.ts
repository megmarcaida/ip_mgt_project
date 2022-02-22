import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {

  
  audit_trail:any;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getAuditTrail()
    .subscribe((data)=>{
      console.log(data);
      this.audit_trail = data;
    });
  }

}
