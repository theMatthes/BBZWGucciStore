export interface IShoppingKartItem {
  count: number;
  productId: number;
  product?: Product;
}
export interface IFormValidationResponse {
  invalid: Array<string>;
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
