import { TestBed } from '@angular/core/testing';

import { EnquriyService } from './enquriy.service';

describe('EnquriyService', () => {
  let service: EnquriyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquriyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
