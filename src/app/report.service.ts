import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  selectedDate = '';
  selectedDepartment = 0;
  selectedUser = 0;
  downloadUri = "";

  constructor(private http: HttpClient, private global:GlobalService) { }

  getReport(): Observable<any>
  {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    var queryString = $.param({
      "date": this.selectedDate,
      "uid": this.selectedUser,
      "department": this.selectedDepartment
    });

    let headers = new HttpHeaders({
      'Accept': 'application/pdf'
    });

    return this.http.get<any>(this.global.domain + '/api/log?'+queryString);
  }

  getFile(): Observable<any>
  {
    let headers = new HttpHeaders({
      'Accept': 'application/pdf'
    });

    return this.http.get<any>(this.global.domain + this.downloadUri, {"headers": headers});
  }
  
}
