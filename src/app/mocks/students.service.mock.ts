import { BehaviorSubject, Observable, take } from "rxjs";
import { Student } from 'src/app/core/models/student.model';
import { IStudentsService } from '../dashboard/students/services/students.service';


const FAKE_STUDENTS: Student[] = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'juan.perez@gmail.com',
    isActive: true
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Gomez',
    email: 'maria.gomez@gmail.com',
    isActive: true

  }

]


export class StudentsServiceMock implements IStudentsService {
  private students = new BehaviorSubject<Student[]>([]);
  private students$: Observable<Student[]>;
  constructor() {
    this.students$ = this.students.asObservable();
  }
  getStudentsFromAPI(): void {
    throw new Error("Method not implemented.");
  }
  deleteStudentFromAPI(id: number): void {
    throw new Error("Method not implemented.");
  }
  addStudentToAPI(newStudentData: Omit<Student, "id" | "isActive">): void {
    throw new Error("Method not implemented.");
  }
  editStudentFromAPI(id: number, data: Partial<Student>): void {
    throw new Error("Method not implemented.");
  }
  loadStudents() {
    this.students.next(FAKE_STUDENTS);

  }
}