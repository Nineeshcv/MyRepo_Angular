import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';




const routes: Routes = [
  {path:'',component:LoginComponent},
  //{path:'',redirectTo:'/departments',pathMatch:'full'},
 {path:'homePage',component:HomeComponent},
 {path:'departments',component:DepartmentComponent},
 {path:'employees',component:EmployeeComponent},
 //{path:'login', component:LoginComponent},
 {path:"**" ,component:LoginComponent}
  
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,HomeComponent,DepartmentComponent,EmployeeComponent];
