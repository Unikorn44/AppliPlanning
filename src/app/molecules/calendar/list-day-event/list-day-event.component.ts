import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventCollab } from 'src/app/databaseTemplate/eventCollab';

@Component({
  selector: 'app-list-day-event',
  templateUrl: './list-day-event.component.html',
  styleUrls: ['./list-day-event.component.scss']
})
export class ListDayEventComponent implements OnInit {
  @Input() listDayEvents: any;

  @Output() clickEvent = new EventEmitter<EventCollab[]>();
  
  constructor() {
  }

  ngOnInit(): void {
  }
  
  transmitEvents(events : EventCollab[]) {
    this.clickEvent.emit(events);
  }
}
