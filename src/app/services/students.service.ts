import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { BehaviorSubject, Observable, take, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students = new BehaviorSubject<Student[]>([
    new Student (1, 'Jose', 'Carrizo','carrizoja@gmail.com', true),
    new Student (2, 'Sofi', 'Ceria', 'soficeria@outlook.com', false),
    new Student (3, 'Walter', 'Leguizamon', 'walterleguizamon@live.com', true),
    new Student (4, 'Raly', 'Barrionuevo', 'raly.barrionuevo@gmail.com', false),
  ]);

  public students$: Observable<Student[]>;
  constructor() { 
    this.students$ = this.students.asObservable();
  }

 AddStudent (newStudentData: Omit<Student, 'id' | 'isActive'>): void {
   this.students.pipe(take(1)).subscribe((students) => {
      const lastId = students[students.length - 1]?.id || 0;
      this.students.next([...students, new Student(lastId + 1, newStudentData.firstName, newStudentData.lastName, newStudentData.email, true)])
   })
  }

EditStudent(id: number, data:Partial<Student>): void {
  this.students.pipe(take(1)).subscribe((students) => {
    this.students.next(students.map(
      (s) => s.id === id
      ? new Student (
        s.id,
        data.firstName || s.firstName,
        data.lastName || s.lastName,
        data.email || s.email,
        data.isActive || s.isActive
      )
      : s
    )
    )
    })
  }

  removeStudent(id:number): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(students.filter((s) => s.id !== id))
    })
  }

  changeActive(student: Student): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(students.map((s) => {
        if (s.id === student.id) {
          return new Student(s.id, s.firstName, s.lastName, s.email, !s.isActive)
        }
        return s
      }))
    })
  }

  getStudentById(id: number): Observable<Student | null> {
return this.students$.pipe(
  take(1),
  map((students) => students.find((s) => s.id === id) || null)
)
  }


}

  


