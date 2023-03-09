import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { DataService } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{

  constructor (
    private readonly auth: AuthService,
    private readonly dataService: DataService) {}

  userIsAuthenticated: boolean = false
  userIsEditing: boolean = false;
  data: {
    title: string,
    subtitle: string
  } = {title: "", subtitle: ""};

  ngOnInit(): void {
    this.data = this.dataService.getBannerData();
    this.userIsAuthenticated = this.auth.isAuthenticated();
  }

  startEditing() {
    this.userIsEditing = true;
    console.log(this.userIsEditing)
  }

  saveChanges() {
    this.userIsEditing = false;
    console.log(this.userIsEditing)
  }
}
