import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example01Page } from './example01.page';

describe('Example01Page', () => {
  let component: Example01Page;
  let fixture: ComponentFixture<Example01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
