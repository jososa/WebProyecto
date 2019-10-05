import { TestBed, inject } from '@angular/core/testing';

import { tipoObjetoService } from './tipoObjeto.service';

describe('tipoObjetoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [tipoObjetoService]
    });
  });

  it('should be created', inject([tipoObjetoService], (service: tipoObjetoService) => {
    expect(service).toBeTruthy();
  }));
});
