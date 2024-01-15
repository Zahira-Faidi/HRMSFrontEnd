import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent {
  deptForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private service: AdminService, 
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddEditDepartmentComponent>, // Inject MatDialogRef
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.deptForm = this.fb.group({
      name: ['', Validators.required],
      abbreviation: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.deptForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.deptForm.valid) {
      if (this.data) {
        this.service
          .updateDepartement(this.data.id, this.deptForm.value)
          .subscribe({
            next: (val: any) => {
              this.snackBar.open('Department detail updated!', 'Close');
              this.closeDialogAndRefresh(); // Call the function to close dialog and refresh
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.service.addDepartement(this.deptForm.value).subscribe({
          next: (val: any) => {
            this.snackBar.open('Department added successfully', 'Close');
            this.closeDialogAndRefresh(); // Call the function to close dialog and refresh
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

  // Function to close the dialog and refresh the data (you can customize this function)
  closeDialogAndRefresh() {
    this.dialogRef.close();
    // You can trigger a data refresh here if needed.
  }
}
