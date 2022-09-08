import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isDisplayed = false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('tokenBaerer') != null) {
      this.isDisplayed = true;
    }
  }
}
