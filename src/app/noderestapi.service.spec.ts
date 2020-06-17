import { TestBed } from '@angular/core/testing';

import { NoderestapiService } from './noderestapi.service';

describe('NoderestapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoderestapiService = TestBed.get(NoderestapiService);
    expect(service).toBeTruthy();
  });
});
