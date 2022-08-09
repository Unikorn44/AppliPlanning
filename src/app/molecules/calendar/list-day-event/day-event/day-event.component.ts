import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-event',
  templateUrl: './day-event.component.html',
  styleUrls: ['./day-event.component.scss']
})
export class DayEventComponent implements OnInit {
  @Input() dataEvent!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
