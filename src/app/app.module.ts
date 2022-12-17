import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { ThemeSwitcherComponent } from './shared/components/theme-switcher/theme-switcher.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './shared/layout/toolbar/toolbar.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { StudentsPageDirective } from './pages/students-page.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    StudentDialogComponent,
    ThemeSwitcherComponent,
    ToolbarComponent,
    NavbarComponent,
    StudentsPageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
