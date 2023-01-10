import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDialogDescriptionComponent } from './course-dialog-description.component';

describe('CourseDialogDescriptionComponent', () => {
  let component: CourseDialogDescriptionComponent;
  let fixture: ComponentFixture<CourseDialogDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDialogDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDialogDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
