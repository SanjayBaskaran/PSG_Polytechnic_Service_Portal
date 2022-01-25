import { TestBed } from '@angular/core/testing';

import { TokenHeaderInterceptorService } from './token-header-interceptor.service';

describe('TokenHeaderInterceptorService', () => {
  let service: TokenHeaderInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenHeaderInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
