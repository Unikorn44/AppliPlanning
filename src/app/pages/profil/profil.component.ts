import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/databaseTemplate/user';
import configServer from "../../../Resources/configServer.json";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  public display: Boolean = false;
  public hide: Boolean = true;

  public user!: User;

  private tokenBaerer : any = localStorage.getItem('tokenBaerer');

  private headers = new HttpHeaders({'Authorization': this.tokenBaerer});

  last_name: string = '';
  first_name: string = '';
  birth_date: Date = new Date();
  phone_number: string = '';
  email: string = '';
  city: string = '';


  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    console.log(localStorage.getItem('tokenBaerer'));

    return this.http.get<User>(configServer.origin_server + "/api/user/1",  {headers: this.headers})
      .subscribe(data => {
        this.user = data;
        this.user.admin = data.admin;
        this.user.birthday_date = data.birthday_date;
        this.user.city = data.city;
        this.user.email = data.email;
        this.user.first_name = data.first_name;
        this.user.last_name = data.last_name;
        this.user.phone_number = data.phone_number;
      })
  }

  public displayForm() {
    this.display = true;
    this.hide = false;
  }

  public onSubmitForm() {
    // console.log(this.last_name);
    // console.log(this.first_name);
    // console.log(this.birth_date);
    // console.log(this.phone_number);
    // console.log(this.email);
    // console.log(this.city);
  }

  public cancelForm() {
    this.display = false;
    this.hide = true;
  }
}
