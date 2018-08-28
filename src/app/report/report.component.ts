import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  dateTime = new Date();
  date: string = this.dateTime.getDate()+'-'+(this.dateTime.getMonth()+1)+'-'+this.dateTime.getFullYear();

  constructor() { }

  ngOnInit() {
  }



}
