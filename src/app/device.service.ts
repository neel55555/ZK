import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient, private global:GlobalService) { }

  public getDevices(): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.get<any>(this.global.domain + '/api/device');
  }
}
