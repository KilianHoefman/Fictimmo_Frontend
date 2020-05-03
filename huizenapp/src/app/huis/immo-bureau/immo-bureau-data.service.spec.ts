import { TestBed } from '@angular/core/testing';

import { ImmoBureauDataService } from './immo-bureau-data.service';

describe('ImmoBureauDataService', () => {
  let service: ImmoBureauDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmoBureauDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
