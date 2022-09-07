import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventCollab } from 'src/app/databaseTemplate/eventCollab';
import configServer from "../../../Resources/configServer.json";

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

  constructor(public http: HttpClient) { 
    this.arrayEvents = [];
  }
 
  ngOnInit(): void {
    this.getUserEvents();
  }

  private getUserEvents() {
    return this.http.get<Array<EventCollab>>(configServer.origin_server + "/api/event/user/" + this.id,  {headers: this.headers})
      .subscribe(data => {

        const formattedArrayEvents : EventCollab[] = [];

        data.forEach(event => {
          const newEvent : EventCollab = {
            id: event.id,
            title: event.title,
            date_event: new Date(event.date_event),
            start_time: event.start_time,
            end_time: event.end_time,
            description: event.description
          }
          formattedArrayEvents.push(newEvent)
        })

        this.arrayEvents = formattedArrayEvents;
      })
  }

}
