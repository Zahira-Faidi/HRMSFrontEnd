import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

const BASIC_URL = ['http://localhost:8082/'];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  // Employee

  addEmployee(data: any): Observable<any> {
    return this.http.post<[]>(BASIC_URL + 'api/employees', data)
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(BASIC_URL + 'api/employees/' + id, data)
  }

  getEmployeeList(): Observable<any> {
   // console.log(this.createAuthorizationHeader())
    return this.http.get(BASIC_URL + 'api/employees')
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(BASIC_URL + 'api/employees/' + id)
  }
  // Departement
  addDepartement(data: any): Observable<any> {
    return this.http.post<[]>(BASIC_URL + 'api/departements', data)
  }

  updateDepartement(id: number, data: any): Observable<any> {
    return this.http.put(BASIC_URL + 'api/departements/' + id, data)
  }

  getDepartementList(): Observable<any> {
   // console.log(this.createAuthorizationHeader())
    return this.http.get(BASIC_URL + 'api/departements')
  }

  deleteDepartement(id: number): Observable<any> {
    return this.http.delete(BASIC_URL + 'api/departements/' + id)
  }
  //======
  getAllLeaves(): Observable<any>{
    return this.http.get<[]>(BASIC_URL+'api/conges')
  }
  //======
  getAllAbsences(): Observable<any>{
    return this.http.get<[]>(BASIC_URL+'absences')
  }
}
