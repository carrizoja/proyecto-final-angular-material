import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {

  public hover: number = 0;
  students: Student[] = [
    new Student (1, 'Jose', 'Carrizo', true),
    new Student (2, 'Sofi', 'Ceria', false),
    new Student (3, 'Walter', 'Leguizamon', true),
    new Student (4, 'Ciro', 'Pertusi', false),
  ]

  displayedColumns = ['id', 'firstName', 'lastName', 'isActive', 'edit', 'delete']

  constructor(private readonly dialogService: MatDialog) {}
    addStudent() {
     const dialog = this.dialogService.open(StudentDialogComponent)

     dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
       
        this.students = [...this.students, new Student(lastId + 1, value.firstName, value.lastName, true)]


      }
     })
    }

    removeStudent(student: Student) {
      this.students = this.students.filter((s) => s.id !== student.id)
    }

    editStudent(student: Student) {
      const dialog = this.dialogService.open(StudentDialogComponent, {
        data: {
          firstName: student.firstName,
          lastName: student.lastName
        }
      })

      dialog.afterClosed().subscribe((data) => {
        if (data) {
          this.students = this.students.map((s) => {
            if (s.id === student.id) {
              return new Student(s.id, data.firstName, data.lastName, s.isActive)
            }
            return s
          })
        }
      })
    }

  }

