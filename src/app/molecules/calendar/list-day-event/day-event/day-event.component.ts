import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EventCollab } from 'src/app/databaseTemplate/eventCollab';

@Component({
  selector: 'app-day-event',
  templateUrl: './day-event.component.html',
  styleUrls: ['./day-event.component.scss']
})
export class DayEventComponent implements OnInit {
  @Input() dayNumber!: any;
  @Input() dataEvents!: any;

  constructor() {}

  ngOnInit(): void {
  }
}
