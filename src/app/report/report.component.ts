import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { UserService } from '../user.service';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  dateTime = new Date();
  date: string = this.dateTime.getDate()+'-'+(this.dateTime.getMonth()+1)+'-'+this.dateTime.getFullYear();
  departments = [];
  department = 0;
  users = [];
  user = 0;
  reports = [];

  constructor(private _departmentsService: DepartmentsService, private _userService: UserService, private _reportService: ReportService) { }

  ngOnInit() {
    this._departmentsService.getDepartments().subscribe(data => this.departments = data);
  }

  onDepartmentChange() {
    this._userService.department = this.department;
    this._userService.getUserByDept().subscribe(data => this.users = data);
  }

  onUserChange() {
    console.log(this.user);
    this._reportService.selectedDate = this.date;
    this._reportService.selectedDepartment = this.department;
    this._reportService.selectedUser = this.user;
    this._reportService.getReport().subscribe(data => this.reports = data);
  }

  dateValueOnChange() {

  }

}
