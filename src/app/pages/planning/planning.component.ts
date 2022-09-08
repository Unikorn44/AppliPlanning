import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventCollab } from 'src/app/databaseTemplate/eventCollab';
import configServer from "../../../Resources/configServer.json";
import { EventDb } from 'src/app/databaseTemplate/eventDb';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  private tokenBaerer : any = localStorage.getItem('tokenBaerer');
  private id = localStorage.getItem('id');

  private headers = new HttpHeaders({'Authorization': this.tokenBaerer});

  public arrayEvents: EventCollab[];
  public arrayEventsDisplay : EventCollab[];

  public panelDisplay: string;

  @Output() clickEvent = new EventEmitter<EventCollab[]>();

  constructor(public http: HttpClient) { 
    this.arrayEvents = [];
    this.arrayEventsDisplay = [];
    this.panelDisplay = "createEvent";
  }
 
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

        this.arrayEvents = formattedArrayEvents;
      })
  }

  transmitEvents(events : EventCollab[]) {
    this.arrayEventsDisplay = events;
    this.panelDisplay = "displayEventDay";
  }

  swapToCreateEvent(retour : any) {
    this.panelDisplay = "createEvent";
  }

  newEventCreated(){
    this.getUserEvents();
  }
}
