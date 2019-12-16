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
    this.products.push(new Product('Wool alpaca jacquard cardigan', 'img1.jpg', 6280));
    this.products.push(new Product('Tweed dress with detachable elements', 'img2.jpg', 4300));
    this.products.push(new Product('Leather ankle boot with Sylvie Web', 'img3.jpg', 1200));
    this.products.push(new Product('Loafers with specal elegance', 'img4.jpg', 1450));
    this.products.push(new Product('Sun Glasses "Hater Blockers"', 'img5.jpg', 600));
    this.products.push(new Product('Striped silk linen jacket with feline', 'img6.jpg', 2200));
    this.products.push(new Product('Linen jacket with "Cassandra" patch', 'img7.jpg', 3250));
    this.products.push(new Product('Gucci Bestiary backpack with tigers', 'img8.jpg', 1770));
   }
}
