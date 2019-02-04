import { TestBed } from '@angular/core/testing';

import { CustomerAddDeactivateGuardService } from './customer-add-deactivate-guard.service';

describe('CustomerAddDeactivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerAddDeactivateGuardService = TestBed.get(CustomerAddDeactivateGuardService);
    expect(service).toBeTruthy();
  });
});
