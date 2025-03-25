import { TestBed } from '@angular/core/testing';

import { DefaultMapSettingsService } from './default-map-settings.service';

describe('DefaultMapSettingsService', () => {
  let service: DefaultMapSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultMapSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
