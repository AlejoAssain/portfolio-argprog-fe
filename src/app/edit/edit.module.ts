import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatSliderModule } from '@angular/material/slider';

import { EditComponent } from './edit.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsDragDropFormComponent } from './components/skills/skills-drag-drop-form/skills-drag-drop-form.component';
import { SkillFormComponent } from './components/skills/skill-form/skill-form.component';
import { EducationDragDropFormComponent } from './components/education/education-drag-drop-form/education-drag-drop-form.component';
import { EducationFormComponent } from './components/education/education-form/education-form.component';
import { ExperienceDragDropFormComponent } from './components/experience/experience-drag-drop-form/experience-drag-drop-form.component';
import { ExperienceFormComponent } from './components/experience/experience-form/experience-form.component';
import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { ProjectsDragDropFormComponent } from './components/projects/projects-drag-drop-form/projects-drag-drop-form.component';


@NgModule({
  declarations: [
    EditComponent,
    BannerComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsDragDropFormComponent,
    SkillFormComponent,
    EducationDragDropFormComponent,
    EducationFormComponent,
    ExperienceDragDropFormComponent,
    ExperienceFormComponent,
    ProjectFormComponent,
    ProjectsDragDropFormComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule
  ],
  exports: [
    EditComponent
  ]
})
export class EditModule { }
