import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  selectedDate = '10-7-2018';
  selectedDepartment = 0;
  selectedUser = 0;

  constructor(private http: HttpClient) { }

  getReport(): Observable<any>
  {
    var queryString = $.param({
      "date": this.selectedDate,
      "uid": this.selectedUser,
      "department": this.selectedDepartment
    });
    return this.http.get<any>('http://192.168.1.98/api/user-log?'+queryString);
  }
  
}
