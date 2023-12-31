/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProuductnewComponent } from './prouductnew.component';

describe('ProuductnewComponent', () => {
  let component: ProuductnewComponent;
  let fixture: ComponentFixture<ProuductnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuductnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuductnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
