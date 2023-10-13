/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskmembersComponent } from './taskmembers.component';

describe('TaskmembersComponent', () => {
  let component: TaskmembersComponent;
  let fixture: ComponentFixture<TaskmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
