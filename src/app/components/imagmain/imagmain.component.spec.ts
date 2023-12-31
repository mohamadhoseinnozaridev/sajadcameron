/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImagmainComponent } from './imagmain.component';

describe('ImagmainComponent', () => {
  let component: ImagmainComponent;
  let fixture: ComponentFixture<ImagmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
