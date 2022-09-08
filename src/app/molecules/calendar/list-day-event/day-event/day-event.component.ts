import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { EventCollab } from 'src/app/databaseTemplate/eventCollab';

@Component({
  selector: 'app-day-event',
  templateUrl: './day-event.component.html',
  styleUrls: ['./day-event.component.scss']
})
export class DayEventComponent implements OnInit {
  @Input() dayNumber!: any;
  @Input() dataEvents!: any;

  @Output() clickEvent = new EventEmitter<EventCollab[]>();

  constructor() {}

  ngOnInit(): void {
  }

  transmitEvents() {
    if (this.dataEvents != undefined && this.dataEvents.length != 0) {
      this.clickEvent.emit(this.dataEvents);
    }
  }
}
