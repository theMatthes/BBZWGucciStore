import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class Product {
  // public name: string;
  public actionPrice(): number {
    return Math.abs((this.price + .5 * .9) / 100) * 100;
  }
  constructor(public id: number, public name: string, public URI: string, public price: number) { }
}
export class ProductService {
  public products: Array<Product> = [];
  constructor() {
    this.products.push(new Product(1, 'Wool alpaca jacquard cardigan', 'img1.jpg', 6281));
    this.products.push(new Product(2, 'Tweed dress with detachable elements', 'img2.jpg', 4300));
    this.products.push(new Product(3, 'Leather ankle boot with Sylvie Web', 'img3.jpg', 1200));
    this.products.push(new Product(4, 'Loafers with specal elegance', 'img4.jpg', 1450));
    this.products.push(new Product(5, 'Sun Glasses "Hater Blockers"', 'img5.jpg', 600));
    this.products.push(new Product(6, 'Striped silk linen jacket with feline', 'img6.jpg', 2200));
    this.products.push(new Product(7, 'Linen jacket with "Cassandra" patch', 'img7.jpg', 3250));
    this.products.push(new Product(8, 'Gucci Bestiary backpack with tigers', 'img8.jpg', 1770));
  }
  private shoppingKart: Array<Product> = [];
  public getShoppingKart(): Array<Product> {
    return this.shoppingKart;
  }
  public addProduct(product: Product) {
    this.shoppingKart.push(product);
  }
}
