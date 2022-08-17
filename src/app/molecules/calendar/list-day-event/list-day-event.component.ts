import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-day-event',
  templateUrl: './list-day-event.component.html',
  styleUrls: ['./list-day-event.component.scss']
})
export class ListDayEventComponent implements OnInit {

  dayEventArray!: string[]

  constructor() { 
    this.dayEventArray = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
  }

  ngOnInit(): void {
  }

}
