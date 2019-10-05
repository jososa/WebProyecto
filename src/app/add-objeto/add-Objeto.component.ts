import { Component, OnInit } from '@angular/core';
import { Objeto } from '../objeto';
import { ObjetoService } from '../objeto.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-Objeto',
  templateUrl: './add-Objeto.component.html',
  styleUrls: ['./add-Objeto.component.css']
})

export class AddObjetoComponent{

  Objeto = new Objeto();
  submitted = false;

  constructor(
    private ObjetoService: ObjetoService,
    private location: Location
  ) { }

  newObjeto(): void {
    this.submitted = false;
    this.Objeto = new Objeto();
  }

 addObjeto() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.Objeto);
    this.ObjetoService.addObjeto(this.Objeto)
        .subscribe();
  }
}
