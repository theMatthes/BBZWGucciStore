import { Component } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products = new ProductService();
  title = 'BBZW Gucci Store';
  isMenuCollapsed = true;
}
