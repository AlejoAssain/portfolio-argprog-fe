import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

import { DataService, Experience } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-experience-drag-drop-form',
  templateUrl: './experience-drag-drop-form.component.html',
  styleUrls: ['./experience-drag-drop-form.component.scss']
})
export class ExperienceDragDropFormComponent {
  @Input() experiences: Experience[] = [];
  experiencesCopy: Experience[] = [];
  changed: boolean = false;
  valid: boolean = true;

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.experiencesCopy = [ ...this.experiences ];
    this.changed = false;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.experiences, event.previousIndex, event.currentIndex);
    moveItemInArray(this.experiencesCopy, event.previousIndex, event.currentIndex);
    this.changed = true;
  }

  onExperienceUpdate(experienceUpdate: {newValue: Experience, index: number, valid: boolean}) {
    console.log(experienceUpdate);
    this.experiencesCopy[experienceUpdate.index] = experienceUpdate.newValue;
    this.changed = true;
    this.valid = experienceUpdate.valid;
  }

  onExperienceDelete(index: number) {
    this.experiences.splice(index, 1);
    this.experiencesCopy.splice(index, 1);
    this.changed = true;
  }

  onSubmit() {
    if (this.valid) {
      this.dataService.setExperienceList(this.experiencesCopy).subscribe(response => {
        this.experiencesCopy = response.experiences;
      });
      this.changed = false;
    }
  }

  addExperience() {
    const newExperience: Experience = {
      companyName: "Agrega nombre de la compañía",
      companyImageLink: "Agrega link a la imagen",
      positionName: "Agrega nombre de posición",
      positionInfo: "Agrega info. de la posición",
      yearMonthFrom: "2023-01",
      yearMonthTo: "2024-01"
    };

    this.experiences.push(newExperience);
    this.experiencesCopy.push(newExperience);
  }


}
