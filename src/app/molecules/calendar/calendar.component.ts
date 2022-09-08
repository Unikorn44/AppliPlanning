import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventCollab } from 'src/app/databaseTemplate/eventCollab';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() dataEvents: any;

  private lastName = localStorage.getItem('lastName');
  private firstName = localStorage.getItem('firstName');
  private nomFichier = "";

  filteredEvents: Map<number,EventCollab[]>
  calendarDisplay:Date;

  dayStep: Date;

  @Output() clickEvent = new EventEmitter<EventCollab[]>();
  @Output() clickCreateEvent = new EventEmitter<any>();

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

  //méthode export du planning 
  public exportPlanning(){
    
    //création d'un élément type <a>
    const docExport = document.createElement("a");
    docExport.href = URL.createObjectURL(new Blob([JSON.stringify( this.dataEvents, null, 2)], {type: "text/plain"}));
    
    //envoi dans dossier download
    this.nomFichier  = "Calendrier_" + this.lastName + "_" +  this.firstName + ".txt"
    docExport.setAttribute("download", this.nomFichier);
   
    document.body.appendChild(docExport);
    docExport.click();
    document.body.removeChild(docExport);
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

  transmitEvents(events : EventCollab[]) {
    this.clickEvent.emit(events);
  }

  createEventPanel() {
    this.clickCreateEvent.emit("creerEvent");
  }
}
