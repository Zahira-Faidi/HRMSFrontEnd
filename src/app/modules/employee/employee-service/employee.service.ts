import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
const BASIC_URL = ['http://localhost:8082/'];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  updateLeave(id: number, data: any): Observable<any> {
    return this.http.put(BASIC_URL + 'api/conges/' + id, data)
  }
  constructor(private http:HttpClient) { }

  getEmployeeById(): Observable<any>{
    return this.http.get<[]>(BASIC_URL+'api/employees/'+StorageService.getEmployee().userId)
  }

  applyLeave(employeeDto: any):Observable<any>{
    employeeDto.employeeid = StorageService.getEmployee().userId
    return this.http.post<[]>(BASIC_URL + 'api/conges', employeeDto);
  }

  getAllLeaves(): Observable<any>{
    return this.http.get<[]>(BASIC_URL+'api/conges/'+StorageService.getEmployee().userId)
  }
  deleteLeave(id: number): Observable<any> {
    return this.http.delete(BASIC_URL + 'api/conges/' + id)
  }
  // Absence 
  getAllAbsences(): Observable<any>{
    return this.http.get<[]>(BASIC_URL+'absences/'+StorageService.getEmployee().userId)
  }
  deleteAbsence(id: number): Observable<any> {
    return this.http.delete(BASIC_URL + 'absences/' + id)
  }
  applyAbsence(employeeDto: any):Observable<any>{
    employeeDto.employeeid = StorageService.getEmployee().userId
    return this.http.post<[]>(BASIC_URL + 'absences', employeeDto);
  }
  updateAbsence(id: number, data: any): Observable<any> {
    return this.http.put(BASIC_URL + 'absences/' + id, data)
  }
}
