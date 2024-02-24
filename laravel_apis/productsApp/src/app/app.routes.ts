import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes =  [{ path: 'dashboard', component: IndexComponent }, {path: '', component: HomeComponent }];
