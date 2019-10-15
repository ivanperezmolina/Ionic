import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example04Page } from './example04.page';

describe('Example04Page', () => {
  let component: Example04Page;
  let fixture: ComponentFixture<Example04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example04Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
