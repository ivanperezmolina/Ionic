import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradatextoPage } from './entradatexto.page';

describe('EntradatextoPage', () => {
  let component: EntradatextoPage;
  let fixture: ComponentFixture<EntradatextoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradatextoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradatextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
