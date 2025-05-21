import { TestBed } from '@angular/core/testing';

import { AnalyticsRouterTrackerService } from './analytics-router-tracker.service';

describe('AnalyticsRouterTrackerService', () => {
  let service: AnalyticsRouterTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsRouterTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
