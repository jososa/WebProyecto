import { Component, OnInit } from '@angular/core';
import { Objeto } from '../objeto';
import { ObjetoService } from '../objeto.service';


@Component({
  selector: 'app-Objeto',
  templateUrl: './Objeto.component.html',
  styleUrls: ['./Objeto.component.css']
})

export class ObjetoComponent  implements OnInit {

  Objetos: Objeto[];

  constructor(private ObjetoService: ObjetoService) {}

  ngOnInit(): void {
     this.getObjetos();
  }

  getObjetos() {
    return this.ObjetoService.getObjetos()
               .subscribe(
                Objetos => {
                  console.log(Objetos);
                  this.Objetos = Objetos
                 }
                );
 }
}
