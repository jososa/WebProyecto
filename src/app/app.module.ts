import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { tipoObjetoComponent } from './tipoObjeto/tipoObjeto.component';
import { tipoObjetoDetailsComponent } from './tipoObjeto-details/tipoObjeto-details.component';
import { AddtipoObjetoComponent } from './add-tipoObjeto/add-tipoObjeto.component';
import { ObjetoComponent } from './objeto/Objeto.component';
import { ObjetoDetailsComponent } from './objeto-details/Objeto-details.component';
import { AddObjetoComponent } from './add-objeto/add-Objeto.component';

@NgModule({
  declarations: [
    AppComponent,
    tipoObjetoComponent,
    tipoObjetoDetailsComponent,
    AddtipoObjetoComponent,
    ObjetoComponent,
    ObjetoDetailsComponent,
    AddObjetoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
