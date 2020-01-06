import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  products = new ProductService();
  stores = ['Aargau', 'Bern', 'Fribourg', 'Luzern', 'Olten', 'Lausanne', 'Zürich'];
  checkoutForm;
  // checkout;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.checkoutForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      email: ''
    });
  }
  onSubmit(customerData) {
    const req = this.http.post<object>('api/checkout',
      customerData);
    req.subscribe((res) => { console.log(res); });
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.products.clearKart();
    this.checkoutForm.reset();
  }

}
