import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { animalComponent } from '../animal/animal.component';
import { AddAnimalComponent } from '../add-animal/add-animal.component';
import { animalDetailsComponent } from '../animal-details/animal-details.component';
import { usuarioComponent } from '../usuario/usuario.component';
import { AddusuarioComponent } from '../add-usuario/add-usuario.component';
import { usuarioDetailsComponent } from '../usuario-details/usuario-details.component';
import { PieChartComponent } from '../pie-chart.component';
import { administradorComponent } from '../administrador/administrador.component';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'administrador',
    component: administradorComponent
  },
  {
    path: '',
    redirectTo:'administrador',
    pathMatch: 'full'
  },
   { 
     path: 'animales', 
     component: animalComponent,
     canActivate: [AuthGuard]
   },
   { 
     path: 'animal/add', 
     component: AddAnimalComponent,
     canActivate: [AuthGuard]
   },
   { 
     path: 'animal/:idanimal', 
     component: animalDetailsComponent,
     canActivate: [AuthGuard]
   },
   { 
     path: '', 
     redirectTo: 'animales', 
     pathMatch: 'full'
   },
   
   { 
    path: 'usuarios', 
    component: usuarioComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'usuario/add', 
    component: AddusuarioComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'usuario/:idusuario', 
    component: usuarioDetailsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '', 
    redirectTo: 'usuarios', 
    pathMatch: 'full'
  },
  { 
    path: 'chart', 
    component: PieChartComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '', 
    redirectTo: 'chart', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}