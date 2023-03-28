import { TestBed } from '@angular/core/testing';

import { WorkerDetailsGuard } from './worker-details.guard';

describe('WorkerDetailsGuard', () => {
  let guard: WorkerDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WorkerDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
