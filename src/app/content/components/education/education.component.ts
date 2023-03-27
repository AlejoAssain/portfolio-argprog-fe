import { Component, Input } from '@angular/core';

import { EducationData } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() educationData!: EducationData;

  presentDateText = "Presente";
}
