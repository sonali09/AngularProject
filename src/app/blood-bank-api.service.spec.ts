import { TestBed, inject } from '@angular/core/testing';

import { BloodBankAPIService } from './blood-bank-api.service';

describe('BloodBankAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloodBankAPIService]
    });
  });

  it('should be created', inject([BloodBankAPIService], (service: BloodBankAPIService) => {
    expect(service).toBeTruthy();
  }));
});
