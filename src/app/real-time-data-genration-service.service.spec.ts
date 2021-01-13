import { TestBed } from '@angular/core/testing';

import { RealTimeDataGenrationServiceService } from './real-time-data-genration-service.service';

describe('RealTimeDataGenrationServiceService', () => {
  let service: RealTimeDataGenrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealTimeDataGenrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
