import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  public employees=[];

  constructor(private _empService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this._empService.getEmployees()
      .subscribe(data=>this.employees=data);
  }

}
