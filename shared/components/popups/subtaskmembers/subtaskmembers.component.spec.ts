/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubtaskmembersComponent } from './subtaskmembers.component';

describe('SubtaskmembersComponent', () => {
  let component: SubtaskmembersComponent;
  let fixture: ComponentFixture<SubtaskmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtaskmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtaskmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
