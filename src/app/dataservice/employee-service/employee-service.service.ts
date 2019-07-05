import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/_models/employee';

@Injectable()
export class EmployeeService {

    url = 'http://localhost:8100/api/create/employee';

  constructor(private http: HttpClient) { }

  enroll (employee: Employee) {
   return this.http.post<any> (this.url, employee);
  }


}
