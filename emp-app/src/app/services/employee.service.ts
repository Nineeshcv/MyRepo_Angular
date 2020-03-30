import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/entity/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  public _url="/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
