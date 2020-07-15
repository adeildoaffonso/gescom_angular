import { TestBed } from '@angular/core/testing';

import { AgenciadorService } from './agenciador.service';

describe('AgenciadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgenciadorService = TestBed.get(AgenciadorService);
    expect(service).toBeTruthy();
  });
});
