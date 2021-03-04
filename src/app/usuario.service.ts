import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from './usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class usuarioService {
  private usuariosUrl = 'https://api-proyecto.herokuapp.com/usuario';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getusuarios (): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.usuariosUrl)
  }

  getusuario(idusuario: string): Observable<usuario> {
    const url = `${this.usuariosUrl}/${idusuario}`;
    return this.http.get<usuario>(url);
  }

  addusuario (usuario: usuario): Observable<usuario> {
    return this.http.post<usuario>(this.usuariosUrl, usuario, httpOptions);
  }

  deleteusuario (usuario: usuario | string): Observable<usuario> {
    const idusuario = typeof usuario === 'string' ? usuario : usuario.idusuario;
    const url = `${this.usuariosUrl}/${idusuario}`;

    return this.http.delete<usuario>(url, httpOptions);
  }

  updateusuario (usuario: usuario): Observable<any> {
    const idusuario = typeof usuario === 'string' ? usuario : usuario.idusuario;
    const url = `${this.usuariosUrl}/${idusuario}`;
    return this.http.put(url, usuario, httpOptions);
  }
}