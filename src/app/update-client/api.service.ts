import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../add-client/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:3000/";

  [x: string]: any;

  getPeople(): Observable<Client[]> {
    console.log('getPeople '+this.baseURL + 'clients')
    return this.http.get<Client[]>(this.baseURL + 'clients')
  }

  updateClient(event: any, id: number) {
    this.http.put<any>("http://localhost:3000/clients/" + id, {
      "name": event.name,
      "address": event.address,
      "telephone": event.telephone,
      "account": event.account,
      "id": 1
    })
    .subscribe(data => this.postId = data.id);
  }

}
