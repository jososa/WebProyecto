import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { administrador } from '../administrador';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class administradorComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public isLogged = false;

  ngOnInit() {
    this.onCheckUser();
  }

  onLogin(form): void {
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/usuarios');
    });
  }

  onCheckUser(): void {
    if (this.authService.getToken() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

}
