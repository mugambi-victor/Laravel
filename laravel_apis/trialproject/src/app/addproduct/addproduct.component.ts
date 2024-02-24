
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  productForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      this.router.navigate(['/login']); // Redirect to login if token is not found
      return;
    }
  }

  onSubmit() {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      this.router.navigate(['/login']); // Redirect to login if token is not found
      return;
    }

    if (this.productForm.valid) {
      console.log('Form data:', this.productForm.value);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      this.http.post('http://127.0.0.1:8000/api/create', this.productForm.value, { headers })
        .subscribe(response => {
          alert("product created successfully");
          
          console.log('Data sent successfully:', response);
          this.router.navigate(['/products']); 
        }, error => {
          console.error('Error sending data:', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }
}