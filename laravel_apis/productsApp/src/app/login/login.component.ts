import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  
  credentials = {
    email: '',
    password: ''
  };

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        // Successful login
        alert('Login successful!');
  
        // Store authentication token in local storage
        // localStorage.setItem('authToken', response.token);

        // Redirect to a protected page
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        // Login error
        console.error('Login failed:', error);
  
        // Provide more user-friendly error messaging here
      }
    });
  }
}
