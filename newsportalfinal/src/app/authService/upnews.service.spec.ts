import { TestBed } from '@angular/core/testing';

import { UpnewsService } from './upnews.service';

describe('UpnewsService', () => {
  let service: UpnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
