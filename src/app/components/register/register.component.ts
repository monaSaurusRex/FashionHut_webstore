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

  constructor(private formbuilder: FormBuilder){
  }


  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['',  [ Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),]],
      
      password: ['', Validators.required],
      confirm:['', Validators.required]
  })
}
get f(){
  return this.registerForm.controls;
}
onSubmit() {

  if (this.registerForm.valid) {
    console.log(this.registerForm.value);
    // Proceed with login logic
  } else {
    ValidateForm.validateAllFormFields(this.registerForm);
    // Handle form validation errors
  }
  
}

}
