import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';

const appRoutes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',

  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
  },

  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './Layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]

  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

//export const routing = RouterModule.forRoot(appRoutes);