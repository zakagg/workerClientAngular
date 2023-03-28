import { TestBed } from '@angular/core/testing';

import { WorkDetailsGuard } from './work-details.guard';

describe('WorkDetailsGuard', () => {
  let guard: WorkDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WorkDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
