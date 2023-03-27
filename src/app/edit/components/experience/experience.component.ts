import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService, ExperienceData } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experienceData: ExperienceData = {
    title: '', subtitle: '',
    experiences: []
  };

  constructor ( private readonly dataService: DataService ) {}

  experienceForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  ngOnInit(): void {
    this.experienceForm.setValue({
      title: this.experienceData.title,
      subtitle: this.experienceData.subtitle
    });
  }

  onSubmit() {
    if (this.experienceForm.valid) {
      const dirtyValues = getDirtyValues(this.experienceForm);

      this.dataService.setSectionData("experience", dirtyValues).subscribe(response => {
        this.experienceForm.reset();
        this.experienceForm.setValue(response);
      });
    }
  }

  get titleControl(): FormControl {
    return this.experienceForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.experienceForm.get("subtitle") as FormControl;
  }

}
