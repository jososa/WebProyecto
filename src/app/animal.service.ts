import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { animal } from './animal';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class animalService {
  private animalesUrl = 'https://api-proyecto.herokuapp.com/animales';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getchart(): Observable<animal> {
    const url = 'https://api-proyecto.herokuapp.com/chart';
    return this.http.get<animal>(url);
  }

  getanimales (): Observable<animal[]> {
    return this.http.get<animal[]>(this.animalesUrl)
  }

  getanimal(idanimal: string): Observable<animal> {
    const url = `${this.animalesUrl}/${idanimal}`;
    return this.http.get<animal>(url);
  }

  addanimal (animal: animal): Observable<animal> {
    return this.http.post<animal>(this.animalesUrl, animal, httpOptions);
  }

  deleteanimal (animal: animal | string): Observable<animal> {
    const idanimal = typeof animal === 'string' ? animal : animal.idanimal;
    const url = `${this.animalesUrl}/${idanimal}`;

    return this.http.delete<animal>(url, httpOptions);
  }

  updateanimal (animal: animal): Observable<any> {
    const idanimal = typeof animal === 'string' ? animal : animal.idanimal;
    const url = `${this.animalesUrl}/${idanimal}`;
    return this.http.put(url, animal, httpOptions);
  }
}