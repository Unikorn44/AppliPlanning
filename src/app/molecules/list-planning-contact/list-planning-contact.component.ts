import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-planning-contact',
  templateUrl: './list-planning-contact.component.html',
  styleUrls: ['./list-planning-contact.component.scss']
})
export class ListPlanningContactComponent implements OnInit {
  @Input() arrayUser : any;

  constructor() { }

  ngOnInit(): void {
  }

}
