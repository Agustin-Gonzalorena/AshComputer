import { TestBed } from '@angular/core/testing';

import { DbComputersService } from './db-computers.service';

describe('DbComputersService', () => {
  let service: DbComputersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbComputersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
