import { TestBed } from '@angular/core/testing';

import { SaveMyRouteGuard } from './save-my-route.guard';

describe('SaveMyRouteGuard', () => {
  let guard: SaveMyRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaveMyRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
