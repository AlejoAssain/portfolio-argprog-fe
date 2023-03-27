import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

import { DataService, Project } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-projects-drag-drop-form',
  templateUrl: './projects-drag-drop-form.component.html',
  styleUrls: ['./projects-drag-drop-form.component.scss']
})
export class ProjectsDragDropFormComponent {
  @Input() projects: Project[] = [];
  projectsCopy: Project[] = [];
  changed: boolean = false;
  valid: boolean = true;

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.projectsCopy = [ ...this.projects ];
    this.changed = false;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
    moveItemInArray(this.projectsCopy, event.previousIndex, event.currentIndex);
    this.changed = true;
  }

  onProjectUpdate(projectUpdate: {newValue: Project, index: number, valid: boolean}) {
    console.log(projectUpdate);
    this.projectsCopy[projectUpdate.index] = projectUpdate.newValue;
    this.changed = true;
    this.valid = projectUpdate.valid;
  }

  onProjectDelete(index: number) {
    this.projects.splice(index, 1);
    this.projectsCopy.splice(index, 1);
    this.changed = true;
  }

  onSubmit() {
    if (this.valid) {
      this.dataService.setProjectList(this.projectsCopy).subscribe(response => {
        this.projectsCopy = response.projects;
      });
      this.changed = false;
    }
  }

  addProject() {
    const newProject: Project = {
      name: "Agrega un nombre al proyecto",
      description: "Agrega una desc. al proyecto",
      projectLink: "Link al proyecto",
      projectYearMonth: "2023-01",
    };

    this.projects.push(newProject);
    this.projectsCopy.push(newProject);
  }


}
