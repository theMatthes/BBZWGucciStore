import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
@Injectable({
  providedIn: 'root',
})
// https://itnext.io/how-to-create-a-service-with-httpclient-and-injectable-in-angular-9-8-e3cc50c24c83
export class ProductService {
  private static products: Array<Product> = [];
  private static shoppingKart: Array<IShoppingKartItem> = [];
  // private static http: HttpClient;
  constructor(private http: HttpClient) { }
  // constructor(@Optional() http: HttpClient) {
  //   if (http) { ProductService.http = http; }
  // }
  public async getProducts(): Promise<Array<Product>> {
    if (!ProductService.products.length) {
      const body: Array<any> = await this.http.get('/assets/products.json').toPromise() as Array<any>;
      body.forEach((product => {
        ProductService.products.push(new Product(
          product[0],
          product[1],
          product[2],
          product[3],
          product[4]
        ));
      }));
    }
    return ProductService.products;
  }
  public getPrice() {
    let sum: number;
    ProductService.products.forEach(element => {
      sum += element.price;
    });
  }
  public async getProductByID(id: number)  {
    for (const product of await this.getProducts()) {
      if (+product.id === +id) {
        return product;
      }
    }
    return null;
  }
  public async getShoppingKart() {
    const kart = [];
    const body: Array<any> = await this.http.get('/api/shoppingKart').toPromise() as Array<any>;
    body.forEach((product => {
      kart.push(this.getProductByID(product));
    }));
    return ProductService.shoppingKart.sort();
  }
  public async getShoppingKartLength() {
    let count = 0;
    (await this.getShoppingKart()).forEach(kartItem => {
      count += kartItem.count;
    });
    return count;
  }
  public getProductTotal(kartItem: IShoppingKartItem): number {
    return kartItem.product.discontPrice * kartItem.count;
  }
  public async getGrandTotal() {
    const kart = await this.getShoppingKart();
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
  clearKart() {
    ProductService.shoppingKart = [];
  }
}
