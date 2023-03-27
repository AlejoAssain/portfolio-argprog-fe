import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AboutMeData, DataService } from 'src/app/shared/services/data/data.service';
import { getDirtyValues } from '../../shared/form-utils';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  @Input() aboutMeData: AboutMeData = {
    title: "",
    subtitle: "",
    text: "",
    profilePicLink: "",
    profilePicCap: "",
  };

  aboutMeSectionForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl('')
  })

  aboutMeForm: FormGroup = new FormGroup({
    text: new FormControl(''),
    profilePicLink: new FormControl(''),
    profilePicCap: new FormControl('')
  });

  constructor ( private readonly dataService: DataService ) {}

  ngOnInit(): void {
    this.aboutMeSectionForm.setValue({
      title: this.aboutMeData.title,
      subtitle: this.aboutMeData.subtitle
    })

    this.aboutMeForm.setValue({
      text: this.aboutMeData.text,
      profilePicLink: this.aboutMeData.profilePicLink,
      profilePicCap: this.aboutMeData.profilePicCap
    });
  }

  sectionOnSubmit() {
    if (this.aboutMeSectionForm.valid) {
      const dirtyValues = getDirtyValues(this.aboutMeSectionForm);

      this.dataService.setSectionData("about-me", dirtyValues).subscribe(response => {
        this.aboutMeSectionForm.reset();
        this.aboutMeSectionForm.setValue(response);
      });
    }
  }

  onSubmit() {
    if (this.aboutMeForm.valid) {
      const dirtyValues = getDirtyValues(this.aboutMeForm);

      this.dataService.setAboutMeData(dirtyValues).subscribe(response => {
        this.aboutMeForm.reset();
        this.aboutMeForm.setValue(response);
      });
    }
  }

  get titleControl(): FormControl {
    return this.aboutMeSectionForm.get("title") as FormControl;
  }

  get subtitleControl(): FormControl {
    return this.aboutMeSectionForm.get("subtitle") as FormControl;
  }

  get textControl(): FormControl {
    return this.aboutMeForm.get("text") as FormControl;
  }

  get profilePicLinkControl(): FormControl {
    return this.aboutMeForm.get("profilePicLink") as FormControl;
  }

  get profilePicCapControl(): FormControl {
    return this.aboutMeForm.get("profilePicCap") as FormControl;
  }
}
