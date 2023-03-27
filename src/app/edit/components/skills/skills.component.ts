import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  @Input() skillsData: SkillsData = {subtitle: '', title: '', skills: []};

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.skillsForm.setValue({ title: this.skillsData.title, subtitle: this.skillsData.subtitle });
  }

  onSubmit() {
    if (this.skillsForm.valid) {
      const dirtyValues = getDirtyValues(this.skillsForm);

      this.dataService.setSectionData("skills", dirtyValues).subscribe(response => {
        this.skillsForm.reset();
        this.skillsForm.setValue(response);
      });
    }
  }

  get titleControl(): FormControl {
    return this.skillsForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.skillsForm.get("subtitle") as FormControl;
  }

}
