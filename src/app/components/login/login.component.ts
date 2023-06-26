import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedInUser: User | null = null;
  userIcon = faUser;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    this._userService.verifyUser(email, password).subscribe(
      (user: User | null) => {
        if (user) {
          alert('Login successful');
          console.log(user);
          this._userService.setCurrentUser(user);
          this.loginForm.reset();
          this.router.navigate(['/home']);
        } else {
          alert('Invalid credentials');
        }
      },
      (error: any) => {
        alert('An error occurred during login');
      }
    );
  }
  
  goBack() {
    // Handle going back to the previous page
  }
}
