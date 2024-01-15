// add-edit-employee-absence.component.ts
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee-service/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-employee-absence',
  templateUrl: './add-edit-employee-absence.component.html',
  styleUrls: ['./add-edit-employee-absence.component.css']
})
export class AddEditEmployeeAbsenceComponent {
  absenceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.absenceForm = this.fb.group({
      date_absence: [new Date(), Validators.required],
      horaire: ['', Validators.required],
      nb_hour: ['', Validators.required],
      rais_abs: ['', Validators.required],
    });

    // Initialize the form with data if available
    if (this.data) {
      this.absenceForm.patchValue(this.data);
    }
  }

  onSubmit() {
   // console.log(this.absenceForm.value);

    if (this.absenceForm.valid) {
      if (this.data) {
        this.service.updateAbsence(this.data.id, this.absenceForm.value).subscribe({
          next: () => this.snackBar.open('Employee Absence detail updated!', 'Close', { duration: 3000 }),
          error: (err: any) => console.error(err),
        });
      } else {
        this.service.applyAbsence(this.absenceForm.value).subscribe({
          next: () => this.snackBar.open('Absence added successfully', 'Close', { duration: 3000 }),
          error: (err: any) => console.error(err),
        });
      }
    } else {
      console.log('Form has errors');
    }
  }

  horaires = [
    { value: '0', viewValue: 'Morning' },
    { value: '1', viewValue: 'Afternoon' },
  ];
}
