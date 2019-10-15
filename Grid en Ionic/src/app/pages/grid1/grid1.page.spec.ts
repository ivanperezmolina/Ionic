import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid1Page } from './grid1.page';

describe('Grid1Page', () => {
  let component: Grid1Page;
  let fixture: ComponentFixture<Grid1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
