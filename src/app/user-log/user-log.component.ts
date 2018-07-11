import { Component, OnInit } from '@angular/core';
import { UserLogService } from '../user-log.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit {

  userLogs = [];
  date = '';

  constructor(private _userLogService: UserLogService) { }
  
  ngOnInit() {
    this._userLogService.getUserLog().subscribe(data => this.userLogs = data);
  }

  dateValueOnChange() {
    setTimeout(()=>{
      console.log(this.date);
      this._userLogService.selectedDate = this.date;
      this._userLogService.getUserLog().subscribe(data => this.userLogs = data);
    }, 300);
    
  }

}
