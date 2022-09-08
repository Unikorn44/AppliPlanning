import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Time } from "@angular/common";


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  @Input() event: any;

  constructor() { }

  ngOnInit(): void {
  }
}
