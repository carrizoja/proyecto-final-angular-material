import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { BehaviorSubject, Observable, take, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students = new BehaviorSubject<Student[]>([]);
  

  public students$: Observable<Student[]>;
  constructor(private httpClient: HttpClient) { 
    this.students$ = this.students.asObservable();
  }

  getStudentsFromAPI(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('https://63bdfb66f5cfc0949b4fac63.mockapi.io/api/students');
  }


  deleteStudentFromAPI(id: number){
   
  return this.httpClient.delete(`https://63bdfb66f5cfc0949b4fac63.mockapi.io/api/students/${id}`) 

     
    
  }

addStudentToAPI (newStudentData:Omit<Student, 'id' | 'isActive'>): void {
  const studentsFromAPI = this.getStudentsFromAPI();
  studentsFromAPI.pipe(take(1)).subscribe((students) => {
    const lastId = students[students.length - 1]?.id || 0;
    this.httpClient.post<Student[]>('https://63bdfb66f5cfc0949b4fac63.mockapi.io/api/students', new Student(lastId + 1, newStudentData.firstName, newStudentData.lastName, newStudentData.email, true)).subscribe((resp) => {
      console.log(resp);
    })
  } 
  )
}

editStudentFromAPI(id: number, data:Partial<Student>): void {
  const studentsFromAPI = this.getStudentsFromAPI();
  studentsFromAPI.pipe(take(1)).subscribe((students) => {
    this.students.next(students.map((s) => s.id === id ? {...s, ...data} : s))
    

  })
  this.httpClient.put<Student[]>(`https://63bdfb66f5cfc0949b4fac63.mockapi.io/api/students/${id}`, data).subscribe((resp) => {
    console.log(resp);
  })
  
}

 AddStudent (newStudentData: Omit<Student, 'id' | 'isActive'>): void {
   this.students.pipe(take(1)).subscribe((students) => {
      const lastId = students[students.length - 1]?.id || 0;
      this.students.next([...students, new Student(lastId + 1, newStudentData.firstName, newStudentData.lastName, newStudentData.email, true)])
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

  


