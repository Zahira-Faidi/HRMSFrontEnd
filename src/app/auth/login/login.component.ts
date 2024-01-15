import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  logoUrl: string = '';

  constructor(
    private fb: FormBuilder, 
    private service:AuthService,
    private router:Router,
    private snackbar:MatSnackBar
    ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  
  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login form submitted');
    } else {
      return;
    }
  }
  login() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
  
    this.service.login(email, password).subscribe(
      (response) => {
        console.log(response);
        if (StorageService.isAdminLoggedIn()) {
          this.router.navigateByUrl('admin/dashboard');
        } else if (StorageService.isEmployeeLoggedIn()) {
          this.router.navigateByUrl('employee/dashboard');
        }
      },
      (error) => {
        if (error.status === 406) {
          this.snackbar.open('Employee is not active', 'Close', {
            duration: 5000,
          });
        } else {
          this.snackbar.open('Bad credentials', 'Close', {
            duration: 5000,
          });
        }
      }
    );
  }
  
}