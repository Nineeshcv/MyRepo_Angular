import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule , routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
//import { DepartmentComponent } from './department/department.component';
//import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';
//import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
   // LoginComponent
   routingComponent,
  // DepartmentComponent,
  // EmployeeComponent,
   //HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [EmployeeService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
