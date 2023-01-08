import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { SubjectsPageComponent } from './pages/subjects-page/subjects-page.component';
import { ProfessorsPageComponent } from './pages/professors-page/professors-page.component';
import { CleanLayoutComponent } from './layouts/clean-layout/clean-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'students',
        component: StudentsPageComponent
      },
      {
        path: 'students/:id',
        component:StudentDetailComponent
      },
      {
        path: 'courses',
        component: CoursesPageComponent
      },
      {
        path: 'professors',
        component: ProfessorsPageComponent
      }
    ]
  },
  {
    path: 'auth',
    component: CleanLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: '**',
        component:NotFoundComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
