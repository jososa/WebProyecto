import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario';
import { usuarioService } from '../usuario.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})

export class AddusuarioComponent{

  usuario = new usuario();
  submitted = false;

  constructor(
    private usuarioService: usuarioService,
    private location: Location
  ) { }

  newUsuario(): void {
    this.submitted = false;
    this.usuario = new usuario();
  }

 addUsuario() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.usuario);
    this.usuarioService.addusuario(this.usuario)
        .subscribe();
  }
}
