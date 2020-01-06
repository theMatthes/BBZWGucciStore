import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../products.service';
import { RouteConfigLoadEnd, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  products = new ProductService();
  product: Product;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.product = this.products.getProductByID(+this.route.snapshot.params.id);
    console.log(this.route.snapshot.params.id);
    this.route.paramMap.subscribe(params => {
    });
    // this.route.paramMap.pipe(
    //   switchMap((value: ParamMap, index: number) => {
    //     console.log(value, +value.get('id'), arguments);
    //     this.product = new ProductService().getProductByID(+value.get('id'));
    //     return [];
    //   })
    // );
  }
}
