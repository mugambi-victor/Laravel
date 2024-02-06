import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = 'http://127.0.0.1/8000/api/'; // Replace with your actual URL
    return this.http.get<any>(url);
  }
}
