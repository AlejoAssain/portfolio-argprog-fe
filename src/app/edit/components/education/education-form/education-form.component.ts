import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Education } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
  @Input() educationIndex: number = 0;
  @Input() education: Education = {
    institutionName: '',
    institutionImageLink: '',
    title: '',
    yearFrom: 2023,
  }

  @Output() updateEvent = new EventEmitter<{
    newValue: Education,
    index: number,
    valid: boolean
  }>();
  @Output() deleteEvent = new EventEmitter<number>();

  educationForm: FormGroup = new FormGroup({
    institutionName: new FormControl(''),
    institutionImageLink: new FormControl(''),
    title: new FormControl(''),
    yearFrom: new FormControl(2023),
    yearTo: new FormControl(2023)
  });

  ngOnInit(): void {
    this.educationForm.setValue({
      institutionName: this.education.institutionName,
      institutionImageLink: this.education.institutionImageLink,
      title: this.education.title,
      yearFrom: this.education.yearFrom,
      yearTo: this.education.yearTo
    });

    this.educationForm.valueChanges.subscribe((newEducationValue: Education) => {
      this.updateEvent.emit({
        newValue: newEducationValue,
        index: this.educationIndex,
        valid: this.educationForm.valid
      });
    });
  }

  onDelete() {
    this.deleteEvent.emit(this.educationIndex);
  }

  get titleControl(): FormControl {
    return this.educationForm.get("title") as FormControl;
  }

  get institutionNameControl(): FormControl {
    return this.educationForm.get("institutionName") as FormControl;
  }

  get institutionImageLinkControl(): FormControl {
    return this.educationForm.get("institutionImageLink") as FormControl;
  }

  get yearFromControl(): FormControl {
    return this.educationForm.get("yearFrom") as FormControl;
  }

  get yearToControl(): FormControl {
    return this.educationForm.get("yearTo") as FormControl;
  }
}
