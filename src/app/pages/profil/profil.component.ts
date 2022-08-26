import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/databaseTemplate/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  public display: Boolean = false;
  public hide: Boolean = true;

  public user!: User;

  public last_name!: string;
  public first_name!: string;
  public birth_date!: string;
  public phone_number!: string;
  public email!: string;
  public city!: string;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.getUser();
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

  public getUser() {
    return this.http.get<User>('http://localhost:8080/Jpa/api/user/1')
      .subscribe(data => {
        this.user = data;
        console.log(data);

      })
  }
}
