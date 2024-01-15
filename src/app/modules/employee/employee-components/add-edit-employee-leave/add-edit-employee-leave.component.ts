import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee-service/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

@Component({
  selector: 'app-add-edit-employee-leave',
  templateUrl: './add-edit-employee-leave.component.html',
  styleUrls: ['./add-edit-employee-leave.component.css']
})
export class AddEditEmployeeLeaveComponent {
  leaveForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.leaveForm = this.fb.group({
      reason: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      period: ['', Validators.required],
      comments: ['', Validators.required],  }
    )
  }
  ngOnInit(): void {
    this.leaveForm.patchValue(this.data);
  }
  onSubmit() {
    console.log(this.leaveForm.value);

    if (this.leaveForm.valid) {
      if (this.data) {
        this.service.updateLeave(this.data.id, this.leaveForm.value).subscribe({
          next: (val: any) => {
            this.snackBar.open('Employee leave detail updated!', 'Close');
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this.service.applyLeave(this.leaveForm.value).subscribe({
          next: (val: any) => {
            this.snackBar.open('Leave added successfully', 'Close');
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    } else {
      console.log('Form has errors');
    }
  }
}
