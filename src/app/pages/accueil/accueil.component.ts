import { Component, OnInit, SimpleChanges } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/atomes/event';
import { EventDb } from 'src/app/databaseTemplate/eventDb';
import { EventCollab } from 'src/app/databaseTemplate/eventCollab';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import configServer from "../../../Resources/configServer.json";

@Component({
  selector: 'app-acceuil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})

export class AccueilComponent implements OnInit {

  private tokenBaerer : any = localStorage.getItem('tokenBaerer');
  private id = localStorage.getItem('id');

  private headers = new HttpHeaders({'Authorization': this.tokenBaerer});

  public dataEvents: EventCollab[];
  public filteredEvents : EventCollab[];
  public today: Date;

  //injection HttpClient
  constructor(public http: HttpClient) { 
    this.today = new Date();
    this.dataEvents = [];
    this.filteredEvents = [];
  }

  //subscribe pour récupérer le "Observable" en asynchrone
  ngOnInit(): void {
    this.getUserEvents();
  }
  
  private getUserEvents() {
    return this.http.get<Array<EventDb>>(configServer.origin_server + "/api/user/" + this.id +"/events",  {headers: this.headers})
      .subscribe(data => {

        const formattedArrayEvents : EventCollab[] = [];

        data.forEach(event => {
          const startTimeSplitted = event.start_time.split(":", 3);
          const endTimeSplitted = event.end_time.split(":", 3);

          const newEvent : EventCollab = {
            id: event.id,
            title: event.title,
            date_event: new Date(event.date_event),
            start_time: {
              hours : Number(startTimeSplitted[0]),
              minutes : Number(startTimeSplitted[1])
            },
            end_time: {
              hours : Number(endTimeSplitted[0]),
              minutes : Number(endTimeSplitted[1])
            },
            description: event.description
          }
          formattedArrayEvents.push(newEvent)
        })

        this.dataEvents = formattedArrayEvents;
        this.generateFilteredEvents();
      })
  }
  
  generateFilteredEvents() {
    const tempEvents: EventCollab[] = [];
    this.dataEvents.forEach( event => {
        if (
            (this.today.getDay() == event.date_event.getDay()) &&
            (this.today.getMonth() == event.date_event.getMonth()) &&
            (this.today.getFullYear() == event.date_event.getFullYear())
          ) {
          tempEvents.push(event);
        }
      }
    )
    this.filteredEvents = tempEvents;
  }

  daysInDayStepMonth() {
    const month = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
    return month;
  }
}
