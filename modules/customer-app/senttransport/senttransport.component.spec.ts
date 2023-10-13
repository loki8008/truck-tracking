import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenttransportComponent } from './senttransport.component';

describe('SenttransportComponent', () => {
  let component: SenttransportComponent;
  let fixture: ComponentFixture<SenttransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenttransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenttransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
