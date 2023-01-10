import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-dialog-description',
  templateUrl: './course-dialog-description.component.html',
  styleUrls: ['./course-dialog-description.component.scss']
})
export class CourseDialogDescriptionComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public course: Course) {
  


  }
}
