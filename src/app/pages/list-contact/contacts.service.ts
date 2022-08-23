import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from './contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private _json: string = "../../assets/data/contacts.json";

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(this._json);
  }
}
