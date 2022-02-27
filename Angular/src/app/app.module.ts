import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginstateService } from './loginstate.service';
import { EmpolyeeDirectoryComponent } from './empolyee-directory/empolyee-directory.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DatePipe } from '@angular/common';
import { BsDatepickerModule, BsDatepickerConfig  } from 'ngx-bootstrap/datepicker';
import { EmployeeDataService } from './employee-data.service';


const appRoutes: Routes=[
  {path:'', component: LoginComponent},
  {path:'Directory', component: EmpolyeeDirectoryComponent},
  {path:'EmployeeForm', component: EmployeeFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpolyeeDirectoryComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    
    
  ],
  providers: [LoginstateService, DatePipe, BsDatepickerConfig, EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
