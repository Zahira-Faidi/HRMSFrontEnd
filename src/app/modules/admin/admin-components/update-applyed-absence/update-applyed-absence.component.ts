import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/modules/employee/employee-service/employee.service';

@Component({
  selector: 'app-update-applyed-absence',
  templateUrl: './update-applyed-absence.component.html',
  styleUrls: ['./update-applyed-absence.component.css']
})
export class UpdateApplyedAbsenceComponent {

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
      absenceStatus:['', Validators.required],
    });

    // Initialize the form with data if available
    if (this.data) {
      this.absenceForm.patchValue(this.data);
    }
  }

  onSubmit() {
   console.log('absence form')
    console.log(this.absenceForm.value);

    if (this.absenceForm.valid) {
      if (this.data) {
        this.service.updateAbsence(this.data.id, this.absenceForm.value).subscribe({
          next: () => this.snackBar.open('Employee Absence detail updated!', 'Close', { duration: 3000 }),
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

  status = [
    { value: '0', viewValue: 'Pending' },
    { value: '1', viewValue: 'Approved' },
    { value: '2', viewValue: 'Disapproved' }
  ];
}
