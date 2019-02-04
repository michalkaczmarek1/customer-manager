import { TestBed } from '@angular/core/testing';

import { ContractResolverService } from './contract-resolver.service';

describe('ContractResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractResolverService = TestBed.get(ContractResolverService);
    expect(service).toBeTruthy();
  });
});
