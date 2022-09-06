import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { shareReplay } from 'rxjs/operators';
import configServer from "../../Resources/configServer.json";
import { User } from "../databaseTemplate/user";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  public user!: User;

  public log: boolean = false;

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private router: Router) {
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

        const mapBody = new Map(Object.entries(mapHeaders.get('body')));

        mapBody.forEach((value: any, key: any) => {
          if(key == "id") {
            value = value.toString();
            this.saveId(value);
          }
        });

    });
  }

  saveToken(token: string) {
    localStorage.setItem("tokenBaerer", token);
    this.router.navigateByUrl('/accueil')
      .then(() => {
        this.localStorage.refreshStorage();
      });
  }

  saveId(id: string) {
    localStorage.setItem("id", id);
  }

  logout() {
    localStorage.clear();
    this.localStorage.refreshStorage();
  }
}
