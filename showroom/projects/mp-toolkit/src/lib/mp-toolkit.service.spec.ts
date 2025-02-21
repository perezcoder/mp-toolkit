import { TestBed } from '@angular/core/testing';

import { MpToolkitService } from './mp-toolkit.service';

describe('MpToolkitService', () => {
  let service: MpToolkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpToolkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
