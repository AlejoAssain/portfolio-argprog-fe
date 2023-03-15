import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Education } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
  @Input() education: Education = {
    institutionName: '',
    imageLink: '',
    title: '',
    yearFrom: 2023
  }
  @Input() educationIndex: number = 0;
  @Output() updateEvent = new EventEmitter<{
    newValue: Education,
    index: number,
    valid: boolean
  }>();
  @Output() deleteEvent = new EventEmitter<number>();

  educationForm: FormGroup = new FormGroup({
    institutionName: new FormControl(''),
    imageLink: new FormControl(''),
    title: new FormControl(''),
    yearFrom: new FormControl(2023),
    yearTo: new FormControl(2023)
  });

  ngOnInit(): void {
    this.educationForm.setValue({ yearTo: null, ...this.education });

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

  get imageLinkControl(): FormControl {
    return this.educationForm.get("imageLink") as FormControl;
  }

  get yearFromControl(): FormControl {
    return this.educationForm.get("yearFrom") as FormControl;
  }

  get yearToControl(): FormControl {
    return this.educationForm.get("yearTo") as FormControl;
  }
}
