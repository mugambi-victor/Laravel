import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  credentials = {
    email: '',
    password: ''
  };

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        // Successful login
        alert('Login successful!');
  
        // Add additional success logic here, e.g.,
        // - Store authentication tokens
        // - Redirect to a protected page
        // - Update application state
      },
      error: (error) => {
        // Login error
        console.error('Login failed:', error);
  
        // Provide more user-friendly error messaging here, e.g.,
        // - Display specific error messages
        // - Offer retry options
        // - Handle different error types gracefully
      }
    });
  }
  
}