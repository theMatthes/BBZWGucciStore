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
  product: Product;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((value: ParamMap, index: number) => {
        console.log(value, +value.get('id'), arguments);
        this.product = new ProductService().getProductByID(+value.get('id'));
        return [];
      })
    );
  }
}
