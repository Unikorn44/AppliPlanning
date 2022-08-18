import { Injectable } from '@angular/core';

import { Event } from './atomes/event';
import { EVENTS } from './mock/events';

//Récup° data from server (simulation)
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor() { }

  getEvents(): Observable<Event[]> {
    const events = of(EVENTS);
    return events;
  }


}
