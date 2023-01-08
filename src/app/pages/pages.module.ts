import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { MyMaterialModule } from '../shared/modules/my-material.module';
import { SubjectsPageComponent } from './subjects-page/subjects-page.component';
import { ProfessorsPageComponent } from './professors-page/professors-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';




@NgModule({
  declarations: [
    StudentsPageComponent,
    SubjectsPageComponent,
    ProfessorsPageComponent,
    LoginPageComponent,
    StudentDetailComponent,
    CoursesPageComponent,
   
  ],
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  exports: [
    StudentsPageComponent
  ]
})
export class PagesModule { }
