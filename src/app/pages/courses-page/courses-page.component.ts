import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogDescriptionComponent } from 'src/app/shared/components/course-dialog-description/course-dialog-description.component';
import { CourseDialogComponent } from 'src/app/shared/components/course-dialog/course-dialog.component';
import { Course } from '../../models/course.model';
import { Observable, Subject } from 'rxjs';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnDestroy  {

  displayedColumns = ['courseCode','name','isActive', 'edit', 'delete', 'description']
  public hover: number = 0;
  courses: Observable<Course[]> | undefined;
  private destroyed$ = new Subject();


 

  constructor(private readonly CoursesService: CoursesService,private readonly dialogService: MatDialog) {
    this.courses = this.CoursesService.courses$;
   }
  
 ngOnDestroy(): void {
    this.destroyed$.next(true);
 }


  addCourse() {
    const dialog = this.dialogService.open(CourseDialogComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.CoursesService.addCourse({name: data.name, courseCode: data.courseCode})

   }
  }
   )
  }

   removeCourse(element: Course) {
      this.CoursesService.removeCourse(element.id)
    
   }

   changeActive(course: Course) {
      this.CoursesService.changeActive(course)
   }

   showDescriptionCourse(course: Course) {
     this.dialogService.open(CourseDialogDescriptionComponent, {
       data: course
     })
       
   }

   editCourse(course: Course) {
     const dialog = this.dialogService.open(CourseDialogComponent, {
       data: course
            
     })

     dialog.afterClosed().subscribe((data) => {
       if (data) {
          this.CoursesService.editCourse(course.id, data)
      
       }
     })

 }

 


}
