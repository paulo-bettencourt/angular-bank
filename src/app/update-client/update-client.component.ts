import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../add-client/client';
import { ClientsListComponent } from '../clients-list/clients-list.component';
import { ApiService } from './api.service';

@Component({
  selector: 'update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService:ApiService, private clientsComponent: ClientsListComponent, private http: HttpClient) { }

  baseURL = "http://localhost:3000/clients/";

  clients: Client[] = this.clientsComponent.clients;
  idNumber!: any;
  idNumberMinusOne!: any;

  profileForm = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    telephone: new FormControl(),
    account: new FormControl()
  });

  ngOnInit(): void {

    this.route.queryParams
    .subscribe(params => {
      this.idNumber = params.id;
      this.idNumberMinusOne = this.idNumber - 1;
       if (!this.profileForm.get("name")) {
        this.profileForm.get("name")?.setValue(this.clients[this.idNumberMinusOne]?.name);
        this.profileForm.get("address")?.setValue(this.clients[this.idNumberMinusOne]?.address);
        this.profileForm.get("telephone")?.setValue(this.clients[this.idNumberMinusOne]?.telephone);
        this.profileForm.get("account")?.setValue(this.clients[this.idNumberMinusOne]?.account);
       } else {
         this.profileForm.get("name")?.setValue(this.clients[this.idNumberMinusOne]?.name);
         this.profileForm.get("address")?.setValue(this.clients[this.idNumberMinusOne]?.address);
         this.profileForm.get("telephone")?.setValue(this.clients[this.idNumberMinusOne]?.telephone);
         this.profileForm.get("account")?.setValue(this.clients[this.idNumberMinusOne]?.account);
       }
      }
    )
  }

onSubmit(event: any) {
    this.apiService.updateClient(this.profileForm.value, this.idNumber);

}

getPeople(): Observable<Client[]> {
  console.log('getPeople '+this.baseURL + 'clients')
  return this.http.get<Client[]>(this.baseURL + 'clients')
}

refreshPeople() {
  this.apiService.getPeople()
    .subscribe((data: any) => {
      this.clients=data;
    })
}

}
