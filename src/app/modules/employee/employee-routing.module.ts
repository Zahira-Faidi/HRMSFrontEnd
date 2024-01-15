import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './employee-components/dashboard/dashboard.component';
import { EmployeeGuard } from 'src/app/auth/guards/employee-guard/employee.guard';
import { ApplyLeaveComponent } from './employee-components/apply-leave/apply-leave.component';
import { ApplyAbsenceComponent } from './employee-components/apply-absence/apply-absence.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent, canActivate:[EmployeeGuard]},
  {path: 'leave', component:ApplyLeaveComponent, canActivate:[EmployeeGuard]},
  {path: 'absence', component:ApplyAbsenceComponent, canActivate:[EmployeeGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
