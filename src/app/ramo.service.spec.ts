import { TestBed } from '@angular/core/testing';

import { RamoService } from './ramo.service';

describe('RamoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RamoService = TestBed.get(RamoService);
    expect(service).toBeTruthy();
  });
});
