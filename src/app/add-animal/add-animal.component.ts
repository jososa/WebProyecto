import { Component, OnInit } from '@angular/core';
import { animal } from '../animal';
import { animalService } from '../animal.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})

export class AddAnimalComponent{

  animal = new animal();
  submitted = false;

  constructor(
    private animalService: animalService,
    private location: Location
  ) { }

  newanimal(): void {
    this.submitted = false;
    this.animal = new animal();
  }

 addanimal() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.animal);
    this.animalService.addanimal(this.animal)
        .subscribe();
  }
}
