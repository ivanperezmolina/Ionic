import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPagePage } from './test-page.page';

describe('TestPagePage', () => {
  let component: TestPagePage;
  let fixture: ComponentFixture<TestPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
