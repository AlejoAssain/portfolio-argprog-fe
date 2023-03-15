import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDragDropFormComponent } from './education-drag-drop-form.component';

describe('EducationDragDropFormComponent', () => {
  let component: EducationDragDropFormComponent;
  let fixture: ComponentFixture<EducationDragDropFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDragDropFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationDragDropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
