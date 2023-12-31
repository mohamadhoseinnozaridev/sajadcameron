/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultproductComponent } from './resultproduct.component';

describe('ResultproductComponent', () => {
  let component: ResultproductComponent;
  let fixture: ComponentFixture<ResultproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
