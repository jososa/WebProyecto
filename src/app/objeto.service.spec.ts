import { TestBed, inject } from '@angular/core/testing';

import { ObjetoService } from './Objeto.service';

describe('ObjetoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjetoService]
    });
  });

  it('should be created', inject([ObjetoService], (service: ObjetoService) => {
    expect(service).toBeTruthy();
  }));
});
