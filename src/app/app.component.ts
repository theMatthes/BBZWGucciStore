import { Component, ModuleWithProviders } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public productService: ProductService) { }
  // products = AppComponent.forRoot()

  title = 'BBZW Gucci Store';
  isMenuCollapsed = true;
  static forRoot(config: ProductService): ModuleWithProviders {
    return {
      ngModule: AppComponent,
      providers: [
        { provide: ProductService, useValue: config }
      ]
    };
  }

}
