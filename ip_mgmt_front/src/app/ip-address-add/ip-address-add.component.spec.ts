import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressAddComponent } from './ip-address-add.component';

describe('IpAddressAddComponent', () => {
  let component: IpAddressAddComponent;
  let fixture: ComponentFixture<IpAddressAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpAddressAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAddressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
