import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { shareReplay } from 'rxjs/operators';
import configServer from "../../Resources/configServer.json";

@Injectable()
export class AuthService {

  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) {
  }

  login(identifiant: string, password: string) {
    let body = `login=${identifiant}&password=${password}`;

    return this.http
      .post(configServer.origin_server + "/api/login", body, {headers: this.headers})
      //shareReplay pour empêcher le récepteur de déclencher accidentellement plusieurs requêtes POST
      .pipe(shareReplay())
      .subscribe(response=> {
        let respHeaders = response;
        const mapHeaders = new Map(Object.entries(respHeaders));
        const mapAuth = new Map(Object.entries(mapHeaders.get('headers')));

        mapAuth.forEach((value: any, key: any) => {
          if(key == "authorization") {
            value = value.toString();
            this.saveToken(value);
          }
        });
    });
  }

  saveToken(token: string) {
    localStorage.setItem("tokenBaerer", token);
  }

  logout() {
    localStorage.removeItem("tokenBaerer");
  }
}
