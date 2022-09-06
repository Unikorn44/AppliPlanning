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
  today: Date;
  monthStep = 0;

  constructor() { 
    this.today = new Date();
    this.filteredEvents = this.generateEmptyFilteredEvents();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filteredEvents = this.generateEmptyFilteredEvents();

    if (this.dataEvents.length != 0) {
      this.generateFilteredEvents(this.dataEvents);
    }
  }
  
  generateFilteredEvents (events: EventCollab[]) {

    events.forEach( event => {
        const jourEvent = event.date_event.getDate();
        if ((this.today.getMonth() + this.monthStep) == event.date_event.getMonth()) {
          this.filteredEvents.get(jourEvent)?.push(event);
        }
      }
    )
  }

  generateEmptyFilteredEvents(){
    const tempMap = new Map<number, EventCollab[]>();

    for(const i in Array.from(Array(this.daysInTodayMonth()).keys())) {
      if(Number(i) != 0){
        tempMap.set(Number(i), []);
      }
    }

    return tempMap;
  }

  daysInTodayMonth() {
    return new Date(this.today.getFullYear(), this.today.getMonth(), 0).getDate();
  }
}
