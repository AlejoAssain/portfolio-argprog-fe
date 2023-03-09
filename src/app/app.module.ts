import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ContentModule } from './content/content.module';
import { LoginModule } from './login/login.module';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/services/auth/auth.service';
import { SharedModule } from './shared/shared.module';
import { DataService } from './shared/services/data/data.service';


const routes = [
  { path: "", component: ContentComponent },
  { path: "login", component: LoginComponent },
  // { path: "edit", component: }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ContentModule,
    LoginModule,
    NavBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
