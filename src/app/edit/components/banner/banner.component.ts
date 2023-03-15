import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BannerData, DataService } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  data: BannerData = { title: '', subtitle: '' };

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.data = this.dataService.getBannerData();
    this.bannerForm.setValue(this.data);
  }

  onSubmit() {
    if (this.bannerForm.valid) {
      const dirtyValues = getDirtyValues(this.bannerForm);

      // TODO - call data service and send post request to API to make changes

      console.log("Submit values: ", dirtyValues);
      this.bannerForm.reset();
      this.ngOnInit()
    }
  }

  get titleControl(): FormControl {
    return this.bannerForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.bannerForm.get("subtitle") as FormControl;
  }

}
