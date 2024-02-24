// product.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports:[CommonModule, RouterLink],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      this.router.navigate(['/login']);
      return;
    }

    this.productService.getProducts(token).subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  viewProductDetails(productId: number) {
    this.router.navigate(['/details', productId]);
  }
}
