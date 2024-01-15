import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployeeAbsenceComponent } from './add-edit-employee-absence.component';

describe('AddEditEmployeeAbsenceComponent', () => {
  let component: AddEditEmployeeAbsenceComponent;
  let fixture: ComponentFixture<AddEditEmployeeAbsenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEmployeeAbsenceComponent]
    });
    fixture = TestBed.createComponent(AddEditEmployeeAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
