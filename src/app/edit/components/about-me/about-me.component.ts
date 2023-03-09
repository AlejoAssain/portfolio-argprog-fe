import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { DataService } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  aboutMeForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
    text: new FormControl(''),
    profilePicLink: new FormControl(''),
    profilePicCaption: new FormControl('')
  });

  data = {
    title: "",
    subtitle: "",
    text: "",
    profilePicLink: "",
    profilePicCaption: "",
  };

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    // get section data from service
    this.data = this.dataService.getAboutMeData();

    // set initial form data to data obtained
    this.aboutMeForm.setValue(this.data);

    console.log("Initial values: ", this.aboutMeForm.getRawValue());
  }

  onSubmit() {
    if (this.aboutMeForm.valid) {
      const dirtyValues = getDirtyValues(this.aboutMeForm);

      // TODO - call data service and send post request to API to make changes
      console.log("Submit values: ", dirtyValues);
      this.aboutMeForm.reset();
      this.ngOnInit();
    }
  }

  get titleControl(): FormControl {
    return this.aboutMeForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.aboutMeForm.get("subtitle") as FormControl;
  }

  get textControl(): FormControl {
    return this.aboutMeForm.get("text") as FormControl;
  }

  get profilePicLinkControl(): FormControl {
    return this.aboutMeForm.get("profilePicLink") as FormControl;
  }

  get profilePicCaptionControl(): FormControl {
    return this.aboutMeForm.get("profilePicCaption") as FormControl;
  }
}
