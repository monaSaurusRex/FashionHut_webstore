import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
  console.log("form is not valid");

  this.validateAllFormFields(this.loginForm);
  alert("Form is not valid");
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

private validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach((field) => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsDirty({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}

}