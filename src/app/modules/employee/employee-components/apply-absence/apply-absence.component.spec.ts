import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAbsenceComponent } from './apply-absence.component';

describe('ApplyAbsenceComponent', () => {
  let component: ApplyAbsenceComponent;
  let fixture: ComponentFixture<ApplyAbsenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyAbsenceComponent]
    });
    fixture = TestBed.createComponent(ApplyAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
