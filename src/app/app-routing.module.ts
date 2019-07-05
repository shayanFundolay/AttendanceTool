import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FinanceComponent } from './finance/finance.component';
import { SalesComponent } from './sales/sales.component';
import { ServicesComponent } from './services/services.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },

  { path: 'register', component: RegisterComponent },


  // {path: 'finance', component: FinanceComponent},
  // {path: 'supplier', component: SupplierComponent},

  // {path: 'sales', component: SalesComponent},
  // {path: 'customer', component: CustomerComponent },
  // {path: 'services', component: ServicesComponent},

  // {path: 'employee', component: EmployeeComponent},

  {
    path: '',
    component: AdminLayoutComponent,

    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
