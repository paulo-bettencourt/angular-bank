import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../add-client/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  deleteClient(event: any) {
      this.http.delete(this.baseURL + 'clients/' + event)
      .subscribe(() => console.log('Delete successful'));
  }

  getPeople(): Observable<Client[]> {
    console.log('getPeople '+this.baseURL + 'clients')
    return this.http.get<Client[]>(this.baseURL + 'clients')
  }

}
