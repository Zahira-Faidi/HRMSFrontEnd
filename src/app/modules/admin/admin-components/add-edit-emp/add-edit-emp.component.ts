import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent {
  empForm: FormGroup;
  dialogRef: any;

  constructor(
    private fb: FormBuilder, 
    private service: AdminService, 
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.empForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      doe: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      contractType: ['', Validators.required],
      role: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  departments = [
    { value: '0', viewValue: 'HR' },
    { value: '1', viewValue: 'IT' },
    { value: '2', viewValue: 'Finance' }
  ];

  typeContrats = [
    { value: '0', viewValue: 'CDI' },
    { value: '1', viewValue: 'CDD' },
    { value: '2', viewValue: 'STAGE' }
  ];

  roles = [
    { value: '1', viewValue: 'EMPLOYEE' },
    { value: '0', viewValue: 'ADMIN' },
  ];
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this.service
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this.snackBar.open('Employee detail updated!',"Close");
              this.closeDialogAndRefresh(); // Call the function to close dialog and refresh

            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.service.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this.snackBar.open('Employee added successfully',"Close");
            this.closeDialogAndRefresh(); // Call the function to close dialog and refresh
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
    
  }
  closeDialogAndRefresh() {
    this.dialogRef.close();
    // You can trigger a data refresh here if needed.
  }
}
