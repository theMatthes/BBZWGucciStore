import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  stores = ['Aargau', 'Bern', 'Fribourg', 'Luzern', 'Olten', 'Lausanne', 'Zürich'];
  constructor() { }
  checkoutForm() {
    console.log(arguments);
    return false;
  }

}
