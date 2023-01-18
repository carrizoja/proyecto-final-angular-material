import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { MyMaterialModule } from '../shared/modules/my-material.module';
import { ProfessorsPageComponent } from './professors-page/professors-page.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { RegistrationsPageComponent } from './registrations-page/registrations-page.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    StudentsPageComponent,
    ProfessorsPageComponent,
    StudentDetailComponent,
    CoursesPageComponent,
    RegistrationsPageComponent,
    HomePageComponent,
 
   
  ],
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  exports: [
    StudentsPageComponent,
    HomePageComponent,
  
  ]
})
export class PagesModule { }
