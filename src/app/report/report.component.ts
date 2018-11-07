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
  date = [new Date(), new Date()];
  dateRange = '';
  departments = [];
  department = 0;
  users = [];
  user = 0;
  userName = 'Select a user';
  reports = [];
  maxDate = new Date();

  constructor(private _departmentsService: DepartmentsService, private _userService: UserService, private _reportService: ReportService) { }

  ngOnInit() {
    this._departmentsService.getDepartments().subscribe(data => this.departments = data);
  }

  onDepartmentChange() {
    this.user = 0;
    this._userService.department = this.department;
    this._userService.getUserByDept().subscribe(data => this.users = data);
    this._reportService.selectedDate = this.dateRange;
    this._reportService.selectedDepartment = this.department;
    this._reportService.selectedUser = this.user;
    this._reportService.getReport().subscribe(data => this.reports = data);
  }

  onUserChange() {

    console.log("change detected");
    var currentClass = this;
    
    if ( this.user != 0 ) {
      var found = this.users.find(function(element){
        return element.id == currentClass.user;
      });
      this.userName = found.name;
    };

    console.log(this.user);

    this._reportService.selectedDate = this.dateRange;
    this._reportService.selectedDepartment = this.department;
    this._reportService.selectedUser = this.user;
    this._reportService.getReport().subscribe(data => this.reports = data);
  }
  
  onDateValueChange() {
    setTimeout(()=>{
    
    var date1 = this.date[0];
    var date2 = this.date[1];

    var month1 = date1.getMonth()+1;
    var month2 = date2.getMonth()+1;

    var dateRangeFrom = date1.getDate() +'-'+ month1 +'-'+ date1.getFullYear();
    var dateRangeTo = date2.getDate() +'-'+ month2 +'-'+ date2.getFullYear();
    this.dateRange = dateRangeFrom+ '.' +dateRangeTo;

    this._reportService.selectedDate = this.dateRange;
    this._reportService.selectedDepartment = this.department;
    this._reportService.selectedUser = this.user;
    this._reportService.getReport().subscribe(data => this.reports = data);
    },300);
  }

}
