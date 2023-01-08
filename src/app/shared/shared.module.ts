import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { StudentDialogDescriptionComponent } from './components/student-dialog-description/student-dialog-description.component';
import { ErrorHelperComponent } from './components/error-helper/error-helper.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MyMaterialModule } from './modules/my-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FullnamePipePipe } from './components/student-dialog-description/fullname-pipe.pipe';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    StudentDialogComponent,
    StudentDialogDescriptionComponent,
    ErrorHelperComponent,
    ThemeSwitcherComponent,
    PageWrapperComponent,
    ToolbarComponent,
    FooterComponent,
    SidenavComponent,
    ToolbarComponent,
    FullnamePipePipe,
    NotFoundComponent

  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    StudentDialogComponent,
    StudentDialogDescriptionComponent,
    ErrorHelperComponent,
    ThemeSwitcherComponent,
    PageWrapperComponent,
    ToolbarComponent,
    FooterComponent,
    SidenavComponent,
    ToolbarComponent,
    FullnamePipePipe
  ]
})
export class SharedModule { }
