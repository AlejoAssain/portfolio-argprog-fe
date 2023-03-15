import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService, ExperienceData } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  data: ExperienceData = {
    title: '', subtitle: '',
    experiences: []
  };

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.data = this.dataService.getExperienceData();
    this.experienceForm.setValue({ title: this.data.title, subtitle: this.data.subtitle });
  }

  onSubmit() {
    if (this.experienceForm.valid) {
      const dirtyValues = getDirtyValues(this.experienceForm);

      // TODO - call data service and send post request to API to make changes
      console.log("Submit values: ", dirtyValues);
      this.experienceForm.reset();
      this.ngOnInit();
    }
  }

  get titleControl(): FormControl {
    return this.experienceForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.experienceForm.get("subtitle") as FormControl;
  }

}
