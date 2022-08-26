import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {shareReplay } from 'rxjs/operators';
import configServer from "../../Resources/configServer.json";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(identifiant: string, password: string) {
    return this.http.post(configServer.origin_server + "/api/login", { identifiant, password })
    // shareReplay pour empêcher le récepteur de déclencher accidentellement plusieurs requêtes POST
    .pipe(shareReplay());
  }
}
