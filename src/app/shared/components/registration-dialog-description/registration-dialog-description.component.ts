import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Registration } from '../../../models/registration.model';

@Component({
  selector: 'app-registration-dialog-description',
  templateUrl: './registration-dialog-description.component.html',
  styleUrls: ['./registration-dialog-description.component.scss']
})
export class RegistrationDialogDescriptionComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public registration: Registration) {
  


  }

}
