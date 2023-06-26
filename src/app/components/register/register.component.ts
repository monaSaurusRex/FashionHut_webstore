import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type: string = "password";
  registerForm!: FormGroup;
  passwordMismatch: boolean = false;

  constructor(
    private http: HttpClient,
    private formbuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

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

    if (this.registerForm.invalid) {
      return;
    }

    const user: User = {
      id: Date.now(),
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    this.userService.createUser(user).subscribe(
      (response: User) => {
        alert('Registration successful');
        console.log(response);
        this.registerForm.reset();
        this.router.navigate(['/login']);
      },
      (error: any) => {
        alert('Registration failed');
      }
    );
  }

  checkPasswordMismatch() {
    this.passwordMismatch = this.registerForm.controls['password'].value !== this.registerForm.controls['confirm'].value;
  }
}