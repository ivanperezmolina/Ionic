import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesPage } from './botones.page';

describe('BotonesPage', () => {
  let component: BotonesPage;
  let fixture: ComponentFixture<BotonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
