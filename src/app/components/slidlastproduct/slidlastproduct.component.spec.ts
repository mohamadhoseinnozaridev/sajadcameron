/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlidlastproductComponent } from './slidlastproduct.component';

describe('SlidlastproductComponent', () => {
  let component: SlidlastproductComponent;
  let fixture: ComponentFixture<SlidlastproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidlastproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidlastproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
