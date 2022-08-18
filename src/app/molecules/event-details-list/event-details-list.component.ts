import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details-list',
  templateUrl: './event-details-list.component.html',
  styleUrls: ['./event-details-list.component.scss']
})
export class EventDetailsListComponent implements OnInit {

  arrayEvent = [
    {
      id: "A6BS9A",
      title: "Cuisine",
      date_event: "1/2/3",
      start_time: "11h33",
      end_time: "12h44",
      description: "Faire du Boeuf sauté"
    },
    {
      id: "9JSADB",
      title: "Ménage",
      date_event: "1/2/3",
      start_time: "11h33",
      end_time: "12h44",
      description: "Passer l'aspi"
    },
    {
      id: "HA72H1",
      title: "Dormir",
      date_event: "1/2/3",
      start_time: "11h33",
      end_time: "12h44",
      description: "Faire une sieste"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
