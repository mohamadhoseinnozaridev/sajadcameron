/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextbolderComponent } from './textbolder.component';

describe('TextbolderComponent', () => {
  let component: TextbolderComponent;
  let fixture: ComponentFixture<TextbolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
