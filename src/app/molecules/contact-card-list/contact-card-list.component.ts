import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card-list',
  templateUrl: './contact-card-list.component.html',
  styleUrls: ['./contact-card-list.component.scss']
})
export class ContactCardListComponent implements OnInit {
  @Input() arrayContact : any;

  constructor() { }

  ngOnInit(): void {
  }

}
