import { Component, OnInit } from '@angular/core';
import { UserLogService } from '../user-log.service';
import { DepartmentsService } from '../departments.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit {

  userLogs = [];
  dateTime = new Date();
  date: string = this.dateTime.getDate()+'-'+(this.dateTime.getMonth()+1)+'-'+this.dateTime.getFullYear();
  departments = [];
  department = 0;

  constructor(private _userLogService: UserLogService, private _departmentsService: DepartmentsService) { }
  
  ngOnInit() {
    this._userLogService.getUserLog().subscribe(data => this.userLogs = data);
    this._departmentsService.getDepartments().subscribe(data => this.departments = data);
  }

  dateValueOnChange() {
    setTimeout(()=>{
      console.log(this.date);
      this._userLogService.selectedDate = this.date;
      this._userLogService.getUserLog().subscribe(data => this.userLogs = data);
    }, 300);
  }

  departmentValueOnChange() {
    console.log('change', this.department);
    this._userLogService.selectedDepartment = this.department;
    this._userLogService.getUserLog().subscribe(data => this.userLogs = data);
  }

}
