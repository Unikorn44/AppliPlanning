import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/databaseTemplate/user';
import configServer from "../../../Resources/configServer.json";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public display: Boolean = false;
  public hide: Boolean = true;

  public contacts!: User[];

  private tokenBaerer : any = localStorage.getItem('tokenBaerer');
  private id = localStorage.getItem('id');

  private headers = new HttpHeaders({'Authorization': this.tokenBaerer});

  constructor(public http: HttpClient) {

   }

  ngOnInit(): void {
    this.getContacts();
  }

  private getContacts() {
    return this.http.get<User[]>(configServer.origin_server + "/api/user/" + this.id + "/contact",  {headers: this.headers})
      .subscribe(data => {
        this.contacts = data;
      })
  }

}
