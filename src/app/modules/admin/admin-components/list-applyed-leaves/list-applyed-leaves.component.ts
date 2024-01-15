import { Component, ViewChild } from '@angular/core';
import { UpdateApplyedLeavesComponent } from '../update-applyed-leaves/update-applyed-leaves.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../../admin-service/admin.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-applyed-leaves',
  templateUrl: './list-applyed-leaves.component.html',
  styleUrls: ['./list-applyed-leaves.component.css']
})
export class ListApplyedLeavesComponent {


  // the columns that will be displayed in the employee details table
  displayedColumns: string[] = [
    'id',
    'employeeName',
    'sendingDate',
    'period',
    'startDate',
    'endDate',
    'reason',
    'comments',
    'leaveStatus',
    'action',
  ];
 
  // employee list will be assigned to this and it is passed as the data source to the mat-table in the HTML template 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // dependency injection
  constructor(
    private service: AdminService,
    private dialog:MatDialog,
  ) {}

  ngOnInit(): void {
    this.getEmployeeLeavesList();
  }
  getEmployeeLeavesList() {
    this.service.getAllLeaves().subscribe(
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
     const dialogRef = this.dialog.open(UpdateApplyedLeavesComponent);
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
     const dialogRef = this.dialog.open(UpdateApplyedLeavesComponent, {
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