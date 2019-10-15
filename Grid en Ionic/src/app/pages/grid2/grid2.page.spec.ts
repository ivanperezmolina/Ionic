import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid2Page } from './grid2.page';

describe('Grid2Page', () => {
  let component: Grid2Page;
  let fixture: ComponentFixture<Grid2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
