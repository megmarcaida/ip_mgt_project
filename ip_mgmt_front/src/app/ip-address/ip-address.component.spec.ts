import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';

import { IpAddressComponent } from './ip-address.component';

describe('IpAddressComponent', () => {
  let component: IpAddressComponent;
  let fixture: ComponentFixture<IpAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpAddressComponent ],
      imports: [HttpClientTestingModule,HttpClientModule], 
      providers:[Router,HttpTestingController]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should contain "IP Address Management System"', () => {
    const ipAddressElement: HTMLElement = fixture.nativeElement;
    expect(ipAddressElement.textContent).toContain('IP Address Management System');
  });
});
