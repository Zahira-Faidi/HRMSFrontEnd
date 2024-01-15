import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/modules/employee/employee-service/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-applyed-leaves',
  templateUrl: './update-applyed-leaves.component.html',
  styleUrls: ['./update-applyed-leaves.component.css']
})
export class UpdateApplyedLeavesComponent {

  leaveForm: FormGroup;

  @Output() leaveUpdated: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateApplyedLeavesComponent>, // Inject MatDialogRef
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.leaveForm = this.fb.group({
      reason: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      period: ['', Validators.required],
      comments: ['', Validators.required],  
      leaveStatus:['', Validators.required],  
    });
  }

  ngOnInit(): void {
    this.leaveForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.leaveForm.valid) {
      if (this.data) {
        this.service.updateLeave(this.data.id, this.leaveForm.value).subscribe({
          next: (val: any) => {
            this.snackBar.open('Employee leave detail updated!', 'Close');
            this.closeDialogAndRefresh(); // Call the function to close dialog and refresh
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

  status = [
    { value: '0', viewValue: 'Pending' },
    { value: '1', viewValue: 'Approved' },
    { value: '2', viewValue: 'Disapproved' }
  ];

  closeDialogAndRefresh() {
    this.dialogRef.close();
    this.leaveUpdated.emit(); // Notify the parent component
  }
}
