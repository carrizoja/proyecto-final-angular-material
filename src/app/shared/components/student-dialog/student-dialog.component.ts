import { DialogRef} from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/student.model';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [
  ]
})
export class StudentDialogComponent implements OnInit {
firstNameControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
lastNameControl = new FormControl('', [Validators.required,Validators.minLength(2)] );
emailControl = new FormControl('', [Validators.required, Validators.email]);
isActiveToogle = true;

studentForm = new FormGroup({
  firstName: this.firstNameControl,
  lastName: this.lastNameControl,
  email: this.emailControl,

})

constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null) {
  if (data) {
    this.firstNameControl.setValue(data.firstName);
    this.lastNameControl.setValue(data.lastName);
    this.emailControl.setValue(data.email);
   
  }
 }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


close() {
  this.dialogRef.close();
}



}
