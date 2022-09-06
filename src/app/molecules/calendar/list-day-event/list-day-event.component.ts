import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-day-event',
  templateUrl: './list-day-event.component.html',
  styleUrls: ['./list-day-event.component.scss']
})
export class ListDayEventComponent implements OnInit {
  @Input() listDayEvents: any;

  today: Date;
  
  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {
  }
  
  daysInTodayMonth() {
    return new Date(this.today.getFullYear(), this.today.getMonth(), 0).getDate();
  }
}
