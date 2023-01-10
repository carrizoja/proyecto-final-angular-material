import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent {
  nameControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  courseCodeControl = new FormControl('', [Validators.required,Validators.minLength(2)] );
  isActiveToogle = true;

courseForm = new FormGroup({
  name: this.nameControl,
  courseCode: this.courseCodeControl,
 
})

constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Course | null) {
  if (data) {
    this.nameControl.setValue(data.name);
    this.courseCodeControl.setValue(data.courseCode);
  
  }
 }



close() {
  this.dialogRef.close();
}

}
