import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { DataService } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  data: {
    title: string,
    subtitle: string
  } = { title: '', subtitle: ''};

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    // get section data from service
    this.data = this.dataService.getSkillsData();

    // set initial form data to data obtained
    this.skillsForm.setValue(this.data);

    console.log("Initial values: ", this.skillsForm.getRawValue());
  }

  onSubmit() {
    if (this.skillsForm.valid) {
      const dirtyValues = getDirtyValues(this.skillsForm);

      // TODO - call data service and send post request to API to make changes
      console.log("Submit values: ", dirtyValues);
    }
  }

  get titleControl(): FormControl {
    return this.skillsForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.skillsForm.get("subtitle") as FormControl;
  }

}
