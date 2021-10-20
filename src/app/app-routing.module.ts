import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  { path: 'clients-list', component: ClientsListComponent },
  { path: 'update-client', component: UpdateClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
