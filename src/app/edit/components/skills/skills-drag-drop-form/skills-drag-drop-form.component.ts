import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

import { DataService, Skill } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-skills-drag-drop-form',
  templateUrl: './skills-drag-drop-form.component.html',
  styleUrls: ['./skills-drag-drop-form.component.scss']
})
export class SkillsDragDropFormComponent implements OnInit {
  @Input() skills: Skill[] = [];
  skillsCopy: Skill[] = [];
  changed: boolean = false;
  valid: boolean = true;

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.skillsCopy = [ ...this.skills ];
    this.changed = false;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
    moveItemInArray(this.skillsCopy, event.previousIndex, event.currentIndex);
    this.changed = true;
  }

  onSkillUpdate(skillUpdate: {newValue: Skill, index: number, valid: boolean}) {
    console.log(skillUpdate);
    this.skillsCopy[skillUpdate.index] = skillUpdate.newValue;
    this.changed = true;
    this.valid = skillUpdate.valid;
  }

  onSkillDelete(index: number) {
    this.skills.splice(index, 1);
    this.skillsCopy.splice(index, 1);
    this.changed = true;
  }

  onSubmit() {
    if (this.valid) {
      // TODO - save changes to backend with dataService

      console.log(this.skillsCopy);
      this.ngOnInit();
    }
  }

  addSkill() {
    const newSkill: Skill = {
      name: "Agrega un nombre",
      description: "Agrega una descripción",
      percentage: 50
    };

    this.skills.push(newSkill);
    this.skillsCopy.push(newSkill);
  }
}
