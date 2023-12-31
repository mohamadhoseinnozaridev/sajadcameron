/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlidshowComponent } from './slidshow.component';

describe('SlidshowComponent', () => {
  let component: SlidshowComponent;
  let fixture: ComponentFixture<SlidshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
