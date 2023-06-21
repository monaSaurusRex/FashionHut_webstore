import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ValidateForm from '../helper/validateform';
import { UserService } from 'src/app/services/user/user.service';
//import { Router } from 'express-serve-static-core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _userService: UserService, /*private router: Router)*/) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
  
      // Call the login method of the AuthService to perform authentication
      this._userService.login(email, password).subscribe(
        (response) => {
          // Login successful, redirect to the checkout page
          //this.router.navigate(['/checkout']);
        },
        (error) => {
          // Login failed, handle the error
          console.log('Login failed', error);
        }
      );
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
      // Handle form validation errors
    }
  }
  
  
}
