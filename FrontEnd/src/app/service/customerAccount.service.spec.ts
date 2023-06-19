import { TestBed } from '@angular/core/testing';

import { customerAccountService } from './customerAccount.service';

describe('UseraccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: customerAccountService = TestBed.get(customerAccountService);
    expect(service).toBeTruthy();
  });
});

