import { Routes } from '@angular/router';

import { RegisterComponent } from 'src/app/register';
import { LoginComponent } from 'src/app/login';
import { AuthGuard } from 'src/app/_guards';
import { FinanceComponent } from 'src/app/finance/finance.component';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { SalesComponent } from 'src/app/sales/sales.component';
import { ServicesComponent } from 'src/app/services/services.component';
import { SupplierComponent } from 'src/app/supplier/supplier.component';
import { CustomerComponent } from 'src/app/customer/customer.component';
import { AttendanceComponent } from 'src/app/attendance/attendance.component';
import {MarkAttendanceComponent } from 'src/app/mark-attendance/mark-attendance.component';
import { AddRolesComponent } from 'src/app/add-roles/add-roles.component';


export const AdminLayoutRoutes: Routes = [

    // { path: 'finance', component: FinanceComponent },
    { path: 'employee', component: EmployeeComponent },
    // { path: 'sales', component: SalesComponent },
    // { path: 'services', component: ServicesComponent },
    // { path: 'supplier', component: SupplierComponent },
    // { path: 'customer', component: CustomerComponent },
    { path: 'attendance', component: AttendanceComponent },
    { path: 'add-roles', component: AddRolesComponent},
    { path: 'mark-attendance', component: MarkAttendanceComponent }

];
