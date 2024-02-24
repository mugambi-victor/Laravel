import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ProductsComponentComponent,
    LoginComponent,
    IndexComponent,
    HomeComponent,
  ],
  imports: [
   
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
