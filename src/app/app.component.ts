import { Component } from '@angular/core';
import { StorageService } from './auth/services/storage/storage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HRMS';
  
  isAdminLoggedIn : boolean | undefined;
  isEmployeeLoggedIn : boolean | undefined;

  constructor(
    private router:Router
  ){}

  ngOnInit(){
    this.updateUserLoggedStatus();
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.updateUserLoggedStatus();
      }
    })
    console.log(this.isAdminLoggedIn)
  }

  private updateUserLoggedStatus():void{
    this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    this.isEmployeeLoggedIn = StorageService.isEmployeeLoggedIn();

  }

  logout() {
    StorageService.logout();
    this.router.navigateByUrl("/login");
  }
}
