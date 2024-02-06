import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [HttpClientModule,AuthService ],
  imports: [RouterOutlet, ProductsComponentComponent, LoginComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
 name = 'victor';
}
