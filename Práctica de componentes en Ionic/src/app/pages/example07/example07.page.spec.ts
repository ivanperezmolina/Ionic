import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example07Page } from './example07.page';

describe('Example07Page', () => {
  let component: Example07Page;
  let fixture: ComponentFixture<Example07Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example07Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
