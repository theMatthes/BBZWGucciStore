import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  // public name: string;
  constructor(public name: string, public URI: string, public price: number) {}
}
export class ProductService {
  products: Array<Product> = [];
  constructor() {
    this.products.push(new Product('Full outfit', 'img1.jpg', 3999.99));
    this.products.push(new Product('Full outfit', 'img1.jpg', 3.14));
   }
}
