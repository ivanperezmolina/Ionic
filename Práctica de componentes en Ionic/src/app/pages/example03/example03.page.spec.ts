import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example03Page } from './example03.page';

describe('Example03Page', () => {
  let component: Example03Page;
  let fixture: ComponentFixture<Example03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example03Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
