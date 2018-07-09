import { Component, OnInit } from '@angular/core';
import { UserLogService } from '../user-log.service';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit {

  userLogs = [];

  constructor(private _userLogService: UserLogService) { }

  ngOnInit() {
    this._userLogService.getUserLog().subscribe(data => this.userLogs = data);
  }

}
