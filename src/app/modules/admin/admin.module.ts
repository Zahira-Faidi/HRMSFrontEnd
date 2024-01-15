import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { PostEmployeeComponent } from './admin-components/post-employee/post-employee.component';


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
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditEmpComponent } from './admin-components/add-edit-emp/add-edit-emp.component';
import { PostDepartmentComponent } from './admin-components/post-department/post-department.component';
import { AddEditDepartmentComponent } from './admin-components/add-edit-department/add-edit-department.component';
import { ListApplyedLeavesComponent } from './admin-components/list-applyed-leaves/list-applyed-leaves.component';
import { UpdateApplyedLeavesComponent } from './admin-components/update-applyed-leaves/update-applyed-leaves.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { UpdateApplyedAbsenceComponent } from './admin-components/update-applyed-absence/update-applyed-absence.component';
import { ListApplyedAbsenceComponent } from './admin-components/list-applyed-absence/list-applyed-absence.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostEmployeeComponent,
    AddEditEmpComponent,
    PostDepartmentComponent,
    AddEditDepartmentComponent,
    ListApplyedLeavesComponent,
    UpdateApplyedLeavesComponent,
    UpdateApplyedAbsenceComponent,
    ListApplyedAbsenceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatButtonModule,
    //--------------
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
    MatMenuModule,
    MatCardModule,
  ]
})
export class AdminModule { }
