import { Component, OnInit } from '@angular/core';
import { ProductService, Product, IShoppingKartItem } from '../products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  shoppingKart = this.productService.getShoppingKart();
  shoppingKartLength = this.productService.getShoppingKartLength();
  grandTotal = this.productService.getGrandTotal();
  addRemoveProduct(currentProduct: Product, remove: boolean) {
    // this.productService.removeProduct(currentProduct);
  }
  constructor(public productService: ProductService) {  }
  ngOnInit() {
  }

}
