import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide : Boolean = true;

  handleSubmit(loginForm: NgForm) {
    console.log(loginForm.form.value);
    console.log(loginForm.valid);
  }
}
