import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDragDropFormComponent } from './skills-drag-drop-form.component';

describe('SkillsDragDropFormComponent', () => {
  let component: SkillsDragDropFormComponent;
  let fixture: ComponentFixture<SkillsDragDropFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDragDropFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsDragDropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
