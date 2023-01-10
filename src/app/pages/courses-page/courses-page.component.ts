import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogDescriptionComponent } from 'src/app/shared/components/course-dialog-description/course-dialog-description.component';
import { CourseDialogComponent } from 'src/app/shared/components/course-dialog/course-dialog.component';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent  {

  public hover: number = 0;
courses: Course[] = [
    new Course (1,'23023', 'Maths', true),
    new Course (2,'17342', 'Physics', false),
  
  ]  

  displayedColumns = ['courseCode','name','isActive', 'edit', 'delete', 'description']

  constructor(private readonly dialogService: MatDialog) {}
 


  addCourse() {
    const dialog = this.dialogService.open(CourseDialogComponent)

    dialog.afterClosed().subscribe((value) => {
     if (value) {
    const lastId = this.courses[this.courses.length - 1]?.id;
      
       this.courses = [...this.courses, new Course(lastId + 1,value.courseCode, value.name, true)]

     }
    })
   }

   removeCourse(course: Course) {
    this.courses = this.courses.filter((s) => s.id !== course.id)  
   }

   changeActive(course: Course) {
    this.courses = this.courses.map((s) => {
       if (s.id === course.id) {
         return new Course(s.id,s.courseCode, s.name, !s.isActive)
       }
       return s
     }) 
   }

   showDescriptionCourse(course: Course) {
     this.dialogService.open(CourseDialogDescriptionComponent, {
       data: course
     })
       
   }

   editCourse(course: Course) {
     const dialog = this.dialogService.open(CourseDialogComponent, {
       data: {
         name: course.name,        
       }
     })

     dialog.afterClosed().subscribe((data) => {
       if (data) {
       this.courses = this.courses.map((s) => {
           if (s.id === course.id) {
             return new Course(s.id,data.courseCode, data.name, s.isActive)
           }
           return s
         }) 
       }
     })

   }
}
