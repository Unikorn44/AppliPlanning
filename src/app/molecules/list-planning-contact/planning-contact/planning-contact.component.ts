import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-contact',
  templateUrl: './planning-contact.component.html',
  styleUrls: ['./planning-contact.component.scss']
})
export class PlanningContactComponent implements OnInit {
  @Input() dataContact: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
