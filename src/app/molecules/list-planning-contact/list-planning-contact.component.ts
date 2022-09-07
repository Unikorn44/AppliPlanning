import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-planning-contact',
  templateUrl: './list-planning-contact.component.html',
  styleUrls: ['./list-planning-contact.component.scss']
})
export class ListPlanningContactComponent implements OnInit {
 
  arrayUser = [
    {
      first_name : "Dargo",
      last_name : "Pierre"
    },
    {
      first_name : "Harcher",
      last_name : "Jean"
    },
    {
      first_name : "Yusha",
      last_name : "Tom"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
