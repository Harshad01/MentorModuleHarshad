import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginstateService {

  constructor() { }
  loginStatus:boolean=false;
  status(stat:boolean){
    if(stat){
      this.loginStatus=true;
    }else
    this.loginStatus=false;
  }
  isLogin(){
    if(this.loginStatus){
      return true;
    }else{
      return false;
    }
    
  }
}
