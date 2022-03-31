import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../Services/employee-data.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
   
  constructor(private router: Router, private _employeedata: EmployeeDataService) {
    
   }

  ngOnInit(): void {
  }

 

  onSubmit(form:NgForm){
    
    let date = new Date(form.value.Date).toDateString();
    this._employeedata.importData(form.value.EmployeeID,form.value.Name,form.value.Team,form.value.Designation,form.value.Gender,date)
    this.router.navigate(['Directory']);
 }

}
