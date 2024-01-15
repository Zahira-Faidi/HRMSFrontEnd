import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApplyedAbsenceComponent } from './list-applyed-absence.component';

describe('ListApplyedAbsenceComponent', () => {
  let component: ListApplyedAbsenceComponent;
  let fixture: ComponentFixture<ListApplyedAbsenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListApplyedAbsenceComponent]
    });
    fixture = TestBed.createComponent(ListApplyedAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
