import { TestBed, inject } from '@angular/core/testing';

import { SService } from './s.service';

describe('SService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SService]
    });
  });

  it('should be created', inject([SService], (service: SService) => {
    expect(service).toBeTruthy();
  }));
});
