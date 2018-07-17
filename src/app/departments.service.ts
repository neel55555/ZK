import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<any>
  {
    return this.http.get<any>('http://localhost/api/departments');
  }
}
