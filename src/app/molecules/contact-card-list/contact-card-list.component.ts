import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card-list',
  templateUrl: './contact-card-list.component.html',
  styleUrls: ['./contact-card-list.component.scss']
})
export class ContactCardListComponent implements OnInit {
  arrayContact = [
    {
      first_name : "Dargo",
      last_name : "Pierre",
      phone: "01 02 03 04 05",
      email: "dargo.pierre@mail.com"
    },
    {
      first_name : "Harcher",
      last_name : "Jean",
      phone: "01 02 03 04 05",
      email: "harcher.jean@mail.com"
    },
    {
      first_name : "Yusha",
      last_name : "Tom",
      phone: "01 02 03 04 05",
      email: "tom.yusha@mail.com"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
