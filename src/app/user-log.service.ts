import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogInterface } from './userLogInterface';

@Injectable({
  providedIn: 'root'
})
export class UserLogService{

  constructor(private http: HttpClient) {}

  getUserLog(): Observable<any>
  {
    return this.http.get<any>('http://localhost/api/user-log?date=8-7-2018');
  }
}

