import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [
  ]
})
export class StudentDialogComponent {
firstNameControl = new FormControl('');
lastNameControl = new FormControl('');
studentForm = new FormGroup({
  firstName: this.firstNameControl,
  lastName: this.lastNameControl
})

constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null) {
  if (data) {
    this.firstNameControl.setValue(data.firstName);
    this.lastNameControl.setValue(data.lastName);
  }
 }

close() {
  this.dialogRef.close();
}

}
