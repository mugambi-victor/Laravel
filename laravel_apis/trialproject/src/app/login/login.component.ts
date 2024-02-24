import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    
  }
 
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        response => {
          // Handle successful login response
          console.log('Logged in successfully:', response);
          // Store the token in localStorage
          localStorage.setItem('token', response.token);
          // Redirect the user to the dashboard or any other page
          this.router.navigate(['/products']);
        },
        error => {
          // Handle login error
          console.error('Login error:', error);
          // Display an error message to the user
          alert('Failed to log in. Please check your credentials and try again.');
        }
      );
    }
    else{
      alert("Validation failed");
    }
  }
}
