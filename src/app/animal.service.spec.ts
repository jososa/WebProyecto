import { TestBed, inject } from '@angular/core/testing';

import { animalService } from './animal.service';

describe('animalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [animalService]
    });
  });

  it('should be created', inject([animalService], (service: animalService) => {
    expect(service).toBeTruthy();
  }));
});
