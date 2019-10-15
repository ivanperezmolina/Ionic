import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example02Page } from './example02.page';

describe('Example02Page', () => {
  let component: Example02Page;
  let fixture: ComponentFixture<Example02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
