/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlidfilterComponent } from './slidfilter.component';

describe('SlidfilterComponent', () => {
  let component: SlidfilterComponent;
  let fixture: ComponentFixture<SlidfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
