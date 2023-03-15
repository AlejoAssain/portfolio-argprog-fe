import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDragDropFormComponent } from './experience-drag-drop-form.component';

describe('ExperienceDragDropFormComponent', () => {
  let component: ExperienceDragDropFormComponent;
  let fixture: ComponentFixture<ExperienceDragDropFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDragDropFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDragDropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
