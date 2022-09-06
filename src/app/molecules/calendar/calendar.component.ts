import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventCollab } from 'src/app/databaseTemplate/eventCollab';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() dataEvents: any;

  filteredEvents: Map<number,EventCollab[]>
  calendarDisplay:Date;

  dayStep: Date;

  constructor() { 
    this.dayStep = new Date();
    this.calendarDisplay = this.dayStep;
    this.filteredEvents = this.generateEmptyFilteredEvents();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.update()
  }

  update() {
    this.filteredEvents = this.generateEmptyFilteredEvents();

    if (this.dataEvents.length != 0) {
      this.generateFilteredEvents(this.dataEvents);
    }

    this.calendarDisplay = new Date(this.dayStep);
  }
  
  generateFilteredEvents (events: EventCollab[]) {

    events.forEach( event => {
        const jourEvent = event.date_event.getDate();
        if (
            (this.dayStep.getMonth() == event.date_event.getMonth()) &&
            (this.dayStep.getFullYear() == event.date_event.getFullYear())
          ) {
          this.filteredEvents.get(jourEvent)?.push(event);
        }
      }
    )
  }

  generateEmptyFilteredEvents(){
    const tempMap = new Map<number, EventCollab[]>();
    const months = Array.from(Array(this.daysInDayStepMonth()).keys())

    for(const i in months) {
        tempMap.set(Number(i) + 1, []);
    }

    return tempMap;
  }

  daysInDayStepMonth() {
    const month = new Date(this.dayStep.getFullYear(), this.dayStep.getMonth() + 1, 0).getDate();
    return month;
  }

  removeMonth() {
    this.dayStep.setMonth(this.dayStep.getMonth() - 1);
    this.update();
  }

  addMonth() {
    this.dayStep.setMonth(this.dayStep.getMonth() + 1);
    this.update();
  }
}
