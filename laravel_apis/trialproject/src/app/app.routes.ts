import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { AddproductComponent } from './addproduct/addproduct.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { 
        path: 'products', 
        component: ProductComponent
    },
    { 
        path: 'login', 
        component: LoginComponent
    },
    { 
        path: 'details/:id', 
        component: DetailsComponent
    },
    {
        path: 'addproduct',
        component: AddproductComponent
    }
];

export const appRoutes = routes;