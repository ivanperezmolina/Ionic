import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example05Page } from './example05.page';

describe('Example05Page', () => {
  let component: Example05Page;
  let fixture: ComponentFixture<Example05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example05Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
