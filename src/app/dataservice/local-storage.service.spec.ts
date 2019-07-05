import { TestBed } from '@angular/core/testing';

import { LocalstorageService } from '../dataservice/local-storage.service';

describe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    expect(service).toBeTruthy();
  });
});
