import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Skill } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {
  @Input() skill: Skill = {name: '', description: '', percentage: 0}
  @Input() skillIndex: number = 0;
  @Output() updateEvent = new EventEmitter<{
    newValue: Skill,
    index: number,
    valid: boolean
  }>();
  @Output() deleteEvent = new EventEmitter<number>();

  skillForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    percentage: new FormControl('')
  });

  ngOnInit(): void {
    this.skillForm.setValue({ ...this.skill })

    this.skillForm.valueChanges.subscribe((newSkillValue: Skill) => {
      this.updateEvent.emit({
        newValue: newSkillValue,
        index: this.skillIndex,
        valid: this.skillForm.valid
      });
    });
  }

  onDelete() {
    this.deleteEvent.emit(this.skillIndex);
  }

  get nameControl(): FormControl {
    return this.skillForm.get("name") as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.skillForm.get("description") as FormControl;
  }

  get percentageControl(): FormControl {
    return this.skillForm.get("percentage") as FormControl;
  }
}
