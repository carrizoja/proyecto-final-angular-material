import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[] = [
    new Student (1, 'Jose', 'Carrizo','carrizoja@gmail.com', true),
    new Student (2, 'Sofi', 'Ceria', 'soficeria@outlook.com', false),
    new Student (3, 'Walter', 'Leguizamon', 'walterleguizamon@live.com', true),
    new Student (4, 'Ciro', 'Pertusi', 'ciro.pertusi@gmail.com', false),
  ]
  constructor() { }
  getStudentById(id: string | number) {
    return new Student (Number(id), 'Jose', 'Carrizo','carrizoja@gmail.com', true)

  }
}
