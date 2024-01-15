import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { AdminGuard } from 'src/app/auth/guards/admin-guard/admin.guard';
import { PostEmployeeComponent } from './admin-components/post-employee/post-employee.component';
import { PostDepartmentComponent } from './admin-components/post-department/post-department.component';
import { ListApplyedLeavesComponent } from './admin-components/list-applyed-leaves/list-applyed-leaves.component';
import { ListApplyedAbsenceComponent } from './admin-components/list-applyed-absence/list-applyed-absence.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent, canActivate: [AdminGuard]},
  {path: 'employee', component:PostEmployeeComponent, canActivate: [AdminGuard]},
  {path: 'department', component:PostDepartmentComponent, canActivate: [AdminGuard]},
  {path: 'leave', component:ListApplyedLeavesComponent, canActivate: [AdminGuard]},
  {path: 'absence', component:ListApplyedAbsenceComponent, canActivate: [AdminGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
