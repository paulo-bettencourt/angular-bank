import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './add-client/add-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    DeleteClientComponent,
    UpdateClientComponent,
    ClientsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientsListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
