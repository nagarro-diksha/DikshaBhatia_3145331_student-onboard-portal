import { TestBed, async, inject } from '@angular/core/testing';

import { LoginAuthenticationGuard } from './login-authentication.guard';

describe('LoginAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthenticationGuard]
    });
  });

  it('should ...', inject([LoginAuthenticationGuard], (guard: LoginAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
