import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


export interface BannerData {
  title: string;
  subtitle: string;
}

export interface AboutMeData {
  title: string;
  subtitle: string;
  text: string;
  profilePicLink: string;
  profilePicCap: string
}

export interface AboutMeExtraData {
  text: string;
  profilePicLink: string;
  profilePicCap: string
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
  institutionName: string;
  title: string;
  yearFrom: number;
  yearTo?: number;
  institutionImageLink?: string;
}

export interface EducationData {
  title: string;
  subtitle: string;
  educations: Education[];
}

export interface Experience {
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
  name: string;
  description: string;
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

export interface SectionResponse {
  title: string;
  subtitle: string
}

export interface SkillsResponse {
  skills: Skill[]
}

export interface EducationResponse {
  educations: Education[]
}

export interface ExperienceResponse {
  experiences: Experience[]
}

export interface ProjectsResponse {
  projects: Project[]
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  private generateHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("jwtToken")
    })
  }

  getData(): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${this.apiUrl}/section`);
  }

  setSectionData(sectionName: string, dirtyValues: { [key: string]: any; }) {
    return this.http.patch<SectionResponse>(
      `${this.apiUrl}/section/${sectionName}`, dirtyValues, {
        headers: this.generateHeaders()
      }
    );
  }

  setAboutMeData(dirtyValues: { [key: string]: any; }) {
    return this.http.patch<AboutMeExtraData>(
      `${this.apiUrl}/about-me`,
      dirtyValues,
      {
        headers: this.generateHeaders()
      }
    )
  }

  setSkillsList(skills: Skill[]) {
    return this.http.post<SkillsResponse>(`${this.apiUrl}/skills`, {
      "skills": skills
    }, {
      headers: this.generateHeaders()
    });
  }

  setEducationList(educations: Education[]) {
    return this.http.post<EducationResponse>(`${this.apiUrl}/education`, {
      "educations": educations
    }, {
      headers: this.generateHeaders()
    });
  }

  setExperienceList(experiences: Experience[]) {
    return this.http.post<ExperienceResponse>(`${this.apiUrl}/experience`, {
      "experiences": experiences
    }, {
      headers: this.generateHeaders()
    });
  }

  setProjectList(projects: Project[]) {
    return this.http.post<ProjectsResponse>(`${this.apiUrl}/project`, {
      "projects": projects
    }, {
      headers: this.generateHeaders()
    })
  }
}
