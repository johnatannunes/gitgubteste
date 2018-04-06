import { TestBed, inject } from '@angular/core/testing';

import { PopupContatosService } from './popup-contatos.service';

describe('PopupContatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupContatosService]
    });
  });

  it('should be created', inject([PopupContatosService], (service: PopupContatosService) => {
    expect(service).toBeTruthy();
  }));
});
