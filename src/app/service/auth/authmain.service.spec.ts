import { TestBed } from '@angular/core/testing';

import { AuthmainService } from './authmain.service';

describe('AuthmainService', () => {
  let service: AuthmainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthmainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
