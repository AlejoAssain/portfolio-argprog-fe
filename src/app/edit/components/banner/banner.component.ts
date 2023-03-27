import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService, BannerData } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() bannerData: BannerData = { title: '', subtitle: '' };

  constructor (private readonly dataService: DataService) {}

  bannerForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  ngOnInit(): void {
    this.bannerForm.setValue(this.bannerData);
  }

  onSubmit() {
    if (this.bannerForm.valid) {
      const dirtyValues = getDirtyValues(this.bannerForm);

      this.dataService.setSectionData("banner", dirtyValues).subscribe(response => {
        this.bannerForm.reset();
        this.bannerForm.setValue(response);
      });
    }
  }

  get titleControl(): FormControl {
    return this.bannerForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.bannerForm.get("subtitle") as FormControl;
  }

}
