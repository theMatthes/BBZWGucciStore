import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterModule,
        SweetAlert2Module.forRoot(),
      ],
      providers: [
        HttpClient
      ],
      declarations: [CheckoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
