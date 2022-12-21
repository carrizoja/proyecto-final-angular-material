import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-student-dialog-description',
  templateUrl: './student-dialog-description.component.html',
  styleUrls: ['./student-dialog-description.component.scss']
})



export class StudentDialogDescriptionComponent {


constructor(@Inject(MAT_DIALOG_DATA) public student: Student) {
  


 }
}
