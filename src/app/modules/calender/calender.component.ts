import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { DialogService } from 'src/app/shared/service/dialog';
import { AddEventComponent } from 'src/app/shared/dialog/add-event/add-event.component';
declare var $: any;

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  // view: any = false;

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  viewDate: Date = new Date();
  viewMonth = new Date().getMonth() + 1;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  addEventDialog(){
    this.dialogService.openModal(AddEventComponent, {cssClass: 'modal-md', context: {data: {}, title: 'Add New Plan'}})
    .instance.close.subscribe((data: any) => {
      
      });
  }

}
