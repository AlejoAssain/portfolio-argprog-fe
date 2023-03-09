import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  constructor (private readonly dataService: DataService) {}

  data: {
    title: string;
    subtitle: string;
    skills: {
        name: string;
        percentage: number;
        description: string;
    }[]
  } = {subtitle: '', title: '', skills: []};

  ngOnInit(): void {
    this.data = this.dataService.getSkillsData();
  }



}
