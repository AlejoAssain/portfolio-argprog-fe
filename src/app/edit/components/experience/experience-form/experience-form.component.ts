import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Experience } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent {
  @Input() experience: Experience = {
    company: '',
    imageLink: '',
    position: '',
    positionInformation: '',
    monthFrom: '',
    yearFrom: 2023
  }
  @Input() experienceIndex: number = 0;
  @Output() updateEvent = new EventEmitter<{
    newValue: Experience,
    index: number,
    valid: boolean
  }>();
  @Output() deleteEvent = new EventEmitter<number>();

  experienceForm: FormGroup = new FormGroup({
    company: new FormControl(''),
    imageLink: new FormControl(''),
    position: new FormControl(''),
    positionInformation: new FormControl(''),
    yearFrom: new FormControl(2023),
    monthFrom: new FormControl("Enero"),
    yearTo: new FormControl(2023),
    monthTo: new FormControl("Enero")
  });

  ngOnInit(): void {
    this.experienceForm.setValue({ monthTo: null, yearTo: null, ...this.experience });

    this.experienceForm.valueChanges.subscribe((newExperienceValue: Experience) => {
      this.updateEvent.emit({
        newValue: newExperienceValue,
        index: this.experienceIndex,
        valid: this.experienceForm.valid
      });
    });
  }

  onDelete() {
    this.deleteEvent.emit(this.experienceIndex);
  }

  get companyControl(): FormControl {
    return this.experienceForm.get("company") as FormControl;
  }

  get positionControl(): FormControl {
    return this.experienceForm.get("position") as FormControl;
  }

  get positionInformationControl(): FormControl {
    return this.experienceForm.get("positionInformation") as FormControl;
  }

  get imageLinkControl(): FormControl {
    return this.experienceForm.get("imageLink") as FormControl;
  }

  get monthFromControl(): FormControl {
    return this.experienceForm.get("monthFrom") as FormControl;
  }

  get yearFromControl(): FormControl {
    return this.experienceForm.get("yearFrom") as FormControl;
  }

  get monthToControl(): FormControl {
    return this.experienceForm.get("monthTo") as FormControl;
  }
}
