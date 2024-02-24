import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  // getProducts(){
  //   return this.http.get(this.apiUrl);
  // }
  getProducts(): Observable<Product[]> {
    const url = `${this.apiUrl}index`; // Assuming 'index' is the endpoint for fetching products
    
  
    return this.http.get<Product[]>(url).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError('Something went wrong while fetching products. Please try again later.');
      })
    );
  }
}
