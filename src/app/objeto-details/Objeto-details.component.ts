import { Component, OnInit } from '@angular/core';
import { Objeto } from '../objeto';
import { ObjetoService } from '../objeto.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-Objeto-details',
  templateUrl: './Objeto-details.component.html',
  styleUrls: ['./Objeto-details.component.css']
})
export class ObjetoDetailsComponent implements OnInit {

  Objeto = new Objeto() ;
  submitted = false;
  message: string;

  constructor(
    private ObjetoService: ObjetoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ObjetoService.getObjeto(id)
      .subscribe(Objeto => this.Objeto = Objeto);
  }

  update(): void {
    this.submitted = true;
    this.ObjetoService.updateObjeto(this.Objeto)
        .subscribe(result => this.message = "Objeto Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.ObjetoService.deleteObjeto(this.Objeto._id)
        .subscribe(result => this.message = "Objeto Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}