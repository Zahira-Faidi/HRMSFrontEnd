import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplyedAbsenceComponent } from './update-applyed-absence.component';

describe('UpdateApplyedAbsenceComponent', () => {
  let component: UpdateApplyedAbsenceComponent;
  let fixture: ComponentFixture<UpdateApplyedAbsenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateApplyedAbsenceComponent]
    });
    fixture = TestBed.createComponent(UpdateApplyedAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
