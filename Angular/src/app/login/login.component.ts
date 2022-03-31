import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { LoginstateService } from '../Services/loginstate.service';
import { user } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url='https://localhost:7066/api/Login/LoginManager';
  alertStatus: boolean =false;
  isValid: boolean = false;
  constructor(private _loginstate:LoginstateService, private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCheckLogin(userData:user){
    this.http.post<user>(this.url,userData,{ observe: 'response' }).subscribe(
      (res)=> {
        if (res.status == 200){
          this.router.navigate(['Directory']);
          this._loginstate.status(true);
        }
        else if(res.status == 400){
          console.log("There was a problem login In");
        }
      }
    )
  }

  

 
    
    
}




