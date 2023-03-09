import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  constructor (private dataService: DataService) {}

  data: {
    title: string;
    subtitle: string;
    experiences: {
        company: string;
        imageLink: string;
        position: string;
        positionInformation: string;
        yearFrom: number;
        monthFrom: string;
        yearTo: number;
        monthTo: string;
    }[]
  } = {title: "", subtitle: "", experiences: []}

  ngOnInit(): void {
    this.data = this.dataService.getExperienceData();
  }
}
