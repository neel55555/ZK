import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogInterface } from './userLogInterface';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class UserLogService{

  selectedDate = '10-7-2018';
  selectedDepartment = 0;

  constructor(private http: HttpClient) {}

  getUserLog(): Observable<any>
  {
    var queryString = $.param({
      "date": this.selectedDate,
      "department": this.selectedDepartment
    })
    return this.http.get<any>('http://localhost/api/user-log?'+queryString);
  }
}

