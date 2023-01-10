import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Registration } from 'src/app/models/registration.model';
import { RegistrationDialogDescriptionComponent } from 'src/app/shared/components/registration-dialog-description/registration-dialog-description.component';
import { RegistrationDialogComponent } from 'src/app/shared/components/registration-dialog/registration-dialog.component';
import { Observable, Subject } from 'rxjs';
import { RegistrationsService } from 'src/app/services/registrations.service';

@Component({
  selector: 'app-registrations-page',
  templateUrl: './registrations-page.component.html',
  styleUrls: ['./registrations-page.component.scss']
})
export class RegistrationsPageComponent implements OnDestroy {
  displayedColumns = ['firstName','lastName', 'courseCode', 'courseName','edit','delete', 'description']
  public hover: number = 0;
  registrations: Observable<Registration[]>;
  private destroyed$ = new Subject();


  

  constructor(private readonly registrationsService:RegistrationsService,private readonly dialogService: MatDialog) {
    this.registrations = this.registrationsService.registrations$;
   }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }



  addRegistration() {
    const dialog = this.dialogService.open(RegistrationDialogComponent)

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.registrationsService.addRegistration({firstName: data.firstName, lastName: data.lastName, courseCode: data.courseCode, courseName: data.courseName})
      }
    })
  
   }

   removeRegistration(registration: Registration) {
      this.registrationsService.removeRegistration(registration.id)
   }



   showDescriptionRegistration(registration: Registration) {
     this.dialogService.open(RegistrationDialogDescriptionComponent, {
       data: registration
     })
       
   }

   editRegistration(registration: Registration) {
     const dialog = this.dialogService.open(RegistrationDialogComponent, {
       data: registration
     })

     dialog.afterClosed().subscribe((data) => {
       if (data) {
          this.registrationsService.editRegistration(registration.id, data)
       }
     })

   }

}
