import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor (private readonly dataService: DataService) {}

  data: {
    title: string;
    subtitle: string;
    projects: {
        name: string;
        description: string;
        month: string;
        year: number;
        link: string;
    }[]
  } = {title: "", subtitle: "", projects: []};

  ngOnInit(): void {
    this.data = this.dataService.getProjectsData();
  }

  navigateToProject(projectLink: string) {
    console.log(projectLink);
  }

}
