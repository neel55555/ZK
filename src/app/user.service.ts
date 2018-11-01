import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from './userInterface';
import { GlobalService } from './global.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  department = 0;
  constructor(private http: HttpClient, private global:GlobalService) { }

  getUser(): Observable<any>
  {
    return this.http.get<any>('/api/user');
  }

  getUserByDept(): Observable<any>
  {
    var queryString = $.param({
      "department": this.department
    });
    return this.http.get<any>(this.global.domain + '/api/user?'+queryString);
  }
}
