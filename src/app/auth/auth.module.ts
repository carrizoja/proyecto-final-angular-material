import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
/* import { LoginPageComponent } from '../auth/pages/login-page/login-page.component' */
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PagesAuthModule } from './pages/pages-auth.module';



@NgModule({
  declarations: [
   /*  LoginPageComponent */
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    SharedModule,
    PagesAuthModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
