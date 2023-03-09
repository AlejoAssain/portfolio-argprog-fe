import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { DataService } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(
    private readonly dataService: DataService,
    private readonly auth: AuthService
  ) {}

  data = {
    title: "",
    subtitle: "",
    text: "",
    profilePicLink: "",
    profilePicCaption: "",
  };

  userIsAuthenticated: boolean = false;
  userIsEditing: boolean = false;

  ngOnInit(): void {
    this.data = this.dataService.getAboutMeData();
    this.userIsAuthenticated = this.auth.isAuthenticated()
  }

  startEditing() {
    if (!this.userIsAuthenticated) return
    this.userIsEditing = true;
  }

  saveChanges() {
    this.userIsEditing = false;
  }




}
