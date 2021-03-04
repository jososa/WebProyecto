import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { administrador } from '../administrador';
import { JwtResponseI } from '../jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from "util";

@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'https://api-proyecto.herokuapp.com';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }

  login(administrador: administrador): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/admin`,
    administrador).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  logout(): void {
    //this.token = localStorage.getItem("ACCESS_TOKEN");
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
    //token = this.getToken();
  }

  setUser(user: administrador): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("ACCESS_TOKEN", token);
  }

   getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  getCurrentUser(): administrador {
    let user_string = localStorage.getItem("ACCESS_TOKEN");
    if (!isNullOrUndefined(user_string)) {
      let user: administrador = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

}
