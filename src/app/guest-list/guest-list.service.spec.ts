import { TestBed, inject } from '@angular/core/testing';

import { GuestListService } from './guest-list.service';

describe('GuestListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestListService]
    });
  });

  it('should be created', inject([GuestListService], (service: GuestListService) => {
    expect(service).toBeTruthy();
  }));
});
