import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import ValidateForm from '../helper/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
}
else {
  //console.log("form is not valid");

  ValidateForm.validateAllFormFields(this.loginForm);
  //alert("Form is not valid");
}
}
  type: string = "password";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  })
}
}