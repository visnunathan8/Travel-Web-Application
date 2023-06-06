import { TestBed } from '@angular/core/testing';

import { BookingPackageService } from './booking-package.service';

describe('BookingPackageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingPackageService = TestBed.get(BookingPackageService);
    expect(service).toBeTruthy();
  });
});
