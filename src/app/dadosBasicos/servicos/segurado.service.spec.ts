import { TestBed } from '@angular/core/testing';

import { SeguradoService } from './segurado.service';

describe('SeguradoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeguradoService = TestBed.get(SeguradoService);
    expect(service).toBeTruthy();
  });
});
