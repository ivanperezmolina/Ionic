import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid3Page } from './grid3.page';

describe('Grid3Page', () => {
  let component: Grid3Page;
  let fixture: ComponentFixture<Grid3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
