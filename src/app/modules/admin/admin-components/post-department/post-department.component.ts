import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../admin-service/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDepartmentComponent } from '../add-edit-department/add-edit-department.component';

@Component({
  selector: 'app-post-department',
  templateUrl: './post-department.component.html',
  styleUrls: ['./post-department.component.css']
})
export class PostDepartmentComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'abbreviation',
    'action'

  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // dependency injection
  constructor(
    private deptService: AdminService,
    private dialog:MatDialog,
  ) {}

  ngOnInit(): void {
    this.getDepartmentList();
  }

  openAddEditDepartmentDialog() {
     const dialogRef = this.dialog.open(AddEditDepartmentComponent);
     dialogRef.afterClosed().subscribe({
       next: (val) => {
         if (val) {
           this.getDepartmentList();
         }
       },
     });
  }

  getDepartmentList() {
    this.deptService.getDepartementList().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource<any>(res); // Assuming res is an array of employees
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res)
      },
      (err) => {
        console.log(err);
      },
    );
  }
  // for searching employees with firstname, lastname, gennder, etc
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteDepartment(id: number) {
    let confirm = window.confirm("Are you sure you want to delete this Department ?");
    if(confirm) {
      this.deptService.deleteDepartement(id).subscribe({
        next: (res) => {
          alert('Department deleted!');
          this.getDepartmentList();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  openEditForm(data: any) {
     const dialogRef = this.dialog.open(AddEditDepartmentComponent, {
     data,
     });

     dialogRef.afterClosed().subscribe({
       next: (val) => {
      if (val) {
           this.getDepartmentList();
         }
       }
     });
  }
}