import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Project } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {
  @Input() project: Project = {
    name: '',
    description: '',
    link: '',
    year: 0,
    month: ''
  }
  @Input() projectIndex: number = 0;
  @Output() updateEvent = new EventEmitter<{
    newValue: Project,
    index: number,
    valid: boolean
  }>();
  @Output() deleteEvent = new EventEmitter<number>();

  projectForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    link: new FormControl(''),
    year: new FormControl(2023),
    month: new FormControl(''),
  });

  ngOnInit(): void {
    this.projectForm.setValue({ ...this.project });

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

  get linkControl(): FormControl {
    return this.projectForm.get("link") as FormControl;
  }

  get yearControl(): FormControl {
    return this.projectForm.get("year") as FormControl;
  }

  get monthControl(): FormControl {
    return this.projectForm.get("month") as FormControl;
  }
}
