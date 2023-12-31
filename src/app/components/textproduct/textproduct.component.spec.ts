/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextproductComponent } from './textproduct.component';

describe('TextproductComponent', () => {
  let component: TextproductComponent;
  let fixture: ComponentFixture<TextproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
