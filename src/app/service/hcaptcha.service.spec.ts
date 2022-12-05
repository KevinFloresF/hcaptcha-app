import { TestBed } from '@angular/core/testing';

import { HcaptchaService } from './hcaptcha.service';

describe('HcaptchaService', () => {
  let service: HcaptchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HcaptchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
