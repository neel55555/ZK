import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient, private global:GlobalService) { }

  public getDevice(): Observable<any>
  {
    return this.http.get<any>('/api/device');
  }
}
