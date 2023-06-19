import { TestBed } from '@angular/core/testing';

import { TravelagentService } from './travelagent.service';

describe('TravelagentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelagentService = TestBed.get(TravelagentService);
    expect(service).toBeTruthy();
  });
});

