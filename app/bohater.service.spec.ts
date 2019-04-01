import { TestBed } from '@angular/core/testing';

import { BohaterService } from './bohater.service';

describe('BohaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BohaterService = TestBed.get(BohaterService);
    expect(service).toBeTruthy();
  });
});
