import { TestBed } from '@angular/core/testing';

import { DownloadScoresService } from './download-scores.service';

describe('DownloadScoresService', () => {
  let service: DownloadScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
