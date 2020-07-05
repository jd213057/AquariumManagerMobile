import { TestBed } from '@angular/core/testing';

import { AquariumService } from './aquarium.service';

describe('AquariumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AquariumService = TestBed.get(AquariumService);
    expect(service).toBeTruthy();
  });
});
