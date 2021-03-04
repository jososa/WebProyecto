import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private location: Location) { }
  public app_name = 'Proyecto ORT';
  public isLogged = false;

  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void {
    this.authService.logout();
    location.reload();
  }

  onCheckUser(): void {
    if (this.authService.getToken() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
