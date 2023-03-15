import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService, ProjectsData } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectsForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  data: ProjectsData = {
    title: '', subtitle: '',
    projects: []
  };

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.data = this.dataService.getProjectsData();
    this.projectsForm.setValue({ title: this.data.title, subtitle: this.data.subtitle });
  }

  onSubmit() {
    if (this.projectsForm.valid) {
      const dirtyValues = getDirtyValues(this.projectsForm);

      // TODO - call data service and send post request to API to make changes
      console.log("Submit values: ", dirtyValues);
      this.projectsForm.reset();
      this.ngOnInit();
    }
  }

  get titleControl(): FormControl {
    return this.projectsForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.projectsForm.get("subtitle") as FormControl;
  }

}
