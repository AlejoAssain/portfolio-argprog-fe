import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


import { ContentComponent } from './content.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    ContentComponent,
    BannerComponent,
    AboutMeComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
