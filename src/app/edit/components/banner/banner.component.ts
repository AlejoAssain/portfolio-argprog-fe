import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService } from 'src/app/shared/services/data/data.service';
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

  data: {
    title: string,
    subtitle: string
  } = { title: '', subtitle: ''};

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    // get section data from service
    this.data = this.dataService.getBannerData();

    // set initial form data to data obtained
    this.bannerForm.setValue(this.data);

    console.log("Initial values: ", this.bannerForm.getRawValue());
  }

  onSubmit() {
    if (this.bannerForm.valid) {
      const dirtyValues = getDirtyValues(this.bannerForm);

      // TODO - call data service and send post request to API to make changes
      console.log("Submit values: ", dirtyValues);
    }
  }

  get titleControl(): FormControl {
    return this.bannerForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.bannerForm.get("subtitle") as FormControl;
  }

}
