import { Component, Input, OnInit } from '@angular/core';

import { BannerData, DataService } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
  @Input() data: BannerData = { title: '', subtitle: '' }

  constructor ( private readonly dataService: DataService ) {}

  data: BannerData = {title: "", subtitle: ""};

  ngOnInit(): void {
    this.data = this.dataService.getBannerData();
    // FIXME - Suscribe to the service to receive the data
  }
}
