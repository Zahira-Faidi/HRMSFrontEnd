import { Injectable } from '@angular/core';

const USER = "User"
const TOKEN = "Token"
@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }

  public saveEmployee(emplyee: any) {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(emplyee))
  }
  public saveToken(token: any) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token)
  }


  static getEmployeeRole(): string {
    const employee = this.getEmployee();
    if (employee == null) {
      return '';
    }
    return employee.role;
  }

  static getToken(): any {
    return window.localStorage.getItem(TOKEN)
  }

  static getEmployee(): any {
    return JSON.parse(localStorage.getItem(USER) || '{}')
  }

  static isAdminLoggedIn(): boolean {
    if (this.getToken() == null) {
      return false;
    }
    const role: string = this.getEmployeeRole();
    return role == "ADMIN";
  }

  static isEmployeeLoggedIn(): boolean {
    if (this.getToken() == null) {
      return false;
    }
    const role: string = this.getEmployeeRole();
    return role == "EMPLOYEE";
  }

  static logout(){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }

  static hasToken():boolean{
    if(this.getToken() === null){
      return false;
    }
    return true;
  }
}
