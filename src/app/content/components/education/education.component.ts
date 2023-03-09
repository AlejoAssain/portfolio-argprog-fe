import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  constructor (private readonly dataService: DataService) {}

  presentDateText = "Presente"

  data: {
    title: string;
    subtitle: string;
    educations: {
      institutionName: string;
      title: string;
      imageLink?: string;
      yearFrom: number;
      yearTo?: number;
    }[]
  } = {title: "", subtitle: "", educations: []}

  ngOnInit(): void {
    this.data = this.dataService.getEducationData();
  }
}
