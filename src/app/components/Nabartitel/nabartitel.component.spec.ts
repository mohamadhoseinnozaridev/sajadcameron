/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NabartitelComponent } from './nabartitel.component';

describe('NabartitelComponent', () => {
  let component: NabartitelComponent;
  let fixture: ComponentFixture<NabartitelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NabartitelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NabartitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
