import { TestBed } from '@angular/core/testing';

import { LocalArlasMapService } from './local-arlas-map.service';

describe('LocalArlasMapService', () => {
  let service: LocalArlasMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalArlasMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
