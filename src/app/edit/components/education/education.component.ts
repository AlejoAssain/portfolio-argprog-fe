import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService, EducationData } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() educationData: EducationData = {
    title: '', subtitle: '',
    educations: []
  };

  constructor ( private readonly dataService: DataService ) {}

  educationForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  ngOnInit(): void {
    this.educationForm.setValue({
      title: this.educationData.title,
      subtitle: this.educationData.subtitle
    });
  }

  onSubmit() {
    if (this.educationForm.valid) {
      const dirtyValues = getDirtyValues(this.educationForm);

      this.dataService.setSectionData("education", dirtyValues).subscribe(response => {
        this.educationForm.reset();
        this.educationForm.setValue(response);
      });
    }
  }

  get titleControl(): FormControl {
    return this.educationForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.educationForm.get("subtitle") as FormControl;
  }

}
