import { Routes } from '@angular/router';

import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { authGuardGuard } from './authguard/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[authGuardGuard]
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '**',
    component:Error404Component,
  }

];
