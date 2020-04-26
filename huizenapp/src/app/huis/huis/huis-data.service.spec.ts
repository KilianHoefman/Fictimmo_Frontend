import { TestBed } from '@angular/core/testing';

import { HuisDataService } from './huis-data.service';

describe('HuisDataService', () => {
  let service: HuisDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuisDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
