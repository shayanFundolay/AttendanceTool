import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class HttpService {
tempData:any;
endpoint:any = 'http://localhost:8100';

  constructor(public http: HttpClient, public router:Router) {
    
  }
  
  public post_method (url, post, append: any = false) {
    
  let headers:any;
  if(post != ''){
    headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Type':'Operations'
    });
  } else {
    headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Type':'Operations'
    });
  }
  return this.http
  .post(this.endpoint + url, post, {headers:headers})
  .map(
    success => {
      console.log(success);
      this.tempData = success;
      return this.tempData;
    },
    err => {
      return err;
    }
  );
  }
  

}
