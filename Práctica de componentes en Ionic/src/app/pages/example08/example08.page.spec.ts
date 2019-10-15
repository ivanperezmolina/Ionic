import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example08Page } from './example08.page';

describe('Example08Page', () => {
  let component: Example08Page;
  let fixture: ComponentFixture<Example08Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example08Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
