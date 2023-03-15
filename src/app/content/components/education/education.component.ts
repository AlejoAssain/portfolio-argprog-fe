import { Component, OnInit } from '@angular/core';

import { DataService, EducationData } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  constructor (private readonly dataService: DataService) {}

  presentDateText = "Presente"

  data: EducationData = {title: "", subtitle: "", educations: []}

  ngOnInit(): void {
    this.data = this.dataService.getEducationData();
  }
}
