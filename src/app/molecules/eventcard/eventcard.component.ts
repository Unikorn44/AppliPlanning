import { Component, OnInit } from '@angular/core';
import { EVENTS } from 'src/app/mock/events';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss']
})
export class EventcardComponent implements OnInit {

  //import du tableau des events, nommé EVENTS
  events = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
