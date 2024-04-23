import { TestBed } from '@angular/core/testing';

import { PastaService } from './api.pasta-service';

describe('ApiService', () => {
  let service: PastaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
