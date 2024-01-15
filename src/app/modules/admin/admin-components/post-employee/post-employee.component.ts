import { AdminService } from '../../admin-service/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditEmpComponent } from '../add-edit-emp/add-edit-emp.component';

@Component({
  selector: 'app-post-employee',
  templateUrl: './post-employee.component.html',
  styleUrls: ['./post-employee.component.css']
})
export class PostEmployeeComponent {

  // the columns that will be displayed in the employee details table
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'doe',
    'gender',
    'department',  // Add this line
    'contractType',
    'phone',
    'salary',
    'action',
  ];
 
  // employee list will be assigned to this and it is passed as the data source to the mat-table in the HTML template 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // dependency injection
  constructor(
    private empService: AdminService,
    private dialog:MatDialog,
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmployeeDialog() {
     const dialogRef = this.dialog.open(AddEditEmpComponent);
     dialogRef.afterClosed().subscribe({
       next: (val) => {
         if (val) {
           this.getEmployeeList();
         }
       },
     });
  }

  getEmployeeList() {
    this.empService.getEmployeeList().subscribe(
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

  deleteEmployee(id: number) {
    let confirm = window.confirm("Are you sure you want to delete this employee?");
    if(confirm) {
      this.empService.deleteEmployee(id).subscribe({
        next: (res) => {
          alert('Employee deleted!');
          this.getEmployeeList();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  openEditForm(data: any) {
     const dialogRef = this.dialog.open(AddEditEmpComponent, {
     data,
     });

     dialogRef.afterClosed().subscribe({
       next: (val) => {
      if (val) {
           this.getEmployeeList();
         }
       }
     });
  }
}