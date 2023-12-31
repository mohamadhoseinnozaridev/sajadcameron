/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainresultproductComponent } from './mainresultproduct.component';

describe('MainresultproductComponent', () => {
  let component: MainresultproductComponent;
  let fixture: ComponentFixture<MainresultproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainresultproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainresultproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
