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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContentModule,
    LoginModule,
    NavBarModule,
    RouterModule.forRoot([
      { path: "", component: ContentComponent },
      { path: "login", component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
