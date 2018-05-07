import { TestBed, inject } from '@angular/core/testing';

import { FoInspectService } from './fo-inspect.service';

describe('FoInspectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoInspectService]
    });
  });

  it('should be created', inject([FoInspectService], (service: FoInspectService) => {
    expect(service).toBeTruthy();
  }));
});
