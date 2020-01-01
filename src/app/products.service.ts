import { Injectable, NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
export interface IShoppingKartItem {
  count: number;
  product: Product;
}
export class Product {
  public id: number;
  public name: string;
  public description: string;
  public image: string;
  public price: number;
  public discontPrice: number;
  public getActualPrice(): number {
    return 1;
  }
  constructor(id: number, name: string, description: string, image: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.discontPrice = Math.round((this.price * .9) / 100) * 100 - 1;
  }
}
export class ProductService {
  public static products: Array<Product> = [];
  constructor() {
    if (!ProductService.products.length) {
      ProductService.products.push(new Product(1, 'Wool alpaca jacquard cardigan', 'Made in china', 'img1.jpg', 6281));
      ProductService.products.push(new Product(2, 'Tweed dress with detachable elements', 'Made in china', 'img2.jpg', 4300));
      ProductService.products.push(new Product(3, 'Leather ankle boot with Sylvie Web', 'Made in china', 'img3.jpg', 1200));
      ProductService.products.push(new Product(4, 'Loafers with specal elegance', 'Made in china', 'img4.jpg', 1450));
      ProductService.products.push(new Product(5, 'Mask sunglasses with star rivets', 'Made in china', 'img5.jpg', 955));
      ProductService.products.push(new Product(6, 'Striped silk linen jacket with feline', 'Made in china', 'img6.jpg', 2200));
      ProductService.products.push(new Product(7, 'Linen jacket with "Cassandra" patch', 'Made in china', 'img7.jpg', 3250));
      ProductService.products.push(new Product(8, 'Gucci Bestiary backpack with tigers', 'Made in china', 'img8.jpg', 1770));

      this.addProduct(ProductService.products[0]);
      this.addProduct(ProductService.products[2]);
      this.addProduct(ProductService.products[3]);
      this.addProduct(ProductService.products[0]);
    }
  }
  private static shoppingKart: Array<IShoppingKartItem> = [];
  public static getPrice() {
    let sum: number;
    ProductService.products.forEach(element => {
      sum += element.price;
    });
  }
  public getProductByID(id: number): Product {
    for (const product of ProductService.products) {
      if (+product.id === +id) {
        return product;
      }
    }
    return null;
  }
  public getProducts() {
    return ProductService.products;
  }
  public getShoppingKart(): Array<IShoppingKartItem> {
    return ProductService.shoppingKart.sort();
  }
  public getShoppingKartLength(): number {
    let count = 0;
    this.getShoppingKart().forEach(kartItem => {
      count += kartItem.count;
    });
    return count;
  }
  public getProductTotal(kartItem: IShoppingKartItem): number {
    return kartItem.product.discontPrice * kartItem.count;
  }
  public getGrandTotal() {
    const kart = this.getShoppingKart();
    let total = 0;
    kart.forEach(kartItem => {
      total += this.getProductTotal(kartItem);
    });
    return total;
  }
  public addProduct(newProduct: Product) {
    let alreadyIsInKart = false;
    ProductService.shoppingKart.forEach(kartItem => {
      if (kartItem.product === newProduct) {
        kartItem.count += 1;
        alreadyIsInKart = true;
      }
    });
    if (!alreadyIsInKart) {
      const productToAdd: IShoppingKartItem = {
        count: 1,
        product: newProduct
      };
      ProductService.shoppingKart.push(productToAdd);
    }
  }
  public removeProduct(oldProduct: Product) {
    ProductService.shoppingKart.forEach((kartItem, index, array) => {
      if (kartItem.product === oldProduct) {
        kartItem.count -= 1;
        if (kartItem.count < 1) {
          console.log(kartItem.count, index, array);
          array.splice(index, 1);
        }
      }
    });
  }
}
