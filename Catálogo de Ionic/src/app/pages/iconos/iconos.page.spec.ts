import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosPage } from './iconos.page';

describe('IconosPage', () => {
  let component: IconosPage;
  let fixture: ComponentFixture<IconosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
