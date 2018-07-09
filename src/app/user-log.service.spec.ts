import { TestBed, inject } from '@angular/core/testing';

import { UserLogService } from './user-log.service';

describe('UserLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLogService]
    });
  });

  it('should be created', inject([UserLogService], (service: UserLogService) => {
    expect(service).toBeTruthy();
  }));
});
