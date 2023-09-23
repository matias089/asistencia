import { TestBed } from '@angular/core/testing';

import { PageProtegidoGuard } from './page-protegido.guard';

describe('PageProtegidoGuard', () => {
  let guard: PageProtegidoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageProtegidoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
