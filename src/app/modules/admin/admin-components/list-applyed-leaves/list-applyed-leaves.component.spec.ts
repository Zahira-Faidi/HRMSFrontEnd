import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApplyedLeavesComponent } from './list-applyed-leaves.component';

describe('ListApplyedLeavesComponent', () => {
  let component: ListApplyedLeavesComponent;
  let fixture: ComponentFixture<ListApplyedLeavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListApplyedLeavesComponent]
    });
    fixture = TestBed.createComponent(ListApplyedLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
