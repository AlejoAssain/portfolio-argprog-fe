import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsData } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() projectsData!: ProjectsData;

  constructor (private readonly router: Router) {}

  // FIXME - make user navigate to project in new tab

  navigateToProject(projectLink: string) {
    this.router.navigate([projectLink])
  }

}
