import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import ValidateForm from '../helper/validateform';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type: string = "password";
  registerForm!: FormGroup;
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

      this._userService.createUser(body).subscribe(
        (response: any) => {
          // Registration successful, handle the response here
          console.log('Registered successfully', response);
          this.router.navigate(['/login']);
          // You can perform any necessary actions after successful registration, such as displaying a success message or redirecting to a different page
          // this.router.navigate(['/home']);
        },
        (error: any) => {
          // Registration failed, handle the error
          console.log('Registration failed', error);
          // You can display an error message to the user indicating that the registration failed
        }
      );
    } else {
      ValidateForm.validateAllFormFields(this.registerForm);
      // Handle form validation errors
    }
  }
}
