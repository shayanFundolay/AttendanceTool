import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import { Data } from '@angular/router';


@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {

  constructor(private data: DataService) {}

   attendance: any;
   loader: any = true;


  ngOnInit() {

   this.data.getAttendance("http://localhost:8100/api/attendanceview")
      .subscribe(data => {
        this.attendance = data;
        this.loader = false;
        console.log(this.attendance);
      })

  }
  Paginate(url: any) {
    this.data.getAttendance(url).subscribe(data => {
      this.attendance = data;
      this.loader = false;
      console.log(this.attendance);
    })
  }
  
}
