// product-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports:[CommonModule],
})
export class DetailsComponent implements OnInit {
  productId!: number;
  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      // Handle the absence of token, maybe redirect to login page
      return;
    }
    this.productId = +this.route.snapshot.paramMap.get('id')!; // Retrieve product ID from route parameters
    this.productService.getProductById(token, this.productId).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }
}
