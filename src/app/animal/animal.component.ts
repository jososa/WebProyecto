import { Component, OnInit } from '@angular/core';
import { animal } from '../animal';
import { animalService } from '../animal.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})

export class animalComponent  implements OnInit {

  animales: animal[];

  constructor(private animalService: animalService,private authService: AuthService, private router: Router) {}
  public isLogged = false;
  ngOnInit(): void {
    this.onCheckUser();
     this.getanimales();
  }

  getanimales() {
    return this.animalService.getanimales()
               .subscribe(
                animales => {
                  console.log(animales);
                  this.animales = animales
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
