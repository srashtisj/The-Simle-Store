import { TestBed } from '@angular/core/testing';

import { SncakbarService } from './sncakbar.service';

describe('SncakbarService', () => {
  let service: SncakbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SncakbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
