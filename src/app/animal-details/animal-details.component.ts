import { Component, OnInit } from '@angular/core';
import { animal } from '../animal';
import { animalService } from '../animal.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class animalDetailsComponent implements OnInit {

  animal = new animal() ;
  submitted = false;
  message: string;

  constructor(
    private animalService: animalService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const idanimal = this.route.snapshot.paramMap.get('idanimal');
    this.animalService.getanimal(idanimal)
      .subscribe(animal => this.animal = animal);
  }

  update(): void {
    this.submitted = true;
    this.animalService.updateanimal(this.animal)
        .subscribe(result => this.message = "animal Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.animalService.deleteanimal(this.animal.idanimal)
        .subscribe(result => this.message = "animal Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}