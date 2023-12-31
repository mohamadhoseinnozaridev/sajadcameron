/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiscripshionComponent } from './discripshion.component';

describe('DiscripshionComponent', () => {
  let component: DiscripshionComponent;
  let fixture: ComponentFixture<DiscripshionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscripshionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscripshionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
