import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface BannerData {
  title: string;
  subtitle: string;
}

export interface AboutMeData {
  title: string;
  subtitle: string;
  text: string;
  profilePicLink: string;
  profilePicCap: string;
}

export interface Skill {
  name: string;
  description: string;
  percentage: number;
}

export interface SkillsData {
  title: string;
  subtitle: string;
  skills: Skill[];
}

export interface Education {
  sequence: number;
  institutionName: string;
  title: string;
  yearFrom: number;
  yearTo?: number;
  imageLink?: string;
}

export interface EducationData {
  title: string;
  subtitle: string;
  educations: Education[];
}

export interface Experience {
  sequence: number
  companyName: string;
  positionName: string;
  positionInfo: string;
  yearMonthFrom: string;
  yearMonthTo?: string;
  companyImageLink?: string;
}

export interface ExperienceData {
  title: string;
  subtitle: string;
  experiences: Experience[];
}

export interface Project {
  sequence: number;
  name: string;
  description: string;
  month: string;
  projectYearMonth: string;
  projectLink: string;
}

export interface ProjectsData {
  title: string;
  subtitle: string;
  projects: Project[]
}

export interface ResponseData {
  banner: BannerData;
  aboutMe: AboutMeData;
  skills: SkillsData;
  education: EducationData;
  experience: ExperienceData;
  projects: ProjectsData
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // FIXME - create a dataService such as I can retrieve the data from the content and edit component, and pass it to
  //         the sections

  // FIXME - fix all the broken components after this change

  private apiUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) {}

  getData(): Observable<ResponseData> {
    return this.http.get<ResponseData>(this.apiUrl);
  }

  // getAboutMeData(): AboutMeData {
  //   return;
  // }

  // getSkillsData(): SkillsData {
  //   return;
  // }

  // getEducationData(): EducationData {
  //   return;
  // }

  // getExperienceData(): ExperienceData {
  //   return;
  // }

  // getProjectsData(): ProjectsData {
  //   return;
  // }
}
