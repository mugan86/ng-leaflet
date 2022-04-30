import { TestBed } from '@angular/core/testing';

import { NgLeafletService } from './ng-leaflet.service';

describe('NgLeafletService', () => {
  let service: NgLeafletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLeafletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
