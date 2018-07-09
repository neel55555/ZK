import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLogService{
  constructor(private http: HttpClient) {}
  getUserLog(): any
  {
    return this.http.get('http://localhost/api/user-log?date=6-6-2018');
  }
}

