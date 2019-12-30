import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products = new ProductService();
  constructor() { }
  ngOnInit() {
  }

}
