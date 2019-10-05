import { Component, OnInit } from '@angular/core';
import { tipoObjeto } from '../tipoObjeto';
import { tipoObjetoService } from '../tipoObjeto.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tipoObjeto-details',
  templateUrl: './tipoObjeto-details.component.html',
  styleUrls: ['./tipoObjeto-details.component.css']
})
export class tipoObjetoDetailsComponent implements OnInit {

  tipoObjeto = new tipoObjeto() ;
  submitted = false;
  message: string;

  constructor(
    private tipoObjetoService: tipoObjetoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tipoObjetoService.gettipoObjeto(id)
      .subscribe(tipoObjeto => this.tipoObjeto = tipoObjeto);
  }

  update(): void {
    this.submitted = true;
    this.tipoObjetoService.updatetipoObjeto(this.tipoObjeto)
        .subscribe(result => this.message = "tipoObjeto Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.tipoObjetoService.deletetipoObjeto(this.tipoObjeto._id)
        .subscribe(result => this.message = "tipoObjeto Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}