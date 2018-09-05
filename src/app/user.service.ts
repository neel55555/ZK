import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from './userInterface';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  department = 0;
  constructor(private http: HttpClient) { }

  getUser(): Observable<any>
  {
    return this.http.get<any>('/api/user');
  }

  getUserByDept(): Observable<any>
  {
    var queryString = $.param({
      "department": this.department
    });
    return this.http.get<any>('http://192.168.1.98/api/user?'+queryString);
  }
}
