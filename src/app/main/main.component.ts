import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

}
