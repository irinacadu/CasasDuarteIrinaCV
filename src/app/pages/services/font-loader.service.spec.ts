import { TestBed } from '@angular/core/testing';

import { FontLoaderService } from './font-loader.service';

describe('FontLoaderService', () => {
  let service: FontLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FontLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
