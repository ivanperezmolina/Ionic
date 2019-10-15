import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPage } from './scroll.page';

describe('ScrollPage', () => {
  let component: ScrollPage;
  let fixture: ComponentFixture<ScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
