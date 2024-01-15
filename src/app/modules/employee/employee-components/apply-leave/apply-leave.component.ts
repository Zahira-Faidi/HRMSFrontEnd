import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee.service';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddEditEmployeeLeaveComponent } from '../add-edit-employee-leave/add-edit-employee-leave.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {

  // the columns that will be displayed in the employee details table
  displayedColumns: string[] = [
    'id',
    'sendingDate',
    'period',
    'startDate',
    'endDate',
    'reason',
    'leaveStatus',
    'comments',
    'action',
  ];
 
  // employee list will be assigned to this and it is passed as the data source to the mat-table in the HTML template 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // dependency injection
  constructor(
    private empService: EmployeeService,
    private dialog:MatDialog,
  ) {}

  ngOnInit(): void {
    this.getEmployeeLeavesList();
  }
  getEmployeeLeavesList() {
    this.empService.getAllLeaves().subscribe(
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
  openAddEditEmployeeDialog() {
     const dialogRef = this.dialog.open(AddEditEmployeeLeaveComponent);
     dialogRef.afterClosed().subscribe({
       next: (val) => {
         if (val) {
          this.getEmployeeLeavesList();
        }
       },
     });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  openEditForm(data: any) {
     const dialogRef = this.dialog.open(AddEditEmployeeLeaveComponent, {
     data,
     });

     dialogRef.afterClosed().subscribe({
       next: (val) => {
      if (val) {
        this.getEmployeeLeavesList();
      }
       }
     });
  }
  deleteLeave(id: number) {
    let confirm = window.confirm("Are you sure you want to delete this Leave?");
    if(confirm) {
      this.empService.deleteLeave(id).subscribe({
        next: (res) => {
          alert('Leave deleted!');
          this.getEmployeeLeavesList();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  //========
  // Add these functions to your component class
getStatusIcon(status: string): string {
  switch (status) {
    case 'Approved':
      return 'check_circle';
    case 'Disapproved':
      return 'cancel';
    case 'Pending':
      return 'schedule';
    default:
      return 'help'; // Default icon for unknown status
  }
}

getStatusColor(status: string): string {
  switch (status) {
    case 'Approved':
      return 'green';
    case 'Disapproved':
      return 'red'; // Adjust the color as needed
    case 'Pending':
      return 'orange';
    default:
      return 'black'; // Default color for unknown status
  }
}

}