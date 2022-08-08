import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  display: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayForm() {
    this.display = true;
  }

  onSubmitForm() {
    console.log("hello2");
  }
}
