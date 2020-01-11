import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  submitted: boolean;
  products = new ProductService();
  stores = ['Aargau', 'Bern', 'Fribourg', 'Luzern', 'Olten', 'Lausanne', 'Zürich'];
  checkoutForm: FormGroup;
  // checkout;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      lastname: new FormControl('', [
        Validators.required,
      Validators.minLength(2)
    ]),
      firstname: new FormControl('', [
        Validators.required,
      Validators.minLength(2)
    ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ])
    });
  }
  onSubmit() {
    if (this.checkoutForm.invalid) {
      this.submitted = true;
      // this.checkoutForm.controls.lastname.show = true;
      return false;
    }
    // const req = this.http.post<object>('api/checkout',
    //   customerData);
    // req.subscribe((res) => { console.log(res); });
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm);

    this.products.clearKart();
    this.checkoutForm.reset();
  }

}
