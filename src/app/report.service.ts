import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  selectedDate = '10-7-2018';
  selectedDepartment = 0;
  selectedUser = 0;

  constructor(private http: HttpClient, private global:GlobalService) { }

  getReport(): Observable<any>
  {
    var queryString = $.param({
      "date": this.selectedDate,
      "uid": this.selectedUser,
      "department": this.selectedDepartment
    });
    return this.http.get<any>(this.global.domain + '/api/user-log?'+queryString);
  }
  
}
