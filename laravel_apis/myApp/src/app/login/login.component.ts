import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  
  credentials = {
    email: '',
    password: ''
  };
  onEmailInput(event: any) {
    this.credentials.email = event.target.value || '';
  }
  // login() {
  //   console.log(this.credentials.email);
  // }
}
