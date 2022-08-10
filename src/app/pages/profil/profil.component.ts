import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  public display: Boolean = false;
  public hide: Boolean = true;

  public last_name!: string;
  public first_name!: string;
  public birth_date!: string;
  public phone_number!: string;
  public email!: string;
  public city!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public displayForm() {
    this.display = true;
    this.hide = false;
  }

  public onSubmitForm() {
    console.log(this.last_name);
    console.log(this.first_name);
    console.log(this.birth_date);
    console.log(this.phone_number);
    console.log(this.email);
    console.log(this.city);
  }

  public cancelForm() {
    this.display = false;
    this.hide = true;
  }
}
