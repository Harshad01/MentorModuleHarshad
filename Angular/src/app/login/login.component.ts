import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginstateService } from '../loginstate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alertStatus: boolean =false;
  isValid: boolean = false;
  userNameLogin: string = '';
  emaiLlogin ='';
  userNameDetail: string ='';
  emailDetail:string='';

  constructor(private _loginstate:LoginstateService, private router: Router) { }

  ngOnInit(): void {
  }

  

  onSubmit(form: NgForm){
    this.userNameLogin = 'Harshad';
    this.emaiLlogin ='harshadnehate30@gmail.com';
    this.userNameDetail=form.value.Username;
    this.emailDetail=form.value.email;
    console.log(this.userNameDetail);
    console.log(this.emailDetail);
    if(this.userNameLogin != this.userNameDetail || this.emaiLlogin != this.emailDetail){
      this.alertStatus=true;
    }
    
    else if(this.userNameLogin === this.userNameDetail || this.emaiLlogin === this.emailDetail){
      this.isValid=true;
      this._loginstate.status(true)
      this.router.navigate(['Directory']);
      console.log(this._loginstate.isLogin())
    }
    
    
}



}
