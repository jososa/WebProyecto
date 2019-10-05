import { Component, OnInit } from '@angular/core';
import { tipoObjeto } from '../tipoObjeto';
import { tipoObjetoService } from '../tipoObjeto.service';


@Component({
  selector: 'app-tipoObjeto',
  templateUrl: './tipoObjeto.component.html',
  styleUrls: ['./tipoObjeto.component.css']
})

export class tipoObjetoComponent  implements OnInit {

  tipoObjetos: tipoObjeto[];

  constructor(private tipoObjetoService: tipoObjetoService) {}

  ngOnInit(): void {
     this.gettipoObjetos();
  }

  gettipoObjetos() {
    return this.tipoObjetoService.gettipoObjetos()
               .subscribe(
                tipoObjetos => {
                  console.log(tipoObjetos);
                  this.tipoObjetos = tipoObjetos
                 }
                );
 }
}
