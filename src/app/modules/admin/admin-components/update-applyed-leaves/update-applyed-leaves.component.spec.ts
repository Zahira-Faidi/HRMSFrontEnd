import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplyedLeavesComponent } from './update-applyed-leaves.component';

describe('UpdateApplyedLeavesComponent', () => {
  let component: UpdateApplyedLeavesComponent;
  let fixture: ComponentFixture<UpdateApplyedLeavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateApplyedLeavesComponent]
    });
    fixture = TestBed.createComponent(UpdateApplyedLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
