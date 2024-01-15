import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardComponent } from './employee-components/dashboard/dashboard.component';
import { ApplyLeaveComponent } from './employee-components/apply-leave/apply-leave.component';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditEmployeeLeaveComponent } from './employee-components/add-edit-employee-leave/add-edit-employee-leave.component';
import { AddEditEmployeeAbsenceComponent } from './employee-components/add-edit-employee-absence/add-edit-employee-absence.component';
import { ApplyAbsenceComponent } from './employee-components/apply-absence/apply-absence.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ApplyLeaveComponent,
    AddEditEmployeeLeaveComponent,
    AddEditEmployeeAbsenceComponent,
    ApplyAbsenceComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,

    //-------------------
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
  ]
})
export class EmployeeModule { }
