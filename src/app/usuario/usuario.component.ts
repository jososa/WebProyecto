import { Component, OnInit, NgModule, Pipe, PipeTransform } from '@angular/core';
import { usuario } from '../usuario';
import { usuarioService } from '../usuario.service';
import { AuthService } from '../auth/auth.service';
@Pipe({
  name: 'filter'
})

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class usuarioComponent  implements OnInit{
  filterPost = '';
  usuarios: usuario[];

  constructor(private usuarioService: usuarioService, private authService: AuthService) {}
  public isLogged = false;

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const usuarios of value) {
      if (usuarios.email.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(usuarios);
      };
    };
    return resultPosts;
  }

  ngOnInit(): void {
    this.onCheckUser();
     this.getusuarios();
  }

  getusuarios() {
    return this.usuarioService.getusuarios()
               .subscribe(
                usuarios => {
                  console.log(usuarios);
                  this.usuarios = usuarios
                 }
                );
 }
 onCheckUser(): void {
  if (this.authService.getToken() === null) {
    this.isLogged = false;
  } else {
    this.isLogged = true;
  }
}
}
