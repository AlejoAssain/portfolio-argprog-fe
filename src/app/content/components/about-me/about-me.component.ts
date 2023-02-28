import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private readonly dataService: DataService) {}

  data = {
    title: "",
    subtitle: "",
    text: "",
    profilePicLink: "",
    profilePicCaption: "",
  }

  ngOnInit(): void {
    this.data = this.dataService.getAboutMeData();
  }


}
