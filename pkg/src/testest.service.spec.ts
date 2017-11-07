import { TestBed, inject } from '@angular/core/testing';

import { TestestService } from './testest.service';

describe('TestestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestestService]
    });
  });

  it('should be created', inject([TestestService], (service: TestestService) => {
    expect(service).toBeTruthy();
  }));
});
