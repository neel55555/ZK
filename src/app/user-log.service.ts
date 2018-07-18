import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogInterface } from './userLogInterface';

@Injectable({
  providedIn: 'root'
})
export class UserLogService{

  selectedDate = '10-7-2018';
  selectedDepartment = 0;

  constructor(private http: HttpClient) {}

  getUserLog(): Observable<any>
  {
    return this.http.get<any>('http://localhost/api/user-log?date='+this.selectedDate+'&department='+this.selectedDepartment);
  }
}

