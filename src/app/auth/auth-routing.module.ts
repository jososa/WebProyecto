import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { administradorComponent } from '../administrador/administrador.component';

const routes: Routes = [
  { path: 'administrador', component: administradorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
