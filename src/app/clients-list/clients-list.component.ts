import { Component, OnInit } from '@angular/core';
import { Client } from '../add-client/client';
import { ApiService } from './api.service';

@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  clients: Client[] = [];
  baseURL = "http://localhost:3000/clients/";

  ngOnInit(): void {
    this.refreshPeople();
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        this.clients=data;
      })      
  }

}
