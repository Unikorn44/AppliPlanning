import { Component, EventEmitter, OnInit, Optional, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/databaseTemplate/user';
import configServer from "../../../Resources/configServer.json";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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
  private id = localStorage.getItem('id');

  private headers = {'Authorization': this.tokenBaerer,
                    'Content-Type': 'application/json'};

  form:FormGroup;

  constructor(public http: HttpClient, private fb:FormBuilder, private storage:LocalStorageService) {
    this.form = this.fb.group({
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      city: ['', Validators.required],
      birthday_date: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.user = {
      id: 0,
      first_name: "",
      last_name: "",
      city: "",
      birthday_date: new Date(),
      phone_number: "",
      email: "",
      admin: false,
      picture: "",
      planning: ""
    }
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    return this.http.get<User>(configServer.origin_server + "/api/user/" + this.id,  {headers: this.headers})
      .subscribe(data => {
        this.user.admin = data.admin;
        this.user.birthday_date = new Date(data.birthday_date);
        this.user.city = data.city;
        this.user.email = data.email;
        this.user.first_name = data.first_name;
        this.user.last_name = data.last_name;
        this.user.phone_number = data.phone_number;
        this.user.picture = data.picture;
      })
  }

  public onSubmitForm() {
    const val = this.form.value as User;

    let body = {
      first_name: val.first_name,
      last_name: val.last_name,
      city: val.city,
      birthday_date: val.birthday_date,
      phone_number: val.phone_number,
      email: val.email,
      picture: "https://www.fillmurray.com/640/360"
    }

    console.log(val.birthday_date);
    console.log(val.email);

    this.storage.refreshStorage();

    return this.http.put<any>(configServer.origin_server + "/api/user/update/" + this.id, body, {headers: this.headers})
      .subscribe( data => {
        console.log(data);
      });
  }

  public displayForm() {
    this.display = true;
    this.hide = false;
  }

  public cancelForm() {
    this.display = false;
    this.hide = true;
  }
}
