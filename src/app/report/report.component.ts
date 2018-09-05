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
  date = new Date();
  departments = [];
  department = 0;
  users = [];
  user = 0;
  userName = 'Select a user';
  reports = [];

  constructor(private _departmentsService: DepartmentsService, private _userService: UserService, private _reportService: ReportService) { }

  ngOnInit() {
    this._departmentsService.getDepartments().subscribe(data => this.departments = data);
  }

  onDepartmentChange() {
    this.user = 0;
    this._userService.department = this.department;
    this._userService.getUserByDept().subscribe(data => this.users = data);
  }

  onUserChange() {
    var currentClass = this;
    var found = this.users.find(function(element){
      return element.badgenumber == currentClass.user;
    });
    this.userName = found.name;
    this._reportService.selectedDate = (this.date.getMonth()+1)+'-'+this.date.getFullYear();
    this._reportService.selectedDepartment = this.department;
    this._reportService.selectedUser = this.user;
    this._reportService.getReport().subscribe(data => this.reports = data);
  }

  onDateValueChange() {
    setTimeout(()=>{
    this._reportService.selectedDate = (this.date.getMonth()+1)+'-'+this.date.getFullYear();
    this._reportService.selectedDepartment = this.department;
    this._reportService.selectedUser = this.user;
    this._reportService.getReport().subscribe(data => this.reports = data);
    },300);
  }

}
