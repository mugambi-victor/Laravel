// index.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'; // Import ProductService
import { Product } from '../models/product.model'; // Import Product model

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    // Fetch products from ProductService
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
