import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app-state.model';

export const authStateSelector = (appState: AppState) => appState.authState;
export const authenticatedUserSelector = createSelector(
  authStateSelector, 
  (AuthState) => AuthState.authenticatedUser
  );