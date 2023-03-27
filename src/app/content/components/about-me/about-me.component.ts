import { Component, Input } from '@angular/core';

import { AboutMeData } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @Input() aboutMeData!: AboutMeData;
}
