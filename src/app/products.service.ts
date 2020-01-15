import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Observable, Subject } from 'rxjs';
import { Product, IShoppingKartItem } from './_types/Product';

// https://itnext.io/how-to-create-a-service-with-httpclient-and-injectable-in-angular-9-8-e3cc50c24c83
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private static products: Array<Product> = [];
  private static shoppingKart: Array<IShoppingKartItem> = [];
  public kartSubject = new Subject<IShoppingKartItem>();
  // private static http: HttpClient;
  constructor(private http: HttpClient) { }
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
  shoppingKartChange(): Observable<any> {
    return this.kartSubject.asObservable();
  }
  onKartUpdate(kartItem?: IShoppingKartItem) {
    this.kartSubject.next();
  }
  public getPrice() {
    let sum: number;
    ProductService.products.forEach(element => {
      sum += element.price;
    });
  }
  public async getProductByID(id: number) {
    for (const kartItem of await this.getProducts()) {
      if (+kartItem.id === +id) {
        return kartItem;
      }
    }
    return null;
  }
  public async getShoppingKart(full = false) {
    const kart: Array<IShoppingKartItem> = [];
    const body: Array<any> = await this.http.get('/api/shoppingKart').toPromise() as Array<IShoppingKartItem>;
    for (const product of body) {
      product.product = await this.getProductByID(product.productId);
      kart.push(product);
      // switchMap(this.kartSubject)
      // this.kartSubject.switchMap();
    }
    return kart;
  }
  public async getShoppingKartLength() {
    let count = 0;
    for (const kartItem of (await this.getShoppingKart())) {
      count += kartItem.count;
    }
    return count;
  }
  public getProductTotal(kartItem: IShoppingKartItem): number {
    return kartItem.product.discontPrice * kartItem.count;
  }
  public async getGrandTotal() {
    const kart = await this.getShoppingKart();
    let total = 0;
    for (const kartItem of kart) {
      total += await this.getProductTotal(kartItem);
    }
    return total;
  }
  public async addProduct(newProduct: Product) {
    await this.http.get('/api/shoppingKart/add/' + newProduct.id).toPromise();
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
        productId: newProduct.id,
        product: newProduct
      };
      ProductService.shoppingKart.push(productToAdd);
    }
    this.onKartUpdate();
  }
  public async removeProduct(oldProduct: Product) {
    await this.http.get('/api/shoppingKart/remove/' + oldProduct.id).toPromise();
    ProductService.shoppingKart.forEach((kartItem, index, array) => {
      if (kartItem.product === oldProduct) {
        kartItem.count -= 1;
        if (kartItem.count < 1) {
          console.log(kartItem.count, index, array);
          array.splice(index, 1);
        }
      }
    });
    this.onKartUpdate();
  }
  clearKart() {
    ProductService.shoppingKart = [];
  }
}
