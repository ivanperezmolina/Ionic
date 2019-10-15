import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalagaImageComponent } from './malaga-image.component';

describe('MalagaImageComponent', () => {
  let component: MalagaImageComponent;
  let fixture: ComponentFixture<MalagaImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalagaImageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalagaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
