import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Registration } from 'src/app/models/registration.model';
import { RegistrationDialogDescriptionComponent } from 'src/app/shared/components/registration-dialog-description/registration-dialog-description.component';
import { RegistrationDialogComponent } from 'src/app/shared/components/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-registrations-page',
  templateUrl: './registrations-page.component.html',
  styleUrls: ['./registrations-page.component.scss']
})
export class RegistrationsPageComponent {

  public hover: number = 0;
registrations: Registration[] = [
    new Registration (1, 'José', 'Carrizo','23023', 'Maths'),
    new Registration (2, 'Sofia', 'Ceria','17342', 'Physics'),
 
  ]  

  displayedColumns = ['firstName','lastName', 'courseCode', 'courseName','edit','delete', 'description']

  constructor(private readonly dialogService: MatDialog) {}
  

  addRegistration() {
    const dialog = this.dialogService.open(RegistrationDialogComponent)

    dialog.afterClosed().subscribe((value) => {
     if (value) {
    const lastId = this.registrations[this.registrations.length - 1]?.id;
      
       this.registrations = [...this.registrations, new Registration(lastId + 1,value.firstName, value.lastName,value.courseCode, value.courseName)]

     }
    })
   }

   removeRegistration(registration: Registration) {
    this.registrations = this.registrations.filter((s) => s.id !== registration.id)  
   }

/*    changeActive(course: Course) {
    this.courses = this.courses.map((s) => {
       if (s.id === course.id) {
         return new Course(s.id,s.courseCode, s.name, !s.isActive)
       }
       return s
     }) 
   } */

   showDescriptionRegistration(registration: Registration) {
     this.dialogService.open(RegistrationDialogDescriptionComponent, {
       data: registration
     })
       
   }

   editRegistration(registration: Registration) {
     const dialog = this.dialogService.open(RegistrationDialogComponent, {
       data: {
         firstName: registration.firstName,
          lastName: registration.lastName,
          courseCode: registration.courseCode,
          courseName: registration.courseName

       }
     })

     dialog.afterClosed().subscribe((data) => {
       if (data) {
       this.registrations = this.registrations.map((s) => {
           if (s.id === registration.id) {
             return new Registration(s.id,data.firstName,data.lastName,data.courseCode, data.courseName)
           }
           return s
         }) 
       }
     })

   }

}
