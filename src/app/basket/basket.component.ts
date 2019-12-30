import { Component, OnInit } from '@angular/core';
import { ProductService, Product, IShoppingKartItem } from '../products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products = new ProductService();
  addRemoveProduct(currentProduct: Product, remove: boolean) {
    this.products.removeProduct(currentProduct)
  }
  constructor() { }
  ngOnInit() {
  }

}
