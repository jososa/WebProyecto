import { Component, OnInit } from '@angular/core';
import { tipoObjeto } from '../tipoObjeto';
import { tipoObjetoService } from '../tipoObjeto.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-tipoObjeto',
  templateUrl: './add-tipoObjeto.component.html',
  styleUrls: ['./add-tipoObjeto.component.css']
})

export class AddtipoObjetoComponent{

  tipoObjeto = new tipoObjeto();
  submitted = false;

  constructor(
    private tipoObjetoService: tipoObjetoService,
    private location: Location
  ) { }

  newtipoObjeto(): void {
    this.submitted = false;
    this.tipoObjeto = new tipoObjeto();
  }

 addtipoObjeto() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.tipoObjeto);
    this.tipoObjetoService.addtipoObjeto(this.tipoObjeto)
        .subscribe();
  }
}
