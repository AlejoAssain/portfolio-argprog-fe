import { Component, OnInit } from '@angular/core';

import { DataService, ResponseData } from '../shared/services/data/data.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor (private readonly dataService: DataService) {}

  data: ResponseData | null = null;

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    })
  }


}
