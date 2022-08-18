import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/atomes/event';

@Component({
  selector: 'app-day-event-details',
  templateUrl: './day-event-details.component.html',
  styleUrls: ['./day-event-details.component.scss']
})
export class DayEventDetailsComponent implements OnInit {

  arrayTodayEvent: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events => this.arrayTodayEvent = events);
  }
}
