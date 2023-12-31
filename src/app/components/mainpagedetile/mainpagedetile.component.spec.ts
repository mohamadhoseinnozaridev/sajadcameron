/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainpagedetileComponent } from './mainpagedetile.component';

describe('MainpagedetileComponent', () => {
  let component: MainpagedetileComponent;
  let fixture: ComponentFixture<MainpagedetileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagedetileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagedetileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
