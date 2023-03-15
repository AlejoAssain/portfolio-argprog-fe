import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDragDropFormComponent } from './projects-drag-drop-form.component';

describe('ProjectsDragDropFormComponent', () => {
  let component: ProjectsDragDropFormComponent;
  let fixture: ComponentFixture<ProjectsDragDropFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsDragDropFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDragDropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
