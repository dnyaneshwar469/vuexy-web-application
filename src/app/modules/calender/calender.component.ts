import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
declare var $: any;

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  // view: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  viewDate: Date = new Date();
  viewMonth = new Date().getMonth() + 1;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

}
