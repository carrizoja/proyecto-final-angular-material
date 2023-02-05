import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authFeatureKey, authReducer } from './store/auth.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureKey, authReducer)
  ]
})
export class AuthStoreModule { }
