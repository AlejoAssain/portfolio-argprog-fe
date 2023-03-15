import { Component, OnInit } from '@angular/core';

import { DataService, ExperienceData } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  constructor (private dataService: DataService) {}

  data: ExperienceData = {title: "", subtitle: "", experiences: []}

  ngOnInit(): void {
    this.data = this.dataService.getExperienceData();
  }
}
