import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  [x: string]: any;
  baseUrl = "http://localhost:4200/";

  constructor(private http: HttpClient) { }

  updateClient(event: any, id: number) {

    this.http.put<any>('http://localhost:3000/clients/' + id, {
      "name": event.name,
      "address": event.address,
      "telephone": event.telephone,
      "account": event.account,
//      "id": 1
    })
    .subscribe(data => this.postId = data.id);
      
  }
  
}
