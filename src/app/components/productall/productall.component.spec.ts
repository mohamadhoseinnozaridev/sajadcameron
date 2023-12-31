/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductallComponent } from './productall.component';

describe('ProductallComponent', () => {
  let component: ProductallComponent;
  let fixture: ComponentFixture<ProductallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
