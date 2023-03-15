import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { DataService, SkillsData } from 'src/app/shared/services/data/data.service';
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

  data: SkillsData = {subtitle: '', title: '', skills: []};

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.data = this.dataService.getSkillsData();
    this.skillsForm.setValue({ title: this.data.title, subtitle: this.data.subtitle });
  }

  onSubmit() {
    if (this.skillsForm.valid) {
      const dirtyValues = getDirtyValues(this.skillsForm);

      // TODO - call data service and send post request to API to make changes
      console.log("Submit values: ", dirtyValues);
      this.skillsForm.reset();
      this.ngOnInit();
    }
  }

  get titleControl(): FormControl {
    return this.skillsForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.skillsForm.get("subtitle") as FormControl;
  }

}
