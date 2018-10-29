import { TestBed } from '@angular/core/testing';

import { Datos2Service } from './datos2.service';

describe('Datos2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Datos2Service = TestBed.get(Datos2Service);
    expect(service).toBeTruthy();
  });
});
