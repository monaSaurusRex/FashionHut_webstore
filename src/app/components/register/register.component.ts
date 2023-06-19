import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helper/validateform';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
}
else {
  //console.log("form is not valid");

  ValidateForm.validateAllFormFields(this.registerForm);
  //alert("Form is not valid");
}
}
  type: string = "password";
  registerForm!: FormGroup;

  constructor(private formbuilder: FormBuilder){

  }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirm:['', Validators.required]
  })
}
}
