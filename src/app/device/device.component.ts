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
  public isLoaderHidden = true;
  public isCheckmarkHidden = true;
  public buttonInnerContent = "GET DATA";
  public isDataProcessing = false;

  constructor(private _deviceService:DeviceService) { }

  ngOnInit() {
    this._deviceService.getDevices().subscribe(data => this.devices = data);
  }

  getData()
  {
    if(this.isDataProcessing){
      return false;
    };
    this.isDataProcessing = true;
    this.isLoaderHidden = false;

    //BUG FIX FOR FAILED REQUEST
    let request = setInterval(()=>{
      this._deviceService.getDeviceData().subscribe(data => 
        {
          if(data.status == 'SUCCESS') {
            clearInterval(request);
            this.buttonInnerContent = '<i class="fa fa-check fa-2x"></i>';
            this.isLoaderHidden = true;
            setTimeout(()=>{
              this.buttonInnerContent = "GET DATA";
              this.isDataProcessing = false;
            },3000);
            
          };
        }
      );
    }, 1000)

    
  }


}
