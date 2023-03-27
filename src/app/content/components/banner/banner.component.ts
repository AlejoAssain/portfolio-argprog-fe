import { Component, Input } from '@angular/core';

import { BannerData } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() bannerData!: BannerData;
}
