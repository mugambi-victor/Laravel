import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule,  } from '@angular/common/http';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { AddproductComponent } from './addproduct/addproduct.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ProductComponent,RouterModule, LoginComponent, FormsModule ,ReactiveFormsModule, HttpClientModule ,  CommonModule, AddproductComponent],
  providers: [AuthService, HttpClientModule, ProductService],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trialproject';
}
