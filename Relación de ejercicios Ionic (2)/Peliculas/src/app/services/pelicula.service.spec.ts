import { TestBed } from '@angular/core/testing';

import { PeliculaService } from './pelicula.service';

describe('PeliculaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculaService = TestBed.get(PeliculaService);
    expect(service).toBeTruthy();
  });
});
