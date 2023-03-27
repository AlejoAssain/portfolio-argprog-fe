import { Component, Input } from '@angular/core';

import { ExperienceData } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() experienceData!: ExperienceData;
}
