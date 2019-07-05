import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../dataservice/httpservice.service';
import { Employee } from '../_models/employee';
import { EmployeeService } from '../dataservice/attendance-service/attendance-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  employees: any;
  loader: any = true;
  EmployeeForm: FormGroup;
  All_Employees: any;
  employeeModel = new Employee ('','','','','',);

  constructor(private data: DataService, private http: HttpService, private employeeService: EmployeeService) {

    this.initForm()

  }

  ngOnInit() {

    this.data.getEmployees("http://localhost:8100/api/employees")
      .subscribe(data => {
        this.employees = data;
        this.loader = false;
        console.log(this.employees);
      })

  }
  Paginate(url: any) {
    this.data.getEmployees(url).subscribe(data => {
      this.employees = data;
      this.loader = false;
      console.log(this.employees);
    })
  }

  initForm() {
    this.EmployeeForm = new FormGroup({
      first_name: new FormControl('Shayan', Validators.required),
      last_name: new FormControl('Ahmed', Validators.required),
      employee_no: new FormControl('XPR-1060', Validators.required),
      shift_id: new FormControl('MOR-2', Validators.required),
      department_id: new FormControl('IT', Validators.required)

    })
  }


  onSubmit () {
    this.employeeService.enroll(this.employeeModel)
    .subscribe(
      data => console.log ('Success!', data),
      error => console.log ('Error!', error)
   
      )
      this.add();

      
  }
  
  // onSubmit() {
  //   if (!this.EmployeeForm.valid)
  //     return console.warn('invalid inputs', this.EmployeeForm.value)

  //   this.add()
  // }

   add() {

     let employee = this.EmployeeForm.value;
    let post = 'first_name=' + employee.first_name +
       '&last_name=' + employee.last_name +
       '&employee_no=' + employee.employee_no +
       '&shift_id=' + employee.shift_id +
       '&department_id=' + employee.department_id

     this.http.post_method("http://localhost:8100/api/create/employee", post, true)
       .subscribe(
         (success) => {
           console.log(success)
         },
         (err) => {

                }
     )


   }
  

}