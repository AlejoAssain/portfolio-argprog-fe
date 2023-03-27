import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Experience } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent {
  @Input() experienceIndex: number = 0;
  @Input() experience: Experience = {
    companyName: '',
    companyImageLink: '',
    positionName: '',
    positionInfo: '',
    yearMonthFrom: '2023-01',
  }

  @Output() updateEvent = new EventEmitter<{
    newValue: Experience,
    index: number,
    valid: boolean
  }>();
  @Output() deleteEvent = new EventEmitter<number>();

  experienceForm: FormGroup = new FormGroup({
    companyName: new FormControl(''),
    companyImageLink: new FormControl(''),
    positionName: new FormControl(''),
    positionInfo: new FormControl(''),
    yearMonthFrom: new FormControl('2023-01'),
    yearMonthTo: new FormControl("2023-01")
  });

  ngOnInit(): void {
    this.experienceForm.setValue({
      companyName: this.experience.companyName,
      companyImageLink: this.experience.companyImageLink,
      positionName: this.experience.positionName,
      positionInfo: this.experience.positionInfo,
      yearMonthFrom: this.experience.yearMonthFrom,
      yearMonthTo: this.experience.yearMonthTo
    });

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

  get companyNameControl(): FormControl {
    return this.experienceForm.get("companyName") as FormControl;
  }

  get positionNameControl(): FormControl {
    return this.experienceForm.get("positionName") as FormControl;
  }

  get positionInfoControl(): FormControl {
    return this.experienceForm.get("positionInfo") as FormControl;
  }

  get companyImageLinkControl(): FormControl {
    return this.experienceForm.get("companyImageLink") as FormControl;
  }

  get yearMonthFromControl(): FormControl {
    return this.experienceForm.get("yearMonthFrom") as FormControl;
  }

  get yearMonthToControl(): FormControl {
    return this.experienceForm.get("yearMonthTo") as FormControl;
  }
}
