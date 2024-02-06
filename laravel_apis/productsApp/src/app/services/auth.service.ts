import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<any> {
    const options = { withCredentials: true };
    return this.http.post<any>('http://127.0.0.1:8000/api/login', credentials, options);
  }
  
}
