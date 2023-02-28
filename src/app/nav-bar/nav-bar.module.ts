import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { NavBarComponent } from './nav-bar.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    LogoComponent,
    LoginButtonComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
