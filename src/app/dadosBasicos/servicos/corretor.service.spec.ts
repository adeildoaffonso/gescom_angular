import { TestBed } from '@angular/core/testing';

import { CorretorService } from './corretor.service';

describe('CorretorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorretorService = TestBed.get(CorretorService);
    expect(service).toBeTruthy();
  });
});
