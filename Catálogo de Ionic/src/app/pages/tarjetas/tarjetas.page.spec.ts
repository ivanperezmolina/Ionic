import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasPage } from './tarjetas.page';

describe('TarjetasPage', () => {
  let component: TarjetasPage;
  let fixture: ComponentFixture<TarjetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
