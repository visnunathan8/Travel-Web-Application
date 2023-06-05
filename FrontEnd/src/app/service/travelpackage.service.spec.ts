import { TestBed } from '@angular/core/testing';

import { TravelpackageService } from './travelpackage.service';

describe('TravelpackageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelpackageService = TestBed.get(TravelpackageService);
    expect(service).toBeTruthy();
  });
});
