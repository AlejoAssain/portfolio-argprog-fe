import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';


@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {
  constructor (private readonly auth: AuthService) {}

  isUserAuthenticated() {
    return this.auth.isAuthenticated();
  }

  handleLogout() {
    console.log("logout")
    this.auth.logout();
  }
}
