import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tipoObjeto } from './tipoObjeto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class tipoObjetoService {
  private tipoObjetosUrl = 'http://obligatorio-api.herokuapp.com/api/tipoObjeto';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  gettipoObjetos (): Observable<tipoObjeto[]> {
    return this.http.get<tipoObjeto[]>(this.tipoObjetosUrl)
  }

  gettipoObjeto(id: string): Observable<tipoObjeto> {
    const url = `${this.tipoObjetosUrl}/${id}`;
    return this.http.get<tipoObjeto>(url);
  }

  addtipoObjeto (tipoObjeto: tipoObjeto): Observable<tipoObjeto> {
    return this.http.post<tipoObjeto>(this.tipoObjetosUrl, tipoObjeto, httpOptions);
  }

  deletetipoObjeto (tipoObjeto: tipoObjeto | string): Observable<tipoObjeto> {
    const id = typeof tipoObjeto === 'string' ? tipoObjeto : tipoObjeto._id;
    const url = `${this.tipoObjetosUrl}/${id}`;

    return this.http.delete<tipoObjeto>(url, httpOptions);
  }

  updatetipoObjeto (tipoObjeto: tipoObjeto): Observable<any> {
    const id = typeof tipoObjeto === 'string' ? tipoObjeto : tipoObjeto._id;
    const url = `${this.tipoObjetosUrl}/${id}`;
    return this.http.put(url, tipoObjeto, httpOptions);
  }
}