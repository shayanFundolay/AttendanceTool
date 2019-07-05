import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { FinanceComponent } from 'src/app/finance/finance.component';
import { SalesComponent } from 'src/app/sales/sales.component';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { SupplierComponent } from 'src/app/supplier/supplier.component';
import { CustomerComponent } from 'src/app/customer/customer.component';
import { ServicesComponent } from 'src/app/services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkAttendanceComponent } from 'src/app/mark-attendance/mark-attendance.component';
import { AttendanceComponent } from 'src/app/attendance/attendance.component';
import { AddRolesComponent } from 'src/app/add-roles/add-roles.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    FinanceComponent,
    SalesComponent,
    EmployeeComponent,
    SupplierComponent,
    CustomerComponent,
    ServicesComponent,
    AttendanceComponent,
    AddRolesComponent,
    MarkAttendanceComponent
    
  ]
})

export class AdminLayoutModule { }
