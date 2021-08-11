import { TestBed } from '@angular/core/testing';

import { AndroidBackButtonGuard } from './android-back-button.guard';

describe('AndroidBackButtonGuard', () => {
  let guard: AndroidBackButtonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AndroidBackButtonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
