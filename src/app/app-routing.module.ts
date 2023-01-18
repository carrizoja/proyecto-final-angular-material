import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { ProfessorsPageComponent } from './pages/professors-page/professors-page.component';
import { CleanLayoutComponent } from './layouts/clean-layout/clean-layout.component';
/* import { LoginPageComponent } from './pages/login-page/login-page.component'; */
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { RegistrationsPageComponent } from './pages/registrations-page/registrations-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { LayoutsModule } from './layouts/layouts.module';



const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/layouts.module').then((module) => module.LayoutsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  },
  {
    path: '**', 
    redirectTo: 'auth'
  }

/*  {
    
    path: '',
    component: DashboardLayoutComponent,  
    children: [
      {
        path: 'students',
        component: StudentsPageComponent
      },
      {
        path: 'home',
        component: HomePageComponent
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
        path: 'registrations',
        component: RegistrationsPageComponent
      },
    {
        path: '**',
        component:HomePageComponent
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
  },

   {
    path: '**',  
    redirectTo: '/home'   
    }   */
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
