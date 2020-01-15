import { TestBed, async } from '@angular/core/testing';

import { ProductService } from './products.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ProductService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
