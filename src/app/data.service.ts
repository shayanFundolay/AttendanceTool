import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {
   

  constructor( private http: HttpClient) { }

  getAttendance(url: any) {
    return this.http.get(url);
  }

  getEmployees(url:any) {
    return this.http.get(url);
  }
}
