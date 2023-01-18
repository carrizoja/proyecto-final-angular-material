import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentsPageDirective } from './pages/students-page.directive';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
/* import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';  */



@NgModule({
  declarations: [
    AppComponent,
    StudentsPageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
  
   /*  AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule  */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
