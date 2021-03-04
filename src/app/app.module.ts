import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { animalComponent } from './animal/animal.component';
import { animalDetailsComponent } from './animal-details/animal-details.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { usuarioComponent } from './usuario/usuario.component';
import { usuarioDetailsComponent } from './usuario-details/usuario-details.component';
import { AddusuarioComponent } from './add-usuario/add-usuario.component';
import { PieChartComponent } from './pie-chart.component';
import { administradorComponent } from './administrador/administrador.component';
import { AuthService } from './auth/auth.service';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { FilterPipe } from './usuario/filter.pipe';
import { animalFilterPipe } from './pipes/animal-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    animalComponent,
    animalDetailsComponent,
    AddAnimalComponent,
    usuarioComponent,
    usuarioDetailsComponent,
    AddusuarioComponent,
    PieChartComponent,
    administradorComponent,
    FilterPipe,
    animalFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
