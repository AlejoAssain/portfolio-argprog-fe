import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent {
  constructor (
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  navigateToEdit() {
    this.router.navigate(["/edit"]);
  }

  show() {
    return this.authService.isAuthenticated();
  }

}
