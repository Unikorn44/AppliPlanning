import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import configServer from "../../../Resources/configServer.json";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  private tokenBaerer : any = localStorage.getItem('tokenBaerer');
  private id = localStorage.getItem('id');

  private headers = {'Authorization': this.tokenBaerer,
  'Content-Type': 'application/json'};
  
  @Output() newEventCreated = new EventEmitter<any>();

  eventForm = new FormGroup({
    title: new FormControl('', Validators.required),
    date_event: new FormControl('', Validators.required),
    start_time: new FormControl('', Validators.required),
    end_time: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  submitEvent() {
    if(this.eventForm.valid)  {
      let event = {
        "title" : this.eventForm.controls["title"].value,
        "date_event" : this.eventForm.controls["date_event"].value,
        "start_time" : this.eventForm.controls["start_time"].value + ":00",
        "end_time" : this.eventForm.controls["end_time"].value + ":00",
        "description" : this.eventForm.controls["description"].value,
      }

      
      return this.http.post<any>(configServer.origin_server + "/api/event/create/" + this.id, event, {headers: this.headers})
      .subscribe( data => {
        this.newEventCreated.emit();
      });
    } else {
        console.log("forumlaire invalide")
        return null;
    }
  } 
}
