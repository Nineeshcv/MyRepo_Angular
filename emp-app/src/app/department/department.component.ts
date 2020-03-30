import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departments=[];
  constructor(private router:Router,private _depService: DepartmentService) { }

  ngOnInit(): void {
    this._depService.getDepartments()
      .subscribe(data=>this.departments=data);
  }



}
