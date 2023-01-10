import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  addStudent(student: Student): Observable<Student> {
    return of(student);

  }

  public studentsList(): Observable<Student[]> {
    return of([
      new Student (1, 'Jose', 'Carrizo','carrizoja@gmail.com', true),
      new Student (2, 'Sofi', 'Ceria', 'soficeria@outlook.com', false),
      new Student (3, 'Walter', 'Leguizamon', 'walterleguizamon@live.com', true),
      new Student (4, 'Ciro', 'Pertusi', 'ciro.pertusi@gmail.com', false),
    
    ]);  
  }


 

}
