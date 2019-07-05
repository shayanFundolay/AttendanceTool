import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  token:any;
  user:any;
  role:any;
  
  constructor() { }

  updateStorage(data){

    localStorage.setItem('token',JSON.stringify(data.token))
    localStorage.setItem('user',JSON.stringify(data.user))
    return console.log('storage updated successfully!');

  }

  ifTokenExists(){
    return JSON.parse(localStorage.getItem('token'))
  }

  getToken(){

    if(this.ifTokenExists()){
      return JSON.parse(localStorage.getItem('token')).access_token;
    }
    return '';
    
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'))
  }

  getFullName(){
    return this.getUser().first_name + ' '+ this.getUser().last_name;
  }

  getRole(){
    let user = this.getUser()
    return user.role
  }

  getUserId(){
    let user = this.getUser()
    return user.id
  }

  getRoleId(){
    let role = this.getRole()
    return role.id
  }

  remove(){

    localStorage.removeItem('user')
    localStorage.removeItem('token')
    return console.log('storage updated successfully!');
    
  }

  getAccount(){
    let account = this.getUser().account
    return account
  }

  getAccountId(){
    return this.getAccount().id
  }


}
