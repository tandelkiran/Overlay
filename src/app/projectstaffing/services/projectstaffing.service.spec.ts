import { TestBed } from '@angular/core/testing';

import { ProjectstaffingService } from './projectstaffing.service';

describe('ProjectstaffingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectstaffingService = TestBed.get(ProjectstaffingService);
    expect(service).toBeTruthy();
  });
});
