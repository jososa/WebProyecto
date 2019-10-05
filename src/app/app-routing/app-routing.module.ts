import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tipoObjetoComponent } from '../tipoObjeto/tipoObjeto.component';
import { AddtipoObjetoComponent } from '../add-tipoObjeto/add-tipoObjeto.component';
import { tipoObjetoDetailsComponent } from '../tipoObjeto-details/tipoObjeto-details.component';
import { ObjetoComponent } from '../objeto/Objeto.component';
import { AddObjetoComponent } from '../add-objeto/add-Objeto.component';
import { ObjetoDetailsComponent } from '../objeto-details/Objeto-details.component';

const routes: Routes = [
   { 
     path: 'tipoObjetos', 
     component: tipoObjetoComponent 
   },
   { 
     path: 'tipoObjeto/add', 
     component: AddtipoObjetoComponent 
   },
   { 
     path: 'tipoObjeto/:id', 
     component: tipoObjetoDetailsComponent 
   },
   { 
     path: '', 
     redirectTo: 'tipoObjetos', 
     pathMatch: 'full'
   },
   
   { 
    path: 'Objetos', 
    component: ObjetoComponent 
  },
  { 
    path: 'Objeto/add', 
    component: AddObjetoComponent 
  },
  { 
    path: 'Objeto/:id', 
    component: ObjetoDetailsComponent 
  },
  { 
    path: '', 
    redirectTo: 'Objetos', 
    pathMatch: 'full'
  },
   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}