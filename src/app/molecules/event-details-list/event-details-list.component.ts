import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details-list',
  templateUrl: './event-details-list.component.html',
  styleUrls: ['./event-details-list.component.scss']
})
export class EventDetailsListComponent implements OnInit {
  @Input() arrayEvent: any;

  constructor() { }

  ngOnInit(): void {
  }

}
