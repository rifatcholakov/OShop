import { TestBed, inject } from '@angular/core/testing';

import { OrderDetailsService } from 'shared/services/order-details.service';

describe('OrderDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderDetailsService]
    });
  });

  it('should be created', inject([OrderDetailsService], (service: OrderDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
