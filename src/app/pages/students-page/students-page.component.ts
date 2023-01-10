import { Component,OnDestroy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDialogDescriptionComponent } from 'src/app/shared/components/student-dialog-description/student-dialog-description.component';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';
import { StudentsService } from 'src/app/services/students.service';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnDestroy{
  displayedColumns = ['firstName', 'lastName','email', 'isActive', 'edit', 'delete', 'description']
  public hover: number = 0;
  students: Observable<Student[]>
  private destroyed$ = new Subject();

  constructor(private readonly dialogService: MatDialog, private studentsService: StudentsService) {
    this.students = this.studentsService.students$;
   }
  
  ngOnDestroy(): void {
   this.destroyed$.next(true);
    
  }

  editStudent(element: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: element
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.EditStudent(element.id, data)
      }
    })

  }

    addStudent() {
     const dialog = this.dialogService.open(StudentDialogComponent)

     dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.AddStudent({firstName: data.firstName, lastName: data.lastName, email: data.email})
 
      }
     })
    }

    removeStudent(element: Student) {
      this.studentsService.removeStudent(element.id)
     
    }

    changeActive(student: Student) {
      this.studentsService.changeActive(student)
    }

    showDescriptionStudent(student: Student) {
      this.dialogService.open(StudentDialogDescriptionComponent, {
        data: student
      })
        
    }

   

  
  }

