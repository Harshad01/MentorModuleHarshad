
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }

  employeeData=[{empID:'',Name:'',team:'',Designation:'',Gender:'',date:''}];
 
  importData(empId: string, Name: string, team: string, Designation: string, Gender: string, Date: string){
    this.employeeData.push({
      empID: empId,
      Name: Name,
      team: team,
      Designation: Designation,
      Gender: Gender,
      date: Date
})
    
}
 
  
  

  }

