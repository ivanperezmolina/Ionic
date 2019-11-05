import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPeliculasPage } from './detalles-peliculas.page';

describe('DetallesPeliculasPage', () => {
  let component: DetallesPeliculasPage;
  let fixture: ComponentFixture<DetallesPeliculasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPeliculasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
