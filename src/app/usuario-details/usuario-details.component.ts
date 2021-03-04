import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario';
import { usuarioService } from '../usuario.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css']
})
export class usuarioDetailsComponent implements OnInit {

  usuario = new usuario() ;
  submitted = false;
  message: string;

  constructor(
    private usuarioService: usuarioService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const idusuario = this.route.snapshot.paramMap.get('idusuario');
    this.usuarioService.getusuario(idusuario)
      .subscribe(usuario => this.usuario = usuario);
  }

  update(): void {
    this.submitted = true;
    this.usuarioService.updateusuario(this.usuario)
        .subscribe(result => this.message = "Usuario Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.usuarioService.deleteusuario(this.usuario.idusuario)
        .subscribe(result => this.message = "Usuario Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}