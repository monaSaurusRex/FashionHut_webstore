import Swal from 'sweetalert2';


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import ValidateForm from '../helper/validateform';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}
  type: string = "password";
  registerForm!: FormGroup;
  submitted: any;
  password: any;
  confirm: any;
  passwordMismatch: boolean = false;

  constructor(private http: HttpClient, private formbuilder: FormBuilder, private _userService: UserService, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(\+27|0)\d{9}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]],
      confirm: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.registerForm.controls['password'].value !== this.registerForm.controls['confirm'].value) {
      this.passwordMismatch = true;
      return; // Stop form submission
    }
  
    if (this.registerForm.valid) {
      let body: any = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        phoneNumber: this.registerForm.value.phoneNumber,
        password: this.registerForm.value.password
      };
  
      this._userService.checkIfUserExists(body.email).subscribe(
        (response: any) => {
          if (response.exists) {
            Swal.fire('Account Exists', 'An account with this email already exists. Please login instead.', 'warning');
            this.router.navigate(['/login']);
          } else {
            this._userService.createUser(body).subscribe(
              (response: any) => {
                console.log('registered successfully', response);
                this.router.navigate(['/login']);
              },
              (error: any) => {
                console.log('failed', error);
              }
            );
          }
        },
        (error: any) => {
          console.log('failed', error);
        }
      );
    } else {
      ValidateForm.validateAllFormFields(this.registerForm);
    }
  }
  checkPasswordMismatch() {
    this.passwordMismatch = this.registerForm.controls['password'].value !== this.registerForm.controls['confirm'].value;
  }
}
 