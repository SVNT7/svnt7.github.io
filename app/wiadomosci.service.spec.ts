import { TestBed } from '@angular/core/testing';

import { WiadomosciService } from './wiadomosci.service';

describe('WiadomosciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WiadomosciService = TestBed.get(WiadomosciService);
    expect(service).toBeTruthy();
  });
});
