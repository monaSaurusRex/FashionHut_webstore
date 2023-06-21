import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ValidateForm from '../helper/validateform';
import { UserService } from 'src/app/services/user/user.service';
//import { Router } from 'express-serve-static-core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _userService: UserService, /*private router: Router)*/) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]]
    });
  }
  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      let body: any = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
  
      this._userService.login(body).subscribe(
        (response: any) => {
          // Login successful, handle the response here
          console.log('Login successful', response);
          // You can perform any necessary actions after successful login, such as storing the user token or redirecting to a different page
          // this.router.navigate(['/checkout']);
        },
        (error: any) => {
          // Login failed, handle the error
          console.log('Login failed', error);
          // You can display an error message to the user indicating that the login credentials are invalid
        }
      );
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
      // Handle form validation errors
    }
  }
  
}
