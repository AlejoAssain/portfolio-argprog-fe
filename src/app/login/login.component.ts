import { Component } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  hide : Boolean = true;

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(
        this.usernameControl.value,
        this.passwordControl.value
      ).subscribe(response => {
        if (response.token) {
          this.authService.saveToken(response.token);
          this.router.navigate(["/"])
        }
      });
    }
  }

  get usernameControl(): FormControl {
    return this.loginForm.get("username") as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }
}
