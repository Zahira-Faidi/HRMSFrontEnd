import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../employee-service/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmployeeAbsenceComponent } from '../add-edit-employee-absence/add-edit-employee-absence.component';

@Component({
  selector: 'app-apply-absence',
  templateUrl: './apply-absence.component.html',
  styleUrls: ['./apply-absence.component.css']
})
export class ApplyAbsenceComponent {


  // the columns that will be displayed in the employee details table
  displayedColumns: string[] = [
    'id',
    'date_absence',
    'horaire',
    'nb_hour',
    'rais_abs',
    'absenceStatus',
    'action',
  ];

  // employee list will be assigned to this and it is passed as the data source to the mat-table in the HTML template 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // dependency injection
  constructor(
    private empService: EmployeeService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getEmployeeAbsenceList();
  }
  getEmployeeAbsenceList() {
    this.empService.getAllAbsences().subscribe(
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
    const dialogRef = this.dialog.open(AddEditEmployeeAbsenceComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.refreshEmployeeList();
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
    const dialogRef = this.dialog.open(AddEditEmployeeAbsenceComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.refreshEmployeeList();
        }
      },
    });
  }
  deleteAbsence(id: number) {
    let confirm = window.confirm("Are you sure you want to delete this Absence?");
    if (confirm) {
      this.empService.deleteAbsence(id).subscribe({
        next: (res) => {
          alert('Absence deleted!');
          this.getEmployeeAbsenceList();
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

  refreshEmployeeList() {
    this.getEmployeeAbsenceList();
  }


}