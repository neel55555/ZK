import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  public devices;
  public status;

  constructor(private _deviceService:DeviceService) { }

  ngOnInit() {
    this._deviceService.getDevices().subscribe(data => this.devices = data);
  }

  getData()
  {
    this._deviceService.getDeviceData().subscribe(data => this.status = data.status);
  }

}
