import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-event-details-list',
  templateUrl: './event-details-list.component.html',
  styleUrls: ['./event-details-list.component.scss']
})
export class EventDetailsListComponent implements OnInit {
  @Input() arrayEvents: any;

  displayDate!: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.arrayEvents != undefined && this.arrayEvents.length > 0) {
      this.displayDate = new Date (this.arrayEvents[0].date_event)
    }
  }
}
