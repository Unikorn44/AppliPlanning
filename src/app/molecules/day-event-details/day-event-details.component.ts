import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-event-details',
  templateUrl: './day-event-details.component.html',
  styleUrls: ['./day-event-details.component.scss']
})
export class DayEventDetailsComponent implements OnInit {

  @Input() arrayDisplayEvents: any;

  constructor() { }

  ngOnInit(): void {
  }
}
