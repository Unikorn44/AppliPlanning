import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public identifiant!: String;
  public password!: String;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmitForm(): void {
    console.log(this.identifiant);
    console.log(this.password);
  }

}
