import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example06Page } from './example06.page';

describe('Example06Page', () => {
  let component: Example06Page;
  let fixture: ComponentFixture<Example06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example06Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
