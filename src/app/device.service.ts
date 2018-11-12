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
    
    return this.http.get<any>(this.global.domain + '/api/device');
  }

  public getDeviceData(): Observable<any>
  {
    let headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.get<any>(this.global.domain + '/api/device/get-data', {"headers": headers});
  }
}
