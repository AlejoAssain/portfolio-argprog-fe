import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService, ProjectsData } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() projectsData: ProjectsData = {
    title: '', subtitle: '',
    projects: []
  };

  constructor ( private readonly dataService: DataService ) {}


  projectsForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  ngOnInit(): void {
    this.projectsForm.setValue({
      title: this.projectsData.title,
      subtitle: this.projectsData.subtitle
    });
  }

  onSubmit() {
    if (this.projectsForm.valid) {
      if (this.projectsForm.valid) {
        const dirtyValues = getDirtyValues(this.projectsForm);

        this.dataService.setSectionData("projects", dirtyValues).subscribe(response => {
          this.projectsForm.reset();
          this.projectsForm.setValue(response);
        });
      }
    }
  }

  get titleControl(): FormControl {
    return this.projectsForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.projectsForm.get("subtitle") as FormControl;
  }
}
