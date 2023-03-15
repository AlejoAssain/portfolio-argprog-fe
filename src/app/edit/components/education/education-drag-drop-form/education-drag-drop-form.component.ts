import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

import { DataService, Education } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-education-drag-drop-form',
  templateUrl: './education-drag-drop-form.component.html',
  styleUrls: ['./education-drag-drop-form.component.scss']
})
export class EducationDragDropFormComponent {
  @Input() educations: Education[] = [];
  educationsCopy: Education[] = [];
  changed: boolean = false;
  valid: boolean = true;

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.educationsCopy = [ ...this.educations ];
    this.changed = false
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.educations, event.previousIndex, event.currentIndex);
    moveItemInArray(this.educationsCopy, event.previousIndex, event.currentIndex);
    this.changed = true;
  }

  onEducationUpdate(educationUpdate: {newValue: Education, index: number, valid: boolean}) {
    console.log(educationUpdate);
    this.educationsCopy[educationUpdate.index] = educationUpdate.newValue;
    this.changed = true;
    this.valid = educationUpdate.valid;
  }

  onEducationDelete(index: number) {
    this.educations.splice(index, 1);
    this.educationsCopy.splice(index, 1);
    this.changed = true;
  }

  onSubmit() {
    if (this.valid) {
      // TODO - save changes to backend with dataService
      console.log(this.educationsCopy);
      this.ngOnInit();
    }
  }

  addEducation() {
    const newEducation: Education = {
      institutionName: "Agrega un nombre de inst.",
      title: "Agrega un titulo",
      imageLink: "Agrega un nombre de imagen",
      yearFrom: 2023
    };

    this.educations.push(newEducation);
    this.educationsCopy.push(newEducation);
  }
}
