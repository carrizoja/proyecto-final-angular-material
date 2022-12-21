import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDialogDescriptionComponent } from './student-dialog-description.component';

describe('StudentDialogDescriptionComponent', () => {
  let component: StudentDialogDescriptionComponent;
  let fixture: ComponentFixture<StudentDialogDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDialogDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDialogDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
