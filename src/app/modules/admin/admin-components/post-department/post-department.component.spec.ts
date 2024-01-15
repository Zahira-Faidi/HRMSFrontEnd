import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDepartmentComponent } from './post-department.component';

describe('PostDepartmentComponent', () => {
  let component: PostDepartmentComponent;
  let fixture: ComponentFixture<PostDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDepartmentComponent]
    });
    fixture = TestBed.createComponent(PostDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
