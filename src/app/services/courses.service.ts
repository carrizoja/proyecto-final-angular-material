import { Injectable } from '@angular/core';
import { BehaviorSubject, take, Observable, map } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = new BehaviorSubject<Course[]>([
   
      new Course (1,'23023', 'Maths', true),
      new Course (2,'17342', 'Physics', false),
      new Course (3,'23423', 'Chemistry', true),
      new Course (4,'23423', 'Biology', false),
      new Course (5,'23423', 'English', true),
      new Course (6,'23423', 'History', false),
      new Course (7,'23423', 'Geography', true),
      new Course (8,'23423', 'Spanish', false),
      new Course (9,'23423', 'French', true),
      new Course (11,'23423', 'Latin', true),
      new Course (12,'23423', 'Greek', false),
   
  ]);
  public courses$: Observable<Course[]>;
  constructor() { 
    this.courses$ = this.courses.asObservable();
  }

  addCourse(newCourseData: Omit<Course, 'id' | 'isActive'>): void {
    this.courses.pipe(take(1)).subscribe((courses) => {
      const lastId = courses[courses.length - 1]?.id || 0;
      this.courses.next([...courses, new Course(lastId + 1, newCourseData.courseCode, newCourseData.name, true)])
    })
  }

  editCourse (id: number, data: Partial<Course>): void {
    this.courses.pipe(take(1)).subscribe((courses) => {
      this.courses.next(courses.map(
        (c) => c.id === id
        ? new Course (
          c.id,
          data.courseCode || c.courseCode,
          data.name || c.name,
          data.isActive || c.isActive
        )
        : c
      )
      )
    })
  }

  removeCourse(id: number): void {
    this.courses.pipe(take(1)).subscribe((courses) => {
      this.courses.next(courses.filter((c) => c.id !== id))
    })
  }

  changeActive(course: Course): void {
    this.courses.pipe(take(1)).subscribe((courses) => {
      this.courses.next(courses.map((c) => {
        if (c.id === course.id) {
          return new Course(c.id, c.courseCode, c.name, !c.isActive)
        }
        return c
      }))
    })
  }

  getCourseById(id: number): Observable<Course | null> {
    return this.courses$.pipe(
      take(1),
      map((courses) => courses.find((c) => c.id === id) || null)
    )
   
  }

}
