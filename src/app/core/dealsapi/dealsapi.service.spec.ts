import { TestBed } from '@angular/core/testing';

import { DealsapiService } from './dealsapi.service';

describe('DealsapiService', () => {
  let service: DealsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
