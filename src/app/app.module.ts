import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpClientModule  } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeService } from './dataservice/employee-service/employee-service.service';
import { DataService } from './data.service';
import { HttpService } from './dataservice/httpservice.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule,
    NgbModule.forRoot()

  ],
  providers: [NgbActiveModal,EmployeeService, DataService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
