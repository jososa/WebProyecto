import { TestBed, inject } from '@angular/core/testing';

import { usuarioService } from './usuario.service';

describe('usuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [usuarioService]
    });
  });

  it('should be created', inject([usuarioService], (service: usuarioService) => {
    expect(service).toBeTruthy();
  }));
});
