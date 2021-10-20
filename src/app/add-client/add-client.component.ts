import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Client } from './client';


@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  title = 'Angular Bank';
  client = new Client();
  clients: Client[] = [];

  ngOnInit(): void {
    this.refreshPeople()
  }

  addClient() {
    this.apiService.addClient(this.client)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        this.clients=data;
      })      
  }

}
