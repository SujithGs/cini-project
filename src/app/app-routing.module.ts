import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register/register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password/forgot-password.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
