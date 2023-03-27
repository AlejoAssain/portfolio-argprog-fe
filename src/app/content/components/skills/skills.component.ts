import { Component, Input } from '@angular/core';

import { SkillsData } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() skillsData!: SkillsData;
}
