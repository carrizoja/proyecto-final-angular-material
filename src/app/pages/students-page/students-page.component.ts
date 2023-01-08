import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDialogDescriptionComponent } from 'src/app/shared/components/student-dialog-description/student-dialog-description.component';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {

  public hover: number = 0;
  students: Student[] = [
    new Student (1, 'Jose', 'Carrizo','carrizoja@gmail.com', true),
    new Student (2, 'Sofi', 'Ceria', 'soficeria@outlook.com', false),
    new Student (3, 'Walter', 'Leguizamon', 'walterleguizamon@live.com', true),
    new Student (4, 'Ciro', 'Pertusi', 'ciro.pertusi@gmail.com', false),
  ]

  displayedColumns = ['firstName', 'lastName','email', 'isActive', 'edit', 'delete', 'description']

  constructor(private readonly dialogService: MatDialog) {}
    addStudent() {
     const dialog = this.dialogService.open(StudentDialogComponent)

     dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
       
        this.students = [...this.students, new Student(lastId + 1, value.firstName, value.lastName, value.email, true)]


      }
     })
    }

    removeStudent(student: Student) {
      this.students = this.students.filter((s) => s.id !== student.id)
    }

    changeActive(student: Student) {
      this.students = this.students.map((s) => {
        if (s.id === student.id) {
          return new Student(s.id, s.firstName, s.lastName, s.email, !s.isActive)
        }
        return s
      })
    }

    showDescriptionStudent(student: Student) {
      this.dialogService.open(StudentDialogDescriptionComponent, {
        data: student
      })
        
    }

    editStudent(student: Student) {
      const dialog = this.dialogService.open(StudentDialogComponent, {
        data: {
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email
        }
      })

      dialog.afterClosed().subscribe((data) => {
        if (data) {
          this.students = this.students.map((s) => {
            if (s.id === student.id) {
              return new Student(s.id, data.firstName, data.lastName, data.email, s.isActive)
            }
            return s
          })
        }
      })

    }

  }

