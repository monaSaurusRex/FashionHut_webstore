import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import ValidateForm from '../helper/validateform';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  type: string = "password";
  registerForm!: FormGroup;
  submitted: any;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]], 
      lastName: ['',[ Validators.required, Validators.pattern('[A-Za-z]+')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required,  Validators.pattern(/^(\+27|0)\d{9}$/) ]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{6,}$/)]],
      confirm: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Proceed with registration logic
    } else {
      ValidateForm.validateAllFormFields(this.registerForm);
      // Handle form validation errors
    }
  }
}
