import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService, EducationData } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  data: EducationData = {
    title: '', subtitle: '',
    educations: []
  };

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.data = this.dataService.getEducationData();
    this.educationForm.setValue({ title: this.data.title, subtitle: this.data.subtitle });
  }

  onSubmit() {
    if (this.educationForm.valid) {
      const dirtyValues = getDirtyValues(this.educationForm);

      // TODO - call data service and send post request to API to make changes
      console.log("Submit values: ", dirtyValues);
      this.educationForm.reset();
      this.ngOnInit();
    }
  }

  get titleControl(): FormControl {
    return this.educationForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.educationForm.get("subtitle") as FormControl;
  }

}
