import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogInterface } from './userLogInterface';
import { GlobalService } from './global.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class UserLogService{

  selectedDate = '10-7-2018';
  selectedDepartment = 0;

  constructor(private http: HttpClient, private global:GlobalService) {}

  getUserLog(): Observable<any>
  {
    var queryString = $.param({
      "date": this.selectedDate,
      "department": this.selectedDepartment
    })
    return this.http.get<any>(this.global.domain + '/api/user-log?'+queryString);
  }
}

