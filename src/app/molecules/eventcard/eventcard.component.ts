import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/atomes/event';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss']
})
export class EventcardComponent implements OnInit {

  //import du tableau des events, nommé EVENTS
  events: Event[]= [];

  //injection EventService
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  //subscribe pour récupérer le "Observable" en asynchrone
  getEvents(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

}
