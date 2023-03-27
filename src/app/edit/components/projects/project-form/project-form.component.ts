import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Project } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {
  @Input() projectIndex: number = 0;
  @Input() project: Project = {
    name: '',
    description: '',
    projectLink: '',
    projectYearMonth: '2023-01'
  }

  @Output() updateEvent = new EventEmitter<{
    newValue: Project,
    index: number,
    valid: boolean
  }>();
  @Output() deleteEvent = new EventEmitter<number>();

  projectForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    projectLink: new FormControl(''),
    projectYearMonth: new FormControl(''),
  });

  ngOnInit(): void {
    this.projectForm.setValue({
      name: this.project.name,
      description: this.project.description,
      projectLink: this.project.projectLink,
      projectYearMonth: this.project.projectYearMonth,
  });

    this.projectForm.valueChanges.subscribe((newProjectValue: Project) => {
      this.updateEvent.emit({
        newValue: newProjectValue,
        index: this.projectIndex,
        valid: this.projectForm.valid
      });
    });
  }

  onDelete() {
    this.deleteEvent.emit(this.projectIndex);
  }

  get nameControl(): FormControl {
    return this.projectForm.get("name") as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.projectForm.get("description") as FormControl;
  }

  get projectLinkControl(): FormControl {
    return this.projectForm.get("projectLink") as FormControl;
  }

  get projectYearMonthControl(): FormControl {
    return this.projectForm.get("projectYearMonth") as FormControl;
  }
}
