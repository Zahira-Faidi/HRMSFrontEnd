import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployeeLeaveComponent } from './add-edit-employee-leave.component';

describe('AddEditEmployeeLeaveComponent', () => {
  let component: AddEditEmployeeLeaveComponent;
  let fixture: ComponentFixture<AddEditEmployeeLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEmployeeLeaveComponent]
    });
    fixture = TestBed.createComponent(AddEditEmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
