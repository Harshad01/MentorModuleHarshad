import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  // data=[{ID: '',Name: '', Team: '', Designation: '', Gender: '', Date: ''}];
  // userData!: { ID: string; Name: string; Team: string; Designation: string; Gender: string; Date: string; };
  
  

  constructor(private router: Router, private datepipe: DatePipe, private _employeedata: EmployeeDataService) {
    
   }

  ngOnInit(): void {
  }

 

  onSubmit(form:NgForm){
    console.log(form);
    
    let date = new Date(form.value.Date).toDateString();
    console.log(date);

    

    

  //   this.data.push({
  //     ID: form.value.EmployeeID,
  //     Name: form.value.Name,
  //     Team: form.value.Team,
  //     Designation: form.value.Designation,
  //     Gender: form.value.Gender,
  //     Date: date
  // })
   this._employeedata.importData(form.value.EmployeeID,form.value.Name,form.value.Team,form.value.Designation,form.value.Gender,date)
  
    this.router.navigate(['Directory']);
 }

}
