import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {shareReplay } from 'rxjs/operators';
import configServer from "../../Resources/configServer.json";

@Injectable()
export class AuthService {

  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) {
  }

  login(identifiant: string, password: string) {
    let body = `login=${identifiant}&password=${password}`;
    let options = {
      headers: this.headers,
    }
    return this.http
      .post(configServer.origin_server + "/api/login", body, options)

    // shareReplay pour empêcher le récepteur de déclencher accidentellement plusieurs requêtes POST
      .pipe(shareReplay());
  }
}
