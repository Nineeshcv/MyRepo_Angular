import { Injectable } from '@angular/core';


import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartment } from '../entity/IDepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  public _url="/assets/data/department.json";

  constructor(private http: HttpClient) { }

  getDepartments() : Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>(this._url);
  }
}
