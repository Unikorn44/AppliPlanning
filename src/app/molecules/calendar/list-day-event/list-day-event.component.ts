import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-day-event',
  templateUrl: './list-day-event.component.html',
  styleUrls: ['./list-day-event.component.scss']
})
export class ListDayEventComponent implements OnInit {
  @Input() listDayEvents: any;
  
  constructor() {
  }

  ngOnInit(): void {
  }
}
