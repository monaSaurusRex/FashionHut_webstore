import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ModalComponentComponent } from 'src/app/modal-component/modal-component.component';

import { UserService } from 'src/app/services/userservice/user.service';


export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(
      control &&
      control.valid &&
      (control.dirty || control.touched) &&
      form?.hasError('notMatched')
    );
  }
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit{
goBack() {

}
  modalService: any;

openModal() {
  this.modalService.open(ModalComponentComponent );
  
}
forgotPasswordForm: any;
  usernamePattern: any;
  submitted: boolean = true;
  reactiveForm: any;
  
onSubmit() {
    this.submitted = true;
    if(this.reactiveForm.invalid) {
      return;
    }

}

  public form!: FormGroup;
  public passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/ 
  public matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder,_userService: UserService ) {
    this.formInit();
  }

  ngOnInit(): void {
  }

  private formInit() {
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern(this.usernamePattern)]],
      newPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      confirmNewPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    }, { validator: this.checkingPasswords });
  }
  public submitForm() {
    console.log(this.form);
    console.log(this.form.getRawValue())
  }
  public checkingPasswords(formGroup: FormGroup) {
    if (
      formGroup.controls['newPassword'].value &&
      formGroup.controls['confirmNewPassword'].value &&
      formGroup.controls['newPassword'].value &&
      formGroup.controls['newPassword'].value.length >= 8 &&
      formGroup.controls['newPassword'].value.length <= 16 &&
      formGroup.controls['confirmNewPassword'].value.length >= 8 &&
      formGroup.controls['confirmNewPassword'].value.length <= 16
    ) {
      return formGroup.controls['newPassword'].value !== formGroup.controls['confirmNewPassword'].value ? false : { "notMatched": true }
    }
    return false;
  }

  checkValidations(control:any, type:any) {
    switch (type) {
      case 'special-character':
        return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(control.value);;
      case 'number':
        return /\d/.test(control.value);
      case 'lowercase':
        return /[a-z]/.test(control.value);
      case 'uppercase':
        return /[A-Z]/.test(control.value);
      case 'length':
        return control.value.length >= 8 && control.value.length <= 16;
      default:
        return false
    }
  }

}


  
 


   