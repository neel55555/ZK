import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient, private global:GlobalService) { }

  getDepartments(): Observable<any>
  {
    return this.http.get<any>(this.global.domain + '/api/department');
  }
}
