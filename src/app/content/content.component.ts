import { Component, OnInit } from '@angular/core';

import { DataService, ResponseData } from '../shared/services/data/data.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor (private readonly dataService: DataService) {}

  data: ResponseData | null = null;

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
