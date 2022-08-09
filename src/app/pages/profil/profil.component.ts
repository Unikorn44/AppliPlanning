import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  display: Boolean = false;
  hide: Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  displayForm() {
    this.display = true;
    this.hide = false;
  }

  onSubmitForm() {
    console.log("hello2");
  }
}
