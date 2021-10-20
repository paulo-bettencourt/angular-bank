import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:3000/";
  idNumber: number = 0;

  addClient(person:Client): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body);
    this.idNumber++;
    return this.http.post(this.baseURL + 'clients', body,{'headers':headers})
  }

  getPeople(): Observable<Client[]> {
    console.log('getPeople '+this.baseURL + 'clients')
    return this.http.get<Client[]>(this.baseURL + 'clients')
  }

}
