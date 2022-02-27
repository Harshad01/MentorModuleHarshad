import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';


@Component({
  selector: 'app-empolyee-directory',
  templateUrl: './empolyee-directory.component.html',
  styleUrls: ['./empolyee-directory.component.css']
})
export class EmpolyeeDirectoryComponent implements OnInit {

  constructor(private router: Router, private _employeeData: EmployeeDataService) { }
  data=[{empID:'',Name:'',team:'',Designation:'',Gender:'',date:''}];
  ngOnInit(): void {
    this.data=this._employeeData.employeeData;
  }

  
  

  onAddEmployee(){
    this.router.navigate(['EmployeeForm']);
    
  }

}
