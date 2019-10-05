import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from './objeto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {
  private ObjetosUrl = 'http://obligatorio-api.herokuapp.com/api/objeto';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getObjetos (): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(this.ObjetosUrl)
  }

  getObjeto(id: string): Observable<Objeto> {
    const url = `${this.ObjetosUrl}/${id}`;
    return this.http.get<Objeto>(url);
  }

  addObjeto (Objeto: Objeto): Observable<Objeto> {
    return this.http.post<Objeto>(this.ObjetosUrl, Objeto, httpOptions);
  }

  deleteObjeto (Objeto: Objeto | string): Observable<Objeto> {
    const id = typeof Objeto === 'string' ? Objeto : Objeto._id;
    const url = `${this.ObjetosUrl}/${id}`;

    return this.http.delete<Objeto>(url, httpOptions);
  }

  updateObjeto (Objeto: Objeto): Observable<any> {
    const id = typeof Objeto === 'string' ? Objeto : Objeto._id;
    const url = `${this.ObjetosUrl}/${id}`;
    return this.http.put(url, Objeto, httpOptions);
  }
}