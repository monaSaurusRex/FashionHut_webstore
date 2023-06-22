import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}
  public form!: FormGroup;
  public passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
 
  public submitted: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit() {
    this.form = this.fb.group(
      {
        password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.checkingPasswords }
    );
  }

  public checkingPasswords(formGroup: FormGroup) {
    const newPassword = formGroup.get('password')?.value;
    const confirmNewPassword = formGroup.get('confirmPassword')?.value;

    if (newPassword && confirmNewPassword && newPassword === confirmNewPassword) {
      return null;
    } else {
      return { notMatched: true };
    }
  }

  public onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    // Your submit logic here
  }
}
