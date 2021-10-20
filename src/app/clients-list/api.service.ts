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

  getPeople(): Observable<Client[]> {
    console.log('getPeople '+this.baseURL + 'clients')
    return this.http.get<Client[]>(this.baseURL + 'clients')
  }

}
