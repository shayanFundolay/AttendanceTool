import { Component, OnInit } from '@angular/core';
import {HttpService} from '../dataservice/httpservice.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  // salesForm : FormGroup;
  // terms: any;
  // data_loaded: any= false;

  constructor() {

    // this.getTerms();

    // this.salesForm = new FormGroup ({
    //   customer:new FormControl("", Validators.required),
    //   customer_email:new FormControl("", Validators.required),
    //   billing_address:new FormControl("", Validators.required),
    //   term:new FormControl(),
    //   date:new FormControl("", Validators.required),
    //   due_date:new FormControl("", Validators.required),
    //   Add:new FormControl("", Validators.required),
    //   Cancel:new FormControl("", Validators.required),
    //   Total:new FormControl("", Validators.required),
    //   message_on_invoice:new FormControl("", Validators.required),
    //   message_on_statement:new FormControl("", Validators.required),

    // })

   }

  ngOnInit() {
  }

  // getTerms(){

  //   this.terms = [
  //     {
  //       'id': '1',
  //       'display': 'Net 30',

  //     },
  //     {
  //       'id': '2',
  //       'display': 'Net 50'

  //     },
  //     {
  //       'id': '3',
  //       'display': 'Net 60'

  //     },
  //     {
  //       'id': '4',
  //       'display': 'Due on Debt'

  //     },
  //   ]
  // }
}
